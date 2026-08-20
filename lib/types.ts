export interface VillaAmenity {
  name: string
  category: "essentials" | "luxury" | "outdoor" | "services"
  icon: string
}

export interface NearbySpot {
  name: string
  category: "beach" | "cafe" | "airport" | "landmark" | "dining"
  distance: string
  travelTime: string
}

export interface Villa {
  id: string
  name: string
  tagline: string
  slug: string
  area: string
  areaSlug: string
  location: string
  airbnbUrl: string
  superhost: boolean
  guestFavorite: boolean
  rating: number
  reviewsCount: number
  price: {
    usd: number
    idr: number
    cleaningFeeUsd: number
    serviceFeePercent: number
  }
  capacity: {
    guests: number
    bedrooms: number
    beds: number
    bathrooms: number
  }
  heroImage: string
  gallery: {
    url: string
    caption: string
    category: "exterior" | "living" | "bedroom" | "pool" | "bathroom" | "dining"
  }[]
  editorialDescription: {
    lead: string
    architecturalHighlights: string
    theSpace: string
  }
  amenities: VillaAmenity[]
  nearbySpots: NearbySpot[]
  featured: boolean
  architecturalStyle: string
}

export interface PartnerLogo {
  name: string
  logoText: string
  badgeText?: string
}

export interface Testimonial {
  id: string
  type: "guest" | "owner"
  author: string
  roleOrLocation: string
  avatar: string
  rating: number
  quote: string
  propertyName?: string
  metricLift?: string
}

export interface ManagementTier {
  id: string
  name: string
  subtitle: string
  feePercentage: number
  feeNote: string
  badge?: string
  description: string
  popular?: boolean
  features: {
    title: string
    included: boolean
    highlight?: boolean
  }[]
  idealFor: string
}

export interface CaseStudy {
  id: string
  villaName: string
  location: string
  image: string
  period: string
  beforeMetrics: {
    occupancyRate: number
    monthlyRevenueUsd: number
    guestRating: number
  }
  afterMetrics: {
    occupancyRate: number
    monthlyRevenueUsd: number
    guestRating: number
    ebitdaMargin: number
  }
  summary: string
  quote: {
    text: string
    author: string
  }
}
