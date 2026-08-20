import Link from "next/link"
import { Plus, Search, Eye, Edit3, Sparkles, BookOpen, CheckCircle, Clock } from "lucide-react"

const BLOG_ARTICLES = [
  {
    id: "1",
    title: "How to Maximize Airbnb Occupancy in Jagakarsa: A 2026 Landlord Guide",
    category: "Owner Tips",
    author: "KingHouse Editorial",
    date: "2026-08-15",
    status: "Published",
    views: "1,420",
    seoScore: 98,
    slug: "how-to-maximize-airbnb-occupancy-jagakarsa",
  },
  {
    id: "2",
    title: "Dynamic Pricing Strategies for Expat Rental Hubs in Cikarang & Tangerang",
    category: "Revenue Management",
    author: "KingHouse Editorial",
    date: "2026-08-10",
    status: "Published",
    views: "980",
    seoScore: 95,
    slug: "dynamic-pricing-strategies-cikarang-tangerang",
  },
  {
    id: "3",
    title: "Airbnb SEO Mastery: Keyword Formulas That Rank #1 in Greater Jakarta",
    category: "Airbnb SEO",
    author: "KingHouse Editorial",
    date: "2026-08-04",
    status: "Published",
    views: "2,150",
    seoScore: 100,
    slug: "airbnb-seo-mastery-jakarta",
  },
  {
    id: "4",
    title: "Villa Hosting for Private Weddings: High-Yield Event Strategies",
    category: "Guest Experience",
    author: "KingHouse Editorial",
    date: "2026-07-28",
    status: "Published",
    views: "1,110",
    seoScore: 92,
    slug: "villa-hosting-private-weddings",
  },
  {
    id: "5",
    title: "Palmerah Transit Stays: Optimizing Turnaround Times for Commuter Travelers",
    category: "Jabodetabek Guide",
    author: "KingHouse Editorial",
    date: "2026-08-18",
    status: "Draft",
    views: "—",
    seoScore: 88,
    slug: "palmerah-transit-stays-commuter-optimization",
  },
]

export default function DashboardBlogPage() {
  return (
    <div className="space-y-8 animate-sana-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE8E2] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#18181A] bg-[#F4F3EE] px-3 py-1 rounded-full border border-[#EBE8E2] mb-3">
            <BookOpen className="h-3.5 w-3.5 text-[#C5A880]" />
            <span>EDITORIAL CONTENT MANAGEMENT</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#18181A] font-normal tracking-tight">
            Editorial Blog & SEO Articles
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Publish high-intent hospitality articles and Airbnb landlord guides to drive organic search traffic across Jabodetabek.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center space-x-2 bg-[#18181A] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-xs self-start sm:self-auto cursor-pointer"
        >
          <Plus className="h-4 w-4 text-[#C5A880]" />
          <span>New Article</span>
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Published Articles</span>
          <p className="font-serif text-3xl font-normal text-[#18181A]">4 Live</p>
          <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            100% Indexed on Google
          </span>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Total Organic Reads</span>
          <p className="font-serif text-3xl font-normal text-[#18181A]">5,660</p>
          <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            +24% vs last month
          </span>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-[#EBE8E2] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Average SEO Content Score</span>
          <p className="font-serif text-3xl font-normal text-[#18181A]">95.4 / 100</p>
          <span className="inline-block text-[10px] font-semibold text-[#C5A880] bg-[#F4F3EE] px-2 py-0.5 rounded-full border border-[#EBE8E2]">
            Editorial Quality Standard
          </span>
        </div>
      </div>

      {/* Article Table */}
      <div className="rounded-3xl border border-[#EBE8E2] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#EBE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#F8F7F4]">
          <h3 className="font-serif text-xl text-[#18181A] font-normal">All Articles</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-8 pr-4 py-2 rounded-2xl border border-[#EBE8E2] text-xs focus:outline-none focus:border-[#C5A880] bg-[#F8F7F4]/50"
              />
            </div>
            <Link
              href="/blog"
              target="_blank"
              className="text-xs font-semibold text-[#18181A] hover:text-[#C5A880] transition-colors"
            >
              Public Blog ↗
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBE8E2] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Article Title & Category</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">SEO Score</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Organic Reads</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F4F3EE] text-xs">
              {BLOG_ARTICLES.map((article) => (
                <tr key={article.id} className="hover:bg-[#FAFAF8]/90 transition-colors">
                  <td className="py-4 px-6 max-w-sm">
                    <p className="font-semibold text-[#18181A] line-clamp-1">{article.title}</p>
                    <span className="text-[11px] text-[#C5A880] font-medium">{article.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    {article.status === "Published" ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <CheckCircle className="h-3 w-3 text-emerald-600" />
                        <span>Published</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                        <Clock className="h-3 w-3 text-amber-600" />
                        <span>Draft</span>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1.5 font-mono font-semibold text-[#18181A]">
                      <Sparkles className="h-3.5 w-3.5 text-[#C5A880]" />
                      <span>{article.seoScore}/100</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#717171] font-mono">{article.date}</td>
                  <td className="py-4 px-6 font-semibold text-[#18181A]">{article.views}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <button
                        type="button"
                        className="p-1.5 rounded-xl text-[#717171] hover:text-[#18181A] hover:bg-[#F4F3EE] transition-colors cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                      </button>
                      <Link
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-xl text-[#717171] hover:text-[#18181A] hover:bg-[#F4F3EE] transition-colors"
                        title="Preview Public Post"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

