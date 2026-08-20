"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Home,
  Search,
  BookOpen,
  CalendarDays,
  TrendingUp,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
  ShieldCheck,
} from "lucide-react"
import { AdminUser } from "@/lib/auth"

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/properties", label: "Properties", icon: Home },
  { href: "/dashboard/seo", label: "SEO Manager", icon: Search, badge: "Pitch" },
  { href: "/dashboard/blog", label: "Blog Posts", icon: BookOpen },
  { href: "/dashboard/bookings", label: "Calendar", icon: CalendarDays },
  { href: "/dashboard/analytics", label: "Analytics", icon: TrendingUp },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function DashboardSidebar({ adminUser }: { adminUser?: AdminUser | null }) {
  const [collapsed, setCollapsed] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    if (isLoggingOut) return
    setIsLoggingOut(true)

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      })
      router.push("/login")
      router.refresh()
    } catch {
      router.push("/login")
    }
  }

  return (
    <aside
      className={`flex flex-col h-screen sticky top-0 bg-[#111111] border-r border-white/10 transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 h-16">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-[#A69C8E] flex items-center justify-center">
              <span className="text-xs font-bold text-[#111111]">K</span>
            </div>
            <span className="text-sm font-bold text-white">KingHouse</span>
            <span className="text-[9px] font-semibold bg-[#A69C8E]/20 text-[#A69C8E] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              CMS
            </span>
          </Link>
        )}
        {collapsed && (
          <Link href="/dashboard" className="h-7 w-7 rounded-lg bg-[#A69C8E] flex items-center justify-center mx-auto">
            <span className="text-xs font-bold text-[#111111]">K</span>
          </Link>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all group ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-[#A69C8E]" : "group-hover:text-white/80"}`} />
              {!collapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold bg-[#A69C8E] text-[#111111] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Info & Footer Actions */}
      <div className="p-2 border-t border-white/10 space-y-1">
        {adminUser && !collapsed && (
          <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/5 mb-1">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-[#A69C8E] text-[#111111] flex items-center justify-center text-[10px] font-bold">
                KH
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate flex items-center space-x-1">
                  <span>{adminUser.name}</span>
                  <ShieldCheck className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                </div>
                <div className="text-[10px] text-white/50 font-mono truncate">
                  Admin Verified
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          type="button"
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all group"
        >
          <Bell className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>Notifications</span>}
        </button>
        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm text-red-400/80 hover:text-red-300 hover:bg-red-500/10 transition-all group cursor-pointer disabled:opacity-50"
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>{isLoggingOut ? "Signing Out..." : "Sign Out"}</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-16 h-6 w-6 rounded-full bg-[#333333] border border-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>
    </aside>
  )
}

