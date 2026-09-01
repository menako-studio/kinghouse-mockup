import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Concierge & Property Advisory | KingHouse",
  description:
    "Connect with KingHouse hospitality advisors for villa bookings, private event venue hire, or complimentary property revenue management audits.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Concierge & Property Advisory | KingHouse",
    description:
      "Connect with KingHouse hospitality advisors for villa bookings, private event venue hire, or complimentary property revenue management audits.",
    url: "/contact",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
