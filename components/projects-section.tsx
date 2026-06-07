"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeader } from "@/components/section-header"
import { CardCarousel } from "@/components/card-carousel"

type Area = {
  title: string
  category: string
  tags: string[]
  description: string
  images: string[]
}

const areas: Area[] = [
  {
    title: "HVAC y ductería industrial",
    category: "Climatización / Ventilación / Ductería",
    tags: ["HVAC", "Ductería", "Mantenimiento"],
    description:
      "Fabricación, instalación, mantenimiento y adecuación de sistemas HVAC y ductería para espacios industriales y comerciales.",
    images: [
      "/kms/areas/hvac/02.jpg",
      "/kms/areas/hvac/08.jpg",
      "/kms/areas/hvac/09.jpg",
      "/kms/areas/hvac/01.jpg",
      "/kms/areas/hvac/06.jpg",
      "/kms/areas/hvac/07.jpg",
      "/kms/areas/hvac/03.jpg",
    ],
  },
  {
    title: "Aislamiento, TPO y policarbonatos",
    category: "Protección térmica / Cubiertas / Envolventes",
    tags: ["TPO", "Aislamiento", "Policarbonatos", "Domos"],
    description:
      "Aislamiento térmico, laminación, aplicación de TPO, instalación y reemplazo de policarbonatos, domos y cubiertas traslúcidas industriales.",
    images: [
      "/kms/aislamiento/panorama-monterrey.jpg",
      "/kms/aislamiento/rooftop-piping.jpg",
      "/kms/policarbonatos/01.jpg",
      "/kms/aislamiento/piping-valves.jpg",
      "/kms/areas/aislamiento/01.jpg",
      "/kms/aislamiento/piping-elbows.jpg",
      "/kms/policarbonatos/02.jpg",
      "/kms/aislamiento/piping-chiller.jpg",
      "/kms/aislamiento/large-tank.jpg",
      "/kms/areas/aislamiento/03.jpg",
      "/kms/aislamiento/blue-wrap-process.jpg",
      "/kms/aislamiento/spiral-ducting.jpg",
    ],
  },
  {
    title: "CNC industrial y maquinaria CNC",
    category: "Corte / Mecanizado / Desarrollo de equipos",
    tags: ["Láser", "Plasma", "Mecanizado", "Maquinaria"],
    description:
      "Corte láser, plasma, oxicorte y mecanizado CNC, además de desarrollo, fabricación y mantenimiento de maquinaria CNC para procesos industriales.",
    images: [
      "/kms/areas/cnc/01.jpg",
      "/kms/areas/cnc/02.jpg",
      "/kms/areas/cnc/03.jpg",
      "/kms/areas/cnc/04.jpg",
      "/kms/areas/cnc/05.jpg",
      "/kms/areas/cnc/06.jpg",
      "/kms/areas/cnc/07.jpg",
    ],
  },
  {
    title: "PLCs y automatización industrial",
    category: "Control / Tableros / Variadores / Integración",
    tags: ["PLCs", "Tableros", "Variadores", "Diagnóstico"],
    description:
      "Integración, diagnóstico, programación y soporte para sistemas de control, PLCs, tableros, variadores y procesos automatizados.",
    images: [
      "/kms/automation/01.jpg",
      "/kms/automation/02.jpg",
      "/kms/automation/03.jpg",
      "/kms/automation/04.jpg",
    ],
  },
  {
    title: "Fabricación, montajes y estructuras metálicas",
    category: "Estructuras / Soldadura / Montajes en campo",
    tags: ["Estructuras", "Soldadura", "Montajes"],
    description:
      "Fabricación de estructuras, soportes, bases, piezas especiales y montajes industriales diseñados para operar con seguridad y precisión.",
    images: [
      "/kms/areas/estructuras/01.jpg",
      "/kms/areas/estructuras/02.jpg",
      "/kms/areas/estructuras/03.jpg",
      "/kms/areas/estructuras/04.jpg",
      "/kms/areas/estructuras/05.jpg",
      "/kms/areas/estructuras/06.jpg",
      "/kms/areas/estructuras/07.jpg",
      "/kms/areas/estructuras/08.jpg",
    ],
  },
  {
    title: "Recubrimientos industriales",
    category: "Protección / Sellado / Acabados",
    tags: ["Recubrimientos", "Sellado", "Acabados"],
    description:
      "Recubrimientos protectores, sellado de penetraciones y acabados industriales para mejorar durabilidad de superficies, componentes y estructuras.",
    images: [
      "/kms/areas/aislamiento/07.jpg",
      "/kms/areas/aislamiento/04.jpg",
      "/kms/areas/aislamiento/06.jpg",
      "/kms/areas/estructuras/07.jpg",
      "/kms/areas/aislamiento/05.jpg",
    ],
  },
]

function AreaCard({ area, index }: { area: Area; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <motion.div
      ref={ref}
      className={`relative bg-background group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative">
        <CardCarousel
          images={area.images}
          alt={`${area.title} — ${area.category}`}
          hoverZoomSingle
        />

        {area.images.length <= 1 && (
          <div
            aria-hidden
            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700 pointer-events-none"
          />
        )}

        <span className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm text-foreground text-[10px] tracking-[0.18em] uppercase px-2.5 py-1.5 font-medium">
          <span className="tabular-nums text-muted-foreground/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-2.5 w-px bg-border" />
          Área {String(index + 1).padStart(2, "0")}
          {area.images.length > 1 && (
            <>
              <span className="h-2.5 w-px bg-border" />
              <span className="text-muted-foreground/70 tabular-nums">
                {area.images.length} fotos
              </span>
            </>
          )}
        </span>
      </div>

      <div className="p-6 md:p-7 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground text-balance leading-snug">
            {area.title}
          </h3>
          <ArrowUpRight
            className={`h-4 w-4 mt-1 text-muted-foreground/40 transition-all duration-300 shrink-0 ${
              hovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
            }`}
          />
        </div>

        <p className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground/80 mb-4">
          {area.category}
        </p>

        <p className="text-sm leading-[1.65] text-muted-foreground/90 text-pretty mb-5">
          {area.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {area.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-[10px] tracking-[0.12em] uppercase text-muted-foreground border border-border px-2 py-1 transition-colors duration-300 group-hover:border-foreground/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="proyectos" className="px-6 py-24 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-14 md:mb-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader
          eyebrow="Capacidad técnica"
          title="Áreas de trabajo"
          meta={`(${String(areas.length).padStart(2, "0")}) Especialidades principales`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {areas.map((area, index) => (
          <AreaCard key={area.title} area={area} index={index} />
        ))}
      </div>
    </section>
  )
}
