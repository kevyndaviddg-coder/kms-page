"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeader } from "@/components/section-header"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

const services = [
  {
    number: "01",
    title: "HVAC y refrigeración",
    description:
      "Instalación, mantenimiento y adecuación de sistemas HVAC para espacios industriales y comerciales.",
  },
  {
    number: "02",
    title: "Ductería y laminación",
    description:
      "Fabricación e instalación de ductos, lámina, accesorios, soportes y soluciones especiales a medida.",
  },
  {
    number: "03",
    title: "Aislamiento y TPO",
    description:
      "Aislamiento térmico, laminación, aplicación de TPO y protección de superficies expuestas.",
  },
  {
    number: "04",
    title: "CNC industrial",
    description:
      "Corte láser, plasma, oxicorte, mecanizado CNC, desarrollo de maquinaria CNC y mantenimiento de equipos industriales.",
  },
  {
    number: "05",
    title: "Recubrimientos industriales",
    description:
      "Protección, acabado y mayor durabilidad para superficies, componentes y estructuras.",
  },
  {
    number: "06",
    title: "Montajes y fabricación",
    description:
      "Estructuras metálicas, bases, soportes, piezas especiales, herrería industrial y montajes en campo.",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <a
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Cotizar ${service.title} por WhatsApp`}
      className={`relative group block bg-background p-7 md:p-9 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Left accent bar */}
      <span
        aria-hidden
        className="absolute left-0 top-7 md:top-9 h-6 w-px bg-foreground/25 transition-all duration-500 group-hover:h-10 group-hover:bg-foreground"
      />

      <div className="flex items-start justify-between mb-6">
        <span className="text-[11px] tracking-[0.18em] tabular-nums text-muted-foreground/60 font-medium">
          ({service.number})
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-3 leading-snug transition-transform duration-500 group-hover:translate-x-1">
        {service.title}
      </h3>
      <p className="text-sm leading-[1.7] text-muted-foreground text-pretty max-w-md">
        {service.description}
      </p>
    </a>
  )
}

export function JournalSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="servicios" className="px-6 py-24 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-14 md:mb-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader
          eyebrow="Servicios"
          title="Lo que hacemos"
          meta={`(${String(services.length).padStart(2, "0")}) Servicios principales`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
