import { GuestCompendium, UpsellService } from "./types"

export const UPSELL_SERVICES: UpsellService[] = [
  {
    id: "late-checkout-2pm",
    title: "Late Check-Out (Until 14:00 WIB)",
    category: "timing",
    description: "Nikmati waktu istirahat lebih lama. Check-out diperpanjang hingga pukul 14:00 (tergantung ketersediaan jadwal pembersihan).",
    priceIdr: 150000,
    unit: "per booking",
    icon: "Clock",
    popular: true,
  },
  {
    id: "late-checkout-4pm",
    title: "Late Check-Out Super Extended (Until 16:00 WIB)",
    category: "timing",
    description: "Santai tanpa terburu-buru sampai sore hari pukul 16:00 WIB.",
    priceIdr: 250000,
    unit: "per booking",
    icon: "Sunset",
  },
  {
    id: "bbq-grill-set",
    title: "BBQ Charcoal Grill Set + Arang & Torch",
    category: "experience",
    description: "Perangkat panggangan BBQ lengkap dengan arang briket kelapa 3kg, fire starter, capitan stainless, dan meja outdoor.",
    priceIdr: 200000,
    unit: "per malam",
    icon: "Flame",
    popular: true,
    applicableSlugs: ["versatile-house-jagakarsa"],
  },
  {
    id: "extra-bed-hotel",
    title: "Extra Bed Single + Hotel Linen & Bantal",
    category: "comfort",
    description: "Kasur busa rebonded hotel standard (90x200cm) lengkap dengan sprei katun 300TC, selimut duvet tebal, dan 2 bantal empuk.",
    priceIdr: 150000,
    unit: "per malam",
    icon: "BedDouble",
  },
  {
    id: "mid-stay-refresh",
    title: "Mid-Stay Housekeeping & Linen Replacement",
    category: "housekeeping",
    description: "Pembersihan total lantai, penggantian handuk baru, perapihan kasur, pembersihan kamar mandi, dan buang sampah.",
    priceIdr: 175000,
    unit: "per kunjungan",
    icon: "Sparkles",
  },
  {
    id: "floating-breakfast-tray",
    title: "Floating Breakfast Basket Setup",
    category: "experience",
    description: "Keranjang anyam floating tray estetik tahan air untuk foto sarapan cantik di kolam renang privat.",
    priceIdr: 100000,
    unit: "per sewa",
    icon: "Coffee",
    applicableSlugs: ["versatile-house-jagakarsa"],
  },
]

export const GUEST_COMPENDIUMS: Record<string, GuestCompendium> = {
  "versatile-house-jagakarsa": {
    propertySlug: "versatile-house-jagakarsa",
    propertyName: "Versatile House With Beautiful Garden Beyond",
    area: "Jagakarsa, Jakarta Selatan",
    heroImage: "/properties/versatile-house/VersatileHouse_Exterior_PoolAndGarden.webp",
    whatsappConciergePhone: "6282123933218",
    wifi: {
      networkName: "VersatileHouse_Guest_5G",
      password: "KingHouseGarden2026",
      speed: "100 Mbps Fiber Biznet",
      notes: "Router utama berada di ruang keluarga dekat TV. Hubungkan ke frekuensi 5GHz untuk streaming lancar.",
    },
    access: {
      checkInTime: "15:00 WIB",
      checkOutTime: "12:00 WIB",
      smartLockCodeOrPin: "Pin diberikan 2 jam sebelum kedatangan oleh host via WhatsApp",
      accessInstructions: [
        "Pintu gerbang utama dilengkapi smart lock digital keypad.",
        "Masukkan 6-digit PIN yang telah dikirimkan via WA lalu akhiri dengan tanda '#'.",
        "Kunci cadangan dan remote AC master tersedia di keyholder dinding ruang tamu.",
      ],
      parkingInfo: "Garasi & carport dalam muat hingga 4 mobil keluarga. Parkir aman dengan pagar tertutup.",
    },
    houseRules: [
      "Dilarang merokok di dalam kamar / ruang indoor (area merokok tersedia di gazebo taman).",
      "Waktu tenang (Quiet hours) berlaku mulai pukul 22:00 WIB demi kenyamanan lingkungan sekitar.",
      "Anak-anak yang berenang di kolam renang privat wajib dalam pengawasan orang dewasa.",
      "Matikan AC dan lampu ruang tamu saat meninggalkan villa.",
    ],
    appliances: [
      {
        title: "Smart TV & Netflix / Disney+ Hotstar",
        icon: "Tv",
        instructions: [
          "Nyalakan TV dengan remote hitam Samsung.",
          "Profil 'Guest KingHouse' sudah login otomatis untuk Netflix & YouTube Premium 4K.",
        ],
      },
      {
        title: "Water Heater & Kamar Mandi Utama",
        icon: "Droplet",
        instructions: [
          "Saklar water heater Ariston menyala otomatis 24 jam.",
          "Putar tuas shower ke arah kiri (merah) untuk air hangat. Tunggu 10 detik.",
        ],
      },
      {
        title: "Dapur & Kompor Tanam Gas",
        icon: "Flame",
        instructions: [
          "Tekan kenop kompor ke dalam, putar ke kiri berlawanan arah jarum jam sambil menahan pemantik elektrik 3 detik.",
          "Air mineral galon dispenser Aqua sudah terpasang (panas & dingin).",
        ],
      },
    ],
    localGuide: [
      {
        name: "Kopi Nako Jagakarsa",
        category: "Food & Cafe",
        distance: "1.2 km (5 menit)",
        highlight: "Cafe kaca estetik dengan live music & menu kopi susu aren terbaik.",
        mapsUrl: "https://maps.google.com/?q=Kopi+Nako+Jagakarsa",
      },
      {
        name: "Bebek Kaleyo Lenteng Agung",
        category: "Food & Cafe",
        distance: "2.5 km (8 menit)",
        highlight: "Kuliner bebek goreng kremes & sambal rica legendaris keluarga.",
        mapsUrl: "https://maps.google.com/?q=Bebek+Kaleyo+Lenteng+Agung",
      },
      {
        name: "Indomaret Fresh Moh. Kahfi 1",
        category: "Convenience & Grocery",
        distance: "400 meter (Jalan kaki 3 menit)",
        highlight: "Buka 24 jam, buah segar, ATM BCA/Mandiri, dan kebutuhan sehari-hari.",
        mapsUrl: "https://maps.google.com/?q=Indomaret+Fresh+Moh+Kahfi+1",
      },
      {
        name: "RSUD Jagakarsa & Apotek Kimia Farma",
        category: "Emergency & Pharmacy",
        distance: "1.8 km (6 menit)",
        highlight: "IGD 24 jam dan apotek resep obat lengkap.",
        mapsUrl: "https://maps.google.com/?q=RSUD+Jagakarsa",
      },
    ],
  },

  "sky-house-tangerang": {
    propertySlug: "sky-house-tangerang",
    propertyName: "Sky House • Hotel-Style Bed + IKEA 5min",
    area: "Pinang, Kota Tangerang (Alam Sutera)",
    heroImage: "/properties/sky-house/SkyHouse_LivingArea_BedView.webp",
    whatsappConciergePhone: "6282123933218",
    wifi: {
      networkName: "SkyHouse_HighSpeed",
      password: "SkyAlamSutera2026",
      speed: "50 Mbps Fiber",
      notes: "Koneksi stabil untuk WFH dan Zoom meeting.",
    },
    access: {
      checkInTime: "15:00 WIB",
      checkOutTime: "12:00 WIB",
      smartLockCodeOrPin: "Akses kartu tap lift & Smart Lock Door handle",
      accessInstructions: [
        "Ambil kartu akses di security lobby Ground Floor.",
        "Tap kartu di lift menuju lantai unit.",
        "Buka pintu unit dengan memasukkan PIN 6 digit di handle pintu digital.",
      ],
      parkingInfo: "Parkir basement apartemen tarif normal per jam atau hubungi pengelola untuk voucher harian.",
    },
    houseRules: [
      "No smoking di dalam unit apartemen (tersedia balkon pribadi).",
      "Kapasitas maksimal 2 orang dewasa.",
      "Harap menjaga ketenangan setelah pukul 22:00 WIB.",
    ],
    appliances: [
      {
        title: "AC Inverter Daikin",
        icon: "Wind",
        instructions: [
          "Gunakan remote AC dinding. Suhu ideal hemat energi 22-24°C.",
        ],
      },
      {
        title: "Microwave & Kulkas Mini",
        icon: "Utensils",
        instructions: [
          "Microwave siap pakai untuk memanaskan makanan cepat saji atau takeaway.",
        ],
      },
    ],
    localGuide: [
      {
        name: "IKEA Alam Sutera & Flavor Bliss",
        category: "Food & Cafe",
        distance: "1.5 km (5 menit)",
        highlight: "Swedish meatballs, bakery, dan pusat kuliner hits Tangerang.",
        mapsUrl: "https://maps.google.com/?q=IKEA+Alam+Sutera",
      },
      {
        name: "Mall @ Alam Sutera",
        category: "Attraction",
        distance: "2.0 km (7 menit)",
        highlight: "Bioskop XXI, supermarket Aeon, dan puluhan restoran.",
        mapsUrl: "https://maps.google.com/?q=Mall+Alam+Sutera",
      },
      {
        name: "Apotek Century & FamilyMart Lobby",
        category: "Convenience & Grocery",
        distance: "Lantai GF Apartemen",
        highlight: "Buka 24 jam untuk kopi fresh dan obat-obatan ringan.",
        mapsUrl: "https://maps.google.com/?q=Sky+House+Alam+Sutera",
      },
    ],
  },

  "bright-airy-apartment-palmerah": {
    propertySlug: "bright-airy-apartment-palmerah",
    propertyName: "Bright & Airy Apartment",
    area: "Palmerah, Jakarta Barat",
    heroImage: "/properties/bright-airy-palmerah/BrightAiry_Living_Sofa_TV.jpg",
    whatsappConciergePhone: "6282123933218",
    wifi: {
      networkName: "BrightPalmerah_Fast",
      password: "PalmerahStay2026",
      speed: "50 Mbps",
      notes: "Dedicated fiber router di dekat meja kerja.",
    },
    access: {
      checkInTime: "15:00 WIB",
      checkOutTime: "12:00 WIB",
      smartLockCodeOrPin: "Keybox di samping pintu unit",
      accessInstructions: [
        "Keybox terletak di sebelah kanan bel pintu.",
        "Masukkan kode PIN 4 digit untuk membuka kotak kunci.",
      ],
      parkingInfo: "Parkir tersedia di area gedung apartemen.",
    },
    houseRules: [
      "Dilarang mengadakan pesta atau mengundang tamu luar berlebihan.",
      "Jagalah kebersihan dapur dan buang sampah di ruang shaft lantai.",
    ],
    appliances: [
      {
        title: "Smart TV & High-Speed WiFi",
        icon: "Tv",
        instructions: ["Smart TV dengan aplikasi YouTube dan Netflix siap nonton."],
      },
    ],
    localGuide: [
      {
        name: "Senayan City & Plaza Senayan",
        category: "Attraction",
        distance: "3.5 km (10 menit)",
        highlight: "Pusat perbelanjaan luxury, fine dining, dan bioskop bioskop.",
        mapsUrl: "https://maps.google.com/?q=Senayan+City",
      },
      {
        name: "Stasiun KRL Palmerah",
        category: "Attraction",
        distance: "1.0 km (4 menit)",
        highlight: "Akses cepat KRL Tanah Abang & Serpong.",
        mapsUrl: "https://maps.google.com/?q=Stasiun+Palmerah",
      },
    ],
  },

  "skyline-luxury-orange-county-cikarang": {
    propertySlug: "skyline-luxury-orange-county-cikarang",
    propertyName: "Skyline Luxury at Orange County",
    area: "Cikarang Selatan, Bekasi",
    heroImage: "/properties/skyline-luxury-orange-county-cikarang/SkylineLuxury_Living_Sofa_Balcony.jpg",
    whatsappConciergePhone: "6282123933218",
    wifi: {
      networkName: "OrangeCounty_Luxury_5G",
      password: "CikarangStay2026",
      speed: "100 Mbps",
      notes: "Kecepatan ultra-cepat ideal untuk corporate expat & business stay.",
    },
    access: {
      checkInTime: "15:00 WIB",
      checkOutTime: "12:00 WIB",
      smartLockCodeOrPin: "Kartu akses VIP lobby & Smart Digital Keypad",
      accessInstructions: [
        "Lobby concierge 24 jam dengan staf berbahasa Inggris & Jepang.",
        "Gunakan smart keycard untuk akses lift eksklusif.",
      ],
      parkingInfo: "Dedicated lot parkir tamu di B1.",
    },
    houseRules: [
      "Strictly no smoking inside unit.",
      "Quiet hours after 22:00 WIB.",
    ],
    appliances: [
      {
        title: "Washing Machine & Dryer",
        icon: "Sparkles",
        instructions: ["Mesin cuci front loading otomatis lengkap dengan deterjen gel."],
      },
      {
        title: "Modern Kitchenette",
        icon: "Utensils",
        instructions: ["Kompor induksi dan peralatan masak premium."],
      },
    ],
    localGuide: [
      {
        name: "Citywalk Lippo Cikarang & Japanese Dining",
        category: "Food & Cafe",
        distance: "1.5 km (5 menit)",
        highlight: "Authentic Izakaya, Ramen, dan supermarket Papaya Fresh Gallery.",
        mapsUrl: "https://maps.google.com/?q=Citywalk+Lippo+Cikarang",
      },
      {
        name: "Mall Lippo Cikarang",
        category: "Attraction",
        distance: "3.0 km (8 menit)",
        highlight: "Pusat belanja, bioskop, dan kuliner keluarga.",
        mapsUrl: "https://maps.google.com/?q=Mall+Lippo+Cikarang",
      },
    ],
  },
}
