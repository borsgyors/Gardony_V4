import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Home } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const institutions = [
  {
    title: "Óvodák és bölcsődék",
    description: "Csoportok, férőhelyek, beiratkozási tudnivalók és nyitvatartás egy helyen.",
    detail: "Agárdi Napsugár Óvoda | Dinnyési Tóparti Bölcsőde",
  },
  {
    title: "Általános és középiskolák",
    description: "Felvételi határidők, napközi, étkezés és szakkörök frissített listája.",
    detail: "Gárdonyi Géza Általános Iskola | Velencei-tavi Gimnázium",
  },
  {
    title: "Kultúra és művelődés",
    description: "Könyvtár, művelődési ház, klubok és tematikus tanfolyamok időpontjai.",
    detail: "Gárdonyi Közösségi Ház — hétfő-szombat programok",
  },
]

const actions = [
  { label: "Beiratkozás menete", href: "#beiratkozas" },
  { label: "Étkezési igénylés", href: "#etkezes" },
  { label: "Tanulmányi ösztöndíjak", href: "#osztondij" },
  { label: "Intézményi kapcsolattartók", href: "#kapcsolat" },
]

export default function EducationPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80"
            alt="Iskolai folyosó"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Intézmények és oktatás</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Biztonságos tanulási környezet minden korosztálynak
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            Óvodától a középiskoláig, kulturális és felnőttképzési lehetőségek. Önkormányzati partnereink frissített elérhetőségekkel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#beiratkozas" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Home className="h-5 w-5" />
                Beiratkozás
              </Button>
            </Link>
            <Link href="#etkezes" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Ügyintézés
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Kiemelt intézmények</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Nyitvatartás, beiratkozás és programok. Az adatok évente frissülnek az intézmények jelzése alapján.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {institutions.map((item) => (
              <Card key={item.title} className="h-full border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0F3A52]">{item.title}</CardTitle>
                  <CardDescription className="text-base text-[#475569]">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <div className="flex items-start gap-2 text-[#334155]">
                    <BookOpen className="h-5 w-5 text-[#2C7BA0]" />
                    <p className="text-sm sm:text-base leading-relaxed">{item.detail}</p>
                  </div>
                  <Button variant="secondary" className="w-full justify-between">
                    További részletek
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beiratkozas" className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge className="bg-[#DC2626] text-white">Beiratkozás</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Gyakori lépések</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              A beiratkozáshoz szükséges dokumentumok és határidők településenként eltérhetnek. Az alábbi folyamat a Gárdonyi intézményekhez igazodik.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[#0F3A52]">
              <li>Lakcímkártya, személyi igazolvány vagy útlevél másolata</li>
              <li>Előző tanévi bizonyítvány vagy óvodai igazolás</li>
              <li>Orvosi igazolás a védőoltásokról</li>
              <li>Nyilatkozat étkezési igényről és diétáról</li>
            </ol>
          </div>

          <div className="space-y-4" id="etkezes">
            <Badge className="bg-[#2C7BA0] text-white">Ügyintézés</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Kapcsolattartók és űrlapok</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Minden intézmény kijelölt kapcsolattartója segít a dokumentumok leadásában és az időpont-egyeztetésben.
            </p>
            <div className="grid gap-3">
              {actions.map((item) => (
                <Link key={item.label} href={item.href}>
                  <Button variant="outline" className="w-full justify-between border-[#2C7BA0] text-[#0F3A52] hover:bg-[#E8F4F8]">
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
              <GraduationCap className="h-6 w-6 text-[#2C7BA0]" />
              <div>
                <p className="text-sm text-[#64748B]">Általános ügyfélszolgálat</p>
                <p className="text-lg font-semibold text-[#0F3A52]">iskola@gardony.hu | +36 22 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
