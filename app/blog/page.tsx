import { Metadata } from "next"
import { BookOpen, Rss } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata: Metadata = {
  title: "Blog — Airbnb SEO & Property Management Insights | KingHouse",
  description:
    "Articles, strategies, and editorial guides from KingHouse hospitality experts. Learn how to maximize Airbnb occupancy, optimize listing SEO, and grow short-stay revenue across Jabodetabek.",
  keywords: [
    "airbnb property management blog",
    "superhost tips jabodetabek",
    "airbnb seo optimization",
    "short stay asset management",
    "jakarta property rental insights",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "KingHouse Blog — Airbnb SEO & Property Management Insights",
    description:
      "Actionable strategies and market insights from the KingHouse team to maximize your Airbnb rental yield.",
    url: "/blog",
    type: "website",
  },
}

// Article JSON-LD for blog index
const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "KingHouse Blog",
  description:
    "Tips, strategies, and property management guides for Airbnb hosts across Greater Jakarta from the KingHouse team.",
  url: "https://kinghouse.id/blog",
  author: {
    "@type": "Organization",
    name: "KingHouse",
    url: "https://kinghouse.id",
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://kinghouse.id/blog/${post.slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    image: post.heroImage,
    keywords: post.seoKeywords.join(", "),
  })),
}

const CATEGORY_FILTERS = [
  { slug: "all", label: "All Articles" },
  { slug: "owner-tips", label: "Owner Insights" },
  { slug: "airbnb-seo", label: "Airbnb SEO" },
  { slug: "revenue-management", label: "Yield & Revenue" },
  { slug: "jabodetabek-guide", label: "Area Guides" },
]

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter((p) => p.featured)
  const regularPosts = BLOG_POSTS.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-white">
      <script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
      />

      {/* Hero Header */}
      <section className="border-b border-[#EBEBEB] bg-[#FAFAFA] pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#222222]">
              <BookOpen className="h-4 w-4 text-[#A69C8E]" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A69C8E]">
              KingHouse Journal
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] font-normal leading-tight mb-4">
              Insights & Strategic Guides
              <br />
              <span className="text-[#A69C8E]">for Jabodetabek Properties</span>
            </h1>
            <p className="text-base sm:text-lg text-[#717171] font-light leading-relaxed max-w-xl">
              Airbnb algorithms, regional market analyses, and operational guides from the KingHouse team to maximize your property yields.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-8 mt-10 pt-10 border-t border-[#EBEBEB]">
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">{BLOG_POSTS.length}</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Articles</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">4</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Managed Areas</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">Free</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Open Access</p>
            </div>
            <div className="flex items-center space-x-2 ml-auto">
              <Rss className="h-4 w-4 text-[#A69C8E]" />
              <span className="text-xs text-[#717171]">Weekly Editorial Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="border-b border-[#EBEBEB] bg-white sticky top-16 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center space-x-1 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.slug}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  cat.slug === "all"
                    ? "bg-[#222222] text-white"
                    : "text-[#717171] hover:text-[#222222] hover:bg-[#F5F4F0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-[#222222]">Featured Article</h2>
              <span className="text-xs text-[#A69C8E] uppercase tracking-wider font-medium">Editor&apos;s Pick</span>
            </div>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="pb-24 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-[#222222]">All Articles</h2>
            <span className="text-xs text-[#A69C8E]">{BLOG_POSTS.length} posts</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#222222] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Ready to Maximize Your Property Yields?
          </h2>
          <p className="text-[#A69C8E] text-sm mb-8 max-w-md mx-auto">
            Consult with KingHouse asset managers regarding your Airbnb listing. Zero commitment, complimentary audit.
          </p>
          <a
            href="https://wa.me/6282123933218?text=Hello%20KingHouse!%20I%20would%20like%20a%20consultation%20regarding%20my%20Airbnb%20property%20management."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#222222] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#F5F4F0] transition-colors"
          >
            <span>Free WhatsApp Consultation</span>
          </a>
        </div>
      </section>
    </main>
  )
}

