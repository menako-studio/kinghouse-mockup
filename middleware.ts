import { NextRequest, NextResponse } from "next/server"
import { SESSION_COOKIE_NAME, verifyAdminSessionToken } from "@/lib/auth"

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value

  const isDashboardRoute = pathname.startsWith("/dashboard")
  const isLoginRoute = pathname === "/login"

  let isAuthenticated = false
  if (sessionCookie) {
    const payload = await verifyAdminSessionToken(sessionCookie)
    if (payload?.user?.role === "admin") {
      isAuthenticated = true
    }
  }

  // 1. Protect /dashboard routes: unauthenticated users redirected to /login
  if (isDashboardRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    const callbackUrl = `${pathname}${search}`
    loginUrl.searchParams.set("callbackUrl", callbackUrl)
    return NextResponse.redirect(loginUrl)
  }

  // 2. Redirect authenticated users away from /login to /dashboard
  if (isLoginRoute && isAuthenticated) {
    const dashboardUrl = new URL("/dashboard", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
  ],
}
