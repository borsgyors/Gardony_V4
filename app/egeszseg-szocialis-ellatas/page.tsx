"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Orvosi ügyelet",
    description: "Hétköznap 18:00–08:00, hétvégén 0–24 elérhető ügyelet. Cím és ügyeleti időpontok egy helyen.",
    detail: "Velencei-tavi Ügyelet — 2483 Gárdony, Fő utca 12.",
    action: "Ügyeleti tudnivalók"
  },
  {
    title: "Háziorvosi rendelés",
    description: "Körzetek, rendelési idők, e-mail és telefonos elérhetőségek a gyors időpontfoglaláshoz.",
    detail: "Körzeti rendelők: Gárdony, Agárd, Dinnyés — frissített nyitvatartás",
    action: "Rendelési idők"
  },
  {
    title: "Szociális támogatások",
    description: "Alanyi és normatív támogatások, lakhatási és gyógyszertámogatás, letölthető igénylőlapok.",
    detail: "Ügyintézés: szociális iroda (H-P 8:00–16:00)",
    action: "Ügyintézési útmutató"
  }
]

const supportServices = [
  "Házi segítségnyújtás és idősgondozás",
  "Családsegítő és gyermekjóléti szolgálat",
  "Védőnői tanácsadás és oltási rend",
  "Időpontfoglalás e-papíron vagy telefonon",
]

const quickLinks = [
  { label: "Online időpont", href: "#idopont" },
  { label: "Letölthető űrlapok", href: "#urlapok" },
  { label: "Segélyezési határidők", href: "#hataridok" },
  { label: "Ügyeleti telefonszámok", href: "#ugyelet" },
]

export default function HealthAndSocialPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero with overlay and responsive image to keep visual parity with the landing page. */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1A4D6B] via-[#2C7BA0] to-white text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478248-70f8c63b1b66?auto=format&fit=crop&w=1600&q=80"
            alt="Egészségügyi központ várója"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-[#0F3A52]/60 to-white" />
        </div>

        <div className="relative container px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 flex flex-col gap-6 sm:gap-8 max-w-6xl">
          <Badge className="w-fit bg-white/20 text-white border border-white/30">Egészség és szociális ellátás</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Biztonságos ellátás, gyors ügyintézés
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            Orvosi ügyelet, háziorvosok, védőnők és szociális támogatások elérhetőségei egy helyen. Az információk önkormányzati forrásból származnak, rendszeresen frissülnek.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="#ugyelet" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#0F3A52] hover:bg-white/90 gap-2">
                <Phone className="h-5 w-5" />
                Ügyeleti elérhetőség
              </Button>
            </Link>
            <Link href="#urlapok" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/70 text-white hover:bg-white/10 gap-2">
                <ArrowRight className="h-5 w-5" />
                Online ügyintézés
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service cards keep spacing consistent with home grid. */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F3A52]">Kiemelt ellátások</h2>
            <p className="text-lg text-[#2C3E50] max-w-3xl">
              A leggyakrabban igényelt egészségügyi és szociális szolgáltatások röviden, lényegre törően.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {services.map((item) => (
              <Card key={item.title} className="h-full border-none shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl sm:text-2xl text-[#0F3A52]">{item.title}</CardTitle>
                  <CardDescription className="text-base text-[#475569]">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-start gap-2 text-[#334155]">
                    <MapPin className="h-5 w-5 text-[#2C7BA0]" />
                    <p className="text-sm sm:text-base leading-relaxed">{item.detail}</p>
                  </div>
                  <Button variant="secondary" className="w-full justify-between">
                    <span>{item.action}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ugyelet" className="py-12 sm:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#E8F4F8]">
        <div className="container px-4 sm:px-6 max-w-6xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge className="bg-[#DC2626] text-white">Gyors elérés</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Ügyeleti és segélyhívó számok</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              Mentő, ügyelet, ügyeletes gyógyszertár, krízisvonal – minden szám egyetlen helyen, mobilon is jól olvasható formában.
            </p>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <ShieldCheck className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Mentő, életveszély</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">104 | 112</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <Phone className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Orvosi ügyelet</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">+36 22 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                <MapPin className="h-5 w-5 text-[#2C7BA0]" />
                <div>
                  <p className="text-sm text-[#64748B]">Ügyeletes gyógyszertár</p>
                  <p className="text-lg font-semibold text-[#0F3A52]">Agárdi Gyógyszertár — 19:00–07:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Badge className="bg-[#2C7BA0] text-white">Szociális segítség</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F3A52]">Gyakori kérelmek</h3>
            <p className="text-lg text-[#334155] leading-relaxed">
              A legnépszerűbb szociális kérelmek és ügyintézési formák rövid összefoglalója, letöltési és leadási információkkal.
            </p>
            <div className="grid gap-3" id="urlapok">
              {supportServices.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                  <ArrowRight className="h-4 w-4 mt-1 text-[#2C7BA0]" />
                  <p className="text-base text-[#0F3A52]">{item}</p>
                </div>
              ))}
            </div>
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
          </div>
        </div>
      </section>
    </main>
  )
}
