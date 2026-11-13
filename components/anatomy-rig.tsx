"use client"

import * as React from "react"
import { Gauge, Sliders, Activity, Flame, ShieldCheck } from "lucide-react"

export function AnatomyRig() {
  const [batchWeight, setBatchWeight] = React.useState<number>(8) // in kg
  const [heatingTemp, setHeatingTemp] = React.useState<number>(185) // in °C

  // Calculations based on scientific engineering models:
  // 1.2 kg plastic residue produces 1 standard K-250 eco-paving block
  const pavingProduced = (batchWeight / 1.2).toFixed(1)
  const co2Avoided = (batchWeight * 2.85).toFixed(1)
  const requiredPressure = Math.min(28, 18 + batchWeight * 0.5).toFixed(1)
  const gaugeAngle = (Number(requiredPressure) / 30) * 180 - 90

  // Piston travel height relative to batch size
  const pistonY = 40 + (batchWeight / 20) * 35

  return (
    <div className="relative w-full rounded-2xl border border-[var(--line)] bg-[#0b241c]/90 p-6 shadow-2xl backdrop-blur-md">
      {/* Top Header Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="seed-dot" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
              FIG 01. ANATOMI REKAYASA SIRKULAR
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-normal text-[var(--ink)]">
            Thermal-Compression Extruder Rig
          </h3>
          <p className="font-mono text-xs text-[var(--muted)]">
            Model Uji Tekan & Rekayasa Termal Polimer Residu (K-250 Production Standard)
          </p>
        </div>

        {/* Live Badge */}
        <div className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[#061812] px-3.5 py-1.5 font-mono text-xs text-[var(--accent)]">
          <Activity size={14} className="animate-pulse" />
          <span>Status Rig: Siap Cetak (Siklus Tertutup)</span>
        </div>
      </div>

      {/* Main Grid: Isometric Diagram (Left) & Controls/Readout (Right) */}
      <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Isometric Rig Visualizer */}
        <div className="relative flex items-center justify-center rounded-xl border border-[var(--line)]/60 bg-[#061812]/95 p-6 lg:col-span-7">
          <svg
            viewBox="0 0 540 400"
            className="h-auto w-full max-w-[500px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid Floor */}
            <g opacity="0.25" stroke="var(--line)" strokeWidth="0.8">
              <path d="M70 280 L270 380 L470 280 L270 180 Z" />
              <path d="M120 255 L320 355" />
              <path d="M170 230 L370 330" />
              <path d="M220 205 L420 305" />
              <path d="M220 355 L420 255" />
              <path d="M170 330 L370 230" />
              <path d="M120 305 L320 205" />
            </g>

            {/* Base Plinth on 4 Feet */}
            <path
              d="M170 320 L270 370 L370 320 L270 270 Z"
              fill="#081d17"
              stroke="var(--line)"
              strokeWidth="1.2"
            />
            <path
              d="M170 320 L170 335 L270 385 L270 370 Z"
              fill="#061812"
              stroke="var(--line)"
              strokeWidth="1.2"
            />
            <path
              d="M270 370 L270 385 L370 335 L370 320 Z"
              fill="#102b22"
              stroke="var(--line)"
              strokeWidth="1.2"
            />

            {/* Feet */}
            <circle cx="185" cy="336" r="4" fill="var(--accent)" opacity="0.6" />
            <circle cx="355" cy="336" r="4" fill="var(--accent)" opacity="0.6" />
            <circle cx="270" cy="380" r="5" fill="var(--accent)" />

            {/* Vertical Support Columns */}
            <rect x="200" y="110" width="10" height="190" fill="#16372c" stroke="var(--line)" />
            <rect x="330" y="110" width="10" height="190" fill="#16372c" stroke="var(--line)" />

            {/* Top Gantry / Crosshead Beam */}
            <path
              d="M185 110 L270 70 L355 110 L270 150 Z"
              fill="#102b22"
              stroke="var(--line)"
              strokeWidth="1.2"
            />
            <path
              d="M185 110 L185 125 L270 165 L270 150 Z"
              fill="#081d17"
              stroke="var(--line)"
            />
            <path
              d="M270 150 L270 165 L355 125 L355 110 Z"
              fill="#16372c"
              stroke="var(--line)"
            />

            {/* Hopper Input (Top Funnel) */}
            <polygon
              points="245,30 295,30 280,70 260,70"
              fill="#1b3f33"
              stroke="var(--line)"
              strokeWidth="1.2"
            />
            <text x="270" y="24" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle">
              HOPPER RESIDU (TERPILAH)
            </text>

            {/* Central Hydraulic Ram / Piston (Animated with batchWeight) */}
            <g transform={`translate(0, ${pistonY})`}>
              {/* Piston Rod */}
              <rect x="264" y="90" width="12" height="60" fill="#d8e5c5" stroke="#081d17" strokeWidth="1" />
              {/* Mold Pressing Head */}
              <path
                d="M225 150 L270 130 L315 150 L270 170 Z"
                fill="var(--accent)"
                stroke="#081d17"
                strokeWidth="1.5"
              />
              <path
                d="M225 150 L225 162 L270 182 L270 170 Z"
                fill="#8ea87d"
                stroke="#081d17"
              />
              <path
                d="M270 170 L270 182 L315 162 L315 150 Z"
                fill="#bfd3a3"
                stroke="#081d17"
              />
            </g>

            {/* Mold Chamber (Lower Box) */}
            <path
              d="M220 260 L270 238 L320 260 L270 282 Z"
              fill="#061812"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
            <path
              d="M220 260 L220 285 L270 307 L270 282 Z"
              fill="#102b22"
              stroke="var(--line)"
            />
            <path
              d="M270 282 L270 307 L320 285 L320 260 Z"
              fill="#16372c"
              stroke="var(--line)"
            />

            {/* Heated Chamber Badge / Glow */}
            <circle cx="270" cy="272" r="16" fill="orange" opacity={heatingTemp > 180 ? 0.25 : 0.1} />
            <text x="270" y="276" fill="#f8b042" fontSize="9" fontFamily="monospace" textAnchor="middle">
              {heatingTemp}°C
            </text>

            {/* Dial Gauge on Side */}
            <g transform="translate(140, 160)">
              <circle cx="25" cy="25" r="24" fill="#081d17" stroke="var(--line)" strokeWidth="1.4" />
              <circle cx="25" cy="25" r="20" fill="#102b22" />
              {/* Dial Ticks */}
              <line x1="25" y1="7" x2="25" y2="10" stroke="var(--accent)" strokeWidth="1.5" />
              <line x1="11" y1="25" x2="14" y2="25" stroke="var(--muted)" strokeWidth="1" />
              <line x1="39" y1="25" x2="36" y2="25" stroke="var(--muted)" strokeWidth="1" />
              {/* Rotating Needle */}
              <g transform={`rotate(${gaugeAngle}, 25, 25)`}>
                <line x1="25" y1="25" x2="25" y2="9" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="25" cy="25" r="3" fill="var(--ink)" />
              </g>
              <text x="25" y="38" fill="var(--muted)" fontSize="6" fontFamily="monospace" textAnchor="middle">
                MPa GAUGE
              </text>
            </g>

            {/* Connective Piping to Gauge */}
            <path d="M165 180 L200 180" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="200" cy="180" r="2" fill="var(--accent)" />

            {/* Output Product Being Discharged */}
            <g transform="translate(290, 290)">
              <polygon points="30,10 65,0 90,12 55,22" fill="#bfd3a3" stroke="#081d17" strokeWidth="1" />
              <polygon points="30,10 30,22 55,34 55,22" fill="#7d986b" stroke="#081d17" strokeWidth="1" />
              <polygon points="55,22 55,34 90,24 90,12" fill="#a4c28f" stroke="#081d17" strokeWidth="1" />
              <text x="60" y="47" fill="var(--ink)" fontSize="8" fontFamily="monospace" textAnchor="middle">
                ECO-PAVING READY
              </text>
            </g>
          </svg>

          {/* Interactive Indicator Stamp */}
          <div className="absolute top-3 left-3 rounded-md border border-[var(--line)] bg-[#081d17]/80 px-2.5 py-1 text-[10px] font-mono text-[var(--muted)]">
            MODE: HIDROLIK TERMAL • K-250 READY
          </div>
        </div>

        {/* Real-time Control Sliders & Telemetry Readout */}
        <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
          {/* Controls */}
          <div className="space-y-4 rounded-xl border border-[var(--line)] bg-[#061812]/70 p-4">
            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[var(--ink)]">
                  <Sliders size={13} className="text-[var(--accent)]" />
                  Bobot Input Limbah (Plastik Residu)
                </span>
                <span className="font-bold text-[var(--accent)]">{batchWeight} kg</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={batchWeight}
                onChange={(e) => setBatchWeight(parseFloat(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[var(--line)] accent-[var(--accent)]"
              />
              <div className="mt-1 flex justify-between font-mono text-[9px] text-[var(--muted)]">
                <span>1 kg (Skala Rumah)</span>
                <span>10 kg (Komunitas)</span>
                <span>20 kg (Batch Penuh)</span>
              </div>
            </div>

            <div className="border-t border-[var(--line)] pt-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-[var(--ink)]">
                  <Flame size={13} className="text-amber-400" />
                  Suhu Pemanasan Ruang Termal
                </span>
                <span className="font-bold text-amber-400">{heatingTemp} °C</span>
              </div>
              <input
                type="range"
                min="140"
                max="220"
                step="5"
                value={heatingTemp}
                onChange={(e) => setHeatingTemp(parseInt(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[var(--line)] accent-amber-400"
              />
              <div className="mt-1 flex justify-between font-mono text-[9px] text-[var(--muted)]">
                <span>140°C (Peleburan Awal)</span>
                <span>185°C (Titik Homogen PET)</span>
                <span>220°C (Maksimal)</span>
              </div>
            </div>
          </div>

          {/* Telemetry Output Metrics */}
          <div className="grid grid-cols-2 gap-3 font-mono">
            <div className="rounded-lg border border-[var(--line)] bg-[#102b22] p-3">
              <span className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                Hasil Eco-Paving
              </span>
              <p className="mt-1 text-lg font-bold text-[var(--ink)]">
                {pavingProduced} <span className="text-xs font-normal text-[var(--muted)]">Unit</span>
              </p>
              <span className="text-[9px] text-emerald-400">Dimensi 20x10x6 cm</span>
            </div>

            <div className="rounded-lg border border-[var(--line)] bg-[#102b22] p-3">
              <span className="text-[9px] uppercase tracking-wider text-[var(--muted)]">
                Tekanan Cetak
              </span>
              <p className="mt-1 text-lg font-bold text-[var(--accent)]">
                {requiredPressure} <span className="text-xs font-normal text-[var(--muted)]">MPa</span>
              </p>
              <span className="text-[9px] text-[var(--muted)]">Standar K-250 Terpenuhi</span>
            </div>

            <div className="col-span-2 rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-emerald-300">
                    Reduksi Jejak Karbon Tertaksir
                  </span>
                  <p className="text-xl font-bold text-emerald-400">
                    -{co2Avoided} kg CO2e
                  </p>
                </div>
                <ShieldCheck size={28} className="text-emerald-400" />
              </div>
              <p className="mt-1 text-[10px] text-[var(--muted)]">
                Dihitung dari substitusi semen konvensional & pencegahan pembakaran residu plastik liar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
