"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Mail, Clock, CheckCircle2, ChevronDown } from "lucide-react"

interface DropPoint {
  id: string
  name: string
  location: string
  address: string
  hours: string
  accepted: string
  pic: string
}

const DROP_POINTS: DropPoint[] = [
  {
    id: "hub-01",
    name: "Hub Sirkular 01 — Pusat Workshop",
    location: "Kawasan Workshop Terpadu",
    address: "Jl. Industri Kreatif No. 12, Sektor Barat",
    hours: "Senin – Sabtu: 08.00 – 17.00 WIB",
    accepted: "Semua Kategori (Plastik, Organik, Kaleng, Kertas)",
    pic: "Bpk. Rahmat (0812-3456-7890)",
  },
  {
    id: "hub-02",
    name: "Hub Sirkular 02 — Bank Sampah Asri",
    location: "Kompleks Residensial Hijau",
    address: "Balai Warga RW 05, Kelurahan Cempaka",
    hours: "Rabu & Sabtu: 09.00 – 15.00 WIB",
    accepted: "Khusus Plastik Kemasan & Botol PET",
    pic: "Ibu Siti Nurhaliza (0813-9876-5432)",
  },
  {
    id: "hub-03",
    name: "Hub Sirkular 03 — Unit Biopon BSF",
    location: "Sentra Pertanian Kota",
    address: "Jl. Agro Mandiri Blok B, Kebun Komunitas",
    hours: "Setiap Hari: 07.00 – 12.00 WIB",
    accepted: "Khusus Residu Organik & Sisa Sayur/Buah Dapur",
    pic: "Mas Dimas (0821-1122-3344)",
  },
  {
    id: "hub-04",
    name: "Hub Sirkular 04 — Kampus Hijau",
    location: "Gedung Pusat Riset Lingkungan",
    address: "Area Student Center, Lt. Dasar",
    hours: "Senin – Jumat: 08.30 – 16.00 WIB",
    accepted: "Kertas Arsip, Plastik Bersih & Kaleng Minuman",
    pic: "Sdr. Kevin (0857-4455-6677)",
  },
]

const FAQS = [
  {
    q: "Apakah sampah yang disetor harus dicuci bersih terlebih dahulu?",
    a: "Untuk sampah anorganik (botol PET, gelas plastik, kaleng), cukup dibilas dari sisa cairan manis atau minyak agar tidak menimbulkan bau dan mengundang lalat di posko penimbangan. Tidak perlu disabun hingga steril.",
  },
  {
    q: "Bagaimana cara kerja konversi sampah menjadi Eco-Paving dan bibit pohon?",
    a: "Setiap 1 kg sampah anorganik terpilah dihargai sejumlah poin hijau di sistem Dauran. Akumulasi poin dapat ditukarkan langsung dengan produk hilir siap pakai (seperti pupuk kasgot atau paving taman) atau disalurkan untuk penanaman bibit pohon di area penghijauan.",
  },
  {
    q: "Apakah Eco-Paving dari residu plastik aman dan kuat menahan beban?",
    a: "Sangat aman. Formula komposit Dauran telah melalui uji tekan laboratorium dengan hasil 25,4 MPa (setara beton standar K-250 SNI 03-0691). Karena tidak menggunakan semen Portland, paving ini tidak rapuh terhadap rembesan air dan memiliki elastisitas polimer alami.",
  },
  {
    q: "Apakah Dauran melayani penjemputan sampah skala perkantoran atau perumahan?",
    a: "Ya. Kami menyediakan armada penjemputan berkala untuk mitra instansi, restoran, sekolah, dan kompleks perumahan dengan volume minimal 30 kg per jadwal pengambilan. Silakan pilih kategori 'Kemitraan Instansi' pada formulir di bawah.",
  },
  {
    q: "Bagaimana cara memastikan sampah yang saya setor tidak dibuang ke TPA?",
    a: "Setiap batch penyetoran di drop-point kami dicatat dengan ID tiket digital. Anda dapat memantau status pemrosesan sampah (Diterima -> Dicacah -> Dicetak) secara transparan pada laporan telemetri bulanan platform Dauran.",
  },
]

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [ticketId, setTicketId] = React.useState("")
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    type: "individu",
    category: "plastik",
    weight: "5",
    hub: "hub-01",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const generatedId = `DAURAN-${Math.floor(100000 + Math.random() * 900000)}`
    setTicketId(generatedId)
    setFormSubmitted(true)
  }

  return (
    <div className="secondary-page wrap pb-24">
      {/* Page Header */}
      <div className="page-intro border-b border-[var(--line)] pb-12">
        <Link href="/" className="back-link font-mono text-xs">
          ← Kembali ke Beranda
        </Link>
        <p className="eyebrow mt-4">Hub Kemitraan & Penyetoran</p>
        <h1 className="mt-2 font-serif text-[clamp(44px,6vw,84px)] leading-tight text-[var(--ink)]">
          Mari Terhubung, <br />
          <em className="text-[var(--accent)] font-normal">Kunjungi Hub & Setor Residu.</em>
        </h1>
        <p className="page-description max-w-[650px] text-sm text-[var(--muted)] leading-relaxed mt-4">
          Ajukan penjemputan limbah berkala, daftarkan bank sampah perumahan, atau temukan lokasi
          posko drop-point timbangan digital terdekat di lingkungan Anda.
        </p>
      </div>

      {/* Main Grid: Form (Left) & Drop-Points (Right) */}
      <div className="section-pad border-b border-[var(--line)] grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
        {/* Form Container */}
        <div className="rounded-2xl border border-[var(--line)] bg-[#0b241c] p-8 lg:col-span-7">
          <p className="eyebrow">Formulir Pendaftaran & Setor Residu</p>
          <h2 className="mt-2 font-serif text-3xl text-[var(--ink)]">Tiket Setor Sampah Sirkular</h2>

          {formSubmitted ? (
            <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-6 text-center font-mono">
              <CheckCircle2 size={42} className="mx-auto text-emerald-400" />
              <h3 className="mt-3 font-serif text-2xl text-[var(--ink)]">Tiket Berhasil Diterbitkan!</h3>
              <p className="mt-2 text-xs text-[var(--muted)] font-sans">
                Terima kasih, <strong>{formData.name}</strong>. Tim koordinator drop-point kami telah menerima jadwal
                penyetoran Anda. Simpan nomor tiket berikut untuk ditunjukkan di meja timbangan:
              </p>
              <div className="my-4 inline-block rounded-lg border border-[var(--line)] bg-[#061812] px-6 py-3 text-lg font-bold text-[var(--accent)] tracking-widest">
                {ticketId}
              </div>
              <p className="text-[11px] text-[var(--muted)] font-sans">
                Estimasi Poin Hijau: <strong>{Number(formData.weight) * 15} Poin</strong> (Setara{" "}
                {(Number(formData.weight) / 1.2).toFixed(1)} buah Eco-Paving K-250)
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-6 rounded-lg border border-[var(--line)] px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
              >
                Buat Penyetoran Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5 text-xs font-mono">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[var(--muted)] block mb-1">
                    Nama PIC / Instansi *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Bpk. Hendra Gunawan"
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] placeholder-[#576b5f] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[var(--muted)] block mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] placeholder-[#576b5f] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="type" className="text-[var(--muted)] block mb-1">
                    Kategori Pengirim
                  </label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                  >
                    <option value="individu">Individu / Rumah Tangga</option>
                    <option value="perumahan">Pengurus RT/RW / Kompleks</option>
                    <option value="sekolah">Sekolah / Kampus Edukasi</option>
                    <option value="korporasi">Kantor / Usaha Kuliner</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="text-[var(--muted)] block mb-1">
                    Kategori Limbah Dominan
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                  >
                    <option value="plastik">Plastik PET, Kresek & Sachet</option>
                    <option value="organik">Limbah Organik Dapur (Untuk BSF)</option>
                    <option value="kaleng">Kaleng Logam & Aluminium</option>
                    <option value="campuran">Limbah Terpilah Multi-Kategori</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="weight" className="text-[var(--muted)] block mb-1">
                    Estimasi Berat (kg)
                  </label>
                  <input
                    id="weight"
                    type="number"
                    min="1"
                    max="500"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="hub" className="text-[var(--muted)] block mb-1">
                    Pilihan Drop-Point Penyetoran
                  </label>
                  <select
                    id="hub"
                    value={formData.hub}
                    onChange={(e) => setFormData({ ...formData, hub: e.target.value })}
                    className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                  >
                    <option value="hub-01">Hub 01 — Pusat Workshop (Kawasan Industri)</option>
                    <option value="hub-02">Hub 02 — Bank Sampah Asri (Cempaka)</option>
                    <option value="hub-03">Hub 03 — Unit Biokonversi BSF (Kebun Kota)</option>
                    <option value="hub-04">Hub 04 — Kampus Hijau (Student Center)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[var(--muted)] block mb-1">
                  Catatan Tambahan / Permohonan Penjemputan Khusus
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Sebutkan jadwal kedatangan atau alamat jika membutuhkan armada penjemputan volume besar..."
                  className="w-full rounded-lg border border-[var(--line)] bg-[#061812] p-3 text-[var(--ink)] placeholder-[#576b5f] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>

              <button type="submit" className="button w-full mt-2">
                <span>Terbitkan Tiket Setor Sampah</span>
                <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Drop-Points List */}
        <div className="space-y-6 lg:col-span-5">
          <div>
            <p className="eyebrow">02 / Jaringan Posko Fisik</p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--ink)]">Titik Drop-Point Terdaftar</h2>
            <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
              Seluruh posko dilengkapi timbangan digital terintegrasi cloud untuk pencatatan otomatis ke akun Dauran Anda.
            </p>
          </div>

          <div className="space-y-4">
            {DROP_POINTS.map((dp) => (
              <div
                key={dp.id}
                className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-5 transition-colors hover:border-[var(--accent)]"
              >
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="font-bold text-[var(--accent)]">{dp.name}</span>
                  <span className="text-[var(--muted)]">{dp.location}</span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-[var(--muted)]">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{dp.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[var(--accent)] shrink-0" />
                    <span>{dp.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[var(--accent)] shrink-0" />
                    <span>{dp.pic}</span>
                  </div>
                </div>
                <div className="mt-3 border-t border-[var(--line)] pt-2 font-mono text-[10px] text-[var(--ink)]">
                  Menerima: <span className="text-[var(--accent)]">{dp.accepted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <section className="section-pad">
        <div className="mb-10">
          <p className="eyebrow">03 / Pertanyaan Umum</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[var(--ink)]">
            Tanya Jawab Seputar <br />
            <em className="text-[var(--accent)] font-normal">Sistem & Kemitraan Dauran.</em>
          </h2>
        </div>

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between text-left transition-colors hover:text-[var(--accent)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[var(--accent)]">0{idx + 1}</span>
                    <span className="font-serif text-lg sm:text-xl text-[var(--ink)]">{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--muted)] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--accent)]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 pl-8 text-xs leading-relaxed text-[var(--muted)] font-sans max-w-3xl">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
