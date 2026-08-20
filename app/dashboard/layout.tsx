import { Metadata } from "next"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { getAdminSession } from "@/lib/auth-server"
import { ShieldCheck, User } from "lucide-react"

export const metadata: Metadata = {
  title: "CMS Dashboard — KingHouse Property Management",
  description: "Enterprise multi-channel CMS dashboard & SEO management platform for KingHouse properties.",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adminUser = await getAdminSession()

  // Defense-in-depth server-side check
  if (!adminUser) {
    redirect("/login?callbackUrl=/dashboard")
  }

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] text-[#222222]">
      {/* Collapsible Sidebar */}
      <DashboardSidebar adminUser={adminUser} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 border-b border-[#EBEBEB] bg-white px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A69C8E]">
              KingHouse Hospitality Suite
            </span>
            <span className="text-[#EBEBEB]">|</span>
            <span className="text-xs font-medium text-[#222222]">Jabodetabek Portfolio</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-xs text-[#717171] bg-[#F5F4F0] px-3 py-1.5 rounded-full border border-[#EBEBEB]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4 Active Properties &bull; Airbnb Connected</span>
            </div>

            <div className="flex items-center space-x-2.5 pl-3 border-l border-[#EBEBEB]">
              <div className="h-7 w-7 rounded-full bg-[#111111] text-[#A69C8E] flex items-center justify-center text-xs font-semibold">
                <User className="h-3.5 w-3.5" />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-semibold text-[#111111] leading-tight flex items-center space-x-1">
                  <span>{adminUser.name}</span>
                  <ShieldCheck className="h-3 w-3 text-emerald-600" />
                </span>
                <span className="text-[10px] text-[#717171] leading-tight font-mono">
                  {adminUser.email}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Body */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

