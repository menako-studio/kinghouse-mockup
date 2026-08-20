"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ShieldCheck,
  User,
  LogOut,
  Settings,
  Bell,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Key,
  Clock,
  CheckCircle2,
  X,
  Lock,
  ChevronRight,
} from "lucide-react"
import { AdminUser } from "@/lib/auth"

interface DashboardHeaderProps {
  adminUser: AdminUser
}

export function DashboardHeader({ adminUser }: DashboardHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const profileRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Derive route breadcrumbs
  const getBreadcrumb = () => {
    if (pathname === "/dashboard") return "Overview"
    if (pathname.startsWith("/dashboard/properties")) return "Property Portfolio"
    if (pathname.startsWith("/dashboard/seo")) return "SEO Manager"
    if (pathname.startsWith("/dashboard/blog")) return "Blog Posts"
    if (pathname.startsWith("/dashboard/bookings")) return "Calendar & Bookings"
    if (pathname.startsWith("/dashboard/analytics")) return "Revenue Analytics"
    if (pathname.startsWith("/dashboard/settings")) return "Settings & Profile"
    return "Dashboard"
  }

  const handleLogout = async () => {
    if (isLoggingOut) return
    setIsLoggingOut(true)

    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/login")
      router.refresh()
    } catch {
      router.push("/login")
    }
  }

  return (
    <>
      <header className="h-16 border-b border-[#EBEBEB] bg-white px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        {/* Left: Breadcrumbs & Suite Context */}
        <div className="flex items-center space-x-2.5 text-xs">
          <Link
            href="/dashboard"
            className="font-medium text-[#717171] hover:text-[#222222] transition-colors"
          >
            KingHouse CMS
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#BDBDBD]" />
          <span className="font-semibold text-[#222222] bg-[#F5F4F0] px-2.5 py-0.5 rounded-md">
            {getBreadcrumb()}
          </span>
        </div>

        {/* Right: Live Sync Badge, Notifications, & Profile Menu */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Live Sync Status */}
          <div className="hidden lg:flex items-center space-x-2 text-[11px] text-[#555555] bg-[#F5F4F0] px-3 py-1.5 rounded-full border border-[#EBEBEB]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">4 Properties Synced</span>
            <span className="text-[#BDBDBD]">&bull;</span>
            <span className="text-emerald-700 font-semibold">Airbnb iCal Live</span>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen)
                setIsProfileOpen(false)
              }}
              className="relative p-2 rounded-xl text-[#717171] hover:text-[#222222] hover:bg-[#F5F4F0] transition-colors focus:outline-none"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#A69C8E]" />
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-[#EBEBEB] shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-[#EBEBEB]">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif text-sm font-semibold text-[#222222]">
                      System Alerts
                    </span>
                    <span className="text-[10px] bg-[#A69C8E]/20 text-[#222222] px-2 py-0.5 rounded-full font-bold">
                      3 New
                    </span>
                  </div>
                  <button
                    onClick={() => setIsNotificationsOpen(false)}
                    className="text-xs text-[#717171] hover:text-[#222222]"
                  >
                    Close
                  </button>
                </div>

                <div className="divide-y divide-[#F5F4F0] text-xs max-h-72 overflow-y-auto">
                  <div className="py-3 hover:bg-[#FAFAFA] rounded-lg px-2 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#222222]">
                        Dynamic Pricing Calibrated
                      </span>
                      <span className="text-[10px] text-[#A69C8E]">10m ago</span>
                    </div>
                    <p className="text-[11px] text-[#717171] mt-0.5">
                      Jagakarsa 5BR Villa weekend pricing updated based on South Jakarta market surge.
                    </p>
                  </div>
                  <div className="py-3 hover:bg-[#FAFAFA] rounded-lg px-2 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#222222]">
                        Airbnb iCal Synced
                      </span>
                      <span className="text-[10px] text-[#A69C8E]">1h ago</span>
                    </div>
                    <p className="text-[11px] text-[#717171] mt-0.5">
                      All 4 Jabodetabek listing calendars synced with 0 conflicts detected.
                    </p>
                  </div>
                  <div className="py-3 hover:bg-[#FAFAFA] rounded-lg px-2 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#222222]">
                        SEO Performance Pitch Ready
                      </span>
                      <span className="text-[10px] text-[#A69C8E]">3h ago</span>
                    </div>
                    <p className="text-[11px] text-[#717171] mt-0.5">
                      Audit scores computed: 96% SEO health across current active listings.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Account Profile Menu */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen)
                setIsNotificationsOpen(false)
              }}
              className="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-[#F5F4F0] transition-colors border border-transparent hover:border-[#EBEBEB] focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-[#111111] text-[#A69C8E] flex items-center justify-center text-xs font-bold ring-2 ring-[#A69C8E]/30">
                KH
              </div>
              <div className="hidden md:flex flex-col text-left">
                <div className="text-xs font-semibold text-[#111111] flex items-center space-x-1">
                  <span>{adminUser.name}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <span className="text-[10px] text-[#717171] font-mono leading-none">
                  Super Admin
                </span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-[#717171]" />
            </button>

            {/* Profile Dropdown Drawer */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-[#EBEBEB] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                {/* Header Card */}
                <div className="p-3 bg-[#111111] text-white rounded-xl mb-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-9 w-9 rounded-full bg-[#A69C8E] text-[#111111] flex items-center justify-center text-xs font-bold">
                      KH
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate flex items-center space-x-1">
                        <span>{adminUser.name}</span>
                      </p>
                      <p className="text-[10px] text-white/60 font-mono truncate">
                        {adminUser.email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                    <span className="text-emerald-400 font-medium flex items-center space-x-1">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Verified Super Admin</span>
                    </span>
                    <span className="text-white/40 font-mono">256-Bit SSL</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-1 text-xs text-[#222222]">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false)
                      setIsProfileModalOpen(true)
                    }}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-[#F5F4F0] transition-colors text-left"
                  >
                    <User className="h-4 w-4 text-[#717171]" />
                    <span>Account Profile & Security</span>
                  </button>

                  <Link
                    href="/dashboard/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-[#F5F4F0] transition-colors text-left"
                  >
                    <Settings className="h-4 w-4 text-[#717171]" />
                    <span>CMS & API Settings</span>
                  </Link>

                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F5F4F0] transition-colors text-left text-[#717171] hover:text-[#222222]"
                  >
                    <span className="flex items-center space-x-2.5">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Public Website</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#A69C8E]">Tab</span>
                  </a>
                </div>

                <div className="pt-2 mt-1 border-t border-[#EBEBEB]">
                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-red-600 hover:bg-red-50 transition-colors text-xs font-semibold disabled:opacity-50"
                  >
                    <LogOut className="h-4 w-4 flex-shrink-0" />
                    <span>{isLoggingOut ? "Signing Out..." : "Sign Out of CMS"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Account Profile & Security Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-[#EBEBEB] shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-2xl bg-[#A69C8E] text-[#111111] flex items-center justify-center font-bold text-sm">
                  KH
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white">
                    Admin Profile & Credentials
                  </h3>
                  <p className="text-xs text-[#A69C8E]">
                    KingHouse Hospitality Asset Management Suite
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Identity Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB]">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                      Account Name
                    </span>
                    <span className="font-semibold text-[#222222] text-sm">
                      {adminUser.name}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB]">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                      Role & Permissions
                    </span>
                    <span className="inline-flex items-center space-x-1 font-semibold text-emerald-700 text-sm">
                      <span>Super Admin</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] text-xs">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                    Administrative Email
                  </span>
                  <span className="font-mono text-[#222222] font-semibold text-sm">
                    {adminUser.email}
                  </span>
                </div>
              </div>

              {/* Security Status Box */}
              <div className="p-4 rounded-2xl bg-[#F5F4F0] border border-[#EBEBEB] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-[#A69C8E]" />
                    <span className="font-semibold text-[#222222]">Session Security</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Active &bull; HMAC-SHA256
                  </span>
                </div>

                <div className="space-y-1 text-xs text-[#717171]">
                  <div className="flex justify-between">
                    <span>Session Expiry:</span>
                    <span className="font-medium text-[#222222]">7 Days Rolling</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cookie Policy:</span>
                    <span className="font-mono text-[11px] text-[#222222]">HttpOnly, SameSite=Lax</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-Factor Authentication:</span>
                    <span className="font-medium text-emerald-700">Enforced by Token</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                <Link
                  href="/dashboard/settings"
                  onClick={() => setIsProfileModalOpen(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#222222] text-white text-xs font-semibold hover:bg-[#333333] transition-colors text-center"
                >
                  Manage Security & API Keys
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="py-3 px-5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors flex items-center space-x-1.5"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>{isLoggingOut ? "Signing Out..." : "Sign Out"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
