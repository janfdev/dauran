import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-intro">
            <Link className="brand" href="/" aria-label="Dauran home">
              <svg className="" viewBox="0 0 48 58" fill="none" aria-hidden="true">
                <circle cx="24" cy="29" r="22" stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 2" />
                <path
                  d="M24 10V22M24 22L18 16M24 22L30 16"
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
            <p>
              Inisiatif desentralisasi ekonomi sirkular nasional.
              <br />
              Menutup siklus limbah menjadi material bernilai rekayasa tinggi.
            </p>
          </div>
          <div className="footer-links">
            <p className="eyebrow">Navigasi</p>
            <Link href="/about">Tentang Kami & Misi</Link>
            <Link href="/galeri">Katalog Produk Sirkular</Link>
            <Link href="/#alur">Alur 4-Tahap Waste-to-Value</Link>
          </div>
          <div className="footer-links">
            <p className="eyebrow">Kemitraan & Aksi</p>
            <Link href="/contact">Daftar Drop-Point</Link>
            <Link href="/contact">
              Formulir Penyetoran
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          dauran<span>✳</span>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dauran. Inisiatif EcoDigital for Environment.</span>
          <Link href="/about">Kepatuhan Transparansi Lingkungan</Link>
        </div>
      </div>
    </footer>
  )
}
