import { Metadata } from "next"
import Link from "next/link"
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { SeoEditor } from "@/components/dashboard/seo-editor"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "SEO Manager & Listing Optimizer — KingHouse CMS",
  description: "Property SEO optimization and ranking strategies on Airbnb & Google to maximize occupancy rates.",
}

export default function SeoManagerPage() {
  return (
    <div className="space-y-12">
      {/* Pitch Header */}
      <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1 text-xs font-semibold text-[#D4B896]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Key Owner Pitching Feature</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            SEO & Content Management Suite
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Why do KingHouse properties sustain high occupancy rates? Every property is architected with
            advanced SEO that converts Google searches and Airbnb Superhost algorithms into high-intent,
            longer-stay bookings.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">+280%</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Airbnb Search Impressions
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">Top 3</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Google Organic Area Rank
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">81.4%</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Average Occupancy Rate
              </p>
            </div>
          </div>
        </div>

        {/* Decorative ambient gradient */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D4B896]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Core Interactive SEO Editor */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EBEBEB] pb-4">
          <div>
            <h2 className="font-serif text-2xl text-[#222222]">Property SEO Editor</h2>
            <p className="text-xs text-[#717171]">
              Select any of the 4 managed properties to inspect and modify real-time SEO metadata
            </p>
          </div>
          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200 self-start sm:self-auto">
            Live Google SERP Preview Active
          </span>
        </div>

        <SeoEditor />
      </section>

      {/* Blog & Local SEO Content Pipeline */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-4">
          <div>
            <h2 className="font-serif text-2xl text-[#222222]">
              Editorial Content & Targeted Keywords
            </h2>
            <p className="text-xs text-[#717171]">
              Published high-converting articles generating organic short-stay and expat search traffic across Jabodetabek
            </p>
          </div>
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#222222] hover:underline"
          >
            <span>Open Public Blog</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-[#EBEBEB] bg-white overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBEBEB] bg-[#FAFAFA] text-[11px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Article Title & Target Area</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Target Keywords</th>
                <th className="py-4 px-6">Index Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBEBEB] text-xs">
              {BLOG_POSTS.map((post) => (
                <tr key={post.id} className="hover:bg-[#FAFAFA]/70 transition-colors">
                  <td className="py-4 px-6">
                    <p className="font-semibold text-[#222222] line-clamp-1">{post.title}</p>
                    <p className="text-[11px] text-[#A69C8E] mt-0.5">/blog/{post.slug}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#F5F4F0] text-[#222222]">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {post.seoKeywords.slice(0, 2).map((kw) => (
                        <span
                          key={kw}
                          className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-mono"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Google Indexed</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pitching Guide Explainer for Clients */}
      <section className="rounded-3xl border border-[#EBEBEB] bg-[#FAFAFA] p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A69C8E]">
            Client Pitching Framework
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] mt-2 mb-3">
            The KingHouse Formula: Transforming Properties into Guest Magnets
          </h3>
          <p className="text-xs sm:text-sm text-[#717171] leading-relaxed">
            Most property owners rely solely on default Airbnb traffic without optimization.
            KingHouse deploys a comprehensive 3-tier distribution strategy:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">Superhost Algorithm Engine</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              Optimized response times under 15 minutes, editorial high-resolution photography, and 100% amenity completeness elevate listings to the top 10 search results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">Organic Google Ingestion</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              Each property features ultra-fast landing pages with Schema.org JSON-LD structured data (VacationRental & FAQPage), indexed directly in local search results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">High-Yield Guest Targeting</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              Editorial SEO targets corporate long-stays, expats, and family retreat keywords, resulting in higher revenue yields and respectful guests.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

