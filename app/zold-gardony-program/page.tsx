import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Trees } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initiatives = [
  {
    title: "Faültetés és zöldítés",
    description: "Lakossági és iskolai faültetési akciók, utcánkénti ütemezéssel és ültetési útmutatóval.",
    detail: "Tavaszi ültetés: 320 fa, jelentkezés utcánként korlátozott férőhelyekkel",
  },
  {
    title: "Energiahatékonyság",
    description: "Lakossági napelem, hőszivattyú és szigetelési pályázatok, szakértői tanácsadás.",
    detail: "Következő lakossági fórum: június 10., 17:30 — Városháza díszterem",
  },
  {
    title: "Hulladékmegelőzés",
    description: "Komposztáló program, szelektív szigetek, újrahasználati központ információk.",
    detail: "Komposztkeret igénylés: online űrlap, átvétel telephelyen heti két alkalommal",
  },
]

const actions = [
  { label: "Pályázati feltételek", href: "#palya" },
  { label: "Lakossági fórumok", href: "#forum" },
  { label: "Önkéntes csatlakozás", href: "#onkentes" },
  { label: "Komposztálási kisokos", href: "#kisokos" },
]

export default function GreenProgramPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
            alt="Park fásítással"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Zöld Gárdony Program</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Természetközeli, fenntartható város
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Zöldfelület-fejlesztés, energiahatékonyság és közösségi programok. A projektek állása átláthatóan, rendszeres frissítéssel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#palya" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Leaf className="h-5 w-5" />
                Pályázatok
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Kiemelt projektek</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">A legfontosabb zöld fejlesztések állása, lakossági bevonási pontokkal és határidőkkel.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {initiatives.map((item) => (
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
          <div className="space-y-4" id="palya">
            <Badge className="bg-[#DC2626] text-white">Pályázatok</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Támogatások röviden</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Energiahatékonysági és zöldfelület-fejlesztési támogatások pályázati feltételei, benyújtási határidők, szükséges mellékletek.
            </p>
            <div className="grid gap-3">
              {actions.map((action) => (
                <Link key={action.label} href={action.href}>
                  <Button variant="outline" className="w-full justify-between border-[#2C7BA0] text-[#0F3A52] hover:bg-[#E8F4F8]">
                    {action.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="onkentes">
            <Badge className="bg-[#2C7BA0] text-white">Közösségi akciók</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Csatlakozz a zöld programhoz</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Önkéntes napok, eszközigénylés, helyszínkoordináció. Rövid jelentkezési űrlap és visszaigazolás e-mailben.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Trees className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Következő akció</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Tóparti park takarítás — június 22.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="kisokos">
                <Recycle className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Komposztálási kisokos</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Letöltés, lakossági workshop időpontok</p>
                </div>
              </div>
              <Link href="#forum">
                <Button className="gap-2">
                  Fórum dátumok megnyitása
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
