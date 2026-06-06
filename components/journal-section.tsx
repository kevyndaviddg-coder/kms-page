"use client"

import { motion } from "motion/react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { SectionHeader } from "@/components/section-header"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

type Service = {
  number: string
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    number: "01",
    title: "HVAC y refrigeración",
    description:
      "Instalación, mantenimiento y adecuación de sistemas HVAC para espacios industriales y comerciales.",
    image: "/kms/areas/hvac/02.jpg",
  },
  {
    number: "02",
    title: "Ductería y laminación",
    description:
      "Fabricación e instalación de ductos, lámina, accesorios, soportes y soluciones a medida.",
    image: "/kms/areas/hvac/06.jpg",
  },
  {
    number: "03",
    title: "Aislamiento y TPO",
    description:
      "Aislamiento térmico, laminación, aplicación de TPO y protección de superficies expuestas.",
    image: "/kms/areas/aislamiento/01.jpg",
  },
  {
    number: "04",
    title: "CNC industrial",
    description:
      "Corte láser, plasma, oxicorte, mecanizado CNC, desarrollo de maquinaria CNC y mantenimiento de equipos industriales.",
    image: "/kms/areas/cnc/02.jpg",
  },
  {
    number: "05",
    title: "Recubrimientos industriales",
    description:
      "Protección, acabado y mayor durabilidad para superficies, componentes y estructuras.",
    image: "/kms/areas/aislamiento/07.jpg",
  },
  {
    number: "06",
    title: "Montajes y fabricación",
    description:
      "Estructuras metálicas, bases, soportes, piezas especiales, herrería industrial y montajes en campo.",
    image: "/kms/areas/estructuras/01.jpg",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.12)

  return (
    <motion.a
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Cotizar ${service.title} por WhatsApp`}
      initial={false}
      animate={
        isVisible
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 32 }
      }
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover="hover"
      className="relative group flex flex-col bg-background overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent"
        />
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-foreground/20"
          variants={{ hover: { opacity: 0 } }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Big numeral */}
        <span
          aria-hidden
          className="absolute top-5 left-6 text-background/85 font-extralight tabular-nums leading-none text-[clamp(1.5rem,2.2vw,2rem)] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          {service.number}
        </span>

        {/* Title */}
        <h3 className="absolute left-6 right-12 bottom-5 text-background text-lg md:text-xl lg:text-[1.35rem] font-light leading-snug tracking-tight text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {service.title}
        </h3>

        {/* Arrow pill */}
        <motion.span
          aria-hidden
          className="absolute right-5 bottom-5 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/20 text-background backdrop-blur-md border border-background/30"
          variants={{
            hover: {
              backgroundColor: "rgba(255,255,255,1)",
              color: "rgb(13,13,13)",
            },
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            variants={{ hover: { x: 2, y: -2 } }}
            transition={{ duration: 0.3 }}
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </motion.svg>
        </motion.span>
      </div>

      {/* Description */}
      <div className="relative px-6 md:px-7 py-7 border-t border-border flex-1 bg-background">
        {/* Animated bottom border on hover */}
        <motion.span
          aria-hidden
          className="absolute left-0 bottom-0 h-[2px] bg-foreground origin-left"
          initial={{ scaleX: 0 }}
          variants={{ hover: { scaleX: 1 } }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ width: "100%" }}
        />
        <p className="text-sm leading-[1.7] text-muted-foreground text-pretty max-w-md">
          {service.description}
        </p>
      </div>
    </motion.a>
  )
}

export function JournalSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="servicios" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-secondary/10">
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
