interface ChannelBadgeProps {
  channel: "airbnb" | "booking" | "agoda" | "direct"
  status: "connected" | "syncing" | "available" | "coming_soon"
  syncTime?: string
}

export function ChannelBadge({ channel, status, syncTime }: ChannelBadgeProps) {
  const channelNames: Record<string, string> = {
    airbnb: "Airbnb",
    booking: "Booking.com",
    agoda: "Agoda",
    direct: "Direct Booking",
  }

  const channelColors: Record<string, { bg: string; text: string; dot: string }> = {
    airbnb: { bg: "bg-rose-50 border-rose-200", text: "text-rose-700", dot: "bg-rose-500" },
    booking: { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", dot: "bg-blue-500" },
    agoda: { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
    direct: { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  }

  const statusConfig: Record<string, { label: string; badgeClass: string }> = {
    connected: { label: "Connected", badgeClass: "bg-emerald-100 text-emerald-800" },
    syncing: { label: "Syncing...", badgeClass: "bg-blue-100 text-blue-800 animate-pulse" },
    available: { label: "Available v2.0", badgeClass: "bg-purple-100 text-purple-800" },
    coming_soon: { label: "Coming Soon", badgeClass: "bg-gray-100 text-gray-600" },
  }

  const currentChannel = channelColors[channel] || channelColors.airbnb
  const currentStatus = statusConfig[status] || statusConfig.coming_soon

  return (
    <div
      className={`inline-flex items-center justify-between gap-3 px-3 py-1.5 rounded-xl border ${currentChannel.bg}`}
    >
      <div className="flex items-center space-x-2">
        <span className={`h-2 w-2 rounded-full ${currentChannel.dot}`} />
        <span className={`text-xs font-semibold ${currentChannel.text}`}>
          {channelNames[channel]}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        {syncTime && <span className="text-[10px] text-[#717171]">{syncTime}</span>}
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${currentStatus.badgeClass}`}>
          {currentStatus.label}
        </span>
      </div>
    </div>
  )
}
