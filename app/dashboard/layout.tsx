import { Metadata } from "next"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { getAdminSession } from "@/lib/auth-server"

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
    <div className="flex min-h-screen bg-[#F7F7F6] text-[#222222]">
      {/* Collapsible Sidebar */}
      <DashboardSidebar adminUser={adminUser} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header with Breadcrumb, Notifications & Admin Profile */}
        <DashboardHeader adminUser={adminUser} />

        {/* Scrollable Page Body */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}


