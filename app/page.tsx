import { HeroSlider } from "@/components/home/hero-slider"
import { SearchFilterBar } from "@/components/home/search-filter-bar"
import { CuratedGrid } from "@/components/home/curated-grid"
import { TrustSocialProof } from "@/components/home/trust-social-proof"
import { DualPathSplit } from "@/components/home/dual-path-split"

export const metadata = {
  title: "KingHouse — Curated Villas, Managed to Perfection",
  description: "Experience discrete architectural vacation retreats with seamless Airbnb booking, paired with institutional-grade villa asset management for luxury property owners.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Cinematic Hero Section with High-Res Visuals & Dual CTAs */}
      <HeroSlider />

      {/* 2. Airbnb-Style Floating Pill Search & Filter Bar */}
      <SearchFilterBar />

      {/* 3. Curated Collections: 3-Column Architectural Symmetrical Grid */}
      <CuratedGrid />

      {/* 4. Trust & Social Proof: Partner Logos & Verified Reviews Carousel */}
      <TrustSocialProof />

      {/* 5. Dual-Path Split Section (50% Guest Escape vs 50% Owner ROI) */}
      <DualPathSplit />
    </main>
  )
}
