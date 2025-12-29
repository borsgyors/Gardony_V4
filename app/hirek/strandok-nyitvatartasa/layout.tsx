import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Velencei-tó strandok nyitvatartása | Gárdony",
  description: "A Velencei-tó gárdonyi strandjainak nyitvatartási ideje és szolgáltatásai. Nyári szezontól május 1-től szeptember 30-ig.",
  keywords: ["Gárdony", "strand", "Velencei-tó", "nyitvatartás", "turizmus"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
