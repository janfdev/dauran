import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Target, ShieldCheck, Users, BarChart3, Globe2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami — Dauran",
  description:
    "Latar belakang, visi 2030, dan tiga pilar tata kelola ekonomi sirkular desentralisasi Dauran dalam menyelesaikan krisis sampah nasional.",
}

export default function AboutPage() {
  return (
    <div className="secondary-page wrap pb-24">
      {/* Page Header */}
      <div className="page-intro border-b border-[var(--line)] pb-12">
        <Link href="/" className="back-link font-mono text-xs">
          ← Kembali ke Beranda
        </Link>
        <p className="eyebrow mt-4">Inisiatif & Profil Organisasi</p>
        <h1 className="mt-2 font-serif text-[clamp(44px,6vw,84px)] leading-tight text-[var(--ink)]">
          Membangun Ekosistem Sirkular, <br />
          <em className="text-[var(--accent)] font-normal">Dari Hulu Hingga Berdaya.</em>
        </h1>
        <p className="page-description max-w-[650px] text-sm text-[var(--muted)] leading-relaxed mt-4">
          Dauran lahir dari kesadaran bahwa model linear kumpul-angkut-buang telah gagal menghentikan
          krisis sampah di Indonesia. Kami merekayasa rantai pasok baru yang mengubah beban limbah menjadi
          aset material berdaya saing tinggi.
        </p>
      </div>

      {/* Latar Belakang Krisis */}
      <section className="section-pad border-b border-[var(--line)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">01 / Latar Belakang Krisis</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[var(--ink)]">
              Realitas 70 Juta Ton <br />
              <em className="text-[var(--accent)] font-normal">Limbah Tanpa Solusi Hilir.</em>
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] lg:col-span-7">
            <p>
              Setiap tahunnya, Indonesia menghasilkan lebih dari 70 juta ton sampah. Dari angka tersebut,
              lebih dari <strong>65% sampah perkotaan berakhir tercampur di TPA</strong> tanpa pemilahan awal yang terstandarisasi.
              Kapasitas TPA di kota-kota besar diproyeksikan mengalami saturasi total sebelum 2030.
            </p>
            <p>
              Masyarakat kerap kali kehilangan motivasi untuk memilah di rumah karena tidak adanya transparansi:
              sampah yang sudah dipilah seringkali kembali dicampur saat pengangkutan armada truk konvensional.
              Dauran memutus rantai tersebut melalui sistem keterlacakan digital dan pabrikasi mandiri di tingkat komunitas.
            </p>
          </div>
        </div>

        {/* 3 Metric Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 font-mono">
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-6">
            <span className="text-[10px] uppercase text-[var(--muted)]">Timbunan Sampah Nasional</span>
            <p className="mt-2 text-2xl font-bold text-[var(--ink)]">70,2 Juta Ton</p>
            <span className="text-xs text-rose-400">Per tahun di Indonesia</span>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-6">
            <span className="text-[10px] uppercase text-[var(--muted)]">Tercampur Tanpa Olah</span>
            <p className="mt-2 text-2xl font-bold text-amber-400">65,8%</p>
            <span className="text-xs text-[var(--muted)]">Langsung ke timbunan TPA</span>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-6">
            <span className="text-[10px] uppercase text-[var(--muted)]">Target Dauran 2030</span>
            <p className="mt-2 text-2xl font-bold text-[var(--accent)]">0% TPA</p>
            <span className="text-xs text-emerald-400">Closed-Loop Desentralisasi</span>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Tata Kelola */}
      <section className="section-pad border-b border-[var(--line)]">
        <div className="mb-12">
          <p className="eyebrow">02 / Prinsip Kerja</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-[var(--ink)]">
            Tiga Pilar Tata Kelola <br />
            <em className="text-[var(--accent)] font-normal">Ekonomi Sirkular Dauran.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--line)] bg-[#0b241c] p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[#102b22] text-[var(--accent)]">
              <BarChart3 size={24} />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">1. Traceability</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Setiap kantong sampah terpilah diberi kode batch dan ditimbang secara digital di posko drop-point.
              Warga dan instansi mitra dapat memantau pergerakan fisik sampah mereka dari timbangan hingga menjadi produk jadi.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[#0b241c] p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[#102b22] text-[var(--accent)]">
              <Target size={24} />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">2. Circularity</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Prinsip zero-waste hakiki: residu plastik komposit diformulasikan menjadi paving K-250 tahan cuaca yang
              dapat dihancurkan dan dicetak ulang tanpa penurunan kekuatan struktural jika masa pakainya selesai.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-[#0b241c] p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-xl border border-[var(--line)] bg-[#102b22] text-[var(--accent)]">
              <Users size={24} />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">3. Community Equity</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Nilai tambah ekonomi tidak tersentralisasi pada korporasi besar. Saldo penukaran sampah disalurkan
              kembali ke warga dalam bentuk bibit pohon penghijauan, sembako bersubsidi, dan upah perajin bengkel daur ulang.
            </p>
          </div>
        </div>
      </section>

      {/* Tim & Laboratorium Inisiatif */}
      <section className="section-pad">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="section-heading">
            <p className="eyebrow">03 / Kolaborasi & Tim</p>
            <h2>
              Didukung Peneliti, <br />
              <em>Komunitas & Pengrajin Lokal.</em>
            </h2>
          </div>
          <p className="section-description">
            Dauran digerakkan oleh gabungan mahasiswa rekayasa material, pegiat lingkungan perkotaan,
            dan jejaring bank sampah unit berdedikasi tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 font-mono">
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-5">
            <span className="text-[10px] text-[var(--accent)]">DIVISI REKAYASA MATERIAL</span>
            <p className="mt-2 font-serif text-lg text-[var(--ink)] font-normal">Lab Polimer Sirkular</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Riset formula pencampuran limbah kresek & agregat pasir standar SNI.</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-5">
            <span className="text-[10px] text-[var(--accent)]">DIVISI BIOTEKNOLOGI</span>
            <p className="mt-2 font-serif text-lg text-[var(--ink)] font-normal">Unit Biokonversi BSF</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Optimasi pembiakan maggot Black Soldier Fly untuk urai sampah organik dapur.</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-5">
            <span className="text-[10px] text-[var(--accent)]">JARINGAN LAPANGAN</span>
            <p className="mt-2 font-serif text-lg text-[var(--ink)] font-normal">4 Hub Drop-Point</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Pengelola titik timbang dan edukasi pemilahan hulu langsung ke warga.</p>
          </div>
          <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-5">
            <span className="text-[10px] text-[var(--accent)]">DIVISI TEKNOLOGI</span>
            <p className="mt-2 font-serif text-lg text-[var(--ink)] font-normal">Platform EcoDigital</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Pengembangan sistem pelacak digital dan telemetri kalkulator karbon.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
