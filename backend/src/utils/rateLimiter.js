import rateLimit from "express-rate-limit";

export function createRateLimiter(windowMinutes = 15, max = 100) {
  return rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    max,
    message: {
      error: "Too many requests, please try again later.",
    },
    standardHeaders: true,
    legacyHeaders: false,
  });
}
