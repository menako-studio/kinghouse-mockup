import { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/constants"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.baseUrl

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/*",
          "/api/*",
          "/login",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/dashboard",
          "/dashboard/*",
          "/api/*",
          "/login",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
