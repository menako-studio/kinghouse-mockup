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
  ShieldCheck,
  Globe,
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
      className={`flex flex-col h-screen sticky top-0 bg-[#0F0F0F] border-r border-white/10 transition-all duration-300 z-40 select-none ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Brand Monogram & Portal Identifier */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 h-16">
        {!collapsed ? (
          <Link href="/dashboard" className="flex items-center space-x-2.5 group">
            <div className="h-8 w-8 rounded-xl bg-[#A69C8E] flex items-center justify-center font-serif font-bold text-[#111111] transition-transform group-hover:scale-105">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight leading-tight">
                KingHouse
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#A69C8E] font-medium leading-none">
                Hospitality CMS
              </span>
            </div>
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="h-8 w-8 rounded-xl bg-[#A69C8E] flex items-center justify-center font-serif font-bold text-[#111111] mx-auto hover:scale-105 transition-transform"
            title="KingHouse CMS"
          >
            K
          </Link>
        )}
      </div>

      {/* Primary CMS Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="text-[10px] uppercase font-mono tracking-widest text-[#666666] px-3 py-1.5 mb-1">
          {!collapsed ? "Management Suite" : "•"}
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all group relative ${
                isActive
                  ? "bg-white/10 text-white font-semibold shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon
                className={`h-4 w-4 flex-shrink-0 transition-colors ${
                  isActive ? "text-[#A69C8E]" : "text-white/50 group-hover:text-white"
                }`}
              />
              {!collapsed && (
                <>
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] font-bold bg-[#A69C8E] text-[#111111] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#A69C8E] rounded-r-full" />
              )}
            </Link>
          )
        })}

        {/* Public Website Preview Link */}
        <div className="pt-4 mt-4 border-t border-white/5">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#666666] px-3 py-1.5 mb-1">
            {!collapsed ? "Public View" : "•"}
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title={collapsed ? "Public Website" : undefined}
            className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all group"
          >
            <Globe className="h-4 w-4 flex-shrink-0 group-hover:text-[#A69C8E] transition-colors" />
            {!collapsed && <span>Public Website ↗</span>}
          </a>
        </div>
      </nav>

      {/* Account Profile Details & Logout Section */}
      <div className="p-3 border-t border-white/10 space-y-2 bg-[#0A0A0A]">
        {adminUser && !collapsed && (
          <Link
            href="/dashboard/settings"
            className="block p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#A69C8E]/40 hover:bg-white/10 transition-all group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <div className="h-7 w-7 rounded-lg bg-[#A69C8E] text-[#111111] flex items-center justify-center text-xs font-bold flex-shrink-0">
                KH
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate flex items-center space-x-1">
                  <span>{adminUser.name}</span>
                  <ShieldCheck className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                </div>
                <div className="text-[10px] text-white/50 font-mono truncate">
                  {adminUser.email}
                </div>
              </div>
            </div>
          </Link>
        )}

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          title={collapsed ? "Sign Out" : undefined}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all group cursor-pointer disabled:opacity-50 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>{isLoggingOut ? "Signing Out..." : "Sign Out"}</span>}
        </button>
      </div>

      {/* Collapse/Expand Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3.5 top-20 h-7 w-7 rounded-full bg-[#1F1F1F] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#A69C8E] transition-all shadow-md z-50 cursor-pointer"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </button>
    </aside>
  )
}
