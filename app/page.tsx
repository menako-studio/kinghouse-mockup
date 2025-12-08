"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchBar } from "@/components/villas/search-bar"
import { VillaCard } from "@/components/villas/villa-card"
import { MOCK_VILLAS } from "@/lib/data"
import { SERVICES } from "@/lib/constants"
import { 
  TrendingUp, 
  Shield, 
  Headphones, 
  Star,
  Award,
  ArrowRight
} from "lucide-react"

export default function HomePage() {
  const featuredVillas = MOCK_VILLAS.filter(v => v.featured)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920"
            alt="Luxury Villa"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            Villa Mewah di Jabodetabek
          </h1>
          <p className="mb-8 text-xl text-gray-200 md:text-2xl max-w-3xl mx-auto">
            Manajemen villa profesional untuk pemilik & akomodasi eksklusif untuk tamu
          </p>
          
          {/* Search Bar */}
          <div className="mx-auto max-w-4xl mb-8">
            <SearchBar />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/villas">
                Jelajahi Villa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/list-property">
                Daftarkan Properti Anda
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600">Villa Dikelola</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5000+</div>
              <div className="text-gray-600">Tamu Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
              <div className="text-gray-600">Rating Rata-rata</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Dukungan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Villa Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan villa terbaik dengan fasilitas lengkap dan lokasi strategis di Jabodetabek
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredVillas.map((villa) => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/villas">
                Lihat Semua Villa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services for Owners */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Layanan untuk Pemilik Villa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimalkan pendapatan properti Anda dengan layanan manajemen profesional kami
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.owners.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <TrendingUp className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {service.title.id}
                  </h3>
                  <p className="text-gray-600">
                    {service.description.id}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Mengapa Memilih KingHouse?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Properti Terverifikasi
                </h3>
                <p className="text-gray-600">
                  Semua villa telah melalui inspeksi ketat dan verifikasi kualitas untuk memastikan standar terbaik.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Manajemen Profesional
                </h3>
                <p className="text-gray-600">
                  Tim berpengalaman mengelola operasional harian, maintenance, dan layanan tamu dengan sempurna.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6">
                <Headphones className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Dukungan 24/7
                </h3>
                <p className="text-gray-600">
                  Customer support siap membantu Anda kapan saja untuk memastikan pengalaman terbaik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Testimoni Pelanggan
            </h2>
            <p className="text-lg text-gray-600">
              Apa kata pemilik villa dan tamu tentang layanan kami
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &quot;KingHouse membantu saya meningkatkan okupansi villa hingga 85%. Tim mereka sangat profesional dan responsif.&quot;
                </p>
                <div className="font-semibold text-gray-900">Budi Santoso</div>
                <div className="text-sm text-gray-600">Pemilik Villa di BSD</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &quot;Villa yang kami sewa sangat bersih dan sesuai dengan foto. Pelayanan customer service juga sangat membantu!&quot;
                </p>
                <div className="font-semibold text-gray-900">Sarah Wijaya</div>
                <div className="text-sm text-gray-600">Tamu dari Jakarta</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="mb-4 text-gray-600">
                  &quot;Sejak menggunakan jasa KingHouse, saya tidak perlu repot mengurus villa. Semuanya dihandle dengan baik.&quot;
                </p>
                <div className="font-semibold text-gray-900">Ahmad Hidayat</div>
                <div className="text-sm text-gray-600">Pemilik Villa di Bogor</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-700 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Siap Mengoptimalkan Properti Anda?
          </h2>
          <p className="mb-8 text-lg text-amber-50">
            Bergabunglah dengan ratusan pemilik villa yang telah mempercayakan properti mereka kepada kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
              <Link href="/list-property">
                Daftarkan Villa Anda
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
