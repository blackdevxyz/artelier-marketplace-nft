import express from "express";
import { z } from "zod";
import Waitlist from "../models/Waitlist.js";

const router = express.Router();

// Zod schema for server-side validation
const emailSchema = z
  .string()
  .trim()
  .email({ message: "Invalid email address" });

/**
 * POST /api/waitlist
 * Body: { email: string, source?: string }
 */
router.post("/", async (req, res) => {
  try {
    const { email, source } = req.body ?? {};

    // validate
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.errors[0].message });
    }

    const normalized = parsed.data.toLowerCase().trim();

    // Insert if not existing
    // Use findOneAndUpdate with upsert to avoid race conditions
    const doc = await Waitlist.findOneAndUpdate(
      { email: normalized },
      { $setOnInsert: { email: normalized, source: source || "web" } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();

    // If it already existed, doc will be the existing doc — you can tell by checking createdAt etc.
    // Optionally, respond differently if already present:
    const existed =
      doc && doc.createdAt && new Date() - new Date(doc.createdAt) > 1000;

    return res.status(201).json({
      ok: true,
      message: existed ? "Email already on waitlist" : "Joined waitlist",
      email: doc.email,
    });
  } catch (err) {
    // handle Mongo duplicate index error (shouldn't happen due to upsert but safe)
    if (err.code === 11000) {
      return res
        .status(200)
        .json({ ok: true, message: "Email already on waitlist" });
    }
    console.error("Waitlist error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
