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
  Activity,
} from "lucide-react"
import { AdminUser } from "@/lib/auth"
import { useNotifications, AlertCategory } from "@/components/dashboard/notification-context"

interface DashboardHeaderProps {
  adminUser: AdminUser
}

export function DashboardHeader({ adminUser }: DashboardHeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const { alerts, unreadCount, markAsRead, markAllAsRead, clearAlert, clearAllAlerts } = useNotifications()

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

  const getCategoryBadge = (cat: AlertCategory) => {
    switch (cat) {
      case "blog":
        return <span className="text-[9px] font-bold uppercase bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded-md border border-purple-200">Blog</span>
      case "booking":
        return <span className="text-[9px] font-bold uppercase bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-md border border-emerald-200">Booking</span>
      case "expense":
        return <span className="text-[9px] font-bold uppercase bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded-md border border-rose-200">POS</span>
      case "seo":
        return <span className="text-[9px] font-bold uppercase bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md border border-blue-200">SEO</span>
      case "sync":
        return <span className="text-[9px] font-bold uppercase bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md border border-amber-200">iCal</span>
      default:
        return <span className="text-[9px] font-bold uppercase bg-[#F4F3EE] text-[#717171] px-1.5 py-0.5 rounded-md border border-[#EBE8E2]">System</span>
    }
  }

  return (
    <>
      <header className="h-16 border-b border-[#EBE8E2] bg-white/80 backdrop-blur-xl px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        {/* Left: Breadcrumbs & Suite Context */}
        <div className="flex items-center space-x-2.5 text-xs">
          <Link
            href="/dashboard"
            className="font-medium text-[#717171] hover:text-[#18181A] transition-colors"
          >
            KingHouse CMS
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#C5A880]" />
          <span className="font-semibold text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] text-[11px] tracking-wide">
            {getBreadcrumb()}
          </span>
        </div>

        {/* Right: Live Sync Badge, Notifications, & Profile Menu */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Live Sync Status */}
          <div className="hidden lg:flex items-center space-x-2 text-[11px] text-[#555555] bg-[#F4F3EE] px-3.5 py-1.5 rounded-full border border-[#EBE8E2]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">4 Properties Synced</span>
            <span className="text-[#DAD5CC]">&bull;</span>
            <span className="text-emerald-700 font-semibold flex items-center space-x-1">
              <span>Airbnb iCal Live</span>
            </span>
          </div>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              type="button"
              onClick={() => {
                setIsNotificationsOpen(!isNotificationsOpen)
                setIsProfileOpen(false)
              }}
              className="relative p-2 rounded-xl text-[#717171] hover:text-[#18181A] hover:bg-[#F4F3EE] transition-colors focus:outline-none cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#FF3B70] animate-pulse" />
              )}
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-4 z-50 animate-sana-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4F3EE]">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold text-[#18181A]">
                      System Alerts
                    </span>
                    {unreadCount > 0 ? (
                      <span className="text-[10px] bg-[#FF3B70]/10 text-[#FF3B70] px-2 py-0.5 rounded-full font-bold">
                        {unreadCount} New
                      </span>
                    ) : (
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                        All Read
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {unreadCount > 0 && (
                      <button
                        type="button"
                        onClick={markAllAsRead}
                        className="text-[11px] font-semibold text-[#C5A880] hover:text-[#18181A] cursor-pointer"
                      >
                        Read All
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-xs text-[#717171] hover:text-[#18181A] cursor-pointer p-1"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-[#F4F3EE] text-xs max-h-72 overflow-y-auto">
                  {alerts.length > 0 ? (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => {
                          markAsRead(alert.id)
                          if (alert.actionUrl) {
                            setIsNotificationsOpen(false)
                            router.push(alert.actionUrl)
                          }
                        }}
                        className={`py-3 rounded-2xl px-2.5 transition-colors cursor-pointer group relative ${
                          alert.isRead ? "hover:bg-[#FAFAF8] opacity-75" : "bg-[#F8F7F4]/60 hover:bg-[#F4F3EE]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center space-x-1.5">
                            {!alert.isRead && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[#FF3B70] flex-shrink-0" />
                            )}
                            <span className="font-semibold text-[#18181A] line-clamp-1">
                              {alert.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1.5 flex-shrink-0">
                            {getCategoryBadge(alert.category)}
                            <span className="text-[10px] text-[#C5A880] font-mono">{alert.timeAgo}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                clearAlert(alert.id)
                              }}
                              className="opacity-0 group-hover:opacity-100 p-1 text-[#717171] hover:text-rose-600 rounded transition-opacity cursor-pointer"
                              title="Hapus Notifikasi"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#717171] mt-1 leading-relaxed">
                          {alert.message}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-center space-y-1">
                      <p className="text-xs font-semibold text-[#18181A]">Tidak Ada Notifikasi</p>
                      <p className="text-[11px] text-[#717171]">Semua sistem beroperasi normal tanpa kendala.</p>
                    </div>
                  )}
                </div>

                {alerts.length > 0 && (
                  <div className="pt-2 border-t border-[#F4F3EE] flex items-center justify-between text-[11px]">
                    <span className="text-[#717171] font-mono">{alerts.length} Total Alerts</span>
                    <button
                      type="button"
                      onClick={clearAllAlerts}
                      className="text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
                    >
                      Hapus Semua
                    </button>
                  </div>
                )}
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
              className="flex items-center space-x-2.5 p-1.5 rounded-2xl hover:bg-[#F4F3EE] transition-colors border border-transparent hover:border-[#EBE8E2] focus:outline-none cursor-pointer"
            >
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#0B0A0E] to-[#25222D] text-[#C5A880] flex items-center justify-center text-xs font-bold ring-2 ring-[#C5A880]/30 shadow-sm">
                KH
              </div>
              <div className="hidden md:flex flex-col text-left">
                <div className="text-xs font-semibold text-[#18181A] flex items-center space-x-1">
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
              <div className="absolute right-0 mt-2 w-72 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_25px_60px_rgba(0,0,0,0.15)] p-2.5 z-50 animate-sana-fade-in">
                {/* Header Card */}
                <div className="p-3.5 bg-[#0B0A0E] text-white rounded-2xl mb-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF3B70]/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center space-x-2.5 relative z-10">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#C5A880] to-[#9E8668] text-[#0B0A0E] flex items-center justify-center text-xs font-bold">
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
                <div className="space-y-1 text-xs text-[#18181A]">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileOpen(false)
                      setIsProfileModalOpen(true)
                    }}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-[#F4F3EE] transition-colors text-left cursor-pointer"
                  >
                    <User className="h-4 w-4 text-[#717171]" />
                    <span>Account Profile & Security</span>
                  </button>

                  <Link
                    href="/dashboard/settings"
                    onClick={() => setIsProfileOpen(false)}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-[#F4F3EE] transition-colors text-left"
                  >
                    <Settings className="h-4 w-4 text-[#717171]" />
                    <span>CMS & API Settings</span>
                  </Link>

                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F4F3EE] transition-colors text-left text-[#717171] hover:text-[#18181A]"
                  >
                    <span className="flex items-center space-x-2.5">
                      <ExternalLink className="h-4 w-4" />
                      <span>View Public Website</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono text-[#C5A880]">Tab</span>
                  </a>
                </div>

                <div className="pt-2 mt-1 border-t border-[#EBE8E2]">
                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors text-xs font-semibold disabled:opacity-50 cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-[#EBE8E2] shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#0B0A0E] text-white flex items-center justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C5A880]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center space-x-3 relative z-10">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#C5A880] to-[#9E8668] text-[#0B0A0E] flex items-center justify-center font-bold text-sm">
                  KH
                </div>
                <div>
                  <h3 className="text-lg text-white font-semibold">
                    Admin Profile & Credentials
                  </h3>
                  <p className="text-xs text-[#C5A880]">
                    KingHouse Hospitality Asset Management Suite
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsProfileModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer relative z-10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Identity Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2]">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                      Account Name
                    </span>
                    <span className="font-semibold text-[#18181A] text-sm">
                      {adminUser.name}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2]">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                      Role & Permissions
                    </span>
                    <span className="inline-flex items-center space-x-1 font-semibold text-emerald-700 text-sm">
                      <span>Super Admin</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] text-xs">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#717171] block mb-1">
                    Administrative Email
                  </span>
                  <span className="font-mono text-[#18181A] font-semibold text-sm">
                    {adminUser.email}
                  </span>
                </div>
              </div>

              {/* Security Status Box */}
              <div className="p-4 rounded-2xl bg-[#F4F3EE] border border-[#EBE8E2] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-[#C5A880]" />
                    <span className="font-semibold text-[#18181A]">Session Security</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    Active &bull; HMAC-SHA256
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-[#717171]">
                  <div className="flex justify-between">
                    <span>Session Expiry:</span>
                    <span className="font-medium text-[#18181A]">7 Days Rolling</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cookie Policy:</span>
                    <span className="font-mono text-[11px] text-[#18181A]">HttpOnly, SameSite=Lax</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-Factor Authorization:</span>
                    <span className="font-medium text-emerald-700">Enforced by Token</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                <Link
                  href="/dashboard/settings"
                  onClick={() => setIsProfileModalOpen(false)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-[#18181A] text-white text-xs font-semibold hover:bg-[#28282D] transition-colors text-center shadow-sm"
                >
                  Manage Security & API Keys
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="py-3 px-5 rounded-2xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors flex items-center space-x-1.5 cursor-pointer"
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

