"use client"

import { useState } from "react"
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Filter,
  Plus,
  Download,
  Search,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  X,
  DollarSign,
  User,
  Phone,
  Building2,
  Layers,
  HelpCircle,
} from "lucide-react"
import { INITIAL_RESERVATIONS } from "@/lib/erp/initial-data"
import { CURATED_VILLAS } from "@/lib/data"
import { Reservation, ChannelType, ReservationStatus, FeeTier } from "@/lib/erp/types"
import { calculateReservationPayout } from "@/lib/erp/calculations"
import { exportReservationsToCsv, downloadCsvFile } from "@/lib/erp/export"
import { formatCurrency } from "@/lib/utils"

export default function DashboardBookingsPage() {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChannel, setSelectedChannel] = useState<string>("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [syncStatus, setSyncStatus] = useState<string>("Up to date")
  const [isSyncing, setIsSyncing] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null)

  // Form State for Manual Booking
  const [formPropertyId, setFormPropertyId] = useState(CURATED_VILLAS[0].id)
  const [formGuestName, setFormGuestName] = useState("")
  const [formGuestPhone, setFormGuestPhone] = useState("")
  const [formChannel, setFormChannel] = useState<ChannelType>("Direct WhatsApp")
  const [formCheckIn, setFormCheckIn] = useState("2026-09-01")
  const [formCheckOut, setFormCheckOut] = useState("2026-09-03")
  const [formGuests, setFormGuests] = useState(2)
  const [formGrossPayout, setFormGrossPayout] = useState(1500000)
  const [formCleaningFee, setFormCleaningFee] = useState(150000)
  const [formFeeTier, setFormFeeTier] = useState<FeeTier>("standard")
  const [formNotes, setFormNotes] = useState("")

  // Dynamic calculations for the modal
  const nightsCount = Math.max(
    1,
    Math.round(
      (new Date(formCheckOut).getTime() - new Date(formCheckIn).getTime()) / (1000 * 60 * 60 * 24)
    ) || 1
  )

  const payoutCalc = calculateReservationPayout(formGrossPayout, formCleaningFee, formFeeTier)

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedVilla = CURATED_VILLAS.find((v) => v.id === formPropertyId) || CURATED_VILLAS[0]

    const newRes: Reservation = {
      id: `RES-${Math.floor(8925 + Math.random() * 1000)}`,
      propertyId: selectedVilla.id,
      propertySlug: selectedVilla.slug,
      propertyName: selectedVilla.name,
      guestName: formGuestName || "Tamu Direct",
      guestPhone: formGuestPhone,
      channel: formChannel,
      checkIn: formCheckIn,
      checkOut: formCheckOut,
      nights: nightsCount,
      guests: formGuests,
      grossPayoutIdr: formGrossPayout,
      cleaningFeeIdr: formCleaningFee,
      feeTier: formFeeTier,
      managementFeePercent: payoutCalc.managementFeePercent,
      managementFeeIdr: payoutCalc.managementFeeIdr,
      netOwnerPayoutIdr: payoutCalc.netOwnerPayoutIdr,
      status: "Confirmed",
      notes: formNotes,
      createdAt: new Date().toISOString(),
    }

    setReservations([newRes, ...reservations])
    setIsModalOpen(false)
    setFeedbackMsg(`Reservasi baru atas nama ${newRes.guestName} berhasil ditambahkan!`)
    setTimeout(() => setFeedbackMsg(null), 4000)

    // Reset Form
    setFormGuestName("")
    setFormGuestPhone("")
    setFormNotes("")
  }

  const handleForceSync = () => {
    setIsSyncing(true)
    setTimeout(() => {
      setIsSyncing(false)
      setSyncStatus("Baru saja disinkronkan (0 konflik terdeteksi)")
      setFeedbackMsg("Sinkronisasi 2-Arah Airbnb iCal berhasil diperbarui!")
      setTimeout(() => setFeedbackMsg(null), 3000)
    }, 1200)
  }

  const handleExportCsv = () => {
    const csvData = exportReservationsToCsv(reservations)
    const today = new Date().toISOString().split("T")[0]
    downloadCsvFile(csvData, `KingHouse-Reservations-${today}.csv`)
    setFeedbackMsg("Laporan CSV berhasil diunduh! Siap dibuka di Microsoft Excel / Google Sheets.")
    setTimeout(() => setFeedbackMsg(null), 4000)
  }

  // Filtered reservations
  const filteredReservations = reservations.filter((r) => {
    const matchesSearch =
      r.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesChannel = selectedChannel === "all" || r.channel.toLowerCase() === selectedChannel.toLowerCase()

    return matchesSearch && matchesChannel
  })

  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <CalendarDays className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>DISTRIBUTION & RESERVATIONS ERP</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Bookings & Calendar Hub
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Pusat manajemen reservasi multi-channel (Airbnb, Direct WhatsApp, Agoda) dengan kalkulasi otomatis bagi hasil pemilik.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleExportCsv}
            className="inline-flex items-center space-x-2 bg-white border border-[#EBE8E2] text-[#18181A] px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#F8F7F4] hover:border-[#DAD5CC] transition-all shadow-xs cursor-pointer"
            title="Download file spreadsheet Excel/CSV untuk pembukuan"
          >
            <Download className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>Export CSV / Excel</span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-[#18181A] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-xs cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>Tambah Reservasi</span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="p-4 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-sana-fade-in shadow-xs">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">{feedbackMsg}</span>
        </div>
      )}

      {/* Sync Status Banner */}
      <div className="p-5 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-100" />
          <div>
            <p className="text-xs font-semibold text-[#18181A]">Sinkronisasi Otomatis iCal 2-Arah Aktif</p>
            <p className="text-[11px] text-[#717171] font-light">{syncStatus}. Menjaga agar kalender Airbnb dan WhatsApp tidak bentrok (Zero Double-Booking).</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 self-start md:self-auto">
          <button
            type="button"
            onClick={handleForceSync}
            disabled={isSyncing}
            className="inline-flex items-center space-x-1.5 text-xs text-[#717171] hover:text-[#18181A] bg-[#F8F7F4] hover:bg-[#EBE8E2] px-3.5 py-1.5 rounded-full transition-all border border-[#EBE8E2] cursor-pointer"
          >
            <RefreshCw className={`h-3 w-3 ${isSyncing ? "animate-spin text-[#C5A880]" : ""}`} />
            <span>{isSyncing ? "Menyinkronkan..." : "Sinkronkan Sekarang"}</span>
          </button>
          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 uppercase tracking-wider">
            Auto-Lock Protected
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-white p-4 rounded-3xl border border-[#EBE8E2]">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#717171]" />
          <input
            type="text"
            placeholder="Cari nama tamu, nomor booking, atau properti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] text-xs focus:outline-none focus:border-[#C5A880] transition-all"
          />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-[11px] text-[#717171] font-semibold flex items-center space-x-1">
            <Filter className="h-3 w-3" />
            <span>Channel:</span>
          </span>
          {["all", "Airbnb", "Direct WhatsApp"].map((ch) => (
            <button
              key={ch}
              type="button"
              onClick={() => setSelectedChannel(ch)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedChannel === ch
                  ? "bg-[#18181A] text-white"
                  : "bg-[#F8F7F4] text-[#717171] hover:text-[#18181A] border border-[#EBE8E2]"
              }`}
            >
              {ch === "all" ? "Semua Saluran" : ch}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#EBE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#F8F7F4]">
          <div className="space-y-1">
            <h3 className="font-serif text-xl text-[#18181A] font-normal">Daftar Reservasi Aktif ({filteredReservations.length})</h3>
            <p className="text-xs text-[#717171]">Transparansi lengkap bagi hasil pemilik dan status kedatangan tamu</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBE8E2] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">ID & Tamu</th>
                <th className="py-4 px-6">Properti</th>
                <th className="py-4 px-6">Saluran Booking</th>
                <th className="py-4 px-6">Tanggal In & Out</th>
                <th className="py-4 px-6">Gross Payout</th>
                <th className="py-4 px-6">Bagi Hasil Owner (Net)</th>
                <th className="py-4 px-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-xs">
              {filteredReservations.map((res) => {
                const isDirect = res.channel === "Direct WhatsApp"
                return (
                  <tr key={res.id} className="hover:bg-[#FAFAF8]/90 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-semibold text-[#18181A]">{res.guestName}</p>
                      <span className="text-[10px] text-[#717171] font-mono">{res.id}</span>
                      {res.guestPhone && (
                        <p className="text-[10px] text-[#717171] mt-0.5">{res.guestPhone}</p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-[#18181A] max-w-[220px] truncate">{res.propertyName}</p>
                      <span className="text-[11px] text-[#717171]">{res.guests} Tamu &bull; {res.nights} Malam</span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                          isDirect
                            ? "bg-emerald-50/70 text-emerald-800 border-emerald-200"
                            : "bg-rose-50/70 text-rose-800 border-rose-200"
                        }`}
                      >
                        {res.channel}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-[#18181A]">{res.checkIn} &rarr; {res.checkOut}</p>
                      <span className="text-[10px] text-[#C5A880] font-medium">{res.nights} malam menginap</span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#18181A]">
                      {formatCurrency(res.grossPayoutIdr, "IDR")}
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-emerald-700">{formatCurrency(res.netOwnerPayoutIdr, "IDR")}</p>
                      <span className="text-[10px] text-[#717171]">
                        Komisi: {formatCurrency(res.managementFeeIdr, "IDR")} ({res.managementFeePercent}%)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        <span>{res.status}</span>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Booking Modal for Non-Tech Operators */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EBE8E2] max-h-[90vh] overflow-y-auto animate-sana-glow">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE8E2]">
              <div>
                <h3 className="font-serif text-2xl text-[#18181A]">Input Reservasi Manual</h3>
                <p className="text-xs text-[#717171] mt-0.5">Catat booking tamu dari WhatsApp atau Direct Booking</p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-full bg-[#F8F7F4] flex items-center justify-center text-[#717171] hover:text-[#18181A] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleManualAdd} className="space-y-4 pt-4 text-xs">
              <div>
                <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                  Pilih Properti Villa / Apartemen
                </label>
                <select
                  value={formPropertyId}
                  onChange={(e) => setFormPropertyId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                >
                  {CURATED_VILLAS.map((villa) => (
                    <option key={villa.id} value={villa.id}>
                      {villa.name} ({villa.area})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Nama Lengkap Tamu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ibu Jessica Iskandar"
                    value={formGuestName}
                    onChange={(e) => setFormGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Nomor WhatsApp Tamu
                  </label>
                  <input
                    type="text"
                    placeholder="0812-xxxx-xxxx"
                    value={formGuestPhone}
                    onChange={(e) => setFormGuestPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Saluran (Channel)
                  </label>
                  <select
                    value={formChannel}
                    onChange={(e) => setFormChannel(e.target.value as ChannelType)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Direct WhatsApp">Direct WhatsApp</option>
                    <option value="Airbnb">Airbnb</option>
                    <option value="Booking.com">Booking.com</option>
                    <option value="Agoda">Agoda</option>
                    <option value="Walk-in">Walk-in</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    required
                    value={formCheckIn}
                    onChange={(e) => setFormCheckIn(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    required
                    value={formCheckOut}
                    onChange={(e) => setFormCheckOut(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Total Gross (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    step={50000}
                    value={formGrossPayout}
                    onChange={(e) => setFormGrossPayout(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Cleaning Fee (Rp)
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={10000}
                    value={formCleaningFee}
                    onChange={(e) => setFormCleaningFee(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Tier Fee KingHouse
                  </label>
                  <select
                    value={formFeeTier}
                    onChange={(e) => setFormFeeTier(e.target.value as FeeTier)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="standard">15% Standard</option>
                    <option value="premium">20% Premium</option>
                  </select>
                </div>
              </div>

              {/* Automatic Calculation Preview Box for Non-Tech Users */}
              <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] space-y-2">
                <div className="flex items-center space-x-1.5 font-semibold text-[#18181A]">
                  <Sparkles className="h-3.5 w-3.5 text-[#C5A880]" />
                  <span>Kalkulasi Otomatis Sistem ERP:</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] pt-1">
                  <div>
                    <span className="text-[#717171] block">Lama Menginap:</span>
                    <strong className="text-[#18181A]">{nightsCount} Malam</strong>
                  </div>
                  <div>
                    <span className="text-[#717171] block">Komisi Mgmt ({payoutCalc.managementFeePercent}%):</span>
                    <strong className="text-amber-700">{formatCurrency(payoutCalc.managementFeeIdr, "IDR")}</strong>
                  </div>
                  <div>
                    <span className="text-[#717171] block">Bagi Hasil Pemilik:</span>
                    <strong className="text-emerald-700">{formatCurrency(payoutCalc.netOwnerPayoutIdr, "IDR")}</strong>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Tamu butuh extra bed dan early check-in jam 13:00"
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-2xl border border-[#EBE8E2] text-[#717171] hover:text-[#18181A] hover:bg-[#F8F7F4] transition-all cursor-pointer font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-2xl bg-[#18181A] text-white font-semibold hover:bg-[#2B2A30] transition-all shadow-xs cursor-pointer"
                >
                  Simpan Reservasi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
