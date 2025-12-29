import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ClipboardList, Home, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Okmányiroda és kormányablak",
    description: "Személyi okmányok, lakcímkártya, gépjármű ügyek. Időpontfoglalás online és telefonon.",
    detail: "Nyitvatartás: H-P 8:00–16:00 | Csütörtök hosszított: 18:00-ig",
  },
  {
    title: "Hulladékszállítás",
    description: "Gyűjtési naptár, lomtalanítás, szelektív pontok és zöldhulladék leadás.",
    detail: "Következő lomtalanítás: május 18. (szombat)",
  },
  {
    title: "Közmű ügyfélszolgálat",
    description: "Víz-, gáz-, villany- és távhő szolgáltatók elérhetősége, hibabejelentés és számlázás.",
    detail: "E-ügyintézés: folyamatosan elérhető | Telefon: +36 80 123 456",
  },
]

const quickActions = [
  "Időpontfoglalás kormányablakba",
  "Elektronikus űrlap beküldése",
  "Lakossági fórum következő időpontja",
  "Letölthető bejelentőlapok",
]

export default function ResidentServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F3A52] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
            alt="Ügyfélszolgálati pult"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 max-w-6xl flex flex-col gap-6">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Lakossági szolgáltatások</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Ügyintézés gyorsan, átláthatóan
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
            A legfontosabb közszolgáltatások elérhetőségei, nyitvatartásai és online felületei egy oldalon. Frissítve az önkormányzat és szolgáltatók adatai alapján.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#idopont" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <ClipboardList className="h-5 w-5" />
                Időpontfoglalás
              </Button>
            </Link>
            <Link href="#lomtalanitas" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Lomtalanítási infók
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Kiemelt szolgáltatások</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">Nyitvatartás, elérhetőségek és online felületek — folyamatosan frissített önkormányzati adatbázis.</p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {services.map((item) => (
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

      <section id="idopont" className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge className="bg-[#DC2626] text-white">Időpont és űrlap</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Online ügyintézés</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Elektronikus ügyintézés, e-papír és ügyfélkapu hivatkozások. Ügytípusonként rövid magyarázat, hogy kevesebb legyen a személyes várakozás.
            </p>
            <div className="grid gap-3">
              {quickActions.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                  <ArrowRight className="h-4 w-4 mt-1 text-[#2C7BA0]" />
                  <p className="text-base text-[#0F3A52]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4" id="lomtalanitas">
            <Badge className="bg-[#2C7BA0] text-white">Lomtalanítás</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Gyűjtési ütemterv</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              A következő hetek gyűjtési időpontjai utcára bontva, PDF-ben és mobilra optimalizált listában is elérhetők.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Home className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Agárd és Dinnyés</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Páros hét szerda — 7:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Phone className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Ügyfélszolgálat</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">+36 80 987 654 | hulladek@gardony.hu</p>
                </div>
              </div>
            </div>
            <Link href="#">
              <Button className="gap-2">
                Gyűjtési naptár letöltése
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
