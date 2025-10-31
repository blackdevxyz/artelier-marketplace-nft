import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // this alone creates the unique index
    lowercase: true,
    trim: true,
  },
  source: {
    type: String,
    default: "web", // optional info about where signup came from
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true, // keep this, indexing on date is fine
  },
});

// Removed duplicate index definition

export default mongoose.models.Waitlist ||
  mongoose.model("Waitlist", WaitlistSchema);
