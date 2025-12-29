import Image from "next/image"
import Link from "next/link"
import { AlertCircle, ArrowRight, Smartphone, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "1. Fotó készítése",
    description: "Készítsen éles, jól látható fotót az úthibáról, közvilágítási problémáról vagy illegális hulladékról.",
  },
  {
    title: "2. Pontos cím megadása",
    description: "Automatikus GPS-pozíció vagy kézi cím megadás. Helyszín pontosítása utca, házszám, jellegzetesség alapján.",
  },
  {
    title: "3. Beküldés és követés",
    description: "A bejelentés státusza az alkalmazásban követhető. Szükség esetén visszajelzést kérünk kiegészítésre.",
  },
]

const quickLinks = [
  { label: "Android letöltés", href: "#android" },
  { label: "iOS letöltés", href: "#ios" },
  { label: "Gyakori hibák", href: "#gyik" },
  { label: "Adatkezelés", href: "#adat" },
]

export default function IssueReportingPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80"
            alt="Okostelefon városi háttérrel"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Hibabejelentés applikáció</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Jelentsd a hibát, jelezz vissza
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Úthiba, közvilágítás, rongálás vagy illegális szemét? Az alkalmazásból fotóval, GPS-adattal jelentheted, a státuszt pedig követheted.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#android" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Smartphone className="h-5 w-5" />
                Letöltés
              </Button>
            </Link>
            <Link href="#gyik" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Gyakori kérdések
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Hogyan működik?</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Lépésről lépésre vezetjük végig a bejelentést, hogy pontos adat érkezzen a megfelelő szakágra.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <Card key={item.title} className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0F3A52]">{item.title}</CardTitle>
                  <CardDescription className="text-base text-[#475569]">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4" id="android">
            <Badge className="bg-[#DC2626] text-white">Letöltés</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Platformok</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Az alkalmazás Androidra és iOS-re is elérhető. A telepítés után egyszerű e-mailes regisztrációval használható.
            </p>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button variant="outline" className="gap-2 border-[#2C7BA0] text-[#0F3A52] hover:bg-[#E8F4F8]">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="ios">
                <Smartphone className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">iOS támogatás</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">App Store letöltési link hamarosan frissítve</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="android">
                <Smartphone className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Android támogatás</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Play Áruház link publikálás alatt</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4" id="gyik">
            <Badge className="bg-[#2C7BA0] text-white">Gyakori kérdések</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Tippek a gyors feldolgozáshoz</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Pontos cím, fotó és kategória kiválasztása gyorsítja a feldolgozást. Közvilágításnál az oszlopszám, úthibáknál a sáv feltüntetése segít.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Wrench className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Átlagos átfutás</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Közvilágítás: 3-5 munkanap | Útjavítás: 10-15 munkanap</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="adat">
                <AlertCircle className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Adatkezelés</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">A bejelentések a feldolgozás után archiválásra kerülnek, személyes adatokat nem jelenítünk meg nyilvánosan.</p>
                </div>
              </div>
              <Link href="#ios">
                <Button className="gap-2">
                  iOS telepítési útmutató
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
