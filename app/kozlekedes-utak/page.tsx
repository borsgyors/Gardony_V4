import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ArrowRight, Bus, Car, Map } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const updates = [
  {
    title: "Útlezárások és forgalomkorlátozás",
    description: "Tervezett karbantartások, ideiglenes lezárások és kerülőút javaslatok utcanevekkel.",
    detail: "Dinnyési főút — június 12–14. aszfaltozás, nappali forgalomterelés",
  },
  {
    title: "Parkolás és bérletek",
    description: "Strandi és belvárosi parkolózónák díjai, bérletigénylés és bankkártyás fizetés.",
    detail: "Nyári szezon: 08:00–20:00, lakossági kedvezmény online igényelhető",
  },
  {
    title: "Tömegközlekedés",
    description: "Buszmenetrendek, vasúti csatlakozások és kerékpáros kapcsolat a Velencei-tó körül.",
    detail: "Agárd vasútállomás — 30 percenként Budapest felé, élő késésjelzés",
  },
]

const quickLinks = [
  { label: "Valós idejű forgalom", href: "#forgalom" },
  { label: "Parkolási övezetek térképe", href: "#parkolas" },
  { label: "Busz- és vonatmenetrend", href: "#menetrend" },
  { label: "Kerékpáros útvonalak", href: "#kerekpar" },
]

export default function MobilityPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
            alt="Városi útkereszteződés madártávlatból"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Közlekedés és utak</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Biztonságos közlekedés, naprakész információk
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Útlezárások, parkolás, menetrendek és kerékpáros útvonalak egy helyen, hogy tervezhető legyen a mindennapi közlekedés.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#forgalom" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <AlertTriangle className="h-5 w-5" />
                Forgalmi hírek
              </Button>
            </Link>
            <Link href="#parkolas" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Parkolási infók
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Aktuális közlekedési tudnivalók</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Rendszeresen frissített információk az önkormányzat és a szolgáltatók jelzése alapján.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {updates.map((item) => (
              <Card key={item.title} className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0F3A52]">{item.title}</CardTitle>
                  <CardDescription className="text-base text-[#475569]">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">{item.detail}</p>
                  <Button variant="secondary" className="w-full justify-between">
                    Részletek
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="forgalom" className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge className="bg-[#DC2626] text-white">Forgalmi jelzések</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Valós idejű információk</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Élő térkép és SMS/Push értesítések nagyobb lezárások vagy időjárási okok miatti forgalomkorlátozás esetén.
            </p>
            <div className="grid gap-3">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button variant="outline" className="w-full justify-between border-[#2C7BA0] text-[#0F3A52] hover:bg-[#E8F4F8]">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="parkolas">
            <Badge className="bg-[#2C7BA0] text-white">Parkolás</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Övezetek és bérletek</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Strandi és belvárosi zónák, díjszabás, bérlet igénylés, mozgáskorlátozott igazolvány és lakossági kedvezmény.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Car className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Belváros</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Zóna A | 08:00–20:00 | 480 Ft/óra</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Bus className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Tömegközlekedés</p>
                  <p className="text-lg font-semibold text-[#0F3A52]" id="menetrend">Menetrend PDF és valós idejű jelzés a helyi járatokhoz</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Map className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Kerékpár</p>
                  <p className="text-lg font-semibold text-[#0F3A52]" id="kerekpar">Tókerülő kerékpárút csatlakozási pontok</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
