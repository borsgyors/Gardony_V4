import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Orvosi rendelési idő változás | Gárdony",
  description: "Dr. Nagy Péter háziorvos rendelési idejének módosítása. Új rendelési naptár 2025. május 1-jétől.",
  keywords: ["Gárdony", "orvos", "háziorvos", "rendelési idő", "egészségügy"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
