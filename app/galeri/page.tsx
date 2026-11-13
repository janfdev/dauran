"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, BookOpen, Layers, ArrowRight } from "lucide-react"

interface GalleryItem {
  id: string
  category: "produk" | "proses" | "edukasi"
  title: string
  subtitle: string
  formula?: string
  specs: { label: string; value: string }[]
  description: string
  tag: string
}

const ITEMS: GalleryItem[] = [
  {
    id: "paving-k250",
    category: "produk",
    title: "Eco-Paving K-250",
    subtitle: "Ubin Perkerasan Komposit Ramah Lingkungan",
    formula: "1,2 kg Plastik Residu + 3,8 kg Pasir Silika",
    specs: [
      { label: "Kekuatan Tekan", value: "25,4 MPa (SNI)" },
      { label: "Daya Serap Air", value: "< 4,5% (Kedap)" },
      { label: "Reduksi Karbon", value: "-3,42 kg CO2e" },
    ],
    description:
      "Ubin trotoar berdaya tekan tinggi tanpa kandungan semen Portland, memanfaatkan lelehan kresek dan sachet multilayer sebagai matriks pengikat agregat pasir.",
    tag: "Produk Teruji",
  },
  {
    id: "bio-kasgot",
    category: "produk",
    title: "Pupuk Bio-Kasgot Granul",
    subtitle: "Konsentrat Organik Bekas Maggot BSF",
    formula: "100% Residu Fermentasi Sisa Dapur Organik",
    specs: [
      { label: "Kadar N-P-K", value: "2,8% - 1,9% - 2,2%" },
      { label: "Bahan Organik", value: "> 45%" },
      { label: "Reduksi Karbon", value: "-5,80 kg CO2e / sak" },
    ],
    description:
      "Nutrisi tanah organik berpori mikro hasil cerna larva Black Soldier Fly atas limbah sisa sayur dan buah dapur perkotaan, mengembalikan kesuburan tanah alami.",
    tag: "Organik Murni",
  },
  {
    id: "ubin-hex",
    category: "produk",
    title: "Modul Dinding Heksagonal",
    subtitle: "Panel Modular Fasad & Taman Vertikal",
    formula: "100% Upcycle Kaleng Aluminium & Residu Polimer",
    specs: [
      { label: "Ketahanan Suhu", value: "> 450°C" },
      { label: "Bobot per Unit", value: "850 gram (Ringan)" },
      { label: "Daya Pakai", value: "> 15 Tahun" },
    ],
    description:
      "Panel interlock dinding luar tahan cuaca ekstrem dan sinar UV matahari tropis, dicetak presisi dengan sistem pengunci antar-modul tanpa adukan semen.",
    tag: "Arsitektural",
  },
  {
    id: "proses-pencacahan",
    category: "proses",
    title: "Tahap 01: Pencacahan Homogen Residu",
    subtitle: "Transformasi Mekanis Flakes 3-5mm",
    specs: [
      { label: "Kapasitas Mesin", value: "50 kg / jam" },
      { label: "Efisiensi Pisau", value: "Rotary Blade Baja" },
      { label: "Sortasi Manual", value: "Pembersihan Debu" },
    ],
    description:
      "Limbah plastik kresek dan botol yang disetor warga dicuci bersih, dikeringkan, dan dicacah menjadi serpihan mikro berukuran 3–5 mm untuk memastikan pencairan merata.",
    tag: "Proses Workshop",
  },
  {
    id: "proses-termal",
    category: "proses",
    title: "Tahap 02: Peleburan Termal Nir-Asap",
    subtitle: "Pemanasan Terkontrol 185°C",
    specs: [
      { label: "Suhu Reaktor", value: "185°C ± 3°C" },
      { label: "Emisi Gas Buang", value: "0% Pembakaran Terbuka" },
      { label: "Bahan Bakar", value: "Briket Biomassa Daun" },
    ],
    description:
      "Pencairan serpihan plastik dalam bejana tertutup dengan pemanas terisolasi untuk mencegah pelepasan gas dioksin, menghasilkan adonan polimer kental homogen.",
    tag: "Proses Workshop",
  },
  {
    id: "proses-cetak",
    category: "proses",
    title: "Tahap 03: Kompresi Tekan Hidrolik K-250",
    subtitle: "Pencetakan Presisi Padat",
    specs: [
      { label: "Tekanan Hidrolik", value: "250 bar (25 MPa)" },
      { label: "Waktu Cetak", value: "180 detik / siklus" },
      { label: "Pendinginan", value: "Water-bath Sirkular" },
    ],
    description:
      "Adonan komposit dimasukkan ke dalam cetakan baja presisi dan ditekan hidrolik berkekuatan 250 bar hingga memadat sempurna sebelum didinginkan di kolam resirkulasi.",
    tag: "Proses Workshop",
  },
  {
    id: "edukasi-3-wadah",
    category: "edukasi",
    title: "Panduan Pemilahan 3-Wadah di Rumah",
    subtitle: "Langkah Pertama Gerakan Zero-Waste",
    specs: [
      { label: "Wadah Hijau", value: "Sisa Makanan Organik" },
      { label: "Wadah Kuning", value: "Plastik & Botol Bersih" },
      { label: "Wadah Abu", value: "Residu Kering / Kertas" },
    ],
    description:
      "Kunci sukses daur ulang berawal dari dapur rumah tangga: memastikan sampah organik tidak membasahi plastik kering agar nilai guna dan higienitas material terjaga.",
    tag: "Panduan Praktis",
  },
  {
    id: "edukasi-cuci-pet",
    category: "edukasi",
    title: "Standar Sanitasi Residu Sebelum Setor",
    subtitle: "Menghindari Kontaminasi Bakteri",
    specs: [
      { label: "Bilas Cepat", value: "Air Bekas Cuci Tangan" },
      { label: "Remas Botol", value: "Hemat 80% Volume Ruang" },
      { label: "Lepas Tutup", value: "Sortasi Jenis Plastik" },
    ],
    description:
      "Membilas residu kemasan sekali pakai mencegah bau busuk dan perkembangbiakan belatung di tempat penampungan, memudahkan petugas drop-point melakukan penimbangan.",
    tag: "Panduan Praktis",
  },
]

export default function GaleriPage() {
  const [filter, setFilter] = React.useState<"semua" | "produk" | "proses" | "edukasi">("semua")

  const filteredItems =
    filter === "semua" ? ITEMS : ITEMS.filter((item) => item.category === filter)

  return (
    <div className="secondary-page wrap pb-24">
      {/* Header */}
      <div className="page-intro border-b border-[var(--line)] pb-12">
        <Link href="/" className="back-link font-mono text-xs">
          ← Kembali ke Beranda
        </Link>
        <p className="eyebrow mt-4">Katalog & Dokumentasi Teruji</p>
        <h1 className="mt-2 font-serif text-[clamp(44px,6vw,84px)] leading-tight text-[var(--ink)]">
          Galeri Transformasi, <br />
          <em className="text-[var(--accent)] font-normal">Produk & Edukasi Sirkular.</em>
        </h1>
        <p className="page-description max-w-[650px] text-sm text-[var(--muted)] leading-relaxed mt-4">
          Telusuri spesifikasi teknis produk olahan limbah teruji standar SNI, dokumentasi proses pencetakan
          bengkel daur ulang, serta panduan praktis memilah sampah mandiri.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center gap-3 border-b border-[var(--line)] pb-6 font-mono text-xs">
        <span className="text-[var(--muted)] mr-2">Filter Kategori:</span>
        <button
          onClick={() => setFilter("semua")}
          className={`rounded-lg border px-4 py-2 transition-colors ${
            filter === "semua"
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--forest)] font-semibold"
              : "border-[var(--line)] bg-[#0b241c] text-[var(--muted)] hover:text-[var(--ink)]"
          }`}
        >
          Semua Arsip (8)
        </button>
        <button
          onClick={() => setFilter("produk")}
          className={`rounded-lg border px-4 py-2 transition-colors ${
            filter === "produk"
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--forest)] font-semibold"
              : "border-[var(--line)] bg-[#0b241c] text-[var(--muted)] hover:text-[var(--ink)]"
          }`}
        >
          Katalog Produk Olahan (3)
        </button>
        <button
          onClick={() => setFilter("proses")}
          className={`rounded-lg border px-4 py-2 transition-colors ${
            filter === "proses"
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--forest)] font-semibold"
              : "border-[var(--line)] bg-[#0b241c] text-[var(--muted)] hover:text-[var(--ink)]"
          }`}
        >
          Proses Workshop (3)
        </button>
        <button
          onClick={() => setFilter("edukasi")}
          className={`rounded-lg border px-4 py-2 transition-colors ${
            filter === "edukasi"
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--forest)] font-semibold"
              : "border-[var(--line)] bg-[#0b241c] text-[var(--muted)] hover:text-[var(--ink)]"
          }`}
        >
          Panduan Edukasi (2)
        </button>
      </div>

      {/* Items Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[#0b241c] p-6 transition-all hover:border-[var(--accent)]/70 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="rounded-full border border-[var(--line)] bg-[#102b22] px-2.5 py-0.5 text-[var(--accent)]">
                  {item.tag}
                </span>
                <span className="text-[var(--muted)] uppercase">{item.category}</span>
              </div>

              <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">{item.title}</h3>
              <p className="mt-1 font-mono text-xs text-[var(--accent)]">{item.subtitle}</p>

              {item.formula && (
                <div className="mt-4 rounded-lg border border-[var(--line)]/60 bg-[#061812] p-3 font-mono text-[11px] text-[var(--ink)]">
                  <span className="text-[9px] uppercase text-[var(--muted)] block mb-1">Formula Konversi:</span>
                  {item.formula}
                </div>
              )}

              <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>

            {/* Specifications Box */}
            <div className="mt-6 border-t border-[var(--line)] pt-4 font-mono text-xs">
              <dl className="space-y-2">
                {item.specs.map((sp, idx) => (
                  <div key={idx} className="flex justify-between text-[11px]">
                    <dt className="text-[var(--muted)]">{sp.label}:</dt>
                    <dd className="font-semibold text-[var(--ink)]">{sp.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>

      {/* Action Banner */}
      <div className="mt-16 rounded-2xl border border-[var(--line)] bg-gradient-to-r from-[#102b22] to-[#0b241c] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-serif text-2xl text-[var(--ink)]">Ingin Memesan Produk Sirkular atau Menyetor Bahan?</h4>
          <p className="mt-1 text-xs text-[var(--muted)]">
            Kami melayani pengadaan paving K-250 untuk fasilitas publik dan penjemputan sampah terpilah instansi.
          </p>
        </div>
        <Link href="/contact" className="button shrink-0">
          <span>Hubungi Tim Kemitraan</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
