import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Kami berkomitmen memberikan layanan terbaik untuk setiap properti yang kami kelola"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Kami percaya pada hubungan jangka panjang yang saling menguntungkan"
    },
    {
      icon: Award,
      title: "Trust",
      description: "Transparansi dan integritas adalah fondasi bisnis kami"
    }
  ]

  const team = [
    {
      name: "Budi Hartono",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Sarah Putri",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "Ahmad Rizki",
      role: "Revenue Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Diana Sari",
      role: "Guest Relations Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Tentang KingHouse
              </h1>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                KingHouse adalah perusahaan manajemen villa terkemuka di Jabodetabek yang berdedikasi untuk memaksimalkan pendapatan properti Anda sambil memberikan pengalaman menginap yang luar biasa bagi tamu.
              </p>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                Didirikan pada tahun 2020, kami telah membantu ratusan pemilik properti mengoptimalkan villa mereka dengan layanan manajemen profesional dan teknologi terkini.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Bergabung dengan Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="KingHouse Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-lg bg-amber-50">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-amber-600 mb-4" />
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Visi Kami</h2>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi platform manajemen villa terdepan di Indonesia yang mengubah cara pemilik properti mengelola dan mengoptimalkan aset mereka, sambil memberikan pengalaman menginap terbaik bagi tamu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-blue-50">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Misi Kami</h2>
                <p className="text-gray-700 leading-relaxed">
                  Memberdayakan pemilik villa dengan teknologi dan keahlian untuk memaksimalkan pendapatan properti mereka, sambil memastikan standar layanan tertinggi untuk tamu melalui operasional profesional dan inovatif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-none shadow-lg text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-lg text-gray-600">Villa Dikelola</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">5000+</div>
              <div className="text-lg text-gray-600">Tamu Puas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">85%</div>
              <div className="text-lg text-gray-600">Avg. Occupancy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-lg text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600">
              Profesional berpengalaman yang siap membantu kesuksesan properti Anda
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Mari Bekerja Sama
          </h2>
          <p className="mb-8 text-lg text-amber-50">
            Percayakan properti Anda kepada tim profesional yang peduli dengan kesuksesan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-700 hover:bg-amber-50" asChild>
              <Link href="/list-property">
                Daftarkan Properti
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
