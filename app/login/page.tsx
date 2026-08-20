"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Loader2, KeyRound, CheckCircle2, AlertCircle } from "lucide-react"
import { ADMIN_CREDENTIALS } from "@/lib/auth"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleFillDemo = () => {
    setEmail(ADMIN_CREDENTIALS.email)
    setPassword(ADMIN_CREDENTIALS.password)
    setErrorMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    if (!email.trim() || !password) {
      setErrorMessage("Please enter both administrative email and password.")
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || "Authentication failed. Invalid credentials.")
        setIsLoading(false)
        return
      }

      setSuccessMessage("Authentication verified. Redirecting to CMS Dashboard...")
      
      // Short delay for fluid UI feedback before redirecting
      setTimeout(() => {
        router.push(callbackUrl)
        router.refresh()
      }, 500)
    } catch {
      setErrorMessage("Network error occurred during sign-in. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col justify-between selection:bg-[#A69C8E] selection:text-[#111111]">
      {/* Top Bar Navigation */}
      <header className="px-6 py-6 lg:px-12 flex items-center justify-between border-b border-white/5">
        <Link href="/" className="group flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-[#1A1A1A] text-[#A69C8E] transition-all duration-300 group-hover:border-[#A69C8E] group-hover:bg-[#A69C8E] group-hover:text-[#111111]">
            <span className="font-serif text-lg font-normal tracking-wider">K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-tight text-white">
              KingHouse
            </span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-[#888888] -mt-1 font-medium">
              Hospitality Suite
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-[#888888] hover:text-[#A69C8E] transition-colors flex items-center space-x-1.5"
        >
          <span>Back to Public Website</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </header>

      {/* Main Authentication Card */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-md">
          {/* Card Frame */}
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            {/* Subtle Gradient Glow Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#A69C8E]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#A69C8E]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1F1F1F] border border-white/10 text-[11px] font-medium tracking-wide text-[#A69C8E]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#A69C8E]" />
                <span>Admin Security Protocol</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#555555]">
                256-Bit SSL
              </span>
            </div>

            {/* Title & Description */}
            <div className="mb-8">
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight">
                CMS Portal Access
              </h1>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed font-sans">
                Enter your administrative credentials to manage KingHouse properties, SEO algorithms, and multi-channel booking distribution.
              </p>
            </div>

            {/* Feedback Alerts */}
            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start space-x-3 text-red-300 text-xs animate-in fade-in duration-200">
                <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="mb-6 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-start space-x-3 text-emerald-300 text-xs animate-in fade-in duration-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{successMessage}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#AAAAAA] mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#666666]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@kinghouse.id"
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#A69C8E] focus:ring-1 focus:ring-[#A69C8E] transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#AAAAAA]">
                    Password
                  </label>
                  <span className="text-[10px] text-[#777777]">Protected Credentials</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#666666]">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="w-full pl-10 pr-11 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-sm text-white placeholder-[#555555] focus:outline-none focus:border-[#A69C8E] focus:ring-1 focus:ring-[#A69C8E] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#666666] hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2.5 cursor-pointer text-xs text-[#888888] hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-white/20 bg-[#1A1A1A] text-[#A69C8E] focus:ring-0 focus:ring-offset-0 accent-[#A69C8E]"
                  />
                  <span>Remember administrative session</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#A69C8E] text-[#111111] font-semibold text-sm hover:bg-[#BDB3A6] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-[#A69C8E]/10 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to CMS</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Helper Section */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-[#777777] font-semibold flex items-center space-x-1.5">
                  <KeyRound className="h-3 w-3 text-[#A69C8E]" />
                  <span>Demo Evaluation Access</span>
                </span>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-[11px] font-semibold text-[#A69C8E] hover:underline cursor-pointer"
                >
                  Auto-Fill Credentials
                </button>
              </div>
              <div className="p-3 bg-[#1A1A1A] rounded-xl border border-white/5 text-[11px] font-mono text-[#888888] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Email:</span>
                  <span className="text-white/90">admin@kinghouse.id</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Password:</span>
                  <span className="text-white/90">KingHouse2026!Admin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Security Note */}
          <div className="mt-6 text-center text-[11px] text-[#555555]">
            <span>Unauthorized access attempts are monitored and logged. &copy; 2026 KingHouse Hospitality.</span>
          </div>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="px-6 py-4 text-center text-xs text-[#444444] border-t border-white/5">
        <span>KingHouse Property Management &bull; Jabodetabek Portfolio CMS</span>
      </footer>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center text-white">
        <div className="flex items-center space-x-3 text-[#A69C8E]">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-sm font-medium">Loading KingHouse Security Portal...</span>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
