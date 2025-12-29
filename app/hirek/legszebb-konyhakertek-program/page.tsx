"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, ArrowLeft } from "lucide-react"
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
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/nature-photography-of-lake-velence-reed--34fc8965-20251130141514.jpg"
          alt="Legszebb konyhakertek"
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
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 border-teal-200">
                Programok
              </Badge>
              <div className="flex items-center text-gray-600 text-sm gap-1">
                <Calendar className="w-4 h-4" />
                <span>2025. április 23.</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0F3A52] leading-tight">
              A legszebb konyhakertek program
            </h1>

            <div className="flex items-center gap-2 text-lg text-gray-700">
              <span className="font-semibold">Szerkesztette:</span>
              <span>Gárdony Város Önkormányzata</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Idén is meghirdetjük a Gárdony város hagyományos és népszerű "A legszebb konyhakertek" programját. Ez az esemény év végét jelenti a helyi közösség számára, ahol a lakók a terméseikkel dicsekedhetnek, és a szépségért, gondozottságért versengenek.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">🌻 Program adatai:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <span><strong>Regisztrációs időszak:</strong> 2025. május 1. - június 30.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📋</span>
                  <span><strong>Kategóriák:</strong> Zöldség, gyümölcs, virág, virágos dekoráció</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <span><strong>Díjak:</strong> Oklevél, tárgyi díjak és elismerések</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Mit lehet bejelentkeztetni?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A versenybe bejelentkezhető természetesen megművelt konyhakertekből származó termékek és kertek:
            </p>

            <ul className="space-y-3 text-lg text-gray-700 my-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🥬</span>
                <span><strong>Zöldség:</strong> Paradicsom, uborka, paprika, zeller, sárgarépa és más zöldségek</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🍎</span>
                <span><strong>Gyümölcs:</strong> Alma, körte, szőlő, cseresznye, málna és egyéb termések</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌹</span>
                <span><strong>Virágok és díszítések:</strong> Rendezett, virágok közé ültetett terület</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <span><strong>Fotókonkurzus:</strong> A legszebb kertet fotókon is lehet mutatni</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Értékelési szempontok
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A versenybe regisztrált kerteket és termékeket az alábbi szempontok alapján értékeli majd az önkormányzat által felkért szakbizottság:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <ul className="space-y-2 text-lg text-gray-700">
                <li>✓ Az ápolás szintje és gondozottsága</li>
                <li>✓ A termékek minősége és állapota</li>
                <li>✓ Az ökológiai vonatkozások és fenntarthatóság</li>
                <li>✓ Az esztétikai megtekinthetőség</li>
                <li>✓ Az innováció és egyediség</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#0F3A52] mt-10 mb-4">
              Hogyan lehet regisztrálni?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A bejelentkezés két módszerrel lehetséges:
            </p>

            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700 my-6">
              <li>Személyesen az önkormányzat ügyfélszolgálatán</li>
              <li>Online formanyomtatvány kitöltésén keresztül a honlapunkon</li>
            </ol>

            <p className="text-lg text-gray-700 leading-relaxed mt-8">
              Reméljük, sok helyi termelő bejelentkezik és részt vesz ebben az évben is. A verseny célja az újra fel akár a helyi közösség szorosabbra fonása és a fenntartható, helyi termelés támogatása. Várjuk a résztvevőket!
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12" />

          {/* Additional Info Section */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📞 Regisztrációs információ</h3>
              <p className="text-gray-700 mb-2">
                <strong>Telefonszám:</strong> +36-22-XXX-XXXX
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> kulturalis@gardony.hu
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0F3A52] mb-4">📍 Szervezés helye</h3>
              <p className="text-gray-700 mb-2">
                Gárdony Város Polgármesteri Hivatal
              </p>
              <p className="text-gray-700">
                2483 Gárdony, Ady Endre utca 1.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-12">
            <p className="text-gray-700 font-semibold mb-4">
              🌻 Szeretnél részt venni? Mondd tovább a szomszédaidnak!
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
