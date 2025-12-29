import { SearchItem } from "@/components/search/CommandPalette"

// Egyszerű, oldal-tartalmakra épített minta adathalmaz a CommandPalette-hez
export const commandPaletteData: SearchItem[] = [
  {
    id: "page-home",
    title: "Főoldal",
    type: "page",
    description: "Gárdony hivatalos városi oldala és fő hírei.",
    link: "/",
  },
  {
    id: "page-turizmus",
    title: "Turizmus",
    type: "page",
    description: "Programok, strand, vízisportok és látnivalók a Velencei-tónál.",
    link: "/turizmus",
  },
  {
    id: "page-szallas",
    title: "Szállás & Vendéglátás",
    type: "service",
    description: "Szálláslehetőségek, éttermek és helyi vendéglátás.",
    link: "/szallas-vendeglatas",
  },
  {
    id: "page-szolgaltatasok",
    title: "Szolgáltatások",
    type: "service",
    description: "Önkormányzati és városi szolgáltatások áttekintése.",
    link: "/szolgaltatasok",
  },
  {
    id: "page-dokumentumok",
    title: "Dokumentumok",
    type: "page",
    description: "Letölthető rendeletek, nyomtatványok és tájékoztatók.",
    link: "/dokumentumok",
  },
  {
    id: "page-hirek",
    title: "Hírek",
    type: "news",
    description: "Friss városi hírek, közlemények és események.",
    link: "/hirek",
  },
  {
    id: "event-csaladi-nap",
    title: "Gárdonyi Családi Nap",
    type: "event",
    description: "Nyári családi programok a város központjában.",
    link: "/hirek#family-day",
  },
  {
    id: "service-strand",
    title: "Gárdony Strand",
    type: "service",
    description: "Nyitvatartás, belépők és vízparti programok.",
    link: "/turizmus#strand",
  },
  {
    id: "service-vizisport",
    title: "Vízisport lehetőségek",
    type: "service",
    description: "Vitorlázás, szörfözés és kajak a Velencei-tavon.",
    link: "/turizmus#vizisport",
  },
  {
    id: "service-parkolas",
    title: "Parkolási információ",
    type: "service",
    description: "Parkolóhelyek és szabályok Gárdonyban.",
    link: "/szolgaltatasok#parking",
  },
]
