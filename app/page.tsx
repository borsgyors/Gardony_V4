"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  FileText,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  Building,
  Waves,
  Sun,
  TreePine,
  Info,
  ArrowRight,
  Home,
  Utensils,
  Heart
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { WaveSection } from "../components/WaveSection"
import { useEffect, useMemo, useState } from "react"
import { getNewsSorted } from "@/data/news"

export default function HomePage() {
  const { t } = useLanguage()

  const recentNews = [
    {
      id: 1,
      title: "Tájékoztatás munkarendváltozásról",
      date: "2025-04-24",
      category: "Közlemények",
      excerpt: "Tájékoztatjuk a lakosságot, hogy a Polgármesteri Hivatal ügyfélfogadási rendje megváltozik a következő héten.",
      slug: "tajekoztatas-munkarendvaltozasrol",
      image: "/media/townhall.jpg"
    },
    {
      id: 2,
      title: "Testületi ülés 2025. április 29.",
      date: "2025-04-25",
      category: "Önkormányzat",
      excerpt: "A Gárdonyi Önkormányzat Képviselő-testülete 2025. április 29-én 17:00 órakor tartja soron következő ülését.",
      slug: "testuleti-ules-2025-aprilis-29",
      image: "/media/testületiülés.jpg"
    },
    {
      id: 3,
      title: "A legszebb konyhakertek program",
      date: "2025-04-23",
      category: "Programok",
      excerpt: "Idén is meghirdetjük a hagyományos 'A legszebb konyhakertek' programot Gárdony településen.",
      slug: "legszebb-konyhakertek-program",
      image: "/media/konyhakert.png"
    },
    {
      id: 4,
      title: "Tavaszi tóparti takarítás",
      date: "2025-04-20",
      category: "Közösség",
      excerpt: "Önkéntesek közösen tisztították meg a Velencei-tó partját a hétvégén.",
      slug: "tavaszi-toparti-takaritas",
      image: "/media/takaritas.jpg"
    },
    {
      id: 5,
      title: "Új kerékpárút szakasz készült el",
      date: "2025-04-18",
      category: "Fejlesztés",
      excerpt: "Átadták a kerékpárút új, biztonságosabb szakaszát a városközpont közelében.",
      slug: "uj-kerekparut-szakasz",
      image: "/media/bikepath.jpg"
    },
    {
      id: 6,
      title: "Kulturális hétvége a főtéren",
      date: "2025-04-15",
      category: "Kultúra",
      excerpt: "Koncertek, kézműves vásár és családi programok töltötték meg a főteret.",
      slug: "kulturalis-hetvege-foter",
      image: "/media/festival.jpg"
    },
    {
      id: 7,
      title: "Megújult a könyvtár olvasóterme",
      date: "2025-04-12",
      category: "Oktatás",
      excerpt: "Kényelmesebb bútorokkal és új digitális eszközökkel várja az olvasókat a könyvtár.",
      slug: "konyvtar-olvasoterem-megujult",
      image: "/media/library.jpg"
    },
    {
      id: 8,
      title: "Véradás a közösségi házban",
      date: "2025-04-10",
      category: "Egészség",
      excerpt: "Sikeres véradási akciót szerveztek, sok új donort is köszönthettünk.",
      slug: "veradas-kozossegi-haz",
      image: "/media/blooddonation.jpg"
    }
  ]

  const menuItems = [
    {
      icon: <img src="/media/medical-bag.svg" alt="Egészség és szociális ellátás" className="w-full h-full object-contain" />,
      title: "Egészség és szociális ellátás",
      href: "/egeszseg-szocialis-ellatas",
      color: "#000000ff",
      bgColor: "#A9C23F"
    },
    {
      icon: <img src="/media/institution.svg" alt="Intézmények és oktatás" className="w-full h-full object-contain" />,
      title: "Intézmények és oktatás",
      href: "/intezmenyek-oktatas",
      color: "#ffffff",
      bgColor: "#007A6C"
    },
    {
      icon: <img src="/media/services.svg" alt="Lakossági szolgáltatások" className="w-full h-full object-contain" />,
      title: "Lakossági szolgáltatások",
      href: "/lakossagi-szolgaltatasok",
      color: "#ffffff",
      bgColor: "#2E4D58"
    },
    {
      icon: <img src="/media/transportation.svg" alt="Közlekedés és utak" className="w-full h-full object-contain" />,
      title: "Közlekedés és utak",
      href: "/kozlekedes-utak",
      color: "#000000ff",
      bgColor: "#F2EEEB"
    },
    {
      icon: <img src="/media/culture.svg" alt="Kultúra és közösség" className="w-full h-full object-contain" />,
      title: "Kultúra és közösség",
      href: "/kultura-kozosseg",
      color: "#000000ff",
      bgColor: "#F2EEEB"
    },
    {
      icon: <img src="/media/greencity.svg" alt="Zöld Gárdony Program" className="w-full h-full object-contain" />,
      title: "Zöld Gárdony Program",
      href: "/zold-gardony-program",
      color: "#ffffff",
      bgColor: "#2E4D58"
    },
    {
      icon: <img src="/media/enterprise.svg" alt="Vállalkozás és gazdaság" className="w-full h-full object-contain" />,
      title: "Vállalkozás és gazdaság",
      href: "/vallalkozas-gazdasag",
      color: "#ffffff",
      bgColor: "#007A6C"
    },
    {
      icon: <img src="/media/report.svg" alt="Hibabejelentés applikáció" className="w-full h-full object-contain" />,
      title: "Hibabejelentés applikáció",
      href: "/hibabejelentes-applikacio",
      color: "#000000ff",
      bgColor: "#A9C23F"
    }
  ]

  const sortedNews = useMemo(() => {
    return getNewsSorted()
  }, [])

  const [itemsPerView, setItemsPerView] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth

      if (width < 640) {
        setItemsPerView(1)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)

    return () => {
      window.removeEventListener("resize", updateItemsPerView)
    }
  }, [])

  useEffect(() => {
    const maxIndex = Math.max(sortedNews.length - itemsPerView, 0)
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [itemsPerView, sortedNews.length])

  const maxIndex = Math.max(sortedNews.length - itemsPerView, 0)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Lake Background */}
      <section className="relative pt-16 sm:pt-20 h-[60vh] min-h-[500px] sm:h-[70vh] sm:min-h-[600px] z-0 hero-bg">

        <div className="relative container h-full flex flex-col justify-center items-center text-center text-white px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-5xl xl:absolute xl:top-[220px] xl:left-[156px] xl:w-[1020px] xl:h-[197px] xl:text-left xl:items-start">

            <h1 className="font-bold mb-6 drop-shadow-2xl text-[#FFFFFF]">
              A Velencei-tó fővárosa
            </h1>
            <p className="text-body-lg mb-6 text-white/95 drop-shadow-lg max-w-4xl xl:mx-0 mx-auto">
              Természet, nyugalom, közösség – minden napra.            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center xl:justify-start items-stretch sm:items-center">
              <Link href="/turizmus" className="w-full sm:w-auto">
                <Button variant="heroPrimary" size="cta" className="w-full sm:w-[193px] font-medium" style={{ borderRadius: '9999px' }}>
                  Fedezd fel
                </Button>
              </Link>
              <Link href="/bemutatkozas" className="w-full sm:w-auto">
                <Button variant="heroAccent" size="cta" className="w-full sm:w-[201px] font-medium" style={{ borderRadius: '9999px' }}>
                  Programok
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
        {/* Single Wave at Bottom */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[100px]"
        >
<path d="M0,60 C360,-90 1080,230 1440,60 L1440,240 L0,240 Z" fill="#ffffff" />

        </svg>

        <style>{`
    @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
    @keyframes wave-float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .animate-wave-float {
      animation: wave-float 12s ease-in-out infinite;
    }
  `}</style>
      </section>


      {/* Menu System - CSS Grid with 2 columns */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gcolor:white">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent">
              Városi információk
            </h2>
            <p className="text-body-lg text-[#2C3E50] max-w-3xl mx-auto px-4">
              Ügyintézés, szolgáltatások, közösségi és városi információk – gyorsan, átláthatóan, Gárdonyiaknak és látogatóknak egyaránt.            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="no-underline"
              >
                {/* Smooth transform-based micro-interaction: scale only, no layout shift */}
                <div
                  className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border-0 shadow-lg h-full aspect-square flex items-center justify-center transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:scale-100 focus-visible:scale-100 active:scale-100"
                  style={{
                    backgroundColor: item.bgColor,
                    willChange: 'transform'
                  }}
                >
                  {/* Content */}
                  <div className="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center text-center h-full w-full">
                    {/* Icon with dynamic color */}
                    <div
                      className="mb-2 sm:mb-3"
                      style={{ color: item.color }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[18px] lg:text-[22px] font-bold mb-1 sm:mb-1.5 md:mb-2 leading-tight"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section with Waves */}
<div className="relative bg-[#B3D7D366] pt-[40px] pb-[40px]">

  {/* Top wave */}
  <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,40 C360,-40 1080,120 1440,40 L1440,0 L0,0 Z" fill="#ffffff" />
  </svg>

  <div className="container px-4 sm:px-6 sm:pt-24 md:pt-32 sm:pb-24 md:pb-32">
    <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6 md:gap-8">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#232B2E] leading-tight">
          Legfrissebb híreink
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000]">Fontos hírek és aktuális információk a város életéből.</p>
      </div>
    
    </div>

    <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
      <button
        type="button"
        onClick={handlePrev}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#2E4D58] bg-white text-[#2E4D58] flex items-center justify-center"
        aria-label="Korábbi hírek"
        disabled={currentIndex === 0}
        style={currentIndex === 0 ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </button>

      <div className="overflow-hidden flex-1">
        <div
          className="flex -mx-[12.5px]"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
            transition: "transform 300ms ease"
          }}
        >
          {sortedNews.map((news) => (
            <div
              key={news.id}
              className="flex-shrink-0 box-border px-[12.5px]"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Card className="h-full border-none shadow-lg rounded-xl overflow-hidden bg-white">
                <div className="relative h-[223px] overflow-hidden flex-shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm md:text-base px-3 py-1 sm:px-4 sm:py-2 bg-[#2E4D58] shadow-lg rounded-full" style={{ borderRadius: '9999px' }}>
                    {news.category}
                  </Badge>
                </div>

                <CardHeader className="flex-grow px-4 pt-4 pb-0 space-y-2">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Calendar className="w-6 h-6" />
                    <time className="text-[14px] leading-6 font-normal">{news.date}</time>
                  </div>
                  <CardTitle className="text-xl leading-tight m-0">
                    <h5 className="m-0">{news.title}</h5>
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-4 pb-4 pt-[15px] space-y-5">
                  <CardDescription className="w-[328px] text-base leading-6 font-normal line-clamp-3 m-0">
                    {news.excerpt}
                  </CardDescription>
                  <div className="flex justify-end">
                    <Link
                      href={`/hirek/${news.slug}`}
                      className="pt-10 flex items-center gap-2 text-[14px] leading-5 font-medium tracking-[0.1px] text-[#007A6C] no-underline"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Tovább olvasom
                      <img src="/media/arrow-right.svg" alt="" className="w-[10.56px] h-[10.56px]" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#2E4D58] bg-white text-[#2E4D58] flex items-center justify-center"
        aria-label="Régebbi hírek"
        disabled={currentIndex >= maxIndex}
        style={currentIndex >= maxIndex ? { opacity: 0.5, cursor: "not-allowed" } : undefined}
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
    <div className="flex justify-center mt-8">
      <Link href="/hirek" className="w-full md:w-auto">
        <Button
          className="flex items-center justify-center gap-2 w-[400px] text-[24px] font-bold tracking-[0px] text-[#007A6C] px-0 py-0"
          style={{ borderRadius: '9999px', height: '60px' }}
        >
          Elolvasom az összes hírt
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  </div>
   {/* Bottom wave */}
  <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,40 C360,-40 1080,120 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
  </svg>
</div>


      {/* Mayor's Welcome Message */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-10000">
            <Card className="max-w-6xl mx-auto shadow-2xl border-none overflow-hidden bg-gradient-to-br from-white to-white relative">

              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-[#2C7BA0] via-[#3D8B7C] to-[#2C7BA0]" />

              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] text-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">

                  {/* Mayor Image */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-2xl flex-shrink-0 ring-2 sm:ring-4 ring-white/30">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/professional-portrait-photograph-of-frie-320e4ad5-20251130135004.jpg"
                      alt={t('mayor.name')}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                    />
                  </div>

                  {/* Title + Name */}
                  <div className="text-center md:text-left">
                    <CardTitle className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-white drop-shadow-lg leading-tight">
                      {t('mayor.title')}
                    </CardTitle>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium mb-1 sm:mb-2">{t('mayor.name')}</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/85">{t('mayor.position')}</p>
                  </div>
                </div>
              </CardHeader>

              {/* Message Body */}
              <CardContent className="py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-14">
                <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2C3E50] text-center md:text-left">
                  {t('mayor.message')
                    .split('\n')
                    .filter(Boolean)
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                </div>
              </CardContent>

            </Card>
          </div>
        </div>
      </section>


      {/* About Gárdony */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />

        <div className="container relative px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
            <div >
              <Badge className="mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#2C7BA0]">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Gárdony
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-7 md:mb-8 bg-gradient-to-r from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent leading-tight">
                {t('city.title')}
              </h2>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="text-[#2C3E50]">{t('city.text1')}</p>
                <p className="text-[#2C3E50]">{t('city.text2')}</p>
                <p className="text-[#2C3E50]">{t('city.text3')}</p>
              </div>
              <div className="mt-8 sm:mt-10 md:mt-12">
                <Link href="/bemutatkozas">
                  <Button size="lg" className="gap-2 sm:gap-3 text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 h-auto shadow-xl hover:shadow-2xl active:shadow-lg transition-shadow min-h-[48px] touch-manipulation">
                    {t('city.details')}
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              {/* About cards: transform-only micro-interactions to avoid layout shift */}
              <Card className="group transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-2xl active:shadow-xl md:hover:scale-[1.00] focus-visible:scale-[1.00] bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#2C7BA0] mb-3 sm:mb-4" />
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent leading-tight">~10 300</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748B] font-semibold leading-snug">{t('city.population')}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl active:shadow-xl transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:scale-[1.00] focus-visible:scale-[1.00] bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <Calendar className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#3D8B7C] mb-3 sm:mb-4" />
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent leading-tight">1989</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748B] font-semibold leading-snug">{t('city.cityStatus')}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl active:shadow-xl transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:scale-[1.00] focus-visible:scale-[1.00] bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#2C7BA0] mb-3 sm:mb-4" />
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-[#2C7BA0] to-[#3D8B7C] bg-clip-text text-transparent leading-tight">50 km</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748B] font-semibold leading-snug">{t('city.fromBudapest')}</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl active:shadow-xl transform-gpu transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:scale-[1.00] focus-visible:scale-[1.00] bg-gradient-to-br from-white to-[#E8F4F8] border-none">
                <CardHeader className="p-4 sm:p-5 md:p-6">
                  <Waves className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#3D8B7C] mb-3 sm:mb-4" />
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-[#3D8B7C] to-[#2C7BA0] bg-clip-text text-transparent leading-tight">26 km²</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 md:p-6 pt-0">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#64748B] font-semibold leading-snug">{t('city.lakeArea')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Photo Divider
      <div className="relative h-64 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/beautiful-aerial-photograph-of-lake-vele-b7b9e9d0-20251130141514.jpg"
          alt="Lake Velence Beach"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div> */}





      {/* Office Hours Alert
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/subtle-water-ripple-texture-pattern-gent-2102391d-20251130141514.jpg)`,
            backgroundSize: 'cover'
          }}
        />
        <div className="container relative">
          <Alert variant="info" className="text-lg max-w-5xl mx-auto border-2 border-[#2C7BA0] bg-gradient-to-br from-white to-[#E8F4F8] shadow-xl [&>svg~*]:pl-15">
            <Info className="h-10 w-10 text-[#2C7BA0]" />
            <AlertTitle className="text-3xl mb-3 text-[#2C7BA0]">{t('office.title')}</AlertTitle>
            <AlertDescription className="text-xl text-[#2C3E50] leading-relaxed">
              {t('office.hours')}
            </AlertDescription>
          </Alert>
        </div>
      </section> */}

      {/* Footer Lake Image */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/8a61c27d-20d4-4ae4-95c9-b496e6be6b2f/generated_images/stunning-panoramic-photograph-of-lake-ve-06c1cbb8-20251130141513.jpg"
          alt="Lake Velence Sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
      </div>
    </div>
  )
}