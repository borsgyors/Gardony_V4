import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A legszebb konyhakertek program | Gárdony",
  description: "Gárdony város hagyományos 'A legszebb konyhakertek' versenyprogramja. Regisztrálj a kerted vagy terményed bemutatásához!",
  keywords: ["Gárdony", "verseny", "kertészet", "program", "zöldség"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
