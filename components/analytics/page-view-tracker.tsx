"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { trackPageView } from "@/lib/analytics"

function PageViewTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!pathname) return
    const queryString = searchParams?.toString()
    const fullUrl = queryString ? `${pathname}?${queryString}` : pathname
    
    // Dispatch page view to GA4 & GTM dataLayer
    trackPageView(fullUrl, document.title)
  }, [pathname, searchParams])

  return null
}

/**
 * PageViewTracker Component
 * Automatically tracks page transitions across all App Router routes.
 * Wrapped in Suspense to satisfy Next.js useSearchParams requirements.
 */
export function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  )
}
