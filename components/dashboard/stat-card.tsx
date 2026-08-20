import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  change?: string
  trend?: "up" | "down" | "neutral"
  period?: string
  icon: LucideIcon
  subtitle?: string
}

export function StatCard({
  title,
  value,
  change,
  trend = "up",
  period = "vs previous month",
  icon: Icon,
  subtitle,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-[#EBE8E2] bg-white p-6 sm:p-7 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
      {/* Top Subtle Ambient Sheen */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A880]/[0.08] to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#717171]">
            {title}
          </span>
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] text-[#18181A] group-hover:bg-[#18181A] group-hover:text-[#C5A880] transition-colors duration-300 shadow-sm">
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="font-serif text-3xl sm:text-4xl font-normal text-[#18181A] tracking-tight">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-[#717171] font-sans font-light">{subtitle}</p>
          )}
        </div>
      </div>

      {change && (
        <div className="flex items-center space-x-2 mt-5 pt-3.5 border-t border-[#F4F3EE] text-xs">
          {trend === "up" ? (
            <span className="inline-flex items-center space-x-1 font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full text-[11px]">
              <TrendingUp className="h-3 w-3" />
              <span>{change}</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1 font-semibold text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-full text-[11px]">
              <TrendingDown className="h-3 w-3" />
              <span>{change}</span>
            </span>
          )}
          <span className="text-[#888888] text-[11px] truncate">{period}</span>
        </div>
      )}
    </div>
  )
}

