import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Curated Luxury Villas & Urban Suites | KingHouse",
  description:
    "Browse curated standalone villas, family estates with private pools, and executive apartments across Jabodetabek managed by KingHouse.",
  alternates: {
    canonical: "/villas",
  },
  openGraph: {
    title: "Curated Luxury Villas & Urban Suites | KingHouse",
    description:
      "Browse curated standalone villas, family estates with private pools, and executive apartments across Jabodetabek managed by KingHouse.",
    url: "/villas",
    type: "website",
  },
}

export default function VillasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
