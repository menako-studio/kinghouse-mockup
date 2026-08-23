/**
 * Lightweight, zero-dependency sliding-window in-memory rate limiter.
 * Protects against brute-force credential stuffing and API abuse on free-tier serverless environments.
 */

interface RateLimitRecord {
  timestamps: number[]
}

const rateLimitStore = new Map<string, RateLimitRecord>()

// Clean up stale entries every 10 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    const windowMs = 15 * 60 * 1000 // 15 minutes
    for (const [key, record] of rateLimitStore.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < windowMs)
      if (record.timestamps.length === 0) {
        rateLimitStore.delete(key)
      }
    }
  }, 10 * 60 * 1000)
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetInSeconds: number
}

/**
 * Checks if an identifier (e.g. IP or email) has exceeded max requests within the window.
 *
 * @param identifier - Unique client IP or identifier
 * @param maxRequests - Max permitted requests (e.g., 5 attempts)
 * @param windowMs - Time window in milliseconds (default: 60s)
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60 * 1000
): RateLimitResult {
  const now = Date.now()
  const record = rateLimitStore.get(identifier) || { timestamps: [] }

  // Filter timestamps within the current window
  const activeTimestamps = record.timestamps.filter((ts) => now - ts < windowMs)

  if (activeTimestamps.length >= maxRequests) {
    const oldestTimestamp = activeTimestamps[0]
    const resetInSeconds = Math.ceil((oldestTimestamp + windowMs - now) / 1000)
    return {
      success: false,
      remaining: 0,
      resetInSeconds: Math.max(1, resetInSeconds),
    }
  }

  // Record new attempt
  activeTimestamps.push(now)
  rateLimitStore.set(identifier, { timestamps: activeTimestamps })

  return {
    success: true,
    remaining: maxRequests - activeTimestamps.length,
    resetInSeconds: Math.ceil(windowMs / 1000),
  }
}

/**
 * Reset rate limit counter for a specific identifier upon successful authentication
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier)
}
