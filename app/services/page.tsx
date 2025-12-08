import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES } from "@/lib/constants"
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Settings, 
  Megaphone,
  ArrowRight
} from "lucide-react"

export default function ServicesPage() {
  const features = [
    "Multi-channel marketing on 20+ booking platforms",
    "Professional photography and videography",
    "Dynamic pricing optimization",
    "24/7 guest support and concierge",
    "Property maintenance and cleaning",
    "Revenue and performance analytics",
    "Legal compliance and licensing",
    "Owner portal with real-time data"
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Layanan Manajemen Villa Profesional
          </h1>
          <p className="mb-8 text-xl text-amber-50">
            Solusi lengkap untuk mengoptimalkan pendapatan dan operasional properti Anda
          </p>
          <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
            <Link href="/contact">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Layanan Komprehensif Kami
            </h2>
            <p className="text-lg text-gray-600">
              Kami menangani semua aspek manajemen villa Anda
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Megaphone className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  Pemasaran Properti
                </h3>
                <p className="mb-4 text-gray-600">
                  Maksimalkan visibilitas villa Anda dengan strategi pemasaran multi-channel yang terbukti efektif.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Listing di 20+ platform booking online</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Fotografi dan videografi profesional</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>SEO dan digital marketing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Social media management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  Manajemen Pendapatan
                </h3>
                <p className="mb-4 text-gray-600">
                  Optimalkan pendapatan dengan dynamic pricing dan yield management profesional.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Dynamic pricing berdasarkan demand</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Kompetitor analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Seasonal pricing strategies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Revenue forecasting dan reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Settings className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  Operasional Harian
                </h3>
                <p className="mb-4 text-gray-600">
                  Operasional properti yang lancar dengan tim profesional kami.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Housekeeping dan cleaning service</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Property maintenance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Security dan monitoring 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  Layanan Tamu
                </h3>
                <p className="mb-4 text-gray-600">
                  Pelayanan tamu kelas dunia untuk memastikan review positif dan repeat bookings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>24/7 guest support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Check-in/check-out management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Concierge services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Guest communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Yang Anda Dapatkan
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Paket Layanan
            </h2>
            <p className="text-lg text-gray-600">
              Pilih paket yang sesuai dengan kebutuhan properti Anda
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-600">15%</span>
                  <span className="text-gray-600"> dari pendapatan</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Listing management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Guest communication</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Basic cleaning</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Pilih Paket</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-600 shadow-xl transform scale-105">
              <div className="bg-amber-600 text-white text-center py-2 font-semibold">
                Paling Populer
              </div>
              <CardContent className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-600">20%</span>
                  <span className="text-gray-600"> dari pendapatan</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Semua fitur Basic</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Dynamic pricing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Professional photography</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Pilih Paket</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-amber-600">25%</span>
                  <span className="text-gray-600"> dari pendapatan</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Semua fitur Professional</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Concierge services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Full maintenance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Pilih Paket</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Siap Memulai?
          </h2>
          <p className="mb-8 text-lg text-amber-50">
            Konsultasi gratis untuk mengetahui paket yang tepat untuk properti Anda
          </p>
          <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
            <Link href="/contact">
              Hubungi Kami Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
