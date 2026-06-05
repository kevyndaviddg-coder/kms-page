"use client"

import { useState } from "react"
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
      "/kms/areas/hvac/01.jpg",
      "/kms/areas/hvac/02.jpg",
      "/kms/areas/hvac/03.jpg",
      "/kms/areas/hvac/04.jpg",
      "/kms/areas/hvac/05.jpg",
      "/kms/areas/hvac/06.jpg",
      "/kms/areas/hvac/07.jpg",
      "/kms/areas/hvac/08.jpg",
      "/kms/areas/hvac/09.jpg",
      "/kms/areas/hvac/10.jpg",
      "/kms/areas/hvac/11.jpg",
    ],
  },
  {
    title: "Aislamiento, laminación y TPO",
    category: "Protección térmica / Sellado / Recubrimientos",
    tags: ["Aislamiento", "TPO", "Laminación"],
    description:
      "Aislamiento térmico, laminación, TPO y protección de superficies para mejorar eficiencia, durabilidad y desempeño en campo.",
    images: [
      "/kms/areas/aislamiento/01.jpg",
      "/kms/areas/aislamiento/02.jpg",
      "/kms/areas/aislamiento/03.jpg",
      "/kms/areas/aislamiento/04.jpg",
    ],
  },
  {
    title: "Corte, mecanizado y maquinaria CNC",
    category: "Láser / Plasma / Oxicorte / Mecanizado CNC",
    tags: ["Láser", "Plasma", "Oxicorte", "Mecanizado"],
    description:
      "Corte láser, plasma, oxicorte y mecanizado CNC, además de desarrollo, fabricación y mantenimiento de maquinaria CNC para procesos industriales.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80",
    ],
  },
  {
    title: "Fabricación y estructuras metálicas",
    category: "Montajes / Soldadura / Estructuras",
    tags: ["Estructuras", "Soldadura", "Montajes"],
    description:
      "Fabricación de estructuras, soportes, bases, piezas especiales y montajes industriales diseñados para operar con seguridad y precisión.",
    images: ["/kms/areas/fabricacion-estructuras.jpg"],
  },
]

function AreaCard({ area, index }: { area: Area; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`relative bg-background group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <CardCarousel
          images={area.images}
          alt={`${area.title} — ${area.category}`}
          hoverZoomSingle
        />

        {/* Subtle hover tint (only when single image, so it doesn't fight carousel UI) */}
        {area.images.length <= 1 && (
          <div
            aria-hidden
            className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-700 pointer-events-none"
          />
        )}

        {/* Number badge */}
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

      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-lg md:text-xl lg:text-[1.4rem] font-light tracking-tight text-foreground text-balance leading-snug">
            {area.title}
          </h3>
          <ArrowUpRight
            className={`h-4 w-4 mt-1 text-muted-foreground/40 transition-all duration-300 shrink-0 ${
              hovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
            }`}
          />
        </div>

        <p className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground/80 mb-5">
          {area.category}
        </p>

        <p className="text-sm leading-[1.7] text-muted-foreground/90 max-w-md text-pretty mb-6">
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
    </div>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {areas.map((area, index) => (
          <AreaCard key={area.title} area={area} index={index} />
        ))}
      </div>
    </section>
  )
}
