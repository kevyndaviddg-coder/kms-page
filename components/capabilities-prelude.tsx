"use client"

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

type Family = {
  number: string
  name: string
  sub: string
  description: string
  chips: string[]
  image: string
}

const families: Family[] = [
  {
    number: "01",
    name: "Climatización y ductería",
    sub: "Sistemas térmicos y de ventilación",
    description:
      "Diseño, fabricación, instalación y mantenimiento de HVAC y ductería industrial para plantas, oficinas y procesos productivos.",
    chips: ["HVAC", "Ductería", "Refrigeración"],
    image: "/kms/areas/hvac/02.jpg",
  },
  {
    number: "02",
    name: "Envolventes y protección",
    sub: "Cubiertas, aislamiento y acabados",
    description:
      "Aislamiento térmico, TPO, policarbonatos y recubrimientos para proteger envolventes industriales y comerciales.",
    chips: ["Aislamiento", "TPO", "Policarbonatos", "Recubrimientos"],
    image: "/kms/aislamiento/panorama-monterrey.jpg",
  },
  {
    number: "03",
    name: "CNC y automatización",
    sub: "Corte, control y maquinaria a medida",
    description:
      "Corte CNC, mecanizado, desarrollo de maquinaria CNC y soporte para PLCs, tableros y procesos automatizados.",
    chips: ["CNC", "Maquinaria CNC", "PLCs", "Automatización"],
    image: "/kms/areas/cnc/02.jpg",
  },
  {
    number: "04",
    name: "Fabricación y montaje",
    sub: "Estructuras y ejecución en campo",
    description:
      "Fabricación de estructuras metálicas, herrería industrial y montajes coordinados en planta y obra.",
    chips: ["Fabricación", "Estructuras", "Montajes"],
    image: "/kms/areas/estructuras/01.jpg",
  },
]

const ROTATE_SECONDS = 6.5
const EASE = [0.4, 0, 0.2, 1] as const

function ChipStack({ chips }: { chips: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 md:gap-2">
      {chips.map((chip, i) => (
        <motion.li
          key={chip}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
          transition={{
            duration: 0.5,
            delay: 0.15 + i * 0.06,
            ease: EASE,
          }}
        >
          <span className="inline-flex items-center text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-background border border-background/25 bg-background/[0.04] backdrop-blur-sm px-3 py-2 md:px-3.5 md:py-2.5">
            {chip}
          </span>
        </motion.li>
      ))}
    </ul>
  )
}

export function CapabilitiesPrelude() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { amount: 0.35, once: true })
  const bodyRef = useRef<HTMLDivElement>(null)
  const bodyInView = useInView(bodyRef, { amount: 0.2, once: true })

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-rotate (pauses on hover)
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setActive((i) => (i + 1) % families.length)
    }, ROTATE_SECONDS * 1000)
    return () => clearTimeout(t)
  }, [active, paused])

  // Mouse-tracking spotlight
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 80, damping: 25, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 80, damping: 25, mass: 0.4 })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (typeof window === "undefined") return
    if (window.matchMedia("(hover: none)").matches) return

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mx.set(x)
      my.set(y)
    }
    el.addEventListener("mousemove", handle)
    return () => el.removeEventListener("mousemove", handle)
  }, [mx, my])

  const spotlight = useMotionTemplate`radial-gradient(640px circle at calc(${sx} * 100%) calc(${sy} * 100%), hsl(218 49% 35% / 0.22), transparent 60%)`

  const activeFamily = families[active]

  return (
    <section
      ref={sectionRef}
      aria-label="Capacidades técnicas KMS"
      className="relative bg-foreground text-background overflow-hidden"
    >
      {/* Mouse-tracking spotlight (desktop only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block opacity-90"
        style={{ background: spotlight }}
      />

      {/* Brand accents */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/60 to-transparent"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/40 to-transparent"
      />

      {/* Grid decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div className="absolute inset-y-0 left-1/2 w-px bg-background/[0.04]" />
      </div>

      <div className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-background/45 mb-6">
              <span className="h-px w-8 bg-background/30" />
              Capacidades técnicas
            </div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extralight leading-[1.1] tracking-tight text-balance">
              Sistema integrado de capacidades industriales
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-[13px] md:text-sm leading-[1.7] text-background/70 max-w-md text-pretty">
              Cuatro familias técnicas que cubren el ciclo completo: del diseño y la
              fabricación al montaje, automatización y mantenimiento en planta.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-background/45">
              <span className="tabular-nums">
                {String(active + 1).padStart(2, "0")} / {String(families.length).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 max-w-[140px] bg-background/15" />
              <span>Familia activa</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive body */}
        <motion.div
          ref={bodyRef}
          initial={{ opacity: 0, y: 28 }}
          animate={bodyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12"
        >
          {/* Left: family list */}
          <div className="lg:col-span-5 flex flex-col">
            <ul className="flex flex-col">
              {families.map((family, i) => {
                const isActive = i === active
                return (
                  <li key={family.name}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      aria-label={`Ver capacidades: ${family.name}`}
                      className="relative w-full text-left py-5 md:py-6 transition-colors duration-300 focus-visible:outline-none"
                    >
                      {/* Top divider */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-background/10"
                      />

                      {/* Active left bar */}
                      <motion.span
                        aria-hidden
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] bg-background origin-center"
                        animate={{
                          height: isActive ? "62%" : "0%",
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />

                      <div className="flex items-start gap-5 pl-5 md:pl-6">
                        <motion.span
                          className="text-[clamp(1.5rem,2.8vw,2.25rem)] font-extralight leading-none tabular-nums tracking-tight shrink-0"
                          animate={{
                            color: isActive
                              ? "rgb(255,255,255)"
                              : "rgba(255,255,255,0.4)",
                          }}
                          transition={{ duration: 0.35 }}
                        >
                          {family.number}
                        </motion.span>
                        <div className="min-w-0 flex-1">
                          <motion.h3
                            className="text-[15px] md:text-base lg:text-[1.15rem] font-light tracking-tight leading-snug text-balance"
                            animate={{
                              color: isActive
                                ? "rgb(255,255,255)"
                                : "rgba(255,255,255,0.55)",
                              x: isActive ? 4 : 0,
                            }}
                            transition={{ duration: 0.35 }}
                          >
                            {family.name}
                          </motion.h3>
                          <motion.p
                            className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase mt-1.5"
                            animate={{
                              color: isActive
                                ? "rgba(255,255,255,0.55)"
                                : "rgba(255,255,255,0.3)",
                            }}
                            transition={{ duration: 0.35 }}
                          >
                            {family.sub}
                          </motion.p>
                        </div>
                        <motion.span
                          aria-hidden
                          className="text-background/30 mt-1.5 shrink-0"
                          animate={{
                            x: isActive ? 0 : -4,
                            opacity: isActive ? 1 : 0,
                            color: isActive ? "rgb(255,255,255)" : "rgb(150,150,150)",
                          }}
                          transition={{ duration: 0.35 }}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.span>
                      </div>
                    </button>
                  </li>
                )
              })}
              {/* Bottom divider */}
              <li aria-hidden className="h-px bg-background/10" />
            </ul>

            {/* Progress bar */}
            <div className="mt-6 md:mt-8 flex items-center gap-4">
              <span className="text-[10px] tracking-[0.28em] uppercase text-background/40 tabular-nums">
                {paused ? "Pausa" : "Auto"}
              </span>
              <div className="relative flex-1 h-px bg-background/15 overflow-hidden">
                <motion.span
                  key={`progress-${active}-${paused ? "p" : "r"}`}
                  className="absolute inset-y-0 left-0 bg-background origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? 0 : 1 }}
                  transition={{
                    duration: paused ? 0.3 : ROTATE_SECONDS,
                    ease: "linear",
                  }}
                  style={{ width: "100%" }}
                />
              </div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-background/40 tabular-nums">
                {String(active + 1).padStart(2, "0")}/{String(families.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: active family detail */}
          <div className="lg:col-span-7">
            <div className="relative bg-background/[0.02] border border-background/10 overflow-hidden">
              {/* Image with crossfade + Ken Burns micro */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={activeFamily.image}
                    src={activeFamily.image}
                    alt={activeFamily.name}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.0, ease: EASE }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-foreground/30"
                />

                {/* Floating number */}
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={activeFamily.number}
                    aria-hidden
                    className="absolute top-5 right-6 text-background/85 font-extralight tabular-nums leading-none text-[clamp(2.5rem,4vw,3.75rem)] tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
                    initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    {activeFamily.number}
                  </motion.span>
                </AnimatePresence>

                {/* Family name on image */}
                <div className="absolute left-6 right-6 bottom-6">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeFamily.name}
                      initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                      transition={{ duration: 0.55, ease: EASE }}
                    >
                      <p className="text-[10px] tracking-[0.3em] uppercase text-background/65 mb-2">
                        Familia técnica
                      </p>
                      <h3 className="text-background text-xl md:text-2xl lg:text-[1.6rem] font-light leading-tight tracking-tight text-balance drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
                        {activeFamily.name}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Description + chips */}
              <div className="relative p-6 md:p-8 bg-foreground/95 backdrop-blur-xl border-t border-background/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${active}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <p className="text-[13px] md:text-sm leading-[1.65] text-background/75 max-w-2xl text-pretty mb-6">
                      {activeFamily.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`chips-${active}`}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ChipStack chips={activeFamily.chips} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
