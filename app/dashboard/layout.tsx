import { Metadata } from "next"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export const metadata: Metadata = {
  title: "Dashboard CMS — KingHouse Property Management",
  description: "All-in-one multi-channel CMS dashboard & SEO management platform for KingHouse properties.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA] text-[#222222]">
      {/* Collapsible Sidebar */}
      <DashboardSidebar />

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
            <div className="hidden sm:flex items-center space-x-2 text-xs text-[#717171] bg-[#F5F4F0] px-3 py-1.5 rounded-full border border-[#EBEBEB]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>4 Properti Aktif &bull; Airbnb Terhubung</span>
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
