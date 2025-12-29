"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back link */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/hirek">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Vissza a hírekhez
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gray-100">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/hungarian-town-square-in-g-rdony-with-co-4b43fdfd-20251130141513.jpg"
          alt="Testületi ülés"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </section>

      {/* Content Section */}
      <article className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200">
                Önkormányzat
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 25.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              Testületi ülés 2025. április 29.
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A Gárdonyi Önkormányzat Képviselő-testülete soron következő ülését <strong>2025. április 29-én 17:00 órakor</strong> tartja meg. Az ülés nyilvános és a város lakói számára megtekinthető lesz.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">📅 Ülés adatai:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Dátum:</strong> 2025. április 29. (kedd)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Időpont:</strong> 17:00</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Helyszín:</strong> Gárdony Város Polgármesteri Hivatal, ülékszoba (Ady Endre utca 1.)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Napirendi pontok
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az ülés napirendjét tekintse meg az alábbi dokumentumban, mely később még frissítésre kerülhet:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
              <li>Szervezeti és személyzeti ügyek</li>
              <li>Költségvetési kérdések</li>
              <li>Város fejlesztési projektei</li>
              <li>Közszolgáltatások üzemeltetése</li>
              <li>Pályázatok és dotációk</li>
              <li>Előterjesztések és javaslatok</li>
              <li>Egyéb ügyek</li>
            </ol>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Nyilvánosság és részvétel
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az ülés nyilvános, a város polgárai szabadon meghallgathatják az elmúlt és a soron következő ülések anyagait. Az ülés 3 órát nem fogja meghaladni. A képviselő-testület tagjai közt vita és viták előfordulhatnak. Amennyiben személyesen szeretne részt venni, kérjük, szánjon 10-15 percet az ülésre való felkészülésre.
            </p>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Dokumentáció és információ
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az ülés előterjesztéseit és napirendjét a szokásos módon az ülés előtt kerülnek közlésre az önkormányzat honlapján és az ügyfélszolgálaton. Az archívumban megtekinthetők az elmúlt ülések jegyzőkönyvei is.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Az ülésről készült jegyzőkönyv és a tanácskozásról készült hangfelvétel az intézmény nyilvántartásában marad. A testületi ülések jegyzőkönyvei a honlapon történelmi dokumentumként megőrzésre kerülnek.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12" />

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📞 Információ</h3>
              <p className="text-gray-700 mb-2">
                <strong>Telefonszám:</strong> +36-22-XXX-XXXX
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> testület@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Helyszín</h3>
              <p className="text-gray-700 mb-2">
                Gárdony Város Polgármesteri Hivatal
              </p>
              <p className="text-gray-700">
                2483 Gárdony, Ady Endre utca 1.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-12">
            <p className="text-gray-700 font-semibold mb-4">
              Fontosabb információ? Mond tovább barátainak és ismerőseinek!
            </p>
          </div>
        </div>
      </article>

      {/* Back to news - Bottom */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/hirek">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              Vissza a hírekhez
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
