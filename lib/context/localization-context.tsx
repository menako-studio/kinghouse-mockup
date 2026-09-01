"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { trackCurrencyChange, trackLanguageChange } from "@/lib/analytics"



export type CurrencyCode = "IDR" | "USD" | "EUR" | "CNY" | "TWD" | "RUB" | "JPY" | "AUD" | "SGD" | "GBP"
export type LanguageCode = "EN" | "ID" | "JA" | "ZH-CN" | "ZH-TW" | "FR" | "ES" | "DE" | "RU"

export interface CurrencyConfig {
  code: CurrencyCode
  symbol: string
  label: string
  short: string
  rateFromIdr: number
  prefix: boolean
}

export interface LanguageConfig {
  code: LanguageCode
  label: string
  nativeName: string
}

export const SUPPORTED_CURRENCIES: CurrencyConfig[] = [
  { code: "IDR", symbol: "Rp", label: "IDR (Rp)", short: "RP", rateFromIdr: 1, prefix: true },
  { code: "USD", symbol: "$", label: "USD ($)", short: "$", rateFromIdr: 1 / 15800, prefix: true },
  { code: "EUR", symbol: "€", label: "EUR (€)", short: "€", rateFromIdr: 1 / 17200, prefix: true },
  { code: "CNY", symbol: "¥", label: "CNY (¥)", short: "¥", rateFromIdr: 1 / 2180, prefix: true },
  { code: "TWD", symbol: "NT$", label: "TWD (NT$)", short: "NT$", rateFromIdr: 1 / 490, prefix: true },
  { code: "RUB", symbol: "₽", label: "RUB (₽)", short: "₽", rateFromIdr: 1 / 170, prefix: true },
  { code: "JPY", symbol: "¥", label: "JPY (¥)", short: "¥", rateFromIdr: 1 / 105, prefix: true },
  { code: "AUD", symbol: "A$", label: "AUD (A$)", short: "A$", rateFromIdr: 1 / 10300, prefix: true },
  { code: "SGD", symbol: "S$", label: "SGD (S$)", short: "S$", rateFromIdr: 1 / 11700, prefix: true },
  { code: "GBP", symbol: "£", label: "GBP (£)", short: "£", rateFromIdr: 1 / 20100, prefix: true },
]

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: "EN", label: "English", nativeName: "English" },
  { code: "ID", label: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "JA", label: "Japanese", nativeName: "日本語" },
  { code: "ZH-CN", label: "Simplified Chinese", nativeName: "中文 (简体)" },
  { code: "ZH-TW", label: "Traditional Chinese", nativeName: "中文 (繁體)" },
  { code: "FR", label: "French", nativeName: "Français" },
  { code: "ES", label: "Spanish", nativeName: "Español" },
  { code: "DE", label: "German", nativeName: "Deutsch" },
  { code: "RU", label: "Russian", nativeName: "Русский" },
]

// Multilingual translations for UI elements
const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  EN: {
    home: "HOME",
    ourProperties: "OUR PROPERTIES",
    monthlyOffers: "MONTHLY OFFERS",
    events: "EVENTS",
    rewards: "REWARDS",
    enquire: "ENQUIRE",
    signIn: "SIGN IN",
    byPropertyType: "BY PROPERTY TYPE",
    byLocation: "BY LOCATION",
    villasUpTo4: "Villas up to 4 Bedroom",
    villas5Plus: "Villas 5 Bedroom+",
    resortApartment: "Resort & Apartment",
    eventsAndWeddings: "Events & Gatherings",
    allLocations: "All Jabodetabek Locations",
    subscribeNewsletter: "Subscribe to our Newsletter",
    newsletterHeadline: "GET EXCLUSIVE DEALS & THE LATEST NEWS",
    emailPlaceholder: "Enter your email address",
    signUp: "SIGN UP",
    aboutUs: "ABOUT US",
    reservation: "RESERVATION",
    guestAssistance: "GUEST ASSISTANCE",
    management: "MANAGEMENT",
    office: "OFFICE",
    hours: "HOURS",
    connectWithUs: "CONNECT WITH US",
    perNight: "/ night",
    bookOnAirbnb: "Book on Airbnb",
    details: "Details",
    guests: "Guests",
    bedrooms: "Bedrooms",
    baths: "Baths",
    guestFavorite: "Guest Favorite",
    exploreProperties: "Explore Properties",
    ownerServices: "Owner Services",
    forPropertyOwners: "For Property Owners",
    directConcierge: "Direct Concierge & Desk",
  },
  ID: {
    home: "BERANDA",
    ourProperties: "PROPERTI KAMI",
    monthlyOffers: "PENAWARAN BULANAN",
    events: "ACARA",
    rewards: "REWARDS",
    enquire: "KONSULTASI",
    signIn: "MASUK",
    byPropertyType: "BERDASARKAN TIPE PROPERTI",
    byLocation: "BERDASARKAN LOKASI",
    villasUpTo4: "Villa hingga 4 Kamar Tidur",
    villas5Plus: "Villa 5 Kamar Tidur+",
    resortApartment: "Resor & Apartemen",
    eventsAndWeddings: "Acara & Pernikahan",
    allLocations: "Semua Lokasi Jabodetabek",
    subscribeNewsletter: "Berlangganan Newsletter Kami",
    newsletterHeadline: "DAPATKAN PENAWARAN EKSKLUSIF & BERITA TERBARU",
    emailPlaceholder: "Masukkan alamat email Anda",
    signUp: "DAFTAR",
    aboutUs: "TENTANG KAMI",
    reservation: "RESERVASI",
    guestAssistance: "BANTUAN TAMU",
    management: "MANAJEMEN",
    office: "KANTOR",
    hours: "JAM OPERASIONAL",
    connectWithUs: "IKUTI KAMI",
    perNight: "/ malam",
    bookOnAirbnb: "Pesan di Airbnb",
    details: "Detail",
    guests: "Tamu",
    bedrooms: "Kamar Tidur",
    baths: "Kamar Mandi",
    guestFavorite: "Favorit Tamu",
    exploreProperties: "Jelajahi Properti",
    ownerServices: "Layanan Pemilik Properti",
    forPropertyOwners: "Untuk Pemilik Properti",
    directConcierge: "Layanan Concierge Langsung",
  },
  JA: {
    home: "ホーム",
    ourProperties: "宿泊施設",
    monthlyOffers: "マンスリー特典",
    events: "イベント",
    rewards: "リワード",
    enquire: "お問い合わせ",
    signIn: "ログイン",
    byPropertyType: "タイプ別",
    byLocation: "エリア別",
    villasUpTo4: "ヴィラ（最大4ベッドルーム）",
    villas5Plus: "ヴィラ（5ベッドルーム以上）",
    resortApartment: "リゾート＆アパートメント",
    eventsAndWeddings: "イベント＆パーティー",
    allLocations: "すべてのエリア（ジャボデタベック）",
    subscribeNewsletter: "ニュースレターに登録する",
    newsletterHeadline: "最新ニュースとお得な限定プランをお届け",
    emailPlaceholder: "メールアドレスを入力",
    signUp: "登録する",
    aboutUs: "キングハウスについて",
    reservation: "ご予約",
    guestAssistance: "ゲストサポート",
    management: "マネジメント",
    office: "所在地",
    hours: "営業時間",
    connectWithUs: "SNS",
    perNight: "/ 泊",
    bookOnAirbnb: "Airbnbで予約",
    details: "詳細",
    guests: "ゲスト",
    bedrooms: "ベッドルーム",
    baths: "バスルーム",
    guestFavorite: "ゲストに人気",
    exploreProperties: "物件を探す",
    ownerServices: "オーナー向けサービス",
    forPropertyOwners: "不動産オーナー様へ",
    directConcierge: "専任コンシェルジュデスク",
  },
  "ZH-CN": {
    home: "首页",
    ourProperties: "精选房源",
    monthlyOffers: "月度特惠",
    events: "活动与聚会",
    rewards: "会员奖励",
    enquire: "咨询洽谈",
    signIn: "登录",
    byPropertyType: "按房源类型",
    byLocation: "按地理位置",
    villasUpTo4: "豪华别墅（最多4卧）",
    villas5Plus: "豪华别墅（5卧及以上）",
    resortApartment: "度假村与精品公寓",
    eventsAndWeddings: "活动与私人宴会",
    allLocations: "大雅加达所有区域",
    subscribeNewsletter: "订阅我们的通讯",
    newsletterHeadline: "获取独家专属优惠与最新动态",
    emailPlaceholder: "输入您的电子邮箱",
    signUp: "立即订阅",
    aboutUs: "关于我们",
    reservation: "预订服务",
    guestAssistance: "贵宾礼宾支持",
    management: "资产管理",
    office: "办公地点",
    hours: "服务时间",
    connectWithUs: "关注我们",
    perNight: "/ 晚",
    bookOnAirbnb: "在 Airbnb 预订",
    details: "查看详情",
    guests: "位客人",
    bedrooms: "间卧室",
    baths: "间浴室",
    guestFavorite: "房客最爱",
    exploreProperties: "探索所有房源",
    ownerServices: "业主托管服务",
    forPropertyOwners: "业主合作专区",
    directConcierge: "专属礼宾及客服",
  },
  "ZH-TW": {
    home: "首頁",
    ourProperties: "精選房源",
    monthlyOffers: "月度特惠",
    events: "活動與聚會",
    rewards: "會員獎勵",
    enquire: "諮詢洽談",
    signIn: "登入",
    byPropertyType: "按房源類型",
    byLocation: "按地理位置",
    villasUpTo4: "豪華別墅（最多4房）",
    villas5Plus: "豪華別墅（5房以上）",
    resortApartment: "度假村與精品公寓",
    eventsAndWeddings: "活動與私人宴會",
    allLocations: "大雅加達所有區域",
    subscribeNewsletter: "訂閱我們的通訊",
    newsletterHeadline: "獲取獨家專屬優惠與最新動態",
    emailPlaceholder: "輸入您的電子郵件",
    signUp: "立即訂閱",
    aboutUs: "關於我們",
    reservation: "預訂服務",
    guestAssistance: "貴賓禮賓支持",
    management: "資產管理",
    office: "辦公地點",
    hours: "服務時間",
    connectWithUs: "關注我們",
    perNight: "/ 晚",
    bookOnAirbnb: "在 Airbnb 預訂",
    details: "查看詳情",
    guests: "位房客",
    bedrooms: "間臥室",
    baths: "間衛浴",
    guestFavorite: "房客最愛",
    exploreProperties: "探索所有房源",
    ownerServices: "業主託管服務",
    forPropertyOwners: "業主合作專區",
    directConcierge: "專屬禮賓及客服",
  },
  FR: {
    home: "ACCUEIL",
    ourProperties: "NOS PROPRIÉTÉS",
    monthlyOffers: "OFFRES DU MOIS",
    events: "ÉVÉNEMENTS",
    rewards: "RÉCOMPENSES",
    enquire: "DEMANDE",
    signIn: "CONNEXION",
    byPropertyType: "PAR TYPE DE PROPRIÉTÉ",
    byLocation: "PAR DESTINATION",
    villasUpTo4: "Villas jusqu'à 4 Chambres",
    villas5Plus: "Villas 5 Chambres et +",
    resortApartment: "Résidences & Appartements",
    eventsAndWeddings: "Événements & Célébrations",
    allLocations: "Toutes les Destinations",
    subscribeNewsletter: "Abonnez-vous à notre Newsletter",
    newsletterHeadline: "RECEVEZ NOS OFFRES EXCLUSIVES ET DERNIÈRES NOUVELLES",
    emailPlaceholder: "Votre adresse e-mail",
    signUp: "S'INSCRIRE",
    aboutUs: "À PROPOS",
    reservation: "RÉSERVATIONS",
    guestAssistance: "ASSISTANCE CLIENTS",
    management: "GESTION",
    office: "BUREAU",
    hours: "HORAIRES",
    connectWithUs: "REJOIGNEZ-NOUS",
    perNight: "/ nuit",
    bookOnAirbnb: "Réserver sur Airbnb",
    details: "Détails",
    guests: "Voyageurs",
    bedrooms: "Chambres",
    baths: "Salles de bain",
    guestFavorite: "Coup de cœur",
    exploreProperties: "Explorer les Villas",
    ownerServices: "Services Propriétaires",
    forPropertyOwners: "Espace Propriétaires",
    directConcierge: "Service Conciergerie Dédié",
  },
  ES: {
    home: "INICIO",
    ourProperties: "NUESTRAS PROPIEDADES",
    monthlyOffers: "OFERTAS MENSUALES",
    events: "EVENTOS",
    rewards: "RECOMPENSAS",
    enquire: "CONSULTAR",
    signIn: "INICIAR SESIÓN",
    byPropertyType: "POR TIPO DE PROPIEDAD",
    byLocation: "POR DESTINO",
    villasUpTo4: "Villas de hasta 4 Dormitorios",
    villas5Plus: "Villas de 5+ Dormitorios",
    resortApartment: "Resorts y Apartamentos",
    eventsAndWeddings: "Eventos y Celebraciones",
    allLocations: "Todas las Ubicaciones",
    subscribeNewsletter: "Suscríbete a nuestro boletín",
    newsletterHeadline: "OBTÉN OFERTAS EXCLUSIVAS Y ÚLTIMAS NOVEDADES",
    emailPlaceholder: "Introduce tu correo electrónico",
    signUp: "SUSCRIBIRSE",
    aboutUs: "SOBRE NOSOTROS",
    reservation: "RESERVAS",
    guestAssistance: "ATENCIÓN AL CLIENTE",
    management: "GESTIÓN",
    office: "OFICINA",
    hours: "HORARIO",
    connectWithUs: "SÍGUENOS",
    perNight: "/ noche",
    bookOnAirbnb: "Reservar en Airbnb",
    details: "Detalles",
    guests: "Huéspedes",
    bedrooms: "Habitaciones",
    baths: "Baños",
    guestFavorite: "Favorito de huéspedes",
    exploreProperties: "Explorar Propiedades",
    ownerServices: "Servicios para Propietarios",
    forPropertyOwners: "Para Propietarios",
    directConcierge: "Conserjería Directa",
  },
  DE: {
    home: "STARTSEITE",
    ourProperties: "UNSERE UNTERKÜNFTE",
    monthlyOffers: "MONATSANGEBOTE",
    events: "EVENTS",
    rewards: "PRÄMIEN",
    enquire: "ANFRAGEN",
    signIn: "ANMELDEN",
    byPropertyType: "NACH UNTERKUNFTSTYP",
    byLocation: "NACH STANDORT",
    villasUpTo4: "Villen bis zu 4 Schlafzimmer",
    villas5Plus: "Villen ab 5 Schlafzimmer",
    resortApartment: "Resort & Apartments",
    eventsAndWeddings: "Events & Hochzeiten",
    allLocations: "Alle Standorte",
    subscribeNewsletter: "Newsletter abonnieren",
    newsletterHeadline: "EXKLUSIVE ANGEBOTE & AKTUELLE NEWS ERHALTEN",
    emailPlaceholder: "E-Mail-Adresse eingeben",
    signUp: "ANMELDEN",
    aboutUs: "ÜBER UNS",
    reservation: "RESERVIERUNG",
    guestAssistance: "GÄSTEBETREUUNG",
    management: "MANAGEMENT",
    office: "BÜRO",
    hours: "ÖFFNUNGSZEITEN",
    connectWithUs: "FOLGEN SIE UNS",
    perNight: "/ Nacht",
    bookOnAirbnb: "Auf Airbnb buchen",
    details: "Details",
    guests: "Gäste",
    bedrooms: "Schlafzimmer",
    baths: "Bäder",
    guestFavorite: "Gäste-Favorit",
    exploreProperties: "Unterkünfte erkunden",
    ownerServices: "Eigentümer-Services",
    forPropertyOwners: "Für Immobilieneigentümer",
    directConcierge: "Direkter Concierge-Service",
  },
  RU: {
    home: "ГЛАВНАЯ",
    ourProperties: "НАШИ ОБЪЕКТЫ",
    monthlyOffers: "ПРЕДЛОЖЕНИЯ МЕСЯЦА",
    events: "МЕРОПРИЯТИЯ",
    rewards: "ПРОГРАММА ЛОЯЛЬНОСТИ",
    enquire: "ЗАПРОС",
    signIn: "ВОЙТИ",
    byPropertyType: "ПО ТИПУ ОБЪЕКТА",
    byLocation: "ПО РАСПОЛОЖЕНИЮ",
    villasUpTo4: "Виллы до 4 спален",
    villas5Plus: "Виллы от 5 спален",
    resortApartment: "Курортные апартаменты",
    eventsAndWeddings: "Мероприятия и праздники",
    allLocations: "Все локации Джакарты",
    subscribeNewsletter: "Подпишитесь на рассылку",
    newsletterHeadline: "ПОЛУЧАЙТЕ ЭКСКЛЮЗИВНЫЕ СКИДКИ И НОВОСТИ",
    emailPlaceholder: "Введите ваш e-mail",
    signUp: "ПОДПИСАТЬСЯ",
    aboutUs: "О НАС",
    reservation: "БРОНИРОВАНИЕ",
    guestAssistance: "СЛУЖБА ПОДДЕРЖКИ",
    management: "УПРАВЛЕНИЕ",
    office: "ОФИС",
    hours: "ЧАСЫ РАБОТЫ",
    connectWithUs: "МЫ В СОЦСЕТЯХ",
    perNight: "/ ночь",
    bookOnAirbnb: "Забронировать на Airbnb",
    details: "Подробнее",
    guests: "Гостей",
    bedrooms: "Спальни",
    baths: "Ванные",
    guestFavorite: "Выбор гостей",
    exploreProperties: "Смотреть объекты",
    ownerServices: "Услуги для владельцев",
    forPropertyOwners: "Для владельцев",
    directConcierge: "Прямой консьерж-сервис",
  },
}

interface LocalizationContextType {
  currency: CurrencyCode
  setCurrency: (currency: CurrencyCode) => void
  currentCurrencyConfig: CurrencyConfig
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  currentLanguageConfig: LanguageConfig
  formatPrice: (amountInIdr: number, customCurrency?: CurrencyCode) => string
  t: (key: string) => string
}

const LocalizationContext = createContext<LocalizationContextType | null>(null)

export function LocalizationProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("IDR")
  const [language, setLanguageState] = useState<LanguageCode>("EN")

  useEffect(() => {
    try {
      const savedCurrency = localStorage.getItem("kinghouse_currency") as CurrencyCode
      if (savedCurrency && SUPPORTED_CURRENCIES.some((c) => c.code === savedCurrency)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrencyState(savedCurrency)
      }
      const savedLang = localStorage.getItem("kinghouse_language") as LanguageCode
      if (savedLang && SUPPORTED_LANGUAGES.some((l) => l.code === savedLang)) {
        setLanguageState(savedLang)
      }
    } catch {
      // ignore SSR / storage access restrictions
    }
  }, [])

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c)
    trackCurrencyChange(c)
    try {
      localStorage.setItem("kinghouse_currency", c)
    } catch {}
  }

  const setLanguage = (l: LanguageCode) => {
    setLanguageState(l)
    trackLanguageChange(l)
    try {
      localStorage.setItem("kinghouse_language", l)
    } catch {}
  }


  const currentCurrencyConfig =
    SUPPORTED_CURRENCIES.find((c) => c.code === currency) ?? SUPPORTED_CURRENCIES[0]

  const currentLanguageConfig =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) ?? SUPPORTED_LANGUAGES[0]

  const formatPrice = (amountInIdr: number, customCurrency?: CurrencyCode): string => {
    const activeCurrencyCode = customCurrency ?? currency
    const activeConfig =
      SUPPORTED_CURRENCIES.find((c) => c.code === activeCurrencyCode) ?? SUPPORTED_CURRENCIES[0]

    const converted = amountInIdr * activeConfig.rateFromIdr

    if (activeConfig.code === "IDR") {
      return `Rp ${Math.round(converted).toLocaleString("id-ID")}`
    } else if (activeConfig.code === "USD") {
      return `$${Math.round(converted).toLocaleString("en-US")}`
    } else if (activeConfig.code === "EUR") {
      return `€${Math.round(converted).toLocaleString("de-DE")}`
    } else if (activeConfig.code === "CNY" || activeConfig.code === "JPY") {
      return `¥${Math.round(converted).toLocaleString("zh-CN")}`
    } else if (activeConfig.code === "TWD") {
      return `NT$ ${Math.round(converted).toLocaleString("zh-TW")}`
    } else if (activeConfig.code === "RUB") {
      return `₽ ${Math.round(converted).toLocaleString("ru-RU")}`
    } else if (activeConfig.code === "AUD") {
      return `A$ ${Math.round(converted).toLocaleString("en-AU")}`
    } else if (activeConfig.code === "SGD") {
      return `S$ ${Math.round(converted).toLocaleString("en-SG")}`
    } else if (activeConfig.code === "GBP") {
      return `£${Math.round(converted).toLocaleString("en-GB")}`
    }

    return `${activeConfig.symbol} ${Math.round(converted).toLocaleString()}`
  }

  const t = (key: string): string => {
    const langDict = TRANSLATIONS[language]
    if (langDict && langDict[key]) {
      return langDict[key]
    }
    // Fallback to English
    return TRANSLATIONS.EN[key] ?? key
  }

  return (
    <LocalizationContext.Provider
      value={{
        currency,
        setCurrency,
        currentCurrencyConfig,
        language,
        setLanguage,
        currentLanguageConfig,
        formatPrice,
        t,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}

export function useLocalization() {
  const context = useContext(LocalizationContext)
  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider")
  }
  return context
}
