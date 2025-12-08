import { Villa } from './types'

export const MOCK_VILLAS: Villa[] = [
  {
    id: "1",
    name: "Villa Emerald",
    slug: "villa-emerald-bsd",
    description: {
      en: "Luxurious modern villa with private pool in the heart of BSD City. Perfect for family gatherings and special occasions.",
      id: "Villa modern mewah dengan kolam renang pribadi di jantung BSD City. Sempurna untuk acara keluarga dan acara spesial."
    },
    location: "BSD City",
    price: {
      daily: 3500000,
      weekly: 21000000,
      monthly: 75000000
    },
    capacity: {
      bedrooms: 5,
      bathrooms: 4,
      guests: 12
    },
    amenities: ["Private Pool", "Garden", "BBQ Area", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Security 24/7", "Smart TV"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    featured: true,
    available: true,
    rating: 4.8,
    reviews: 24,
    coordinates: {
      lat: -6.3019,
      lng: 106.6510
    }
  },
  {
    id: "2",
    name: "Villa Sapphire",
    slug: "villa-sapphire-bogor",
    description: {
      en: "Serene hillside villa with stunning mountain views in Puncak, Bogor. Escape the city and reconnect with nature.",
      id: "Villa di bukit yang tenang dengan pemandangan gunung menakjubkan di Puncak, Bogor. Lepas dari kota dan terhubung kembali dengan alam."
    },
    location: "Bogor",
    price: {
      daily: 2800000,
      weekly: 16000000,
      monthly: 60000000
    },
    capacity: {
      bedrooms: 4,
      bathrooms: 3,
      guests: 10
    },
    amenities: ["Private Pool", "Garden", "BBQ Area", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Home Theater"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f"
    ],
    featured: true,
    available: true,
    rating: 4.9,
    reviews: 31,
    coordinates: {
      lat: -6.7024,
      lng: 106.9447
    }
  },
  {
    id: "3",
    name: "Villa Ruby",
    slug: "villa-ruby-tangsel",
    description: {
      en: "Contemporary villa with elegant design in South Tangerang. Ideal for business retreats and family staycations.",
      id: "Villa kontemporer dengan desain elegan di Tangerang Selatan. Ideal untuk retreat bisnis dan staycation keluarga."
    },
    location: "Tangerang",
    price: {
      daily: 3000000,
      weekly: 18000000,
      monthly: 65000000
    },
    capacity: {
      bedrooms: 4,
      bathrooms: 4,
      guests: 10
    },
    amenities: ["Private Pool", "Garden", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Washing Machine", "Security 24/7", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    ],
    featured: false,
    available: true,
    rating: 4.7,
    reviews: 18,
    coordinates: {
      lat: -6.2884,
      lng: 106.7185
    }
  },
  {
    id: "4",
    name: "Villa Diamond",
    slug: "villa-diamond-jaksel",
    description: {
      en: "Premium villa in prestigious Jakarta Selatan neighborhood. Modern amenities with traditional Indonesian charm.",
      id: "Villa premium di lingkungan bergengsi Jakarta Selatan. Fasilitas modern dengan pesona tradisional Indonesia."
    },
    location: "Jakarta Selatan",
    price: {
      daily: 4500000,
      weekly: 27000000,
      monthly: 95000000
    },
    capacity: {
      bedrooms: 6,
      bathrooms: 5,
      guests: 15
    },
    amenities: ["Private Pool", "Garden", "BBQ Area", "Parking", "WiFi", "Air Conditioning", "Kitchen", "Washing Machine", "Security 24/7", "Smart TV", "Home Theater", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea"
    ],
    featured: true,
    available: true,
    rating: 4.9,
    reviews: 42,
    coordinates: {
      lat: -6.2615,
      lng: 106.8106
    }
  }
]
