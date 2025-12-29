import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tájékoztatás munkarendváltozásról | Gárdony",
  description: "Tájékoztatás a Polgármesteri Hivatal ügyfélfogadási rendjének módosításáról. Új nyitva tartási időpontok 2025. áprilisától.",
  keywords: ["Gárdony", "polgármesteri hivatal", "ügyfélfogadás", "munkarend"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
