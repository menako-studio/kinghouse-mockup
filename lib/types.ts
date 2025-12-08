export interface Villa {
  id: string
  name: string
  slug: string
  description: {
    en: string
    id: string
  }
  location: string
  price: {
    daily: number
    weekly: number
    monthly: number
  }
  capacity: {
    bedrooms: number
    bathrooms: number
    guests: number
  }
  amenities: string[]
  images: string[]
  featured: boolean
  available: boolean
  rating: number
  reviews: number
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Booking {
  id: string
  villaId: string
  userId: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled" | "completed"
  createdAt: Date
}

export interface Review {
  id: string
  villaId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: "guest" | "owner" | "admin"
  avatar?: string
}

export interface SearchFilters {
  location?: string
  checkIn?: Date
  checkOut?: Date
  guests?: number
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  amenities?: string[]
}

export type Locale = "en" | "id"
