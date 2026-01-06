"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Waves, Landmark, TreePine, Bike, MapPin, Phone, Clock, DollarSign, Star, Navigation } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type Attraction = {
  id: string
  title: string
  description: string
  excerpt: string
  longDescription?: string
  category: "Strandok" | "Kultúra" | "Természet" | "Aktív"
  image: string
  gallery?: string[]
  tags: string[]
  location?: string
  address?: string
  phone?: string
  hours?: string
  openingHours?: string
  isPaid?: boolean
  features?: string[]
}

const attractions: Attraction[] = [
  // Strandok
  {
    id: "sport-beach",
    title: "Sport Beach",
    excerpt: "Modern strand sportpályákkal és vízparti élményekkel.",
    description: "A Sport Beach Gárdony egyik legmodernebb strandja, ahol a fürdőzés mellett aktív kikapcsolódásra is lehetőség nyílik.",
    longDescription: "A Sport Beach Gárdony egyik legmodernebb strandja, ahol a fürdőzés mellett aktív kikapcsolódásra is lehetőség nyílik. Röplabda, strandlabda pályák, vízparti fitnesz és szabadidős programok várják a vendégeket.\n\nA strand családbarát környezetet biztosít, modern öltözőkkel, zuhanyzókkal és tiszta mosdókkal. A büfében helyi ételek és italok kaphatók, a napozóterületek pedig kényelmesen berendezettek.\n\nAktív kikapcsolódást keresőknek röplabdapályák, strandlabda lehetőségek és vízparti fitnesz eszközök állnak rendelkezésre. Gyermekeknek játszótér és sekély vízű terület van kialakítva.",
    category: "Strandok",
    image: "/media/velenceito.jpg",
    gallery: ["/media/velenceito.jpg", "/media/velenceito.jpg", "/media/velenceito.jpg"],
    tags: ["Családbarát", "Sport", "Büfé"],
    location: "Gárdony, Velencei-tó",
    address: "Gárdony, Tópart utca 12.",
    hours: "Nyáron: 9:00-19:00",
    openingHours: "Június-augusztus: H-V 9:00-19:00",
    isPaid: true,
    features: ["Öltözők", "Zuhanyzók", "Parkoló", "Büfé"]
  },
  {
    id: "napsugár-strand",
    title: "Napsugár Strand",
    excerpt: "Nyugodt, természetközeli strand gyermekmedencével.",
    description: "A Napsugár Strand ideális választás családoknak és nyugalmat keresőknek. Sekély vízű gyerekmedence, füves napozórész és árnyékos pihenőhelyek jellemzik. A strand tiszta homokos partszakasszal rendelkezik, ahol biztonságosan fürödhetnek a gyerekek.",
    category: "Strandok",
    image: "/media/velenceito.jpg",
    tags: ["Családbarát", "Gyermekbarát", "Ingyenes parkolás"],
    location: "Gárdony, Tópart utca",
    hours: "Június-augusztus: 8:00-20:00"
  },
  {
    id: "agardi-termalfurdo",
    title: "Agárdi Termálfürdő",
    excerpt: "Gyógy- és wellness élmény termálvízzel, egész évben.",
    description: "Az Agárdi Gyógy- és Termálfürdő Gárdony legnagyobb fürdőkomplexuma, amely gyógyvizes medencéket, wellnessrészleget és családi élménymedencéket kínál.",
    longDescription: "Az Agárdi Gyógy- és Termálfürdő Gárdony legnagyobb és legmodernebb fürdőkomplexuma. A fürdő három fő részből áll: gyógyvizes medencék, wellnessrészleg és családi élménymedencék.\n\nA termálvíz 26-38°C hőmérsékletű, magas ásványianyag-tartalmú, különösen ajánlott mozgásszervi, reumatikus panaszok, ízületi gyulladások és poszttraumatikus állapotok kezelésére. A gyógyvizes medencék orvosi felügyelet mellett is használhatók.\n\nA wellnessrészleg finn szaunákat, infraszaunát, gőzfürdőt és pezsgőfürdőket kínál. Masszázs szolgáltatások és aromaterápiás kezelések is elérhetők.\n\nA családi részben élménymedencék, gyermekmedencék és csúszdák várják a látogatókat. Egész évben nyitva, fedett és szabadtéri medencékkel egyaránt.",
    category: "Strandok",
    image: "/media/AgardiFurdo.jpg",
    gallery: ["/media/AgardiFurdo.jpg", "/media/AgardiFurdo.jpg", "/media/AgardiFurdo.jpg"],
    tags: ["Gyógyvíz", "Wellness", "Egész évben nyitva"],
    location: "Agárd, Fürdő utca 1.",
    address: "Agárd, Fürdő utca 1., 2484",
    phone: "+36 22 579 120",
    hours: "Egész évben: 9:00-20:00",
    openingHours: "Hétfő-vasárnap: 9:00-20:00",
    isPaid: true,
    features: ["Akadálymentes", "Parkoló", "Étterem", "Öltözők", "Szauna"]
  },
  {
    id: "agardi-szabadstrand",
    title: "Agárdi Szabadstrand",
    excerpt: "Ingyenes, természetes tóparti strand.",
    description: "Az Agárdi Szabadstrand ingyenes belépést biztosít a Velencei-tó partjára. Természetes környezet, füves partszakasz és árnyékos fák jellemzik. Ideális választás azoknak, akik költséghatékonyan szeretnének strandolni a tóparton.",
    category: "Strandok",
    image: "/media/velenceito.jpg",
    tags: ["Ingyenes", "Kutyabarát", "Természetközeli"],
    location: "Agárd, Tópart"
  },
  // Kultúra
  {
    id: "gardonyi-haz",
    title: "Gárdonyi Géza Emlékház",
    excerpt: "Irodalmi emlékhely és múzeum a híres író szülőházában.",
    description: "A Gárdonyi Géza Emlékház Gárdony legfontosabb kulturális intézménye, ahol a híres magyar író életét és munkásságát ismerhetjük meg.",
    longDescription: "A Gárdonyi Géza Emlékház Gárdony legfontosabb kulturális intézménye, ahol a híres magyar író, az 'Egri Csillagok' szerzőjének életét és munkásságát ismerhetjük meg.\n\nAz emlékház az író eredeti lakóházában kapott helyet. A kiállítás eredeti bútorokkal, kéziratokkal, levelezéssel és személyes tárgyakkal mutatja be Gárdonyi Géza világát. Megtekinthetők első kiadású könyvek, fotók és dokumentumok.\n\nInteraktív kiállítások teszik élményszerűvé a látogatást: a digitális felületeken olvashatunk részleteket műveiből, meghallgathatunk hangfelvételeket és videókat nézhetünk az író életéről.\n\nAz emlékház rendszeresen szervez irodalmi esteket, könyvbemutatókat és gyermekprogramokat. Iskolai csoportok számára vezetett túrák és múzeumpedagógiai foglalkozások is elérhetők.",
    category: "Kultúra",
    image: "/media/GardonyiHaz.jpg",
    gallery: ["/media/GardonyiHaz.jpg", "/media/library.jpg", "/media/GardonyiHaz.jpg"],
    tags: ["Múzeum", "Irodalom", "Történelem"],
    location: "Gárdony, Gárdonyi Géza utca 2.",
    address: "Gárdony, Gárdonyi Géza utca 2., 2483",
    phone: "+36 22 570 245",
    hours: "Kedd-vasárnap: 10:00-18:00",
    openingHours: "Kedd-vasárnap: 10:00-18:00 (Hétfőn zárva)",
    isPaid: true,
    features: ["Vezetett túra", "Ajándékbolt", "Akadálymentes"]
  },
  {
    id: "dinnyesi-varpark",
    title: "Dinnyési Várpark",
    excerpt: "Történelmi makettpark és szabadtéri múzeum.",
    description: "A Dinnyési Várpark egyedülálló élményt nyújt: magyar történelmi várak és kastélyok kicsinyített másolatait tekinthetjük meg szabadtéri környezetben. A makettek között sétálva megismerhetjük Magyarország legfontosabb erődítményeit, míg a szomszédos skanzen a hagyományos paraszti életmódot mutatja be.",
    category: "Kultúra",
    image: "/media/varpark.jpg",
    tags: ["Családbarát", "Szabadtéri", "Oktatási"],
    location: "Dinnyés, Szabadság utca 34.",
    hours: "Április-október: 10:00-18:00"
  },
  {
    id: "ronkvar",
    title: "Rönkvár",
    excerpt: "Kalandpark és erdei játszótér fából készült építményekkel.",
    description: "A Rönkvár egy különleges kalandpark, amely természetes anyagokból épített várral, tornyokkal és játékokkal várja a családokat. Az építmények rönkökből és fából készültek, harmonikusan illeszkednek a természeti környezetbe. Ideális hely gyerekek számára felfedezésre és játékra.",
    category: "Kultúra",
    image: "/media/varpark.jpg",
    tags: ["Gyermekbarát", "Kaland", "Szabadtéri"],
    location: "Gárdony, erdős terület"
  },
  {
    id: "agardi-palinkafozde",
    title: "Agárdi Pálinkafőzde",
    excerpt: "Hagyományos pálinkakészítés bemutatója és kóstolója.",
    description: "Az Agárdi Pálinkafőzde a magyar pálinka kultúra helyi őrzője. Látogatók megtekinthetik a hagyományos pálinkafőzés folyamatát, megismerhetik a különböző gyümölcsök feldolgozását, és kóstolhatnak is a helyben készült pálinkákból. Helyi termékek vásárolhatók a látogatás végén.",
    category: "Kultúra",
    image: "/media/festival.jpg",
    tags: ["Helyi termék", "Kóstoló", "Hagyományőrzés"],
    location: "Agárd, Fő utca 45.",
    hours: "Előzetes egyeztetés alapján"
  },
  // Természet
  {
    id: "madardal-tanosveny",
    title: "Madárdal Tanösvény",
    excerpt: "Természetjáró útvonal madármegfigyelő pontokkal.",
    description: "A Madárdal Tanösvény vezetett séta a Velencei-tó természetvédelmi területén. Az útvonal mentén tájékoztató táblák ismertetik a helyi madárvilágot, madármegfigyelő tornyok biztosítanak kilátást a nádasokra és vízfelületre. Tavasszal és ősszel különösen gazdag a madárvilág.",
    category: "Természet",
    image: "/media/lud.jpg",
    tags: ["Túra", "Madármegfigyelés", "Oktatási"],
    location: "Gárdony, természetvédelmi terület",
    hours: "Napkeltétől napnyugtáig"
  },
  {
    id: "chernel-madarvarta",
    title: "Chernel István Madárvárta",
    excerpt: "Kilátótorony a Velencei-tó fölött madárleséshez.",
    description: "A Chernel István Madárvárta egy modern madármegfigyelő torony, ahonnan páratlan kilátás nyílik a Velencei-tó vízfelületére és nádasaira. A toronyból távcsővel kiválóan megfigyelhetők a vízimadarak, különösen a költési és vonulási időszakban. Ingyenesen látogatható.",
    category: "Természet",
    image: "/media/lud.jpg",
    tags: ["Ingyenes", "Madármegfigyelés", "Kilátó"],
    location: "Pázmánd, természetvédelmi terület"
  },
  // Aktív
  {
    id: "to-kor-kerekparut",
    title: "Tó-kör kerékpárút",
    excerpt: "62 km-es kerékpárút a Velencei-tó körül.",
    description: "A Tó-kör kerékpárút Magyarország egyik legszebb és legnépszerűbb kerékpáros útvonala. A 62 km-es aszfaltozott út körbeér a Velencei-tavat, végig lenyűgöző tóparti panorámát kínálva. Az útvonal nagy része lapos, így családokkal és kezdőkkel is teljesíthető. Pihenőhelyek, büfék és kerékpárkölcsönzők várják a kerékpárosokat.",
    category: "Aktív",
    image: "/media/biciklis.jpg",
    tags: ["Kerékpározás", "Családbarát", "Túra"],
    location: "Velencei-tó körül",
    hours: "Egész évben"
  }
]

const categories = [
  { id: "all", label: "Összes", icon: MapPin },
  { id: "Strandok", label: "Strandok", icon: Waves },
  { id: "Kultúra", label: "Kultúra", icon: Landmark },
  { id: "Természet", label: "Természet", icon: TreePine },
  { id: "Aktív", label: "Aktív", icon: Bike }
]

export default function AttractionsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const filteredAttractions = activeCategory === "all" 
    ? attractions 
    : attractions.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Wave */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#B3D7D366] pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden">
        {/* Top wave */}
        <svg className="absolute top-0 left-0 w-full h-12 sm:h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,-40 1080,120 1440,40 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>

        <div className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#232B2E]">
              Látnivalók és Élmények
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#2E4D58] max-w-2xl mx-auto">
              Fedezd fel Gárdony és a Velencei-tó legszebb helyeit! Strandok, kulturális látnivalók, természeti csodák és aktív programok várnak rád.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <svg className="absolute bottom-0 left-0 w-full h-12 sm:h-24" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,-40 1080,120 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </section>

      {/* Filter Bar */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 sm:py-12 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-3 sm:gap-4 justify-center items-center overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const IconComponent = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <Button
                  key={cat.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 whitespace-nowrap ${
                    isActive 
                      ? "bg-[#007A6C] hover:bg-[#006358] text-white" 
                      : "border-[#007A6C] text-[#007A6C] hover:bg-[#007A6C]/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {cat.label}
                </Button>
              )
            })}
          </div>
          <p className="text-center mt-4 text-sm text-[#64748B]">
            {filteredAttractions.length} látnivaló található
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredAttractions.map((attraction) => (
              <Card key={attraction.id} className="h-full border-none shadow-lg rounded-xl overflow-hidden bg-white flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 bg-[#2E4D58] shadow-lg rounded-full">
                    {attraction.category}
                  </Badge>
                </div>

                <CardHeader className="flex-grow px-4 sm:px-5 pt-4 pb-2">
                  <CardTitle className="text-xl sm:text-2xl leading-tight mb-2">
                    {attraction.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {attraction.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-sm border-[#007A6C] text-[#007A6C] px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="px-4 sm:px-5 pb-4 pt-0 flex flex-col flex-1">
                  <CardDescription className="text-sm sm:text-base leading-6 line-clamp-3 mb-4 flex-1">
                    {attraction.excerpt}
                  </CardDescription>
                  <Button 
                    onClick={() => setSelectedAttraction(attraction)}
                    className="w-full bg-[#007A6C] hover:bg-[#006358] text-white mt-auto"
                  >
                    Tovább a részletekre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedAttraction} onOpenChange={() => setSelectedAttraction(null)}>
        <DialogContent className="!max-w-[70vw] w-[70vw] max-h-[90vh] overflow-y-auto p-8">
          {selectedAttraction && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl sm:text-4xl font-bold text-[#232B2E] mb-3">
                  {selectedAttraction.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#2E4D58] text-white">{selectedAttraction.category}</Badge>
                  {selectedAttraction.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#007A6C] text-[#007A6C]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedAttraction.image}
                  alt={selectedAttraction.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1000px"
                />
              </div>

              <DialogDescription className="text-base sm:text-lg leading-7 text-[#374151] mb-8 whitespace-pre-line">
                {selectedAttraction.longDescription || selectedAttraction.description}
              </DialogDescription>

              {/* Image Gallery */}
              {selectedAttraction.gallery && selectedAttraction.gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-4">Galéria</h3>
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                    {selectedAttraction.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedImage(img)
                          setSelectedImageIndex(idx)
                        }}
                        className="relative h-32 sm:h-40 rounded-lg overflow-hidden cursor-pointer group"
                      >
                        <Image
                          src={img}
                          alt={`${selectedAttraction.title} ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-200"
                          sizes="300px"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Info Grid */}
              <div className="bg-[#F7F6F2] rounded-2xl p-6 sm:p-8 space-y-5">
                <h3 className="text-xl font-bold text-[#1F2937] mb-4">Hasznos információk</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {selectedAttraction.address && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-[#007A6C] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#1F2937] mb-1">Cím</p>
                        <p className="text-sm text-[#64748B]">{selectedAttraction.address}</p>
                      </div>
                    </div>
                  )}

                  {selectedAttraction.openingHours && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-[#007A6C] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#1F2937] mb-1">Nyitvatartás</p>
                        <p className="text-sm text-[#64748B]">{selectedAttraction.openingHours}</p>
                      </div>
                    </div>
                  )}

                  {selectedAttraction.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-[#007A6C] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#1F2937] mb-1">Telefon</p>
                        <p className="text-sm text-[#64748B]">{selectedAttraction.phone}</p>
                      </div>
                    </div>
                  )}

                  {selectedAttraction.isPaid !== undefined && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-[#007A6C] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-[#1F2937] mb-1">Belépő</p>
                        <p className="text-sm text-[#64748B]">
                          {selectedAttraction.isPaid ? "Fizetős" : "Ingyenes"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {selectedAttraction.features && selectedAttraction.features.length > 0 && (
                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-[#007A6C] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-[#1F2937] mb-3">Extrák</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedAttraction.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-base border-[#007A6C] text-[#007A6C] px-4 py-2">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    className="w-full sm:w-auto bg-[#007A6C] hover:bg-[#006358] text-white text-base px-8 py-6"
                    onClick={() => {
                      const address = encodeURIComponent(selectedAttraction.address || selectedAttraction.location || selectedAttraction.title)
                      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
                    }}
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Útvonaltervezés
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox Dialog for Gallery Images */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="!max-w-[85vw] w-[85vw] max-h-[95vh] p-0 bg-black/95 border-none flex flex-col">
          {selectedImage && selectedAttraction?.gallery && (
            <div className="relative w-full h-full flex flex-col items-center justify-center px-4 pt-12 pb-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Bezárás"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Main Image */}
              <div className="relative w-full flex-1 flex items-center justify-center mb-4">
                <Image
                  src={selectedImage}
                  alt="Nagyított kép"
                  width={1200}
                  height={800}
                  className="w-full h-full max-h-[75vh] object-contain"
                  priority
                />
              </div>

              {/* Thumbnail Gallery at Bottom */}
              <div className="w-full">
                <div className="flex gap-2 justify-center overflow-x-auto">
                  {selectedAttraction.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedImage(img)
                        setSelectedImageIndex(idx)
                      }}
                      className={`relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                        idx === selectedImageIndex
                          ? "ring-2 ring-white"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
