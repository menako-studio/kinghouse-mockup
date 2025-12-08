"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_VILLAS } from "@/lib/data"
import { 
  MapPin, 
  Users, 
  Bed, 
  Bath, 
  Star,
  CheckCircle2,
  Calendar,
  ArrowLeft
} from "lucide-react"

export default function VillaDetailPage({ params }: { params: { slug: string } }) {
  const villa = MOCK_VILLAS.find(v => v.slug === params.slug)

  if (!villa) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/villas">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Daftar Villa
            </Link>
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-3 relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={villa.images[0]}
                alt={villa.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid gap-4 md:grid-rows-2">
              {villa.images.slice(1, 3).map((image, index) => (
                <div key={index} className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${villa.name} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{villa.name}</h1>
                {villa.featured && (
                  <Badge className="bg-amber-500">Unggulan</Badge>
                )}
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{villa.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="font-medium">{villa.rating}</span>
                  <span>({villa.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Bed className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{villa.capacity.bedrooms}</div>
                      <div className="text-sm text-gray-600">Kamar Tidur</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Bath className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{villa.capacity.bathrooms}</div>
                      <div className="text-sm text-gray-600">Kamar Mandi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Users className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{villa.capacity.guests}</div>
                      <div className="text-sm text-gray-600">Tamu</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tentang Villa Ini</h2>
                <p className="text-gray-600 leading-relaxed">
                  {villa.description.id}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Fasilitas</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {villa.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Lokasi</h2>
                <div className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Google Maps Integration</p>
                    <p className="text-sm text-gray-500">{villa.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-amber-600">
                      {formatPrice(villa.price.daily)}
                    </span>
                    <span className="text-gray-600">/ malam</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Mingguan: {formatPrice(villa.price.weekly)}</p>
                    <p>Bulanan: {formatPrice(villa.price.monthly)}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Check-in
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Check-out
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Jumlah Tamu
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5">
                      {Array.from({ length: villa.capacity.guests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} Tamu</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button className="w-full mb-3" size="lg">
                  Pesan Sekarang
                </Button>

                <Button variant="outline" className="w-full" size="lg">
                  Hubungi Kami
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Harga belum termasuk pajak dan biaya layanan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
