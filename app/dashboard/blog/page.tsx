"use client"

import { useState, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import {
  Plus,
  Search,
  Eye,
  Edit3,
  Sparkles,
  BookOpen,
  CheckCircle,
  Clock,
  Trash2,
  X,
  Check,
  Tag,
  ImageIcon,
  ArrowRight,
  Filter,
  RefreshCw,
  ExternalLink,
  Layers,
  FileText,
} from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"
import { useNotifications } from "@/components/dashboard/notification-context"

export interface DashboardArticle {
  id: string
  title: string
  slug: string
  category: string
  author: {
    name: string
    role: string
    avatar: string
  }
  date: string
  status: "Published" | "Draft"
  views: string
  seoScore: number
  excerpt: string
  content: string
  heroImage: string
  tags: string[]
  seoKeywords: string[]
  readTime: number
}

const STORAGE_KEY = "kinghouse_cms_blog_articles_v3"

const CATEGORY_OPTIONS = [
  "Owner Tips",
  "Revenue Management",
  "Airbnb SEO",
  "Guest Experience",
  "Jabodetabek Guide",
  "Wedding & Events",
]

const IMAGE_PRESETS = [
  {
    name: "Versatile House Garden Pool (Jagakarsa)",
    url: "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
  },
  {
    name: "Sky House Hotel-Style Bed (Pinang Tangerang)",
    url: "/properties/sky-house/SkyHouse_IKEA_KamarUtama_Wide.jpeg",
  },
  {
    name: "Skyline Luxury Living Lounge (Cikarang)",
    url: "/properties/skyline-luxury/SkylineLuxury_OrangeCounty_KamarUtama.webp",
  },
  {
    name: "Bright & Airy Apartment (Palmerah)",
    url: "/properties/bright-airy/BrightAiry_Apartment_Kamar_Wide.webp",
  },
]

// Initialize default articles from SSOT
const INITIAL_DASHBOARD_ARTICLES: DashboardArticle[] = BLOG_POSTS.map((post, idx) => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  category:
    post.category === "owner-tips"
      ? "Owner Tips"
      : post.category === "revenue-management"
      ? "Revenue Management"
      : post.category === "airbnb-seo"
      ? "Airbnb SEO"
      : post.category === "guest-experience"
      ? "Guest Experience"
      : "Jabodetabek Guide",
  author: post.author,
  date: post.publishedAt,
  status: idx === 4 ? "Draft" : "Published",
  views: idx === 0 ? "2,420" : idx === 1 ? "1,850" : idx === 2 ? "3,100" : idx === 3 ? "1,240" : "—",
  seoScore: idx === 0 ? 98 : idx === 1 ? 95 : idx === 2 ? 100 : idx === 3 ? 92 : 88,
  excerpt: post.excerpt,
  content: post.content,
  heroImage: post.heroImage,
  tags: post.tags,
  seoKeywords: post.seoKeywords,
  readTime: post.readTime,
}))

function calculateSeoScore(title: string, excerpt: string, content: string, keywords: string[]): number {
  let score = 50
  if (title.length >= 30 && title.length <= 70) score += 15
  if (excerpt.length >= 80 && excerpt.length <= 200) score += 15
  if (content.length >= 300) score += 10
  if (keywords.length > 0) score += 10
  return Math.min(100, score)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export default function DashboardBlogPage() {
  const { addAlert, showToast } = useNotifications()

  const [articles, setArticles] = useState<DashboardArticle[]>(INITIAL_DASHBOARD_ARTICLES)
  const [isHydrated, setIsHydrated] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "Published" | "Draft">("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<"create" | "edit">("create")
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"form" | "preview">("form")

  // Form states
  const [formTitle, setFormTitle] = useState("")
  const [formSlug, setFormSlug] = useState("")
  const [formCategory, setFormCategory] = useState("Owner Tips")
  const [formAuthorName, setFormAuthorName] = useState("KingHouse Editorial")
  const [formAuthorRole, setFormAuthorRole] = useState("Hospitality Asset Manager")
  const [formExcerpt, setFormExcerpt] = useState("")
  const [formContent, setFormContent] = useState("")
  const [formHeroImage, setFormHeroImage] = useState(IMAGE_PRESETS[0].url)
  const [formKeywords, setFormKeywords] = useState("sewa villa jabodetabek, airbnb superhost, tips properti")
  const [formStatus, setFormStatus] = useState<"Published" | "Draft">("Published")
  const [formReadTime, setFormReadTime] = useState(5)

  // Mount flag for Portal
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setArticles(parsed)
        }
      }
    } catch {
      // ignore
    }
    setIsHydrated(true)
  }, [])

  // Sync to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
      } catch {
        // ignore
      }
    }
  }, [articles, isHydrated])

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isModalOpen) setIsModalOpen(false)
        if (deleteConfirmId) setDeleteConfirmId(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, deleteConfirmId])

  // Open Create Modal
  const handleOpenCreateModal = () => {
    setModalMode("create")
    setEditingArticleId(null)
    setFormTitle("")
    setFormSlug("")
    setFormCategory("Owner Tips")
    setFormAuthorName("KingHouse Editorial")
    setFormAuthorRole("Hospitality Asset Manager")
    setFormExcerpt("")
    setFormContent(
      "## Ringkasan Strategi\n\nPasar persewaan properti di area Jabodetabek terus mengalami peningkatan minat tamu korporat dan keluarga.\n\n### Langkah Utama\n\n- **Optimalisasi Foto Listing**: Gunakan pencahayaan alami dan resolusi tinggi.\n- **Respon Cepat (<15 Menit)**: Meningkatkan algoritma rekomendasi Superhost.\n- **Kalender Bersih**: Hindari bentrok dengan sinkronisasi iCal otomatis."
    )
    setFormHeroImage(IMAGE_PRESETS[0].url)
    setFormKeywords("airbnb jabodetabek, tips sewa villa, optimasi pendapatan")
    setFormStatus("Published")
    setFormReadTime(4)
    setActiveTab("form")
    setIsModalOpen(true)
  }

  // Open Edit Modal
  const handleOpenEditModal = (article: DashboardArticle) => {
    setModalMode("edit")
    setEditingArticleId(article.id)
    setFormTitle(article.title)
    setFormSlug(article.slug)
    setFormCategory(article.category)
    setFormAuthorName(article.author.name)
    setFormAuthorRole(article.author.role)
    setFormExcerpt(article.excerpt)
    setFormContent(article.content)
    setFormHeroImage(article.heroImage || IMAGE_PRESETS[0].url)
    setFormKeywords(article.seoKeywords ? article.seoKeywords.join(", ") : "")
    setFormStatus(article.status)
    setFormReadTime(article.readTime || 5)
    setActiveTab("form")
    setIsModalOpen(true)
  }

  // Handle Form Submit (Create / Update)
  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault()

    const rawKeywords = formKeywords
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0)

    const finalSlug = formSlug || slugify(formTitle) || `artikel-${Date.now()}`
    const computedScore = calculateSeoScore(formTitle, formExcerpt, formContent, rawKeywords)

    if (modalMode === "create") {
      const newArticle: DashboardArticle = {
        id: `blog-${Date.now()}`,
        title: formTitle,
        slug: finalSlug,
        category: formCategory,
        author: {
          name: formAuthorName || "KingHouse Editorial",
          role: formAuthorRole || "Hospitality Asset Manager",
          avatar: "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
        },
        date: new Date().toISOString().split("T")[0],
        status: formStatus,
        views: formStatus === "Published" ? "120" : "—",
        seoScore: computedScore,
        excerpt: formExcerpt || formContent.slice(0, 140) + "...",
        content: formContent,
        heroImage: formHeroImage,
        tags: [formCategory.toLowerCase().replace(/\s+/g, "-")],
        seoKeywords: rawKeywords,
        readTime: formReadTime || 4,
      }

      setArticles([newArticle, ...articles])
      setIsModalOpen(false)

      addAlert({
        title: `Artikel Baru Diterbitkan: "${newArticle.title.slice(0, 35)}..."`,
        message: `Artikel berkategori ${newArticle.category} dengan SEO Score ${newArticle.seoScore}/100 siap mendatangkan traffic organik.`,
        category: "blog",
        actionUrl: `/dashboard/blog`,
      })

      showToast("Artikel Berhasil Dibuat!", `Status: ${newArticle.status}. Terdaftar di CMS.`, "success")
    } else if (modalMode === "edit" && editingArticleId) {
      setArticles(
        articles.map((art) => {
          if (art.id === editingArticleId) {
            return {
              ...art,
              title: formTitle,
              slug: finalSlug,
              category: formCategory,
              author: {
                ...art.author,
                name: formAuthorName,
                role: formAuthorRole,
              },
              excerpt: formExcerpt,
              content: formContent,
              heroImage: formHeroImage,
              status: formStatus,
              seoKeywords: rawKeywords,
              seoScore: computedScore,
              readTime: formReadTime,
            }
          }
          return art
        })
      )
      setIsModalOpen(false)

      addAlert({
        title: `Artikel Diperbarui: "${formTitle.slice(0, 35)}..."`,
        message: `Perubahan konten dan metadata SEO telah berhasil disimpan.`,
        category: "blog",
        actionUrl: `/dashboard/blog`,
      })

      showToast("Perubahan Disimpan!", "Artikel berhasil diperbarui.", "success")
    }
  }

  // Handle Delete
  const handleDeleteArticle = (id: string) => {
    const target = articles.find((a) => a.id === id)
    setArticles(articles.filter((a) => a.id !== id))
    setDeleteConfirmId(null)

    if (target) {
      addAlert({
        title: `Artikel Dihapus: "${target.title.slice(0, 35)}..."`,
        message: `Artikel telah dihapus dari sistem CMS.`,
        category: "blog",
      })
      showToast("Artikel Dihapus", `Artikel "${target.title.slice(0, 30)}..." telah dihapus.`, "info")
    }
  }

  // 1-Click Status Toggle
  const handleToggleStatus = (article: DashboardArticle) => {
    const nextStatus = article.status === "Published" ? "Draft" : "Published"
    setArticles(
      articles.map((a) => (a.id === article.id ? { ...a, status: nextStatus } : a))
    )

    addAlert({
      title: `Status Diubah: "${article.title.slice(0, 30)}..."`,
      message: `Status artikel diubah menjadi ${nextStatus}.`,
      category: "blog",
    })

    showToast(
      nextStatus === "Published" ? "Artikel Dipublikasikan! ✓" : "Artikel Diubah Jadi Draft",
      `Status artikel sekarang: ${nextStatus}.`,
      nextStatus === "Published" ? "success" : "info"
    )
  }

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesStatus = statusFilter === "all" || art.status === statusFilter
      const matchesCategory = categoryFilter === "all" || art.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })
  }, [articles, searchQuery, statusFilter, categoryFilter])

  // KPIs
  const publishedCount = articles.filter((a) => a.status === "Published").length
  const draftCount = articles.filter((a) => a.status === "Draft").length
  const avgSeo =
    articles.length > 0
      ? (articles.reduce((sum, a) => sum + a.seoScore, 0) / articles.length).toFixed(1)
      : "0"

  const deletingArticle = articles.find((a) => a.id === deleteConfirmId)

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E4DC] pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-semibold uppercase tracking-wider text-[#222225] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E4DC] mb-3">
            <BookOpen className="h-3.5 w-3.5 text-[#B8934C]" />
            <span>EDITORIAL & SEO CMS SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl text-[#222225] font-semibold tracking-tight">
            Editorial Blog & SEO Articles
          </h1>
          <p className="text-sm text-[#717171] mt-1 font-light leading-relaxed">
            Buat, edit, dan publikasikan artikel edukasi hospitality serta panduan Airbnb untuk mendatangkan tamu organik di Jabodetabek.
          </p>
        </div>

        <button
          type="button"
          onClick={handleOpenCreateModal}
          className="inline-flex items-center space-x-2 bg-[#222225] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-xs self-start sm:self-auto cursor-pointer"
        >
          <Plus className="h-4 w-4 text-[#B8934C]" />
          <span>Buat Artikel Baru</span>
        </button>
      </div>

      {/* Dynamic Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DC] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">
            Total Artikel
          </span>
          <p className="text-3xl font-bold text-[#222225] tracking-tight">{articles.length}</p>
          <span className="inline-block text-[10px] font-semibold text-[#717171] bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#E8E4DC]">
            {publishedCount} Terbit &bull; {draftCount} Draft
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DC] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">
            Artikel Tayang (Live)
          </span>
          <p className="text-3xl font-bold text-emerald-700 tracking-tight">{publishedCount} Live</p>
          <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            Terindeks di Google
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DC] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">
            Draft Disiapkan
          </span>
          <p className="text-3xl font-bold text-amber-700 tracking-tight">{draftCount} Draft</p>
          <span className="inline-block text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            Siap Dijadwalkan
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[#E8E4DC] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] space-y-1 hover:-translate-y-0.5 transition-transform">
          <span className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">
            Rata-Rata SEO Score
          </span>
          <p className="text-3xl font-bold text-[#222225] tracking-tight">{avgSeo} / 100</p>
          <span className="inline-block text-[10px] font-semibold text-[#B8934C] bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#E8E4DC]">
            Standar Editorial SEO
          </span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="rounded-3xl border border-[#E8E4DC] bg-white p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="h-3.5 w-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717171]" />
          <input
            type="text"
            placeholder="Cari judul artikel, topik, atau kata kunci SEO..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs focus:outline-none focus:border-[#B8934C] transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Tabs */}
          <div className="flex items-center space-x-1 bg-[#FAF8F5] p-1 rounded-2xl border border-[#E8E4DC]">
            {(["all", "Published", "Draft"] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  statusFilter === st
                    ? "bg-[#222225] text-white shadow-xs"
                    : "text-[#717171] hover:text-[#222225]"
                }`}
              >
                {st === "all" ? "Semua" : st}
              </button>
            ))}
          </div>

          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-1.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs font-medium text-[#222225] focus:outline-none focus:border-[#B8934C] cursor-pointer"
          >
            <option value="all">Semua Kategori</option>
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <Link
            href="/blog"
            target="_blank"
            className="inline-flex items-center space-x-1 text-xs font-semibold text-[#222225] hover:text-[#B8934C] px-3 py-1.5 rounded-2xl hover:bg-[#FAF8F5] transition-colors"
          >
            <span>Public Blog</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Article Table */}
      <div className="rounded-3xl border border-[#E8E4DC] bg-white overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8 border-b border-[#E8E4DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-white to-[#FAF8F5]">
          <div>
            <h3 className="text-xl text-[#222225] font-semibold">
              Daftar Artikel ({filteredArticles.length})
            </h3>
            <p className="text-xs text-[#717171] mt-0.5">
              Klik judul untuk preview, tombol edit untuk mengubah konten, atau tombol status untuk switch draft/publish.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E8E4DC] bg-[#FAFAF8] text-[10px] font-bold uppercase tracking-wider text-[#717171]">
                <th className="py-4 px-6">Judul & Kategori</th>
                <th className="py-4 px-6">Status Publikasi</th>
                <th className="py-4 px-6">SEO Score</th>
                <th className="py-4 px-6">Tanggal Rilis</th>
                <th className="py-4 px-6">Estimasi Pembaca</th>
                <th className="py-4 px-6 text-right">Aksi Manajemen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF8F5] text-xs">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-[#FAFAF8]/90 transition-colors group">
                    <td className="py-4 px-6 max-w-sm">
                      <div className="flex items-center space-x-3">
                        <div className="relative h-10 w-14 rounded-xl overflow-hidden flex-shrink-0 bg-[#FAF8F5] border border-[#E8E4DC]">
                          <Image src={article.heroImage || IMAGE_PRESETS[0].url} alt={article.title} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-[#222225] line-clamp-1 group-hover:text-[#B8934C] transition-colors">
                            {article.title}
                          </p>
                          <div className="flex items-center space-x-2 text-[11px] text-[#717171] mt-0.5">
                            <span className="font-medium text-[#B8934C]">{article.category}</span>
                            <span>&bull;</span>
                            <span className="font-mono text-[10px]">/blog/{article.slug}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <button
                        type="button"
                        onClick={() => handleToggleStatus(article)}
                        title="Klik untuk mengubah status Publikasi"
                        className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                          article.status === "Published"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100"
                            : "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                        }`}
                      >
                        {article.status === "Published" ? (
                          <>
                            <CheckCircle className="h-3 w-3 text-emerald-600" />
                            <span>Published</span>
                          </>
                        ) : (
                          <>
                            <Clock className="h-3 w-3 text-amber-600" />
                            <span>Draft</span>
                          </>
                        )}
                      </button>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1.5 font-mono font-semibold text-[#222225]">
                        <Sparkles className="h-3.5 w-3.5 text-[#B8934C]" />
                        <span>{article.seoScore}/100</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-[#717171] font-mono">{article.date}</td>

                    <td className="py-4 px-6 font-semibold text-[#222225]">
                      {article.views} reads
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center space-x-1.5">
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(article)}
                          className="p-2 rounded-xl text-[#717171] hover:text-[#222225] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                          title="Edit Artikel"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>

                        <Link
                          href={`/blog/${article.slug}`}
                          target="_blank"
                          className="p-2 rounded-xl text-[#717171] hover:text-[#222225] hover:bg-[#FAF8F5] transition-colors"
                          title="Lihat Pratinjau Public"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={() => setDeleteConfirmId(article.id)}
                          className="p-2 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Hapus Artikel"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-[#717171] space-y-2">
                    <p className="font-semibold text-[#222225]">Tidak ada artikel yang cocok dengan filter.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("")
                        setStatusFilter("all")
                        setCategoryFilter("all")
                      }}
                      className="text-[#B8934C] hover:underline font-semibold cursor-pointer"
                    >
                      Reset Filter Pencarian
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* PORTAL: CREATE & EDIT MODAL (Full Viewport Coverage, Zero Clipping) */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false)
            }}
          >
            <div className="bg-white rounded-3xl max-w-3xl w-full flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-[#E8E4DC] max-h-[90vh] overflow-hidden">
              {/* Modal Header (Fixed) */}
              <div className="p-6 pb-4 border-b border-[#E8E4DC] flex items-center justify-between flex-shrink-0 bg-white">
                <div>
                  <h3 className="text-2xl text-[#222225] font-semibold">
                    {modalMode === "create" ? "Buat Artikel Baru" : "Edit Konten Artikel"}
                  </h3>
                  <p className="text-xs text-[#717171] mt-0.5">
                    Isi formulir sederhana berikut. Sistem otomatis menghitung SEO Score dan mengoptimalkan artikel untuk Google & Airbnb.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="h-9 w-9 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#717171] hover:text-[#222225] transition-colors cursor-pointer flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center space-x-2 px-6 pt-3 border-b border-[#FAF8F5] bg-white flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("form")}
                  className={`px-4 py-2 border-b-2 text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "form"
                      ? "border-[#222225] text-[#222225]"
                      : "border-transparent text-[#717171] hover:text-[#222225]"
                  }`}
                >
                  Form Editor
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`px-4 py-2 border-b-2 text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === "preview"
                      ? "border-[#222225] text-[#222225]"
                      : "border-transparent text-[#717171] hover:text-[#222225]"
                  }`}
                >
                  Pratinjau Live Card
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-white">
                {activeTab === "form" ? (
                  <form id="article-form" onSubmit={handleSaveArticle} className="space-y-5 text-xs">
                    {/* Title & Slug */}
                    <div className="space-y-3">
                      <div>
                        <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                          Judul Artikel (Headline) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Cara Meningkatkan Okupansi Villa di Jagakarsa: Panduan Lengkap 2026"
                          value={formTitle}
                          onChange={(e) => {
                            setFormTitle(e.target.value)
                            if (modalMode === "create") {
                              setFormSlug(slugify(e.target.value))
                            }
                          }}
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-semibold text-[#222225] focus:outline-none focus:border-[#B8934C] text-sm shadow-xs"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                            URL Slug (Otomatis dibuat)
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="cara-meningkatkan-okupansi-villa"
                            value={formSlug}
                            onChange={(e) => setFormSlug(slugify(e.target.value))}
                            className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-mono text-[11px] text-[#555] focus:outline-none focus:border-[#B8934C]"
                          />
                        </div>

                        <div>
                          <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                            Kategori Artikel
                          </label>
                          <select
                            value={formCategory}
                            onChange={(e) => setFormCategory(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-medium text-[#222225] focus:outline-none focus:border-[#B8934C]"
                          >
                            {CATEGORY_OPTIONS.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="font-semibold text-[#555] uppercase tracking-wider">
                          Ringkasan Singkat (Lead / Excerpt) *
                        </label>
                        <span className="text-[10px] text-[#717171] font-mono">{formExcerpt.length} karakter</span>
                      </div>
                      <textarea
                        rows={2}
                        required
                        placeholder="Tulis 1-2 kalimat ringkasan yang menarik minat pembaca dan muncul di Google snippet..."
                        value={formExcerpt}
                        onChange={(e) => setFormExcerpt(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-medium text-[#222225] focus:outline-none focus:border-[#B8934C] leading-relaxed resize-none"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                        Isi Konten Artikel * (Gunakan ## untuk subjudul, - untuk poin)
                      </label>
                      <textarea
                        rows={6}
                        required
                        placeholder="Tulis isi artikel secara lengkap di sini..."
                        value={formContent}
                        onChange={(e) => setFormContent(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-sans text-xs text-[#222225] focus:outline-none focus:border-[#B8934C] leading-relaxed resize-y"
                      />
                    </div>

                    {/* Image Selection Presets */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-[#555] uppercase tracking-wider">
                          Pilih Gambar Utama (Cover Photo)
                        </label>
                        <span className="text-[10px] text-[#B8934C] font-medium">Klik salah satu foto villa di bawah:</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {IMAGE_PRESETS.map((preset) => (
                          <button
                            key={preset.url}
                            type="button"
                            onClick={() => setFormHeroImage(preset.url)}
                            className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer shadow-xs ${
                              formHeroImage === preset.url
                                ? "border-[#222225] ring-2 ring-[#B8934C] scale-102"
                                : "border-[#E8E4DC] opacity-75 hover:opacity-100 hover:scale-101"
                            }`}
                          >
                            <Image src={preset.url} alt={preset.name} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-2 flex flex-col justify-end">
                              <span className="text-[9px] text-white font-semibold line-clamp-1">
                                {preset.name.split(" ")[0]}
                              </span>
                            </div>
                            {formHeroImage === preset.url && (
                              <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-[#222225] text-[#B8934C] flex items-center justify-center shadow-md">
                                <Check className="h-3 w-3" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                      {/* Custom URL Input */}
                      <div className="pt-1">
                        <label className="block text-[11px] text-[#717171] mb-1">
                          Atau masukkan URL gambar kustom:
                        </label>
                        <input
                          type="text"
                          placeholder="https://images.unsplash.com/..."
                          value={formHeroImage}
                          onChange={(e) => setFormHeroImage(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs font-mono text-[#555] focus:outline-none focus:border-[#B8934C]"
                        />
                      </div>
                    </div>

                    {/* SEO Keywords & Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      <div className="sm:col-span-2">
                        <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                          Kata Kunci SEO (Pisahkan dengan koma)
                        </label>
                        <input
                          type="text"
                          placeholder="sewa villa jakarta selatan, airbnb jagakarsa, tips tuan rumah"
                          value={formKeywords}
                          onChange={(e) => setFormKeywords(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-medium text-[#222225] focus:outline-none focus:border-[#B8934C]"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-[#555] uppercase tracking-wider mb-1.5">
                          Status Publikasi
                        </label>
                        <select
                          value={formStatus}
                          onChange={(e) => setFormStatus(e.target.value as "Published" | "Draft")}
                          className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] font-semibold text-[#222225] focus:outline-none focus:border-[#B8934C]"
                        >
                          <option value="Published">✓ Published (Tayang)</option>
                          <option value="Draft">⏱ Draft (Simpan Dulu)</option>
                        </select>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Live Preview Card */
                  <div className="space-y-4 py-2 animate-sana-fade-in">
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] text-xs text-[#555]">
                      <p className="font-semibold text-[#222225] mb-1">Pratinjau Tampilan Publik</p>
                      <p>Inilah tampilan kartu artikel Anda di halaman /blog publik.</p>
                    </div>

                    <div className="max-w-md mx-auto rounded-3xl border border-[#E8E4DC] bg-white overflow-hidden shadow-sm">
                      <div className="relative aspect-[16/9]">
                        <Image src={formHeroImage || IMAGE_PRESETS[0].url} alt={formTitle || "Preview"} fill className="object-cover" />
                        <span className="absolute top-3 left-3 bg-[#222225]/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-xs uppercase tracking-wider">
                          {formCategory}
                        </span>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center space-x-2 text-[10px] text-[#717171]">
                          <span>{formAuthorName}</span>
                          <span>&bull;</span>
                          <span>{formReadTime} min read</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-[#222225] leading-snug">
                          {formTitle || "Judul Artikel Anda Muncul di Sini"}
                        </h4>
                        <p className="text-xs text-[#717171] line-clamp-2 leading-relaxed">
                          {formExcerpt || "Ringkasan artikel Anda akan muncul di sini sebagai cuplikan pengantar bagi calon tamu."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer (Sticky / Fixed at bottom of modal) */}
              <div className="p-4 sm:p-6 border-t border-[#E8E4DC] bg-[#FAFAF8] flex items-center justify-end space-x-3 flex-shrink-0 rounded-b-3xl">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-2xl border border-[#E8E4DC] text-[#717171] hover:text-[#222225] hover:bg-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  form="article-form"
                  onClick={(e) => {
                    if (activeTab === "preview") {
                      handleSaveArticle(e)
                    }
                  }}
                  className="px-6 py-2.5 rounded-2xl bg-[#222225] text-white text-xs font-semibold hover:bg-[#2B2A30] transition-all shadow-md cursor-pointer flex items-center space-x-2"
                >
                  <Check className="h-4 w-4 text-[#B8934C]" />
                  <span>{modalMode === "create" ? "Terbitkan Artikel" : "Simpan Perubahan"}</span>
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* PORTAL: DELETE CONFIRMATION MODAL (Full Viewport Coverage) */}
      {mounted &&
        deleteConfirmId &&
        deletingArticle &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setDeleteConfirmId(null)
            }}
          >
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-rose-100 space-y-5">
              <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-xs">
                <Trash2 className="h-7 w-7" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl text-[#222225] font-semibold">Hapus Artikel Ini?</h3>
                <p className="text-xs text-[#717171] leading-relaxed">
                  Anda yakin ingin menghapus artikel <strong className="text-[#222225]">&quot;{deletingArticle.title}&quot;</strong>? Tindakan ini akan menghapus artikel dari daftar CMS.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center space-x-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 py-2.5 rounded-2xl border border-[#E8E4DC] text-[#717171] hover:text-[#222225] hover:bg-[#FAF8F5] text-xs font-semibold transition-all cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteArticle(deletingArticle.id)}
                  className="flex-1 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
                >
                  Hapus Permanen
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}
