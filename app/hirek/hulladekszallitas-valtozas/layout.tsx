import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hulladékszállítási változások | Gárdony",
  description: "A Gárdony város hulladékszállítási rendjének módosítása. Új szállítási naptár és szelektív hulladékgyűjtés információ.",
  keywords: ["Gárdony", "hulladékszállítás", "szelektív gyűjtés", "közszolgáltatás"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
