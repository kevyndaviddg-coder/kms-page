"use client"

import { motion, useInView } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { SectionHeader } from "@/components/section-header"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

type Service = {
  number: string
  title: string
  description: string
  image: string
  tag: string
}

const services: Service[] = [
  {
    number: "01",
    title: "HVAC y refrigeración",
    description:
      "Instalación, mantenimiento y adecuación de sistemas HVAC para espacios industriales y comerciales.",
    image: "/kms/areas/hvac/02.jpg",
    tag: "HVAC",
  },
  {
    number: "02",
    title: "Ductería y laminación",
    description:
      "Fabricación e instalación de ductos, lámina, accesorios, soportes y soluciones a medida.",
    image: "/kms/areas/hvac/06.jpg",
    tag: "Ductería",
  },
  {
    number: "03",
    title: "Aislamiento y TPO",
    description:
      "Aislamiento térmico, laminación, aplicación de TPO y protección de superficies expuestas.",
    image: "/kms/aislamiento/panorama-monterrey.jpg",
    tag: "TPO",
  },
  {
    number: "04",
    title: "Policarbonatos y cubiertas traslúcidas",
    description:
      "Instalación, reemplazo y mantenimiento de policarbonatos, domos, tragaluces y cerramientos ligeros.",
    image: "/kms/policarbonatos/01.jpg",
    tag: "Cubiertas",
  },
  {
    number: "05",
    title: "CNC industrial",
    description:
      "Corte láser, plasma, oxicorte y mecanizado CNC para procesos industriales de alta precisión.",
    image: "/kms/areas/cnc/02.jpg",
    tag: "CNC",
  },
  {
    number: "06",
    title: "Maquinaria CNC",
    description:
      "Desarrollo, fabricación y mantenimiento de maquinaria CNC a medida para procesos industriales.",
    image: "/kms/areas/cnc/04.jpg",
    tag: "Maquinaria",
  },
  {
    number: "07",
    title: "PLCs y automatización industrial",
    description:
      "Integración, diagnóstico y soporte para sistemas de control, PLCs, tableros, variadores y procesos automatizados.",
    image: "/kms/automation/01.jpg",
    tag: "Control",
  },
  {
    number: "08",
    title: "Recubrimientos industriales",
    description:
      "Protección, acabado y mayor durabilidad para superficies, componentes y estructuras.",
    image: "/kms/areas/aislamiento/07.jpg",
    tag: "Recubrimientos",
  },
  {
    number: "09",
    title: "Montajes y fabricación",
    description:
      "Bases, soportes, piezas especiales, herrería industrial y montajes coordinados en campo.",
    image: "/kms/areas/estructuras/04.jpg",
    tag: "Montajes",
  },
  {
    number: "10",
    title: "Estructuras metálicas",
    description:
      "Fabricación de estructuras, soportes y elementos metálicos diseñados para operación industrial.",
    image: "/kms/areas/estructuras/01.jpg",
    tag: "Estructuras",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { amount: 0.15, once: true })

  return (
    <motion.a
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Cotizar ${service.title} por WhatsApp`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: (index % 5) * 0.07,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover="hover"
      className="relative group block bg-background overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[5/4]">
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          variants={{ hover: { scale: 1.1 } }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/15 to-transparent"
        />

        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/75 to-foreground/30 opacity-0"
          variants={{ hover: { opacity: 1 } }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        />

        <span
          aria-hidden
          className="absolute top-4 left-5 text-background/85 font-extralight tabular-nums leading-none text-[clamp(1.25rem,1.8vw,1.65rem)] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          {service.number}
        </span>

        <motion.span
          className="absolute top-4 right-5 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-background/85 backdrop-blur-md bg-foreground/40 ring-1 ring-background/20 px-2 py-1"
          variants={{
            hover: {
              backgroundColor: "rgba(255,255,255,0.95)",
              color: "rgb(13,13,13)",
            },
          }}
          transition={{ duration: 0.4 }}
        >
          {service.tag}
        </motion.span>

        <motion.h3
          variants={{ hover: { opacity: 0, y: -10 } }}
          transition={{ duration: 0.3 }}
          className="absolute left-5 right-14 bottom-5 text-background text-[15px] md:text-base lg:text-[1.05rem] font-light leading-snug tracking-tight text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          {service.title}
        </motion.h3>

        <motion.div
          variants={{
            hover: { opacity: 1, y: 0 },
          }}
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-x-5 bottom-5 text-background"
        >
          <span className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-background/65 mb-2 inline-block">
            Servicio · {service.number}
          </span>
          <h3 className="text-[15px] md:text-base lg:text-[1.1rem] font-light leading-snug tracking-tight text-balance mb-2">
            {service.title}
          </h3>
          <p className="text-[12px] md:text-[13px] leading-[1.55] text-background/80">
            {service.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-background border-b border-background/40 pb-1">
            Cotizar por WhatsApp
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </motion.div>

        <motion.span
          aria-hidden
          className="absolute right-4 bottom-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/15 text-background backdrop-blur-md ring-1 ring-background/30"
          variants={{
            hover: { opacity: 0, scale: 0.85 },
          }}
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.span>
      </div>
    </motion.a>
  )
}

export function JournalSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.2, once: true })

  return (
    <section
      id="servicios"
      className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-secondary/10"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="mb-14 md:mb-20"
      >
        <SectionHeader
          eyebrow="Servicios"
          title="Lo que hacemos"
          meta={`(${String(services.length).padStart(2, "0")}) Servicios principales`}
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
