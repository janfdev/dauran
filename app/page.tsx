import Link from "next/link"
import { ArrowUpRight, ArrowDown, ShieldCheck, Cpu, RefreshCw, Box, Trees, Sparkles } from "lucide-react"
import { ThreeSpecimenViewer } from "@/components/three-specimen"
import { AnatomyRig } from "@/components/anatomy-rig"

export default function HomePage() {
  return (
    <div>
      {/* ── HERO SECTION (PERFECTLY CENTERED) ── */}
      <section className="relative flex min-h-[96svh] flex-col justify-between items-center pt-[125px] pb-8 overflow-hidden">
        {/* Ambient Gradient Glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(191,211,163,0.12),transparent_70%)]" />
        <div className="hero-shade pointer-events-none" />

        {/* Center Content Box */}
        <div className="wrap relative z-10 my-auto flex flex-1 flex-col items-center justify-center text-center py-6">
          <p className="eyebrow inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[#0b241c]/60 px-4 py-1.5 backdrop-blur-xs">
            <span className="seed-dot" />
            00 / Inisiatif Desentralisasi Zero-Waste Nasional
          </p>

          <h1 className="mt-7 font-serif text-[clamp(48px,8vw,115px)] leading-[0.92] tracking-[-0.04em] text-[var(--ink)]">
            <span>Ubah Residu Menjadi,</span>
            <em className="mt-2 block text-[var(--accent)] font-normal">Nilai Baru.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-sm leading-relaxed text-[#c1cbc2] sm:text-base">
            Dauran adalah ekosistem ekonomi sirkular terpadu: mentransformasi timbunan limbah anorganik
            dan organik rumah tangga menjadi material rekayasa berkualitas tinggi, transparan, dan teruji laboratorium.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#spesimen" className="button">
              <span>Uji Spesimen 3D</span>
              <ArrowDown size={16} />
            </a>
            <Link href="/galeri" className="button button-outline">
              <span>Katalog Produk Sirkular</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Live Telemetry Ticker (Anchored at Bottom of Hero) */}
        <div className="wrap relative z-10 w-full border-t border-[var(--line)] pt-5 pb-2">
          <div className="grid grid-cols-2 gap-4 text-left sm:grid-cols-4 font-mono">
            <div>
              <span className="text-[10px] uppercase text-[var(--muted)]">Limbah Terkelola</span>
              <p className="text-xl font-bold text-[var(--ink)]">48.200 kg</p>
              <span className="text-[10px] text-[var(--accent)]">Residu Anorganik & Organik</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[var(--muted)]">Eco-Paving Tercetak</span>
              <p className="text-xl font-bold text-[var(--accent)]">12.400 Unit</p>
              <span className="text-[10px] text-[var(--muted)]">Standar Mutu K-250</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[var(--muted)]">Reduksi Emisi Karbon</span>
              <p className="text-xl font-bold text-emerald-400">-38,5 Ton</p>
              <span className="text-[10px] text-[var(--muted)]">Net CO2e Avoided</span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[var(--muted)]">Pohon Ditanam</span>
              <p className="text-xl font-bold text-[var(--ink)]">2.850 Bibit</p>
              <span className="text-[10px] text-[var(--accent)]">Hasil Konversi Poin Warga</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: INTERACTIVE 3D THREE.JS SPECIMEN VIEWER ── */}
      <section id="spesimen" className="section-pad wrap border-t border-[var(--line)]">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="section-heading">
            <p className="eyebrow">01 / Rekayasa Material & Visualisasi 3D</p>
            <h2>
              Sentuh & Periksa, <br />
              <em>Spesimen Material Sirkular.</em>
            </h2>
          </div>
          <p className="section-description">
            Render 3D real-time interaktif berbasis Three.js. Putar 360 derajat untuk mengamati tekstur,
            sudut potong, dan integritas struktural produk hilir hasil rekayasa limbah.
          </p>
        </div>

        <ThreeSpecimenViewer />
      </section>

      {/* ── SECTION 2: INTERACTIVE ANATOMY RIG ── */}
      <section className="section-pad wrap border-t border-[var(--line)]">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="section-heading">
            <p className="eyebrow">02 / Eksplorasi Mesin & Anatomi Cetak</p>
            <h2>
              Bagaimana Residu Ditekan, <br />
              <em>Menjadi Ubin Padat K-250.</em>
            </h2>
          </div>
          <p className="section-description">
            Simulasi interaktif hidrolik dan perlakuan termal. Geser bobot limbah untuk melihat pergerakan
            piston cetak, dial gauge tekanan, dan taksiran reduksi emisi karbon secara langsung.
          </p>
        </div>

        <AnatomyRig />
      </section>

      {/* ── SECTION 3: THE 4-STAGE CLOSED-LOOP JOURNEY ── */}
      <section id="alur" className="section-pad wrap border-t border-[var(--line)]">
        <div className="section-heading mb-12">
          <p className="eyebrow">03 / Alur Kerja Ekonomi Sirkular</p>
          <h2>
            Empat Tahapan Nilai. <br />
            <em>Dari Hulu Hingga Berdaya.</em>
          </h2>
          <p className="section-description">
            Rantai pasok tertutup yang menjamin setiap gram sampah terpilah memiliki jejak audit transparan
            tanpa ada yang berakhir di tempat pembuangan akhir (TPA).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-[var(--line)] bg-[#0b241c] p-6 transition-colors hover:border-[var(--accent)]">
            <span className="font-serif text-3xl text-[var(--accent)]">01</span>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Sortasi di Sumber
            </p>
            <h3 className="mt-2 text-xl font-normal text-[var(--ink)]">Pemilahan 3 Kategori</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Warga dan instansi memisahkan limbah dapur organik, plastik bernilai, dan residu kering.
              Pemberian barcode batch memastikan sumber asal terlacak.
            </p>
            <div className="mt-6 border-t border-[var(--line)] pt-3 font-mono text-[10px] text-[var(--accent)]">
              Input: Organik & Plastik Rumah
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-[var(--line)] bg-[#0b241c] p-6 transition-colors hover:border-[var(--accent)]">
            <span className="font-serif text-3xl text-[var(--accent)]">02</span>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Logistik Terdesentralisasi
            </p>
            <h3 className="mt-2 text-xl font-normal text-[var(--ink)]">Drop-Point Terverifikasi</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Penyetoran melalui 4 posko hub komunitas dengan timbangan digital presisi tinggi. Setiap kilo
              dikonversi langsung menjadi poin hijau dan saldo bibit pohon.
            </p>
            <div className="mt-6 border-t border-[var(--line)] pt-3 font-mono text-[10px] text-[var(--accent)]">
              Sistem: TITO (Trash In Trash Out)
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-[var(--line)] bg-[#0b241c] p-6 transition-colors hover:border-[var(--accent)]">
            <span className="font-serif text-3xl text-[var(--accent)]">03</span>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Rekayasa Termal & Hayati
            </p>
            <h3 className="mt-2 text-xl font-normal text-[var(--ink)]">Transformasi Nilai</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Plastik dicacah dan dilelehkan pada suhu 185°C menjadi polimer pengikat agregat pasir, sementara
              limbah organik diurai tuntas dalam biopon larva Black Soldier Fly.
            </p>
            <div className="mt-6 border-t border-[var(--line)] pt-3 font-mono text-[10px] text-[var(--accent)]">
              Emisi Tambahan: 0% Pembakaran
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative rounded-2xl border border-[var(--line)] bg-[#0b241c] p-6 transition-colors hover:border-[var(--accent)]">
            <span className="font-serif text-3xl text-[var(--accent)]">04</span>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Dampak Terdistribusi
            </p>
            <h3 className="mt-2 text-xl font-normal text-[var(--ink)]">Produk Ramah Lingkungan</h3>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
              Menghasilkan Eco-Paving K-250 untuk trotoar dan taman publik, pupuk hayati kasgot, serta modul
              dinding hijau yang disalurkan kembali ke ruang publik perkotaan.
            </p>
            <div className="mt-6 border-t border-[var(--line)] pt-3 font-mono text-[10px] text-[var(--accent)]">
              Hasil: Paving, Pupuk & Pohon
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FEATURED UPCYCLED PRODUCTS ── */}
      <section className="section-pad wrap border-t border-[var(--line)]">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="section-heading">
            <p className="eyebrow">04 / Katalog Pilihan</p>
            <h2>
              Hasil Nyata. <br />
              <em>Bukan Sekadar Wacana.</em>
            </h2>
          </div>
          <Link href="/galeri" className="text-link">
            <span>Lihat seluruh katalog</span>
            <span className="arrow-circle">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Product 1 */}
          <div className="group rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#102b22] to-[#081d17] p-6 transition-all hover:border-[var(--accent)]/60">
            <div className="flex justify-between font-mono text-[10px] text-[var(--muted)]">
              <span>01 / SERI KONSTRUKSI</span>
              <span className="text-[var(--accent)]">SNI 03-0691</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">Eco-Paving K-250</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Pengganti paving konvensional dengan daya tahan beban 25,4 MPa. Formula 1 unit mengikat 1,2 kg
              residu plastik kresek dan sachet.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-xs">
              <span className="text-[var(--muted)]">Harga Subsidi</span>
              <span className="font-bold text-[var(--accent)]">Rp 3.500 / buah</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#102b22] to-[#081d17] p-6 transition-all hover:border-[var(--accent)]/60">
            <div className="flex justify-between font-mono text-[10px] text-[var(--muted)]">
              <span>02 / SERI BIOLOGIS</span>
              <span className="text-[var(--accent)]">ORGANIK ALAMI</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">Pupuk Bio-Kasgot</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Pupuk organik granul dari kotoran maggot BSF. Meningkatkan struktur tanah, menjaga kelembapan mikro,
              dan memulihkan unsur hara alami.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-xs">
              <span className="text-[var(--muted)]">Kemasan 5 kg</span>
              <span className="font-bold text-[var(--accent)]">Rp 25.000 / sak</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#102b22] to-[#081d17] p-6 transition-all hover:border-[var(--accent)]/60">
            <div className="flex justify-between font-mono text-[10px] text-[var(--muted)]">
              <span>03 / SERI MODULAR</span>
              <span className="text-[var(--accent)]">TAHAN CUACA</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">Ubin Taman Heksagonal</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              Modul penutup tanah berpori resapan tinggi untuk pekarangan rumah dan jalur pedestrian taman,
              dibuat dari peleburan kaleng dan polimer komposit.
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4 font-mono text-xs">
              <span className="text-[var(--muted)]">Harga Komunitas</span>
              <span className="font-bold text-[var(--accent)]">Rp 12.000 / unit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLOSING HERO CTA ── */}
      <section className="section-pad wrap border-t border-[var(--line)]">
        <div className="rounded-3xl border border-[var(--line)] bg-gradient-to-r from-[#102b22] via-[#0b241c] to-[#061812] p-8 sm:p-14 text-center">
          <p className="eyebrow mx-auto">Mari Mengambil Peran Nyata</p>
          <h2 className="mx-auto mt-4 max-w-[700px] text-[clamp(36px,5vw,70px)] font-serif leading-tight text-[var(--ink)]">
            Tutup Siklus Limbah, <br />
            <em className="text-[var(--accent)] font-normal">Mulai Dari Rumah Anda.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-sm text-[var(--muted)]">
            Daftarkan rumah tangga atau komunitas Anda ke dalam jaringan drop-point Dauran untuk
            mengonversi sampah harian menjadi material bernilai dan pohon nyata.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="button">
              <span>Daftar / Setor Sampah Sekarang</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
