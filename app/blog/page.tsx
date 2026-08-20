import { Metadata } from "next"
import { BookOpen, Rss } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata: Metadata = {
  title: "Blog — Tips Airbnb & Panduan Properti Jabodetabek | KingHouse",
  description:
    "Artikel, strategi, dan panduan dari para ahli manajemen properti KingHouse. Pelajari cara meningkatkan occupancy Airbnb, optimasi SEO listing, dan memaksimalkan pendapatan properti Anda di Jabodetabek.",
  keywords: [
    "blog airbnb indonesia",
    "tips host airbnb",
    "optimasi listing airbnb",
    "manajemen properti jabodetabek",
    "panduan sewa properti jakarta",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "KingHouse Blog — Tips Airbnb & Panduan Properti Jabodetabek",
    description:
      "Strategi dan insight dari tim KingHouse untuk memaksimalkan pendapatan properti Anda di Airbnb.",
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
    "Tips, strategi, dan panduan manajemen properti Airbnb di Jabodetabek dari tim KingHouse.",
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
  { slug: "all", label: "Semua Artikel" },
  { slug: "owner-tips", label: "Tips Owner" },
  { slug: "airbnb-seo", label: "Airbnb SEO" },
  { slug: "revenue-management", label: "Revenue" },
  { slug: "jabodetabek-guide", label: "Panduan Lokal" },
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
              KingHouse Blog
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#222222] font-normal leading-tight mb-4">
              Insight & Panduan
              <br />
              <span className="text-[#A69C8E]">Properti Jabodetabek</span>
            </h1>
            <p className="text-base sm:text-lg text-[#717171] font-light leading-relaxed max-w-xl">
              Strategi Airbnb, analisis pasar, dan panduan praktis dari tim KingHouse untuk
              memaksimalkan pendapatan properti Anda.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-8 mt-10 pt-10 border-t border-[#EBEBEB]">
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">{BLOG_POSTS.length}</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Artikel</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">4</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Area Jabodetabek</p>
            </div>
            <div className="space-y-0.5">
              <p className="font-serif text-2xl text-[#222222]">Gratis</p>
              <p className="text-xs text-[#A69C8E] uppercase tracking-wider">Tanpa Berlangganan</p>
            </div>
            <div className="flex items-center space-x-2 ml-auto">
              <Rss className="h-4 w-4 text-[#A69C8E]" />
              <span className="text-xs text-[#717171]">Update Mingguan</span>
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
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
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
              <h2 className="font-serif text-2xl text-[#222222]">Artikel Pilihan</h2>
              <span className="text-xs text-[#A69C8E] uppercase tracking-wider font-medium">Featured</span>
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
            <h2 className="font-serif text-2xl text-[#222222]">Semua Artikel</h2>
            <span className="text-xs text-[#A69C8E]">{BLOG_POSTS.length} artikel</span>
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
            Siap Memaksimalkan Properti Anda?
          </h2>
          <p className="text-[#A69C8E] text-sm mb-8 max-w-md mx-auto">
            Konsultasikan properti Anda dengan tim KingHouse. Gratis, tanpa komitmen.
          </p>
          <a
            href="https://wa.me/628129252090?text=Hello%20KingHouse!%20Saya%20ingin%20konsultasi%20manajemen%20properti%20Airbnb%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#222222] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#F5F4F0] transition-colors"
          >
            <span>Konsultasi Gratis via WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  )
}
