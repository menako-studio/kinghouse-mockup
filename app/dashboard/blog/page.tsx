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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBEBEB] pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#A69C8E] mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Content Management</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#222222]">
            Editorial Blog & SEO Articles
          </h1>
          <p className="text-sm text-[#717171] mt-1">
            Publish high-intent hospitality articles and Airbnb landlord guides to drive organic search traffic.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center space-x-2 bg-[#222222] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#333333] transition-colors shadow-sm self-start sm:self-auto cursor-pointer"
        >
          <Plus className="h-4 w-4 text-[#A69C8E]" />
          <span>New Article</span>
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm">
          <span className="text-xs text-[#717171]">Published Articles</span>
          <p className="font-serif text-2xl font-bold text-[#222222] mt-1">4 Live</p>
          <span className="text-[11px] text-emerald-600 font-medium">100% Indexed on Google</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm">
          <span className="text-xs text-[#717171]">Total Organic Reads</span>
          <p className="font-serif text-2xl font-bold text-[#222222] mt-1">5,660</p>
          <span className="text-[11px] text-emerald-600 font-medium">+24% vs last month</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#EBEBEB] shadow-sm">
          <span className="text-xs text-[#717171]">Average SEO Content Score</span>
          <p className="font-serif text-2xl font-bold text-[#222222] mt-1">95.4 / 100</p>
          <span className="text-[11px] text-[#A69C8E] font-medium">Editorial Quality Standard</span>
        </div>
      </div>

      {/* Article Table */}
      <div className="rounded-3xl border border-[#EBEBEB] bg-white overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[#EBEBEB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-serif text-lg text-[#222222]">All Articles</h3>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#717171]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-8 pr-4 py-1.5 rounded-lg border border-[#EBEBEB] text-xs focus:outline-none focus:border-[#222222]"
              />
            </div>
            <Link
              href="/blog"
              target="_blank"
              className="text-xs font-semibold text-[#A69C8E] hover:text-[#222222] transition-colors"
            >
              Public Blog ↗
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EBEBEB] bg-[#FAFAFA] text-[11px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-3.5 px-6">Article Title & Category</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">SEO Score</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6">Organic Reads</th>
                <th className="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBEBEB] text-xs">
              {BLOG_ARTICLES.map((article) => (
                <tr key={article.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="py-4 px-6 max-w-sm">
                    <p className="font-semibold text-[#222222] line-clamp-1">{article.title}</p>
                    <span className="text-[11px] text-[#A69C8E] font-medium">{article.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    {article.status === "Published" ? (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle className="h-3 w-3" />
                        <span>Published</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="h-3 w-3" />
                        <span>Draft</span>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1.5 font-mono font-semibold text-[#222222]">
                      <Sparkles className="h-3.5 w-3.5 text-[#A69C8E]" />
                      <span>{article.seoScore}/100</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-[#717171]">{article.date}</td>
                  <td className="py-4 px-6 font-medium text-[#222222]">{article.views}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg text-[#717171] hover:text-[#222222] hover:bg-[#F5F4F0] transition-colors"
                        title="Edit Article"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                      </button>
                      <Link
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg text-[#717171] hover:text-[#222222] hover:bg-[#F5F4F0] transition-colors"
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
