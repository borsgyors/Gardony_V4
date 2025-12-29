"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, AlertCircle, ArrowLeft } from "lucide-react"
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
          alt="Hulladékszállítás"
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
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200">
                Közszolgáltatás
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 10.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              Hulladékszállítási változások
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tájékoztatjuk a lakosságot, hogy a Gárdony város hulladékszállítási rendjében és naptárában fontos módosítások lépnek érvénybe. Ezek a változások a város hulladékgazdálkodásának hatékonyabbá és fenntarthatóbbá tételét célozzák.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">⚠️ Fontos!</h3>
                  <p className="text-amber-900">
                    Az új naptár 2025. május 1-jétől lép érvénybe. Kérjük, vegyenek tudomást az új szállítási napokról!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Új szállítási naptár
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              2025. május 1-jétől az alábbi szállítási nap módosulnak:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0F3A52] mb-3">♻️ Kommunális hulladék</h3>
                <p className="text-gray-700 font-semibold mb-2">Új szállítási nap:</p>
                <p className="text-lg text-gray-900 mb-3">Hétfő és csütörtök</p>
                <p className="text-sm text-gray-600">Korábban: Szerdán</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0F3A52] mb-3">🟦 Szelektív hulladék</h3>
                <p className="text-gray-700 font-semibold mb-2">Új szállítási nap:</p>
                <p className="text-lg text-gray-900 mb-3">Kedden</p>
                <p className="text-sm text-gray-600">Korábban: Pénteken</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0F3A52] mb-3">🟤 Biológiai hulladék</h3>
                <p className="text-gray-700 font-semibold mb-2">Új szállítási nap:</p>
                <p className="text-lg text-gray-900 mb-3">Pénteken</p>
                <p className="text-sm text-gray-600">Korábban: Csütörtökön</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Szállítási időpontok
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az alábbi időpontok között szállítjuk el a hulladékot:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <div className="space-y-3 text-lg">
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-48">Reggel korai (06:00-09:00):</span>
                  <span>Óvodák, iskolák közelébe</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-48">Délelőtt (09:00-12:00):</span>
                  <span>Lakóterületek első csoportja</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-48">Délután (14:00-17:00):</span>
                  <span>Lakóterületek második csoportja</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-48">Késő délután (17:00-19:00):</span>
                  <span>Külső terület és szállításból elmaradt házak</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Hulladékszállítási szabályok
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ahhoz, hogy a szállítás gördülékeny és hatékony legyen, kérjük, tartsa be az alábbi szabályokat:
            </p>

            <div className="space-y-3 text-lg text-gray-700 my-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Helyezze ki a hulladékgyűjtő edényeket az utcai szállítási időpontja előtt 30 perccel</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Vékony szemeteszsákok helyett ajánlott a szállítási edény használata</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Ne helyezzen veszélyes anyagokat (akkumulátor, festék, vegyi anyagok) a szemetesbe</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>A szállítás után helyezze vissza az edényeket a kútdig</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>A nagyobb hulladékot (kanapé, szekrény) előzetes bejelentéssel szállíttathatja</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Szelektív hulladékgyűjtés
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A város szelektív hulladékgyűjtési programja továbbra is működik. Kérjük, szétválasztsa az alábbi anyagokat:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0F3A52] mb-3">♻️ Újrahasznosítható anyagok</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🔵 Fém (alumínium, vas)</li>
                  <li>🟦 Műanyag (PET, HDPE)</li>
                  <li>📰 Papír és karton</li>
                  <li>🟩 Üveg (elkülönítetten)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#0F3A52] mb-3">🚫 Tilos hulladék</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🔴 Veszélyes hulladék (akkumlátor, vegyi)</li>
                  <li>🔴 Elektromos hulladék (TV, rádió)</li>
                  <li>🔴 Radioaktív anyagok</li>
                  <li>🔴 Orvosi hulladék</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Díjak és térítések
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A hulladékszállítási díjak a 2025-ös évre az alábbiak:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center border-b pb-3">
                  <span><strong>Egy- és kétlakásos ház (80L):</strong></span>
                  <span className="font-semibold">2.500 Ft/hó</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span><strong>Társasház (közös edény, 240L):</strong></span>
                  <span className="font-semibold">Egyedileg kalkulált</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span><strong>Nagyobb hulladék szállítása:</strong></span>
                  <span className="font-semibold">Bejelentéstől függően</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Veszélyes hulladék szállítása:</strong></span>
                  <span className="font-semibold">Kedvezményes ár</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Elérhetőség és segítségnyújtás
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Amennyiben kérdésed vagy problémájúa van a hulladékszállítással kapcsolatban, fordulj az alábbi telefonszámra vagy emailcímre:
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Köszönjük, hogy segítesz abban, hogy Gárdony város tiszta és zöld maradjon. A közös felelősség és odafigyelés nélkül ezt nem tudnánk megvalósítani!
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
                <strong>Email:</strong> hulladek@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Hulladékudvar</h3>
              <p className="text-gray-700 mb-2">
                Gárdony Város Hulladékgazdálkodási Udvar
              </p>
              <p className="text-gray-700">
                2483 Gárdony, Ipari út 5.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-12">
            <p className="text-gray-700 font-semibold mb-4">
              ♻️ Fontos információ! Oszdd meg szomszédaiddal és ismerőseiddel!
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
