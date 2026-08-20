import { NextRequest, NextResponse } from "next/server"
import { verifyAdminCredentials, setAdminSessionCookie } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      )
    }

    const adminUser = verifyAdminCredentials(email, password)

    if (!adminUser) {
      return NextResponse.json(
        { error: "Invalid admin credentials. Please check your email and password." },
        { status: 401 }
      )
    }

    const response = NextResponse.json({
      success: true,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
      message: "Admin authentication successful.",
    })

    await setAdminSessionCookie(response, adminUser)
    return response
  } catch {
    return NextResponse.json(
      { error: "An error occurred during authentication processing." },
      { status: 500 }
    )
  }
}
