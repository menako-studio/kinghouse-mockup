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
  period = "vs bulan lalu",
  icon: Icon,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#717171]">
          {title}
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F4F0] text-[#222222]">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-serif text-3xl font-medium text-[#222222]">{value}</p>
        {subtitle && <p className="text-xs text-[#A69C8E]">{subtitle}</p>}
      </div>
      {change && (
        <div className="flex items-center space-x-1.5 mt-4 pt-3 border-t border-[#F5F4F0] text-xs">
          {trend === "up" ? (
            <span className="flex items-center font-semibold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5 mr-0.5" />
              {change}
            </span>
          ) : (
            <span className="flex items-center font-semibold text-rose-600">
              <TrendingDown className="h-3.5 w-3.5 mr-0.5" />
              {change}
            </span>
          )}
          <span className="text-[#A69C8E]">{period}</span>
        </div>
      )}
    </div>
  )
}
