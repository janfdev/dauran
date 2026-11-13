"use client"

import * as React from "react"
import * as THREE from "three"
import { RotateCw, Eye, Layers, Sparkles } from "lucide-react"

interface SpecimenData {
  id: string
  name: string
  scientificName: string
  shape: "paving" | "cylinder" | "hex"
  materialInput: string
  strength: string
  co2e: string
  baseColor: number
  accentColor: number
  roughness: number
  metalness: number
  description: string
  specimenCode: string
}

const SPECIMENS: SpecimenData[] = [
  {
    id: "paving-k250",
    name: "Eco-Paving K-250",
    scientificName: "Polymer-Modified Concrete Composite Block",
    specimenCode: "SPEC-PLST-01",
    shape: "paving",
    materialInput: "1,2 kg Plastik PET/HDPE + Pasir Silika",
    strength: "25,4 MPa (SNI 03-0691)",
    co2e: "-3,42 kg CO2e / unit",
    baseColor: 0x3d4a41,
    accentColor: 0xbfd3a3,
    roughness: 0.88,
    metalness: 0.1,
    description:
      "Ubin perkerasan komposit dengan agregat mikro plastik daur ulang. Tahan beban kendaraan ringan dan kedap erosi asam air hujan perkotaan.",
  },
  {
    id: "bio-kasgot",
    name: "Briket Bio-Kasgot",
    scientificName: "Densified Organic Frass Pellet",
    specimenCode: "SPEC-BSF-02",
    shape: "cylinder",
    materialInput: "100% Residu Biokonversi Larva BSF",
    strength: "Densitas 1.250 kg/m³",
    co2e: "-5,80 kg CO2e / batch",
    baseColor: 0x362c20,
    accentColor: 0xd9b382,
    roughness: 0.96,
    metalness: 0.05,
    description:
      "Pelet pupuk organik berpori padat hasil cerna larva Black Soldier Fly atas sisa bahan organik dapur, melepaskan hara tanah secara perlahan.",
  },
  {
    id: "can-furnace",
    name: "Modul Sirkular Heksagonal",
    scientificName: "Alloy-Composite Vertical Tile",
    specimenCode: "SPEC-ALUM-03",
    shape: "hex",
    materialInput: "Upcycle Kaleng Bekas & Komposit",
    strength: "Tahan Suhu > 450°C",
    co2e: "-2,15 kg CO2e / unit",
    baseColor: 0x546152,
    accentColor: 0xaec698,
    roughness: 0.42,
    metalness: 0.58,
    description:
      "Ubin fasad heksagonal dengan sistem interlock tanpa adukan semen. Dirancang untuk cladding dinding luar tahan panas dan taman vertikal.",
  },
]

// Procedural texture generator for aggregate stone / recycled flecks
function generateProceduralTexture(type: "paving" | "cylinder" | "hex") {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  // Base background
  if (type === "paving") {
    ctx.fillStyle = "#334138"
    ctx.fillRect(0, 0, 512, 512)

    // Sand grain noise
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * 512
      const y = Math.random() * 512
      const shade = Math.floor(40 + Math.random() * 50)
      ctx.fillStyle = `rgba(${shade}, ${shade + 10}, ${shade}, 0.4)`
      ctx.fillRect(x, y, 1.5, 1.5)
    }

    // Colorful flecks of recycled plastic (blue, red, white, sage particles)
    const fleckColors = ["#bfd3a3", "#7ca982", "#8da4c4", "#d4a373", "#e9edc9"]
    for (let i = 0; i < 800; i++) {
      const x = Math.random() * 512
      const y = Math.random() * 512
      const size = 1 + Math.random() * 3
      ctx.fillStyle = fleckColors[Math.floor(Math.random() * fleckColors.length)]
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }
  } else if (type === "cylinder") {
    // Organic fibrous texture
    ctx.fillStyle = "#2c2217"
    ctx.fillRect(0, 0, 512, 512)

    for (let i = 0; i < 25000; i++) {
      const x = Math.random() * 512
      const y = Math.random() * 512
      const shade = Math.floor(35 + Math.random() * 40)
      ctx.fillStyle = `rgba(${shade + 20}, ${shade + 10}, ${shade}, 0.5)`
      ctx.fillRect(x, y, 2, 1)
    }

    // Fiber streaks
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * 512
      const y = Math.random() * 512
      const len = 4 + Math.random() * 12
      ctx.strokeStyle = "rgba(180, 140, 90, 0.25)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + len, y + (Math.random() - 0.5) * 4)
      ctx.stroke()
    }
  } else {
    // Brushed metallic aluminium surface
    ctx.fillStyle = "#4a5448"
    ctx.fillRect(0, 0, 512, 512)

    // Directional brushed lines
    for (let i = 0; i < 2000; i++) {
      const y = Math.random() * 512
      ctx.strokeStyle = `rgba(${120 + Math.random() * 60}, ${130 + Math.random() * 60}, ${120 + Math.random() * 60}, 0.15)`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(512, y)
      ctx.stroke()
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(2, 2)
  return texture
}

export function ThreeSpecimenViewer() {
  const mountRef = React.useRef<HTMLDivElement>(null)
  const [selectedIdx, setSelectedIdx] = React.useState(0)
  const [wireframe, setWireframe] = React.useState(false)
  const [isRotating, setIsRotating] = React.useState(true)

  const specimen = SPECIMENS[selectedIdx]

  React.useEffect(() => {
    const container = mountRef.current
    if (!container) return

    let width = container.clientWidth || 450
    let height = container.clientHeight || 420

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 1.4, 3.6)
    camera.lookAt(0, 0.05, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.innerHTML = ""
    container.appendChild(renderer.domElement)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xdde9c9, 2.6)
    keyLight.position.set(4, 5, 3)
    keyLight.castShadow = true
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x739072, 1.8)
    fillLight.position.set(-4, -1, -3)
    scene.add(fillLight)

    const topSpot = new THREE.SpotLight(0xffffff, 2.2, 12, Math.PI / 4, 0.3)
    topSpot.position.set(0, 4, 1)
    scene.add(topSpot)

    // Circular Plinth Base
    const plinthGeom = new THREE.CylinderGeometry(1.5, 1.6, 0.15, 48)
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x061812,
      roughness: 0.9,
      metalness: 0.2,
    })
    const plinth = new THREE.Mesh(plinthGeom, plinthMat)
    plinth.position.y = -0.85
    plinth.receiveShadow = true
    scene.add(plinth)

    // Plinth Ring Line
    const ringGeom = new THREE.RingGeometry(1.48, 1.52, 48)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xbfd3a3, side: THREE.DoubleSide, opacity: 0.4, transparent: true })
    const ring = new THREE.Mesh(ringGeom, ringMat)
    ring.rotation.x = -Math.PI / 2
    ring.position.y = -0.77
    scene.add(ring)

    // Grid Floor
    const gridHelper = new THREE.GridHelper(3.8, 14, 0xbfd3a3, 0x1b3f33)
    gridHelper.position.y = -0.84
    scene.add(gridHelper)

    // Create Main Specimen Mesh
    let geom: THREE.BufferGeometry
    if (specimen.shape === "paving") {
      // Realistic Beveled Paver Block
      geom = new THREE.BoxGeometry(1.65, 0.55, 1.05, 8, 4, 8)
    } else if (specimen.shape === "cylinder") {
      // Bio-Briquette Cylinder with ribbed grooves
      geom = new THREE.CylinderGeometry(0.72, 0.72, 1.25, 36, 6)
    } else {
      // Hexagonal Interlocking Paver
      geom = new THREE.CylinderGeometry(0.95, 0.95, 0.45, 6, 4)
    }

    const texture = generateProceduralTexture(specimen.shape)

    const mat = new THREE.MeshStandardMaterial({
      color: specimen.baseColor,
      map: texture || null,
      roughness: specimen.roughness,
      metalness: specimen.metalness,
      wireframe: wireframe,
    })

    const mesh = new THREE.Mesh(geom, mat)
    mesh.position.y = 0.08
    mesh.castShadow = true
    mesh.receiveShadow = true
    scene.add(mesh)

    // Structural Edge Wireframe Overlay
    const edgesGeom = new THREE.EdgesGeometry(geom, 25)
    const edgesMat = new THREE.LineBasicMaterial({
      color: specimen.accentColor,
      transparent: true,
      opacity: wireframe ? 0.95 : 0.4,
    })
    const edgesLine = new THREE.LineSegments(edgesGeom, edgesMat)
    mesh.add(edgesLine)

    // Floating Dust Particles
    const particleCount = 60
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 3
      particlePositions[i + 1] = (Math.random() - 0.5) * 2 + 0.2
      particlePositions[i + 2] = (Math.random() - 0.5) * 3
    }
    const particleGeom = new THREE.BufferGeometry()
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xbfd3a3,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
    })
    const particles = new THREE.Points(particleGeom, particleMat)
    scene.add(particles)

    // Interaction handling
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let rotX = 0.22
    let rotY = 0.45
    let targetRotX = 0.22
    let targetRotY = 0.45

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevMouseX
      const deltaY = e.clientY - prevMouseY
      targetRotY += deltaX * 0.007
      targetRotX += deltaY * 0.007
      targetRotX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotX))
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerUp = () => {
      isDragging = false
    }

    const domEl = renderer.domElement
    domEl.style.cursor = "grab"
    domEl.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return
      width = container.clientWidth
      height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    })
    resizeObserver.observe(container)

    // Animation Loop
    let animId = 0
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      if (isRotating && !isDragging) {
        targetRotY += delta * 0.4
      }

      rotX += (targetRotX - rotX) * 0.08
      rotY += (targetRotY - rotY) * 0.08

      mesh.rotation.x = rotX
      mesh.rotation.y = rotY

      // Slow particle float
      particles.rotation.y += delta * 0.05

      // Calm breathing elevation
      mesh.position.y = 0.08 + Math.sin(clock.getElapsedTime() * 1.4) * 0.035

      renderer.render(scene, camera)
    }

    animate()

    // Teardown
    return () => {
      cancelAnimationFrame(animId)
      resizeObserver.disconnect()
      domEl.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      geom.dispose()
      edgesGeom.dispose()
      plinthGeom.dispose()
      ringGeom.dispose()
      particleGeom.dispose()
      mat.dispose()
      edgesMat.dispose()
      plinthMat.dispose()
      ringMat.dispose()
      particleMat.dispose()
      if (texture) texture.dispose()
      renderer.dispose()
    }
  }, [selectedIdx, wireframe, isRotating, specimen])

  return (
    <div className="relative w-full rounded-2xl border border-[var(--line)] bg-gradient-to-b from-[#102b22]/95 to-[#081d17] p-6 shadow-2xl backdrop-blur-md">
      {/* Top Header Card */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="seed-dot" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
              {specimen.specimenCode} • SPESIMEN 3D HASIL REKAYASA VALUASI
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-normal text-[var(--ink)]">
            {specimen.name}
          </h3>
          <p className="font-mono text-xs text-[var(--muted)]">{specimen.scientificName}</p>
        </div>

        {/* Specimen Switcher Tabs */}
        <div className="inline-flex rounded-lg border border-[var(--line)] bg-[#081d17]/90 p-1 text-xs">
          {SPECIMENS.map((sp, i) => (
            <button
              key={sp.id}
              onClick={() => setSelectedIdx(i)}
              className={`rounded-md px-3.5 py-1.5 font-mono transition-colors ${
                selectedIdx === i
                  ? "bg-[var(--accent)] text-[var(--forest)] font-semibold shadow-xs"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              0{i + 1} / {sp.shape.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Viewport */}
      <div className="relative mt-5 h-[420px] w-full overflow-hidden rounded-xl border border-[var(--line)]/70 bg-[#061812]/95">
        <div ref={mountRef} className="h-full w-full" />

        {/* Floating Controls Overlay */}
        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-mono transition-colors ${
              isRotating
                ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]"
                : "border-[var(--line)] bg-black/60 text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            <RotateCw size={13} className={isRotating ? "animate-spin" : ""} />
            {isRotating ? "Rotasi: Otomatis" : "Rotasi: Jeda"}
          </button>

          <button
            onClick={() => setWireframe(!wireframe)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-mono transition-colors ${
              wireframe
                ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--forest)] font-semibold"
                : "border-[var(--line)] bg-black/60 text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            <Layers size={13} />
            {wireframe ? "Mode: Wireframe" : "Mode: Material Tekstur"}
          </button>
        </div>

        {/* Drag Hint */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-black/70 px-3.5 py-1.5 text-[10px] font-mono text-[var(--muted)]">
          <Eye size={12} className="text-[var(--accent)]" />
          <span>Klik & seret untuk rotasi bebas 360°</span>
        </div>
      </div>

      {/* Real-time Technical Specs Grid */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
            Komposisi Bahan Residu
          </span>
          <p className="mt-1 font-mono text-xs font-semibold text-[var(--ink)]">
            {specimen.materialInput}
          </p>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
            Kekuatan Struktur & Uji Beban
          </span>
          <p className="mt-1 font-mono text-xs font-semibold text-[var(--accent)]">
            {specimen.strength}
          </p>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[#0b241c] p-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
            Potensi Reduksi Emisi Karbon
          </span>
          <p className="mt-1 font-mono text-xs font-semibold text-emerald-400">
            {specimen.co2e}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--muted)] font-sans">
        {specimen.description}
      </p>
    </div>
  )
}
