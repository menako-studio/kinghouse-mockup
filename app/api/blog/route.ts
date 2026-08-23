import { NextRequest, NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { BLOG_POSTS } from "@/lib/data"
import { BlogPost } from "@/lib/types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRowToBlogPost(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    heroImage: row.cover_image || "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    author: {
      name: row.author_name || "KingHouse Hospitality",
      avatar: row.author_avatar || "/images/avatar-default.webp",
      role: "Property Management Specialist",
    },
    publishedAt: row.published_at || row.created_at,
    readTime: typeof row.reading_time === "number" ? row.reading_time : 4,
    tags: Array.isArray(row.tags) ? row.tags : [],
    seoKeywords: Array.isArray(row.tags) ? row.tags : [],
    featured: Boolean(row.seo_score && row.seo_score >= 90),
  }
}


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const slug = searchParams.get("slug")

  const supabase = getSupabaseServerClient()

  if (supabase) {
    try {
      let query = supabase.from("blog_posts").select("*").order("published_at", { ascending: false })

      if (category && category !== "All") {
        query = query.eq("category", category)
      }
      if (slug) {
        query = query.eq("slug", slug)
      }

      const { data, error } = await query

      if (!error && data && data.length > 0) {
        const posts = data.map(mapRowToBlogPost)
        return NextResponse.json({
          success: true,
          source: "supabase",
          total: posts.length,
          posts: slug ? posts[0] : posts,
        })
      }
    } catch (err) {
      console.warn("Supabase blog query error, using local data:", err)
    }
  }

  let posts = [...BLOG_POSTS]
  if (category && category !== "All") {
    posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
  }
  if (slug) {
    const single = posts.find((p) => p.slug === slug)
    return NextResponse.json({
      success: true,
      source: "local-fallback",
      post: single || null,
    })
  }

  return NextResponse.json({
    success: true,
    source: "local-fallback",
    total: posts.length,
    posts,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const { title, slug, excerpt, content, category, coverImage, authorName, tags, seoScore } = body

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 }
      )
    }

    const postId = `post-${Date.now()}`
    const postRecord = {
      id: postId,
      slug,
      title,
      excerpt: excerpt || title,
      content,
      category: category || "Owner Tips",
      cover_image: coverImage || "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
      author_name: authorName || "KingHouse Hospitality",
      published_at: new Date().toISOString(),
      status: "Published",
      tags: tags || [],
      seo_score: seoScore || 85,
    }

    const supabase = getSupabaseServerClient()

    if (supabase) {
      try {
        const { error } = await supabase.from("blog_posts").upsert(postRecord, { onConflict: "slug" })
        if (!error) {
          return NextResponse.json({
            success: true,
            source: "supabase",
            message: "Artikel berhasil disimpan ke Supabase database.",
            post: postRecord,
          }, { status: 201 })
        }
      } catch (err) {
        console.warn("Supabase blog insert error:", err)
      }
    }

    return NextResponse.json({
      success: true,
      source: "local-fallback",
      message: "Artikel berhasil dibuat.",
      post: postRecord,
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Gagal menyimpan artikel blog." },
      { status: 500 }
    )
  }
}
