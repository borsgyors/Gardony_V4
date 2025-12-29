"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, ArrowLeft } from "lucide-react"
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
          src="https://images.unsplash.com/photo-1631217314830-eda157314dbb?w=1200&h=600&fit=crop"
          alt="Orvosi rendelő"
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
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-red-200">
                Egészségügy
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 18.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              Orvosi rendelési idő változás
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tájékoztatjuk a lakosságot, hogy a Gárdony-i háziorvosi ellátásban fontos változás történik. <strong>Dr. Nagy Péter</strong> háziorvos rendelési ideje 2025. május 1-jétől megváltozik. Kérjük, vegyenek tudomást az alábbi új nyitva tartási időpontokról.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-red-900 mb-4">📋 Új rendelési idők:</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Hétfő:</span>
                  <span>08:00 - 11:30, 15:00 - 18:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Kedd:</span>
                  <span>08:00 - 11:30, 14:00 - 17:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Szerda:</span>
                  <span>08:00 - 11:30, 15:00 - 18:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Csütörtök:</span>
                  <span>08:00 - 11:30, 14:00 - 17:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Péntek:</span>
                  <span>08:00 - 12:00</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold min-w-32">Szombat - Vasárnap:</span>
                  <span className="text-red-600">Zárva</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Előzetes időpontfoglalás
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sürgős esetekben vagy hosszabb konzultációkhoz ajánlott az előzetes <strong>telefonos időpontfoglalás</strong>. Ezt a szokásos rendelési időszakban teheti meg. A telefonszám: <strong>+36-22-XXX-XXXX</strong>
            </p>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Orvos adatai
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Nagy Péter háziorvos több mint 20 éves szakmai tapasztalattal rendelkezik az ellátási területen. Az alap- és krónikus ellátás mellett olyan speciális területekre szakosodott, mint a diabéteszkezelés és a szív- és érrendszeri betegségek megelőzése.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍⚕️ Dr. Nagy Péter</h3>
              <p className="text-gray-700 mb-3">
                <strong>Végzettség:</strong> Semmelweis Egyetem, orvosi végzettség (2003)<br/>
                <strong>Szakvizsgák:</strong> Háziorvos, diabétológ<br/>
                <strong>Nyelvek:</strong> Magyar, angol, német
              </p>
              <p className="text-gray-700">
                Dr. Nagy Péter gyakorlata az egész család egészségének gondozására irányul, személyre szabott és megelőző megközelítéssel.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Szolgáltatások
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Az alábbi szolgáltatások érhetők el a rendelőben:
            </p>

            <ul className="space-y-3 text-lg text-gray-700 my-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💊</span>
                <span>Betegségek diagnosztizálása és kezelése</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💉</span>
                <span>Védőoltások és megelőző intézmények</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <span>Gyógyszer felírás és recept kiadása</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🩺</span>
                <span>Alapvető fizikai vizsgálatok</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <span>Telefonos konzultáció (előzetes megbeszélésre)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Fontosabb tudnivalók
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Amennyiben beteg, sürgős esetben kerülje fel az ügyeleti szolgálatot vagy a kórház sürgősségi osztályát. A rendelőben kérjük, hogy időben érkezzenek az előjegyzett vagy előzetes időponthoz. Új betegek regisztrációja a rendszeres ellátáshoz szükséges.
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
                <strong>Email:</strong> orvos@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Cím</h3>
              <p className="text-gray-700 mb-2">
                Dr. Nagy Péter Háziorvosi Rendelő
              </p>
              <p className="text-gray-700">
                2483 Gárdony, Orvosi u. 2.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-12">
            <p className="text-gray-700 font-semibold mb-4">
              ℹ️ Ez az információ fontos! Oszdd meg családoddal és szomszédaiddal!
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
