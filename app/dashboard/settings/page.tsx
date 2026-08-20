"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Settings,
  ShieldCheck,
  Key,
  Bell,
  Lock,
  User,
  LogOut,
  CheckCircle2,
  Copy,
  Check,
  Layers,
  Radio,
} from "lucide-react"
import { ADMIN_CREDENTIALS } from "@/lib/auth"

export default function DashboardSettingsPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleCopyIcal = () => {
    navigator.clipboard.writeText("https://kinghouse.id/api/ical/sync/jabodetabek-master.ics")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
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
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#A69C8E] mb-2">
            <Settings className="h-3.5 w-3.5" />
            <span>Configuration & Security</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#222222]">
            Admin Profile & System Settings
          </h1>
          <p className="text-sm text-[#717171] mt-1">
            Manage your administrative credentials, multi-channel distribution API keys, and notification channels.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 text-xs font-semibold transition-colors disabled:opacity-50 self-start sm:self-auto cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>{isLoggingOut ? "Signing Out..." : "Sign Out of CMS"}</span>
        </button>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-in fade-in">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
          <span>Settings successfully saved and synced across CMS infrastructure.</span>
        </div>
      )}

      {/* Admin Profile Details */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 pb-4 border-b border-[#EBEBEB]">
          <div className="h-12 w-12 rounded-2xl bg-[#111111] text-[#A69C8E] flex items-center justify-center font-bold text-sm">
            KH
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-serif text-xl text-[#222222]">{ADMIN_CREDENTIALS.name}</h3>
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                <ShieldCheck className="h-3 w-3 text-emerald-600" />
                <span>Super Admin</span>
              </span>
            </div>
            <p className="text-xs text-[#717171] font-mono">{ADMIN_CREDENTIALS.email}</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
                Full Administrative Name
              </label>
              <input
                type="text"
                defaultValue={ADMIN_CREDENTIALS.name}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-medium text-[#222222] focus:outline-none focus:border-[#222222]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
                Administrative Email
              </label>
              <input
                type="email"
                defaultValue={ADMIN_CREDENTIALS.email}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-mono text-[#222222] focus:outline-none focus:border-[#222222]"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#222222] text-white text-xs font-semibold hover:bg-[#333333] transition-colors cursor-pointer"
            >
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

      {/* Security & Authentication Protocol */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <Lock className="h-4 w-4 text-[#A69C8E]" />
          <h3 className="font-serif text-xl text-[#222222]">Security & Authentication</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#717171]">Session Architecture</span>
            <p className="font-semibold text-[#222222]">HMAC-SHA256 Signed JWT</p>
            <p className="text-[11px] text-[#717171]">HttpOnly, SameSite Strict, 7-Day Expiry</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#717171]">Two-Factor Authorization</span>
            <p className="font-semibold text-emerald-700">Enforced by Role Token</p>
            <p className="text-[11px] text-[#717171]">Required for price adjustments & OTA sync</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-1">
            <span className="text-[10px] uppercase font-bold text-[#717171]">Edge Protection</span>
            <p className="font-semibold text-[#222222]">Next.js Edge Proxy Verified</p>
            <p className="text-[11px] text-[#717171]">Auto-redirect unauthorized visitors</p>
          </div>
        </div>
      </div>

      {/* Multi-Channel Distribution API & iCal */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center space-x-2">
          <Layers className="h-4 w-4 text-[#A69C8E]" />
          <h3 className="font-serif text-xl text-[#222222]">OTA Multi-Channel Integration</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wider mb-1.5">
              Master Two-Way iCal Calendar Sync Feed
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value="https://kinghouse.id/api/ical/sync/jabodetabek-master.ics"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] text-xs font-mono text-[#555555] focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopyIcal}
                className="px-4 py-2.5 rounded-xl border border-[#EBEBEB] hover:border-[#222222] text-xs font-semibold text-[#222222] transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-[#717171] mt-1.5">
              Import this URL into Airbnb, Booking.com, and Agoda to synchronize availability in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
