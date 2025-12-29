import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Music2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const programs = [
  {
    title: "Rendezvénynaptár",
    description: "Városi és civil események, családi programok, fesztiválok és kiállítások.",
    detail: "Következő: Tóparti KultúrEst — június 21., 19:00, szabadtéri színpad",
  },
  {
    title: "Közösségi ház",
    description: "Klubok, táncórák, kézműves foglalkozások, közösségi irodai tér igényléssel.",
    detail: "Nyitvatartás: H-P 9:00–20:00 | Szombat 10:00–18:00",
  },
  {
    title: "Ifjúsági programok",
    description: "Tehetségprogram, sport- és zenei műhelyek, diákönkormányzat támogatás.",
    detail: "Jelentkezés: online űrlap, havi tájékoztató hírlevél",
  },
]

const links = [
  { label: "Termet foglalok", href: "#terem" },
  { label: "Önkéntesnek jelentkezem", href: "#onkentes" },
  { label: "Pályázati lehetőségek", href: "#palya" },
  { label: "Rendezvény beszámolók", href: "#beszamolo" },
]

export default function CultureCommunityPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&q=80"
            alt="Szabadtéri koncert közönséggel"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Kultúra és közösség</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Élő közösség, pezsgő programok
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Kulturális események, közösségi terek, önkéntes lehetőségek és pályázatok — minden, ami közösségi élet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#naptar" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Calendar className="h-5 w-5" />
                Programok
              </Button>
            </Link>
            <Link href="#onkentes" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Csatlakozom
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]" id="naptar">Aktuális programok</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Események, amelyek az önkormányzat támogatásával vagy együttműködésével valósulnak meg.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {programs.map((item) => (
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

      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4" id="terem">
            <Badge className="bg-[#DC2626] text-white">Helyszínfoglalás</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Termek és közösségi terek</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Kisebb klubteremtől a nagyteremig, technikai felszereléssel. Online foglalás, személyes egyeztetés a rendezvényszervezőkkel.
            </p>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Link key={link.label} href={link.href}>
                  <Button variant="outline" className="gap-2 border-[#2C7BA0] text-[#0F3A52] hover:bg-[#E8F4F8]">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="onkentes">
            <Badge className="bg-[#2C7BA0] text-white">Közösség</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Önkéntesség és klubok</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Kulturális és szociális projektek, környezetvédelmi akciók, ifjúsági kezdeményezések. Jelentkezés online, rövid bemutatkozással.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Users className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Önkéntes adatbázis</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Következő toborzás: július 5.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="palya">
                <Music2 className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Kulturális pályázatok</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Negyedéves beadás, maximum 1 millió Ft/projekt</p>
                </div>
              </div>
              <Link href="#beszamolo">
                <Button className="gap-2">
                  Beszámolók megnyitása
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
