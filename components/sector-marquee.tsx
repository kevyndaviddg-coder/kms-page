"use client"

import { motion } from "motion/react"

const sectors = [
  "Industria manufacturera",
  "Bodegas industriales",
  "Centros de distribución",
  "Plantas de producción",
  "Naves industriales",
  "Mantenimiento especializado",
  "Proyectos comerciales",
  "Infraestructura operativa",
]

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex items-center shrink-0"
    >
      {sectors.map((sector) => (
        <li
          key={sector}
          className="flex items-center shrink-0 pr-10 md:pr-14 lg:pr-16"
        >
          <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-background/65 whitespace-nowrap">
            {sector}
          </span>
          <span
            aria-hidden
            className="ml-10 md:ml-14 lg:ml-16 h-3 w-px bg-background/25"
          />
        </li>
      ))}
    </ul>
  )
}

export function SectorMarquee() {
  return (
    <section
      aria-label="Sectores que atendemos"
      className="relative bg-foreground text-background overflow-hidden border-y border-background/10"
    >
      {/* Top hairline accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/15 to-transparent"
      />

      {/* Fade masks — larger and stronger to avoid awkward cuts */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-10"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--foreground)) 0%, hsl(var(--foreground)/.95) 25%, hsl(var(--foreground)/.7) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-10"
        style={{
          background:
            "linear-gradient(to left, hsl(var(--foreground)) 0%, hsl(var(--foreground)/.95) 25%, hsl(var(--foreground)/.7) 55%, transparent 100%)",
        }}
      />

      <div className="py-5 md:py-6">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <Row />
          <Row ariaHidden />
        </motion.div>
      </div>

      {/* Bottom hairline accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-background/15 to-transparent"
      />
    </section>
  )
}
