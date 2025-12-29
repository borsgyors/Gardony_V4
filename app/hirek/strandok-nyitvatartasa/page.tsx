"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Waves, MapPin, ArrowLeft } from "lucide-react"
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
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
          alt="Velencei-tó strand"
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
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200">
                Turizmus
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 15.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              Velencei-tó strandok nyitvatartása
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A nyári szezon közeledtével, közöljük a Velencei-tó gárdonyi strandjainak nyitvatartási idejét. Az alábbi információ segít megtervezni nyári kikapcsolódását. A Velencei-tó Magyarország egyik legszebb és legkedveltebb balatonfürdői és strandjai közé tartozik.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🏖️ Nyitvatartási idő:</h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <span><strong>Nyitás:</strong> 2025. május 1. (csütörtök)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <span><strong>Zárás:</strong> 2025. szeptember 30. (kedd)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <span><strong>Napi nyitvatartás:</strong> 08:00 - 19:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌞</span>
                  <span><strong>Nyári hosszabbítás (július-augusztus):</strong> 08:00 - 20:00</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Gárdonyi strandok
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gárdony városnak három főbb strandja van a Velencei-tó körül, mindegyik egyedi jellemzőkkel és szolgáltatásokkal:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-[#0F3A52] mb-3">1. Gárdonyi Nagystand</h3>
                <p className="text-gray-700 mb-3">
                  A város legnagyobb és leglátogatottabb strandja. Kiváló infrastruktúrával, vendéglátó és szórakoztató lehetőségekkel.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Öltözőkabinok és zuhanyzók</li>
                  <li>✓ Éttermek és sültkrumpli pult</li>
                  <li>✓ Vízisportok és strandröplabda</li>
                  <li>✓ Játszótér és gyermek szórakoztató</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-[#0F3A52] mb-3">2. Pálmapart Strand</h3>
                <p className="text-gray-700 mb-3">
                  Csendesebb, családbarát hely, ideális a gyermekesek számára. Sekély vízterület és biztonságos fürdőzési lehetőség.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Sekély vízterület</li>
                  <li>✓ Árnyékolt pihenőhelyek</li>
                  <li>✓ Kisétterem</li>
                  <li>✓ Gyermekmenedékes részleg</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-[#0F3A52] mb-3">3. Természetvédelmi Strand</h3>
                <p className="text-gray-700 mb-3">
                  A természetszeretők kedvelt helye, ahol természet közeli fürdőzés lehetséges. Minimális beépítéssel és természet közeli megoldásokkal.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Ökológiai fürdőzésre alkalmas</li>
                  <li>✓ Tanösvény és túrautak</li>
                  <li>✓ Madárvonulási megfigyelési pont</li>
                  <li>✓ Pihenőhelyek</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Szolgáltatások és felszerelések
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mindhárom strandunkon megtalálható:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 my-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">♿</span>
                <span><strong>Akadálymentesítés:</strong> Kerekesszékkel megközelíthető</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛟</span>
                <span><strong>Mentőszolgálat:</strong> Úszómester és elsősegély</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚗</span>
                <span><strong>Parkolás:</strong> Ingyenes vagy díjköteles parkolók</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <span><strong>Árnyékhelyek:</strong> Fák és napernyőkölcsönzés</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Díjak és bérlet
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az alábbi díjak a 2025-ös szezontól érvényben:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center">
                  <span><strong>Napi belépő (felnőtt):</strong></span>
                  <span className="font-semibold">800 Ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Napi belépő (gyermek 3-14 év):</strong></span>
                  <span className="font-semibold">400 Ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Heti bérletes (7 nap):</strong></span>
                  <span className="font-semibold">4500 Ft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span><strong>Szezonbérletes (május-szeptember):</strong></span>
                  <span className="font-semibold">12000 Ft</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Fürdőzési szabályok és biztonsága
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A biztonságos fürdőzés érdekében kérjük, hogy tartsa be az alábbi szabályokat:
            </p>

            <ul className="space-y-3 text-lg text-gray-700 my-6">
              <li>🚫 Alkoholtartalmú itallal nem lehet a strandra belépni</li>
              <li>👶 Kisgyermekeket szülő/gondviselő felügyeletével lehet csak fürdőztetni</li>
              <li>🐕 Háziállatokat csak kijelölt részlegre szabad bevinni</li>
              <li>🚯 Kérjük, gondoskodjon saját hulladékainak szállításáról</li>
              <li>🌊 Figyelmesen hallgatás az úszómesterek utasításaira</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Reméljük, hogy szép és emlékezetes nyári időszakot tölt majd Gárdony strandján! Szívesen fogadjuk Ön és családját!
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
                <strong>Email:</strong> turizmus@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Strandok elérése</h3>
              <p className="text-gray-700 mb-2">
                Gárdony város központjához képest 500 m-en belül mindhárom strand
              </p>
              <p className="text-gray-700">
                Autóval B7-es főút vagy Velencei út - mely könnyen megközelíthetők
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-12">
            <p className="text-gray-700 font-semibold mb-4">
              🏖️ Szeretnél nyaralni? Mondd meg barátaidnak és családodnak!
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
