import type { Metadata } from "next"
import "./globals.css"
import "./dauran.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollAnimator } from "@/components/scroll-animator"

export const metadata: Metadata = {
  title: "Dauran — Menutup Siklus. Rekayasa Nilai Residu.",
  description:
    "Platform closed-loop circular economy nasional. Mengonversi residu dan sampah terpilah menjadi produk material bernilai rekayasa tinggi dengan transparansi dampak karbon.",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <a className="skip-link" href="#main">
          Lewati ke konten utama
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollAnimator />
      </body>
    </html>
  )
}
