import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import waitlistRoute from "./routes/waitlist.js";
import { createRateLimiter } from "./utils/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI not set in .env");
  process.exit(1);
}

// middlewares
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // set specific origin in production
  })
);

// rate limiter for write endpoints
const limiter = createRateLimiter(
  Number(process.env.RATE_LIMIT_WINDOW_MINUTES) || 15,
  Number(process.env.RATE_LIMIT_MAX) || 100
);

app.use("/api/waitlist", limiter, waitlistRoute);

// simple health check
app.get("/health", (req, res) => res.json({ ok: true }));

// connect mongoose and start server
mongoose
  .connect(MONGO_URI, { autoIndex: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
