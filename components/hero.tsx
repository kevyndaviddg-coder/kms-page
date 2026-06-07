"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { HeroBackgroundSlider } from "@/components/hero-background-slider"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

const HERO_IMAGES = [
  "/kms/hero/01.jpg",
  "/kms/hero/02.jpg",
  "/kms/hero/03.jpg",
  "/kms/hero/04.jpg",
]

const stats = [
  { value: "8", suffix: "años", label: "Experiencia técnica" },
  { value: "MX", suffix: "", label: "Atención nacional" },
  { value: "10", suffix: "+", label: "Servicios principales" },
  { value: "06", suffix: "", label: "Áreas de trabajo" },
]

const EASE = [0.4, 0, 0.2, 1] as const

export function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      <HeroBackgroundSlider images={HERO_IMAGES} />

      {/* Content */}
      <div className="relative z-10 px-6 pb-10 pt-32 md:px-12 lg:px-20 md:pb-14 md:pt-36">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            className="mb-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-background/40" />
              <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-background/70">
                8 años de experiencia técnica — Capacidad en todo México
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.7, ease: EASE }}
            className="text-[clamp(2rem,6vw,5.25rem)] font-extralight leading-[1.04] tracking-[-0.03em] text-background text-balance max-w-[22ch] drop-shadow-[0_2px_18px_rgba(0,0,0,0.5)]"
          >
            Soluciones técnicas para infraestructura y operación industrial
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-8 md:mt-10 max-w-3xl text-sm md:text-base leading-[1.7] text-background/80 text-pretty"
          >
            Integramos HVAC, ductería, aislamiento, TPO, policarbonatos, recubrimientos,
            CNC, maquinaria CNC, PLCs, automatización, fabricación, estructuras y
            montajes industriales para proyectos en planta, obra y mantenimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-3.5 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/90 transition-colors duration-300"
            >
              Cotizar por WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 border border-background/40 text-background px-7 py-3.5 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/10 hover:border-background/70 transition-colors duration-300"
            >
              Ver servicios
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Trust strip — clean stats only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
        className="relative z-10 border-t border-background/15 backdrop-blur-sm bg-foreground/35"
      >
        <div className="px-6 md:px-12 lg:px-20 py-5 md:py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-10">
            {stats.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-1.5 min-w-0">
                <span className="flex items-baseline gap-1 text-base md:text-lg font-light text-background tracking-tight tabular-nums leading-none">
                  <span>{stat.value}</span>
                  {stat.suffix && (
                    <span className="text-[11px] text-background/65 font-light">
                      {stat.suffix}
                    </span>
                  )}
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-background/60 leading-snug">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
