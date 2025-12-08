"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SITE_CONFIG } from "@/lib/constants"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "owner",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Terima kasih! Kami akan menghubungi Anda segera.")
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Hubungi Kami
          </h1>
          <p className="text-xl text-amber-50">
            Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 812 xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="mb-2 block text-sm font-medium text-gray-700">
                    Saya adalah
                  </label>
                  <select
                    id="propertyType"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="owner">Pemilik Villa</option>
                    <option value="guest">Calon Tamu</option>
                    <option value="partner">Calon Partner</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Ceritakan kepada kami tentang properti Anda atau pertanyaan Anda..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Informasi Kontak
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Telepon</h3>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phone}`}
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {SITE_CONFIG.contact.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Senin - Jumat, 09:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">Alamat</h3>
                      <p className="text-gray-600">
                        {SITE_CONFIG.contact.address}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h3 className="mb-3 font-semibold text-gray-900">Jam Operasional</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="font-medium">Tutup</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <p className="font-medium text-amber-700">
                      Emergency Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Google Maps Integration</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
