"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
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
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/modern-hungarian-municipal-building-exte-dba41f00-20251130141514.jpg"
          alt="Polgármesteri Hivatal"
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
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                Közlemények
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 24.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              Tájékoztatás munkarendváltozásról
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tájékoztatjuk a lakosságot és az ügyfélszolgáltatásunkat igénybevevőket, hogy a Gárdony Város Polgármesteri Hivatal ügyfélfogadási rendje 2025. áprilisának utolsó hetétől kezdve megváltozik. Ez a módosítás a város lakosainak jobb kiszolgálása és az adminisztratív hatékonyság javítása érdekében történik.
            </p>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Új ügyfélfogadási rend
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az alábbi ügyfélfogadási napok és időpontok érvénybe lépnek 2025. április 28-ától:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Új rendelési idők:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="font-semibold mr-3">Hétfő - Csütörtök:</span>
                  <span>08:00 - 17:00</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-3">Péntek:</span>
                  <span>08:00 - 15:00</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-3">Szombat - Vasárnap:</span>
                  <span>Zárva</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Előzetes időpontfoglalás
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A nagyobb ügyek intézéséhez ajánlott az előzetes időpontfoglalás. Időpontot foglalhat az alábbi telefonszámon: <strong>+36-22-XXX-XXXX</strong> vagy személyesen az ügyfélszolgálaton.
            </p>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Elektronikus ügydintézés
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Felhívjuk figyelmét, hogy számos ügyet elektronikus formában, a város honlapján keresztül is intézhet. Ez gyorsabb és kényelmesebb megoldás, amely 24 órán keresztül elérhető. Az e-ügydintézés részleteiért látogassa meg weboldalunkat a <strong>www.gardony.hu</strong> oldalon.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Megértésüket és türelmüket előre is megköszönjük. Ezekkel a változtatásokkal még jobban szeretnénk szolgálni a város lakóinak érdekeit. Bármilyen kérdés vagy zavarosság esetén kérem, ne habozzon felvenni velünk a kapcsolatot.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12" />

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📞 Elérhetőség</h3>
              <p className="text-gray-700 mb-2">
                <strong>Telefonszám:</strong> +36-22-XXX-XXXX
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Cím</h3>
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
              Hasznos információ? Küldje tovább barátainak és ismerőseinek!
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
