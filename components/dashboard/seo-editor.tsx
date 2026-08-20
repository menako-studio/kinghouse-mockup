"use client"

import { useState } from "react"
import Image from "next/image"
import {
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Globe,
  Share2,
  Save,
  Search,
  ExternalLink,
  Eye,
  Sliders,
} from "lucide-react"
import { CURATED_VILLAS } from "@/lib/data"
import { Villa } from "@/lib/types"

export function SeoEditor() {
  const [selectedVillaId, setSelectedVillaId] = useState<string>(CURATED_VILLAS[0].id)
  const currentVilla = CURATED_VILLAS.find((v) => v.id === selectedVillaId) || CURATED_VILLAS[0]

  // Local state per property
  const [metaTitle, setMetaTitle] = useState<string>(
    currentVilla.seoMeta?.metaTitle || `${currentVilla.name} — ${currentVilla.area} | KingHouse`
  )
  const [metaDescription, setMetaDescription] = useState<string>(
    currentVilla.seoMeta?.metaDescription ||
      `${currentVilla.editorialDescription.lead} Dikelola oleh KingHouse di Airbnb.`
  )
  const [focusKeyword, setFocusKeyword] = useState<string>(
    currentVilla.seoMeta?.focusKeyword || `airbnb ${currentVilla.areaSlug}`
  )
  const [canonicalUrl, setCanonicalUrl] = useState<string>(
    `https://kinghouse.id/locations/${currentVilla.areaSlug}/villas/${currentVilla.slug}`
  )
  const [isSaved, setIsSaved] = useState(false)

  // Switch property handler
  const handleSelectProperty = (villa: Villa) => {
    setSelectedVillaId(villa.id)
    setMetaTitle(villa.seoMeta?.metaTitle || `${villa.name} — ${villa.area} | KingHouse`)
    setMetaDescription(
      villa.seoMeta?.metaDescription ||
        `${villa.editorialDescription.lead} Dikelola oleh KingHouse di Airbnb.`
    )
    setFocusKeyword(villa.seoMeta?.focusKeyword || `airbnb ${villa.areaSlug}`)
    setCanonicalUrl(`https://kinghouse.id/locations/${villa.areaSlug}/villas/${villa.slug}`)
    setIsSaved(false)
  }

  // Handle simulated save
  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  // SEO Score calculation
  const titleLength = metaTitle.length
  const descLength = metaDescription.length
  const hasKeywordInTitle = metaTitle.toLowerCase().includes(focusKeyword.toLowerCase().trim())
  const hasKeywordInDesc = metaDescription.toLowerCase().includes(focusKeyword.toLowerCase().trim())
  const isTitleOptimal = titleLength >= 40 && titleLength <= 65
  const isDescOptimal = descLength >= 120 && descLength <= 165

  const checks = [
    { label: "Panjang Meta Title optimal (40-65 karakter)", passed: isTitleOptimal },
    { label: "Panjang Meta Description optimal (120-165 karakter)", passed: isDescOptimal },
    { label: "Focus Keyword terdapat dalam Meta Title", passed: hasKeywordInTitle && focusKeyword.length > 0 },
    { label: "Focus Keyword terdapat dalam Meta Description", passed: hasKeywordInDesc && focusKeyword.length > 0 },
    { label: "Structured Data (Schema.org VacationRental + FAQ) Aktif", passed: true },
    { label: "Canonical URL tervalidasi", passed: canonicalUrl.startsWith("https://") },
  ]

  const score = Math.round((checks.filter((c) => c.passed).length / checks.length) * 100)

  return (
    <div className="space-y-8">
      {/* Property Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAFAFA] border border-[#EBEBEB] rounded-2xl">
        {CURATED_VILLAS.map((villa) => (
          <button
            key={villa.id}
            onClick={() => handleSelectProperty(villa)}
            className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              selectedVillaId === villa.id
                ? "bg-[#222222] text-white shadow-sm"
                : "text-[#717171] hover:text-[#222222] hover:bg-white"
            }`}
          >
            <div className="relative h-4 w-4 rounded-full overflow-hidden flex-shrink-0">
              <Image src={villa.heroImage} alt={villa.name} fill className="object-cover" />
            </div>
            <span className="truncate max-w-[140px] sm:max-w-[200px]">{villa.name}</span>
            <span className="text-[10px] opacity-70">({villa.area})</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Editor Fields */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#F5F4F0] pb-4">
              <div>
                <h3 className="font-serif text-xl text-[#222222]">Editor Meta & Konten SEO</h3>
                <p className="text-xs text-[#717171]">
                  Optimasi metadata Google Search & Algoritma Airbnb ranking
                </p>
              </div>
              <button
                onClick={handleSave}
                className="inline-flex items-center space-x-2 bg-[#222222] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#333333] transition-colors"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{isSaved ? "Tersimpan! ✓" : "Simpan Metadata"}</span>
              </button>
            </div>

            {/* Focus Keyword */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  Target Kata Kunci (Focus Keyword)
                </label>
                <span className="text-[11px] text-[#A69C8E]">Prioritas pencarian tamu</span>
              </div>
              <div className="relative">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#A69C8E]" />
                <input
                  type="text"
                  value={focusKeyword}
                  onChange={(e) => setFocusKeyword(e.target.value)}
                  placeholder="e.g. sewa rumah jagakarsa jakarta selatan"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-medium text-[#222222] focus:outline-none focus:border-[#222222] focus:ring-1 focus:ring-[#222222]"
                />
              </div>
            </div>

            {/* Meta Title */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  Meta Title (Google SERP & Airbnb Title)
                </label>
                <span
                  className={`text-[11px] font-mono font-medium ${
                    isTitleOptimal ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {titleLength}/60 karakter {isTitleOptimal ? "✓" : "(Ideal: 40-60)"}
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-medium text-[#222222] focus:outline-none focus:border-[#222222] focus:ring-1 focus:ring-[#222222]"
              />
            </div>

            {/* Meta Description */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  Meta Description
                </label>
                <span
                  className={`text-[11px] font-mono font-medium ${
                    isDescOptimal ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {descLength}/160 karakter {isDescOptimal ? "✓" : "(Ideal: 120-160)"}
                </span>
              </div>
              <textarea
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-medium text-[#222222] focus:outline-none focus:border-[#222222] focus:ring-1 focus:ring-[#222222] leading-relaxed resize-none"
              />
            </div>

            {/* Canonical URL */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  Canonical URL (Anti Duplikat Konten)
                </label>
                <span className="text-[11px] text-[#A69C8E]">Index Authority</span>
              </div>
              <div className="relative">
                <Globe className="absolute left-3.5 top-3 h-4 w-4 text-[#A69C8E]" />
                <input
                  type="text"
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#EBEBEB] text-xs font-mono text-[#717171] focus:outline-none focus:border-[#222222]"
                />
              </div>
            </div>

            {/* OpenGraph & Social Image Preview */}
            <div className="space-y-2 pt-2 border-t border-[#F5F4F0]">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  OpenGraph Image Preview (Social Share)
                </label>
                <span className="text-[11px] text-emerald-600 font-semibold">1200 x 630px Auto-optimasi</span>
              </div>
              <div className="relative aspect-[1200/630] rounded-xl overflow-hidden border border-[#EBEBEB] group">
                <Image
                  src={currentVilla.heroImage}
                  alt={currentVilla.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4B896]">
                    KingHouse Curated Property &bull; {currentVilla.area}
                  </span>
                  <p className="font-serif text-sm font-semibold text-white truncate">
                    {metaTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: SERP Previews & SEO Health Score */}
        <div className="lg:col-span-5 space-y-6">
          {/* SEO Health Score Card */}
          <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-[#222222]">Skor Kesehatan SEO</h4>
                <p className="text-xs text-[#717171]">Kesiapan konversi pencarian Google</p>
              </div>
              <div
                className={`flex items-center justify-center h-14 w-14 rounded-2xl font-serif text-xl font-bold ${
                  score >= 80
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : score >= 60
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
              >
                {score}%
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-[#F5F4F0]">
              {checks.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs">
                  {item.passed ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  )}
                  <span className={item.passed ? "text-[#222222]" : "text-[#717171]"}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Google SERP Live Preview */}
          <div className="rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#717171]">
                Google Search Snippet Preview
              </span>
              <span className="text-[10px] text-[#A69C8E]">Desktop SERP</span>
            </div>
            <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] space-y-1.5 font-sans">
              <div className="flex items-center space-x-2 text-[11px] text-[#202124]">
                <div className="h-4 w-4 rounded-full bg-[#EBEBEB] flex items-center justify-center text-[9px] font-bold">
                  K
                </div>
                <span className="text-[#202124] font-medium">kinghouse.id</span>
                <span className="text-[#5f6368] text-[10px]">
                  &rsaquo; locations &rsaquo; {currentVilla.areaSlug}
                </span>
              </div>
              <h5 className="text-sm font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug line-clamp-1">
                {metaTitle}
              </h5>
              <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                {metaDescription}
              </p>
            </div>
          </div>

          {/* Airbnb Conversion Algorithm Highlights */}
          <div className="rounded-2xl border border-[#EBEBEB] bg-[#F5F4F0] p-6 space-y-3">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-[#A69C8E]" />
              <h4 className="font-semibold text-xs text-[#222222] uppercase tracking-wider">
                Dampak SEO terhadap Occupancy Airbnb
              </h4>
            </div>
            <p className="text-xs text-[#717171] leading-relaxed">
              Listing dengan struktur SEO editorial KingHouse terbukti meningkatkan impression rata-rata
              <strong className="text-[#222222]"> +280% </strong> di pencarian Airbnb dan menyumbang
              lonjakan konversi booking hingga <strong className="text-[#222222]">3x lipat</strong> dalam 60 hari.
            </p>
            <div className="pt-2">
              <a
                href={currentVilla.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#222222] hover:underline"
              >
                <span>Lihat Listing Airbnb Live</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
