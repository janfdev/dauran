"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X, Recycle } from "lucide-react"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="site-header">
      <div className="nav-inner wrap">
        <Link className="brand" href="/" aria-label="Dauran home">
          <svg className="" viewBox="0 0 48 58" fill="none" aria-hidden="true">
            {/* Custom Circular Cycle Emblem */}
            <circle cx="24" cy="29" r="22" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 2" />
            <path
              d="M24 10V22M24 22L18 16M24 22L30 16"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38 34L28 40M28 40L30 32M28 40L34 44"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 34L20 40M20 40L18 44M20 40L22 32"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="29" r="3" fill="currentColor" />
          </svg>
          <span>
            Dauran<small>Rekayasa Nilai Residu</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/#alur">Alur Sirkular</Link>
          <Link href="/#spesimen">Spesimen 3D</Link>
          <Link href="/about">Tentang Kami</Link>
          <Link href="/galeri">Galeri & Produk</Link>
        </nav>

        <Link className="nav-cta" href="/contact">
          Mulai Dari Rumah <ArrowUpRight className="lucide lucide-arrow-up-right" size={16} />
        </Link>

        <button
          className="menu-trigger"
          aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!mobileOpen}
        style={{ display: mobileOpen ? "flex" : "none" }}
      >
        <Link href="/#alur" onClick={() => setMobileOpen(false)}>
          Alur Sirkular
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/#spesimen" onClick={() => setMobileOpen(false)}>
          Spesimen 3D
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>
          Tentang Kami
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/galeri" onClick={() => setMobileOpen(false)}>
          Galeri & Produk
          <ArrowUpRight size={19} />
        </Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>
          Mulai Dari Rumah
          <ArrowUpRight size={19} />
        </Link>
      </nav>
    </header>
  )
}
