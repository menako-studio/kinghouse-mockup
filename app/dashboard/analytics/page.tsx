"use client"

import { useState } from "react"
import {
  TrendingUp,
  DollarSign,
  Percent,
  Award,
  BarChart3,
  Sparkles,
  Download,
  Printer,
  Plus,
  Receipt,
  Building2,
  Calendar,
  X,
  CheckCircle2,
  HelpCircle,
} from "lucide-react"
import { INITIAL_RESERVATIONS, INITIAL_EXPENSES } from "@/lib/erp/initial-data"
import { CURATED_VILLAS } from "@/lib/data"
import { Reservation, ExpenseRecord, ExpenseCategory } from "@/lib/erp/types"
import { generateOwnerStatement, calculateADR, calculateRevPAR } from "@/lib/erp/calculations"
import { exportExpensesToCsv, downloadCsvFile, printOwnerStatement } from "@/lib/erp/export"
import { formatCurrency } from "@/lib/utils"

export default function DashboardAnalyticsPage() {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS)
  const [expenses, setExpenses] = useState<ExpenseRecord[]>(INITIAL_EXPENSES)
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("all")
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null)

  // Expense Form State
  const [expPropertyId, setExpPropertyId] = useState(CURATED_VILLAS[0].id)
  const [expCategory, setExpCategory] = useState<ExpenseCategory>("PLN & Utilities")
  const [expDescription, setExpDescription] = useState("")
  const [expAmount, setExpAmount] = useState(250000)
  const [expDate, setExpDate] = useState("2026-08-23")
  const [expVendor, setExpVendor] = useState("")
  const [expRecordedBy, setExpRecordedBy] = useState("Staff Operasional")

  // Filtered dataset
  const activeReservations = selectedPropertyId === "all"
    ? reservations
    : reservations.filter((r) => r.propertyId === selectedPropertyId)

  const activeExpenses = selectedPropertyId === "all"
    ? expenses
    : expenses.filter((e) => e.propertyId === selectedPropertyId)

  // Aggregated Financials
  const grossRevenue = activeReservations.reduce((sum, r) => sum + r.grossPayoutIdr, 0)
  const totalCleaningFee = activeReservations.reduce((sum, r) => sum + r.cleaningFeeIdr, 0)
  const totalMgmtFee = activeReservations.reduce((sum, r) => sum + r.managementFeeIdr, 0)
  const totalExpenses = activeExpenses.reduce((sum, e) => sum + e.amountIdr, 0)
  const netOwnerRemittance = Math.max(0, grossRevenue - totalCleaningFee - totalMgmtFee - totalExpenses)
  const totalNights = activeReservations.reduce((sum, r) => sum + r.nights, 0)

  const adr = calculateADR(grossRevenue, totalNights)
  const revpar = calculateRevPAR(grossRevenue, 4 * 31) // 4 properties * 31 days

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault()
    const targetVilla = CURATED_VILLAS.find((v) => v.id === expPropertyId) || CURATED_VILLAS[0]

    const newExp: ExpenseRecord = {
      id: `EXP-${Math.floor(105 + Math.random() * 900)}`,
      propertyId: targetVilla.id,
      propertySlug: targetVilla.slug,
      propertyName: targetVilla.name,
      category: expCategory,
      description: expDescription || `Biaya ${expCategory}`,
      amountIdr: expAmount,
      date: expDate,
      recordedBy: expRecordedBy,
      vendorName: expVendor,
    }

    setExpenses([newExp, ...expenses])
    setIsExpenseModalOpen(false)
    setFeedbackMsg(`Pengeluaran sebesar ${formatCurrency(newExp.amountIdr, "IDR")} untuk ${targetVilla.name} berhasil dicatat.`)
    setTimeout(() => setFeedbackMsg(null), 4000)

    // Reset Form
    setExpDescription("")
    setExpVendor("")
  }

  const handleExportExpensesCsv = () => {
    const csv = exportExpensesToCsv(activeExpenses)
    downloadCsvFile(csv, `KingHouse-Expenses-August2026.csv`)
    setFeedbackMsg("Laporan Pengeluaran Operasional (CSV) berhasil diunduh.")
    setTimeout(() => setFeedbackMsg(null), 3000)
  }

  const handlePrintStatement = () => {
    const targetVilla = CURATED_VILLAS.find((v) => v.id === selectedPropertyId) || CURATED_VILLAS[0]
    const statement = generateOwnerStatement(
      targetVilla.id,
      targetVilla.name,
      targetVilla.area,
      "PT Mitra Lestari Propertindo",
      "Agustus 2026",
      reservations,
      expenses,
      "standard",
      31
    )
    printOwnerStatement(statement)
  }

  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <BarChart3 className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>FINANCIAL INTELLIGENCE & POS SUITE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Revenue, POS & Owner Yield
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Analisis bagi hasil pemilik properti, pencatatan pengeluaran operasional (POS), dan laporan cetak resmi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePrintStatement}
            className="inline-flex items-center space-x-2 bg-white border border-[#EBE8E2] text-[#18181A] px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#F8F7F4] hover:border-[#DAD5CC] transition-all shadow-xs cursor-pointer"
            title="Cetak format invoice resmi A4 untuk dikirim ke pemilik villa"
          >
            <Printer className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>Cetak Laporan Owner</span>
          </button>

          <button
            type="button"
            onClick={() => setIsExpenseModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-[#18181A] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-xs cursor-pointer"
          >
            <Plus className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>Catat Biaya POS</span>
          </button>
        </div>
      </div>

      {feedbackMsg && (
        <div className="p-4 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-sana-fade-in shadow-xs">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">{feedbackMsg}</span>
        </div>
      )}

      {/* Property Filter Bar */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        <span className="text-xs font-semibold text-[#717171] flex-shrink-0 mr-1">Filter Properti:</span>
        <button
          type="button"
          onClick={() => setSelectedPropertyId("all")}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            selectedPropertyId === "all"
              ? "bg-[#18181A] text-white shadow-xs"
              : "bg-white text-[#717171] hover:text-[#18181A] border border-[#EBE8E2]"
          }`}
        >
          Semua Portofolio (4 Unit)
        </button>
        {CURATED_VILLAS.map((villa) => (
          <button
            key={villa.id}
            type="button"
            onClick={() => setSelectedPropertyId(villa.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedPropertyId === villa.id
                ? "bg-[#18181A] text-white shadow-xs"
                : "bg-white text-[#717171] hover:text-[#18181A] border border-[#EBE8E2]"
            }`}
          >
            {villa.area}: {villa.name.split(" ")[0]}...
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Gross Payout Terkumpul</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <DollarSign className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">{formatCurrency(grossRevenue, "IDR")}</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            {activeReservations.length} Transaksi Menginap
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Net Bagi Hasil Pemilik</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <Award className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold text-emerald-700">{formatCurrency(netOwnerRemittance, "IDR")}</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Setelah dikurangi komisi & POS
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Total Biaya Operasional (POS)</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <Receipt className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-rose-700">{formatCurrency(totalExpenses, "IDR")}</p>
          <span className="inline-block text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
            {activeExpenses.length} Nota Pembelian Tercatat
          </span>
        </div>

        <div className="p-7 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-2 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">ADR (Rata-Rata Tarif/Malam)</span>
            <div className="h-8 w-8 rounded-xl bg-[#F8F7F4] flex items-center justify-center text-[#18181A]">
              <TrendingUp className="h-4 w-4 text-[#C5A880]" />
            </div>
          </div>
          <p className="font-serif text-3xl font-normal text-[#18181A]">{formatCurrency(adr, "IDR")}</p>
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            {totalNights} Total Malam Terjual
          </span>
        </div>
      </div>

      {/* POS Expense Ledger Table */}
      <div className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#EBE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#F8F7F4]">
          <div>
            <h3 className="font-serif text-xl text-[#18181A] font-normal">Buku Pengeluaran Operasional / POS ({activeExpenses.length})</h3>
            <p className="text-xs text-[#717171]">Transparansi nota belanja, token listrik, laundry linen, dan maintenance</p>
          </div>

          <button
            type="button"
            onClick={handleExportExpensesCsv}
            className="inline-flex items-center space-x-2 bg-white border border-[#EBE8E2] text-[#18181A] px-4 py-2 rounded-2xl text-xs font-semibold hover:bg-[#F8F7F4] transition-all shadow-xs cursor-pointer self-start sm:self-auto"
          >
            <Download className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>Export Pengeluaran (CSV)</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBE8E2] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">ID & Tanggal</th>
                <th className="py-4 px-6">Properti</th>
                <th className="py-4 px-6">Kategori POS</th>
                <th className="py-4 px-6">Rincian Pengeluaran</th>
                <th className="py-4 px-6">Pencatat / Vendor</th>
                <th className="py-4 px-6 text-right">Nominal (Rp)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-xs">
              {activeExpenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-[#FAFAF8]/90 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-[#18181A]">{exp.date}</p>
                    <span className="text-[10px] text-[#717171] font-mono">{exp.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-medium text-[#18181A] max-w-[200px] truncate">{exp.propertyName}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#F4F3EE] text-[#18181A] border border-[#EBE8E2]">
                      {exp.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-[#18181A] font-medium">{exp.description}</p>
                  </td>
                  <td className="py-4 px-6 text-[11px] text-[#717171]">
                    <p className="font-medium text-[#18181A]">{exp.recordedBy}</p>
                    {exp.vendorName && <span className="text-[10px]">{exp.vendorName}</span>}
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-rose-700">
                    - {formatCurrency(exp.amountIdr, "IDR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* POS Expense Modal for Non-Tech Operators */}
      {isExpenseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#EBE8E2] max-h-[90vh] overflow-y-auto animate-sana-glow">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE8E2]">
              <div>
                <h3 className="font-serif text-2xl text-[#18181A]">Catat Pengeluaran POS</h3>
                <p className="text-xs text-[#717171] mt-0.5">Input nota biaya listrik, laundry, atau perbaikan properti</p>
              </div>
              <button
                type="button"
                onClick={() => setIsExpenseModalOpen(false)}
                className="h-8 w-8 rounded-full bg-[#F8F7F4] flex items-center justify-center text-[#717171] hover:text-[#18181A] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="space-y-4 pt-4 text-xs">
              <div>
                <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                  Properti yang Mengeluarkan Biaya
                </label>
                <select
                  value={expPropertyId}
                  onChange={(e) => setExpPropertyId(e.target.value)}
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
                    Kategori POS
                  </label>
                  <select
                    value={expCategory}
                    onChange={(e) => setExpCategory(e.target.value as ExpenseCategory)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="PLN & Utilities">PLN & Utilities (Listrik/Air/WiFi)</option>
                    <option value="Linen & Laundry">Linen & Laundry Cuci Sprei</option>
                    <option value="Guest Amenities">Guest Amenities & Galon</option>
                    <option value="Maintenance & Repairs">Maintenance & Service AC</option>
                    <option value="Staff & Housekeeping">Staff & Housekeeping</option>
                    <option value="Marketing & OTAs">Marketing & OTAs</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Tanggal Transaksi
                  </label>
                  <input
                    type="date"
                    required
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                  Deskripsi / Keterangan Nota
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Beli Token PLN 500rb + Cuci Filter AC Master Bedroom"
                  value={expDescription}
                  onChange={(e) => setExpDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Nominal Biaya (Rp)
                  </label>
                  <input
                    type="number"
                    required
                    min={1000}
                    step={10000}
                    value={expAmount}
                    onChange={(e) => setExpAmount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                    Nama Toko / Vendor (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Toko Listrik Sinar Jaya"
                    value={expVendor}
                    onChange={(e) => setExpVendor(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1">
                  Nama Staff Pencatat
                </label>
                <input
                  type="text"
                  required
                  value={expRecordedBy}
                  onChange={(e) => setExpRecordedBy(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F7F4] border border-[#EBE8E2] font-medium text-[#18181A] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsExpenseModalOpen(false)}
                  className="px-5 py-2.5 rounded-2xl border border-[#EBE8E2] text-[#717171] hover:text-[#18181A] hover:bg-[#F8F7F4] transition-all cursor-pointer font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-2xl bg-[#18181A] text-white font-semibold hover:bg-[#2B2A30] transition-all shadow-xs cursor-pointer"
                >
                  Simpan Biaya
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
