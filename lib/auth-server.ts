import { cookies } from "next/headers"
import { SESSION_COOKIE_NAME, verifyAdminSessionToken, AdminUser } from "@/lib/auth"

/**
 * Server-side helper to retrieve and verify current session in Server Components / Route Handlers
 */
export async function getAdminSession(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)
    if (!sessionCookie?.value) return null

    const payload = await verifyAdminSessionToken(sessionCookie.value)
    return payload?.user || null
  } catch {
    return null
  }
}
