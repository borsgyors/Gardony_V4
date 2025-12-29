import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Handshake, Store } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const resources = [
  {
    title: "Vállalkozói ügyfélszolgálat",
    description: "Telephely-engedély, adóügyek, iparűzési adó és helyiségbérlés konzultációk.",
    detail: "Személyes ügyfélfogadás: Kedd és csütörtök 9:00–15:00, előzetes időponttal",
  },
  {
    title: "Vállalkozásindítás",
    description: "Mentorálás, inkubációs csomag, nyitási checklist helyi jogszabályokkal.",
    detail: "Workshop: induló mikrovállalkozásoknak minden hónap első szerdáján",
  },
  {
    title: "Piacok és vásárok",
    description: "Heti termelői piac, szezonális vásárok, kitelepülési díjak és regisztráció.",
    detail: "Helyszín: Fő tér — standfoglalás online űrlapon keresztül",
  },
]

const actions = [
  { label: "Telephely engedélyezés", href: "#telephely" },
  { label: "Iparűzési adó tájékoztató", href: "#ado" },
  { label: "Piaci jelentkezés", href: "#piac" },
  { label: "Pályázati hírek", href: "#palya" },
]

export default function BusinessEconomyPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Modern iroda belső"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Vállalkozás és gazdaság</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Helyi vállalkozások támogatása
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Engedélyezés, adózás, mentorprogramok és piaci lehetőségek egy oldalon. Gyors elérés a legfontosabb ügyekhez.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#telephely" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Building2 className="h-5 w-5" />
                Telephely ügyek
              </Button>
            </Link>
            <Link href="#piac" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Piac és vásár
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Ügyintézés vállalkozóknak</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Az alapvető vállalkozói ügyek lépései, sablonokkal és kapcsolattartókkal.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {resources.map((item) => (
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
          <div className="space-y-4" id="telephely">
            <Badge className="bg-[#DC2626] text-white">Telephely</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Engedélyezés lépései</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Telephely bejelentés, működési engedély és tűzvédelmi dokumentáció rövid listába rendezve, letölthető űrlapokkal.
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

          <div className="space-y-4" id="piac">
            <Badge className="bg-[#2C7BA0] text-white">Piacok</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Standfoglalás és díjak</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Heti termelői piac és szezonális vásárok standdíjai, jelentkezési határidők és a szükséges dokumentumok.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Store className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Termelői piac</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Szombat 7:00–12:00 | 3 500 Ft/stand/nap</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]" id="ado">
                <Handshake className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Üzleti kapcsolatok</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Helyi beszállítói adatbázis frissítve negyedévente</p>
                </div>
              </div>
              <Link href="#palya">
                <Button className="gap-2">
                  Pályázati hírek
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
