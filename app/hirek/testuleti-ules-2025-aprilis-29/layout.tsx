import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testületi ülés 2025. április 29. | Gárdony",
  description: "A Gárdonyi Önkormányzat Képviselő-testületének nyilvános ülése 2025. április 29-én 17:00 órakor. Nyilvános esemény, amit bárki megtekinthet.",
  keywords: ["Gárdony", "önkormányzat", "testületi ülés", "közgyűlés"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
