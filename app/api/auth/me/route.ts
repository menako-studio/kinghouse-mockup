import { NextResponse } from "next/server"
import { getAdminSession } from "@/lib/auth-server"

export async function GET() {
  const user = await getAdminSession()

  if (!user) {
    return NextResponse.json(
      { authenticated: false, error: "Unauthorized access." },
      { status: 401 }
    )
  }

  return NextResponse.json({
    authenticated: true,
    user,
  })
}
