import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Villa } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: "USD" | "IDR" = "USD"): string {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function generateVacationRentalSchema(villa: Villa, baseUrl = "https://kinghousevillas.com") {
  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "name": villa.name,
    "description": villa.editorialDescription.lead,
    "image": villa.gallery.map((g) => g.url),
    "url": `${baseUrl}/locations/${villa.areaSlug}/villas/${villa.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": villa.area,
      "addressRegion": "Bali",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.65,
      "longitude": 115.13,
    },
    "numberOfRooms": villa.capacity.bedrooms,
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": villa.capacity.guests,
      "unitText": "person",
    },
    "amenityFeature": villa.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      "name": a.name,
      "value": true,
    })),
    "offers": {
      "@type": "Offer",
      "price": villa.price.usd,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": villa.airbnbUrl,
      "validFrom": "2026-01-01",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": villa.rating,
      "reviewCount": villa.reviewsCount,
      "bestRating": "5.0",
      "worstRating": "1.0",
    },
  }
}
