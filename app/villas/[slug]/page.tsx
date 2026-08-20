import { notFound, redirect } from "next/navigation"
import { CURATED_VILLAS } from "@/lib/data"
import VillaDetailPage from "@/app/locations/[area]/villas/[slug]/page"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return CURATED_VILLAS.map((villa) => ({
    slug: villa.slug,
  }))
}

export default async function VillaCanonicalPage({ params }: PageProps) {
  const resolvedParams = await params
  const villa = CURATED_VILLAS.find((v) => v.slug === resolvedParams.slug)

  if (!villa) {
    notFound()
  }

  // Delegate rendering with area prop for full consistency
  return (
    <VillaDetailPage
      params={Promise.resolve({
        area: villa.areaSlug,
        slug: villa.slug,
      })}
    />
  )
}
