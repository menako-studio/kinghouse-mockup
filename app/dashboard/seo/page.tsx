import { Metadata } from "next"
import Link from "next/link"
import {
  Search,
  Sparkles,
  TrendingUp,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react"
import { SeoEditor } from "@/components/dashboard/seo-editor"
import { BLOG_POSTS, CURATED_VILLAS } from "@/lib/data"

export const metadata: Metadata = {
  title: "SEO Manager & Listing Optimizer — KingHouse CMS",
  description: "Optimasi SEO properti dan strategi ranking pencarian Airbnb & Google untuk meningkatkan occupancy rate.",
}

export default function SeoManagerPage() {
  return (
    <div className="space-y-12">
      {/* Pitch Header */}
      <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1 text-xs font-semibold text-[#D4B896]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fitur Unggulan Pitching Klien</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            SEO & Content Management System
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Mengapa properti KingHouse selalu berokupansi tinggi? Karena setiap unit dirancang dengan
            arsitektur SEO yang mengonversi pencarian Google dan algoritma Superhost Airbnb menjadi
            aliran tamu berkualitas dan long-stay.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">+280%</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Impresi Pencarian Airbnb
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">Top 3</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Ranking Google Organik Area
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-[#D4B896]">81.4%</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider">
                Rata-rata Tingkat Hunian
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
            <h2 className="font-serif text-2xl text-[#222222]">Editor SEO Properti</h2>
            <p className="text-xs text-[#717171]">
              Pilih salah satu dari 4 properti untuk melihat dan mengedit metadata SEO real-time
            </p>
          </div>
          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold border border-emerald-200 self-start sm:self-auto">
            Live Preview Google SERP Aktif
          </span>
        </div>

        <SeoEditor />
      </section>

      {/* Blog & Local SEO Content Pipeline */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-4">
          <div>
            <h2 className="font-serif text-2xl text-[#222222]">
              Strategi Artikel Blog & Targeted Keywords
            </h2>
            <p className="text-xs text-[#717171]">
              Artikel yang dipublikasikan untuk mendatangkan traffic organik pencarian dari Jabodetabek
            </p>
          </div>
          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#222222] hover:underline"
          >
            <span>Buka Halaman Blog Publik</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="rounded-2xl border border-[#EBEBEB] bg-white overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBEBEB] bg-[#FAFAFA] text-[11px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Judul Artikel & Target Area</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6">Target Keywords</th>
                <th className="py-4 px-6">Status Index</th>
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
                      <span>Terindex Google</span>
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
            Kenapa Ini Menjual Saat Pitching ke Owner?
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#222222] mt-2 mb-3">
            Formula SEO KingHouse: Mengubah Properti Biasa Jadi Magnet Tamu
          </h3>
          <p className="text-xs sm:text-sm text-[#717171] leading-relaxed">
            Kebanyakan pemilik properti hanya mengandalkan traffic bawaan Airbnb tanpa optimasi.
            KingHouse membangun ekosistem SEO 3 arah:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">Algoritma Superhost</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              Optimasi response time &lt;15 menit, foto beresolusi tinggi, dan kelengkapan fasilitas
              menaikkan posisi listing ke 10 besar halaman pencarian Airbnb.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">Google Organic Traffic</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              Setiap properti memiliki landing page cepat dengan Structured Data JSON-LD
              (VacationRental & FAQ), langsung terindeks di pencarian lokal Google.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#EBEBEB] space-y-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#222222] text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h4 className="font-semibold text-sm text-[#222222]">Target Tamu Berkualitas</h4>
            <p className="text-xs text-[#717171] leading-relaxed">
              SEO editorial menyasar kata kunci long-stay ekspat dan keluarga besar, menghasilkan tamu
              yang lebih bermanner dan durasi sewa lebih panjang.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
