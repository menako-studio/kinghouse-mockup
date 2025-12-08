export const SITE_CONFIG = {
  name: "KingHouse",
  domain: "kinghouse.id",
  description: {
    en: "Professional villa management services in Jabodetabek. Optimize your property revenue with our comprehensive management solutions.",
    id: "Layanan manajemen villa profesional di Jabodetabek. Optimalkan pendapatan properti Anda dengan solusi manajemen komprehensif kami."
  },
  contact: {
    email: "hello@kinghouse.id",
    phone: "+62 21 xxxx xxxx",
    whatsapp: "+62 812 xxxx xxxx",
    address: "Jakarta, Indonesia"
  },
  social: {
    facebook: "https://facebook.com/kinghouse.id",
    instagram: "https://instagram.com/kinghouse.id",
    twitter: "https://twitter.com/kinghouse_id",
    linkedin: "https://linkedin.com/company/kinghouse"
  }
}

export const LOCATIONS = [
  "Jakarta Selatan",
  "Jakarta Barat",
  "Tangerang",
  "Bogor",
  "Depok",
  "Bekasi",
  "BSD City",
  "Serpong"
] as const

export const AMENITIES = [
  "Private Pool",
  "Garden",
  "BBQ Area",
  "Parking",
  "WiFi",
  "Air Conditioning",
  "Kitchen",
  "Washing Machine",
  "Security 24/7",
  "Smart TV",
  "Home Theater",
  "Gym"
] as const

export const SERVICES = {
  owners: [
    {
      title: { en: "Property Marketing", id: "Pemasaran Properti" },
      description: { 
        en: "Multi-channel marketing strategy to maximize your property visibility and bookings",
        id: "Strategi pemasaran multi-channel untuk memaksimalkan visibilitas dan pemesanan properti Anda"
      },
      icon: "megaphone"
    },
    {
      title: { en: "Revenue Management", id: "Manajemen Pendapatan" },
      description: { 
        en: "Dynamic pricing and yield management to optimize your rental income",
        id: "Penetapan harga dinamis dan manajemen hasil untuk mengoptimalkan pendapatan sewa Anda"
      },
      icon: "trending-up"
    },
    {
      title: { en: "Daily Operations", id: "Operasional Harian" },
      description: { 
        en: "Complete property maintenance and operational management services",
        id: "Layanan pemeliharaan properti dan manajemen operasional lengkap"
      },
      icon: "settings"
    },
    {
      title: { en: "Guest Services", id: "Layanan Tamu" },
      description: { 
        en: "24/7 guest support and concierge services for exceptional stays",
        id: "Dukungan tamu 24/7 dan layanan concierge untuk pengalaman menginap yang luar biasa"
      },
      icon: "users"
    }
  ],
  guests: [
    {
      title: { en: "Verified Properties", id: "Properti Terverifikasi" },
      description: { 
        en: "All properties are personally inspected and verified for quality",
        id: "Semua properti telah diinspeksi dan diverifikasi secara personal untuk kualitas terjamin"
      },
      icon: "shield-check"
    },
    {
      title: { en: "Easy Booking", id: "Pemesanan Mudah" },
      description: { 
        en: "Simple and secure booking process with instant confirmation",
        id: "Proses pemesanan yang mudah dan aman dengan konfirmasi instan"
      },
      icon: "calendar-check"
    },
    {
      title: { en: "Best Price Guarantee", id: "Jaminan Harga Terbaik" },
      description: { 
        en: "Competitive pricing with no hidden fees",
        id: "Harga kompetitif tanpa biaya tersembunyi"
      },
      icon: "badge-dollar-sign"
    },
    {
      title: { en: "24/7 Support", id: "Dukungan 24/7" },
      description: { 
        en: "Round-the-clock customer support for your convenience",
        id: "Dukungan pelanggan sepanjang waktu untuk kenyamanan Anda"
      },
      icon: "headphones"
    }
  ]
}
