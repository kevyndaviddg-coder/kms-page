"use client"

import { motion, useInView, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { SectionHeader } from "@/components/section-header"

type Step = {
  number: string
  title: string
  description: string
  image: string
  meta: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Revisamos la necesidad del proyecto, las condiciones del sitio, el proceso involucrado y los puntos críticos antes de proponer una solución.",
    image: "/kms/areas/cnc/05.jpg",
    meta: "Sitio · Proceso",
  },
  {
    number: "02",
    title: "Propuesta técnica",
    description:
      "Definimos alcances, materiales, tiempos y forma de ejecución para entregar una cotización clara y bien aterrizada.",
    image: "/kms/areas/cnc/04.jpg",
    meta: "Alcance · Plan",
  },
  {
    number: "03",
    title: "Fabricación y ejecución",
    description:
      "Fabricamos, instalamos, damos mantenimiento o integramos la solución requerida, cuidando calidad, seguridad y coordinación en campo.",
    image: "/kms/aislamiento/panorama-monterrey.jpg",
    meta: "Planta · Campo",
  },
  {
    number: "04",
    title: "Entrega y seguimiento",
    description:
      "Verificamos detalles finales, funcionamiento y condiciones de entrega para asegurar un resultado listo para operar.",
    image: "/kms/areas/hvac/09.jpg",
    meta: "Cierre · QA",
  },
]

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      ref={ref}
      aria-hidden
      className="hidden lg:block absolute top-[18px] left-0 right-0 h-px"
    >
      <span className="absolute inset-0 bg-foreground/12" />
      <motion.span
        className="absolute inset-y-0 left-0 right-0 origin-left bg-foreground"
        style={{ scaleX }}
      />
    </div>
  )
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.35, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.14,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover="hover"
      className="relative group"
    >
      {/* Top dot */}
      <div className="relative flex items-center mb-8 md:mb-10">
        <motion.span
          aria-hidden
          className="relative inline-flex items-center justify-center h-5 w-5 shrink-0 rounded-full bg-background ring-2 ring-foreground/25"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 18,
            delay: index * 0.14 + 0.3,
          }}
          variants={{
            hover: {
              backgroundColor: "rgb(13,13,13)",
              transition: { duration: 0.3 },
            },
          }}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-foreground/35 group-hover:bg-background transition-colors duration-300"
          />
        </motion.span>
        <span
          aria-hidden
          className="lg:hidden ml-3 h-px flex-1 bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent"
        />
      </div>

      {/* Thumbnail */}
      <motion.div
        className="relative aspect-[5/3] overflow-hidden mb-6 bg-secondary/40"
        variants={{ hover: {} }}
      >
        <motion.img
          src={step.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          variants={{
            hover: { scale: 1.06, filter: "grayscale(0)" },
          }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent"
        />
        <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.28em] uppercase text-background bg-foreground/55 backdrop-blur-sm px-2 py-1">
          {step.meta}
        </span>
      </motion.div>

      {/* Number + label row */}
      <div className="flex items-baseline justify-between mb-4">
        <motion.span
          className="text-[clamp(3rem,6vw,4.75rem)] font-extralight leading-none text-foreground/90 tracking-tight tabular-nums"
          variants={{
            hover: { color: "rgb(13,13,13)", x: 4 },
          }}
          transition={{ duration: 0.4 }}
        >
          {step.number}
        </motion.span>
        <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/55 self-start mt-3">
          Etapa
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-4 leading-snug">
        {step.title}
      </h3>
      <motion.div
        className="h-px bg-foreground/25 mb-5 origin-left"
        style={{ width: "1.5rem" }}
        variants={{
          hover: { width: "3rem", backgroundColor: "rgb(13,13,13)" },
        }}
        transition={{ duration: 0.4 }}
      />
      <p className="text-sm leading-[1.65] text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  )
}

export function ApproachSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { amount: 0.3, once: true })

  return (
    <section
      id="proceso"
      className="relative px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-secondary/30 overflow-hidden"
    >
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 28 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="mb-14 md:mb-20"
      >
        <SectionHeader
          eyebrow="Forma de trabajo"
          title="Proceso"
          meta={`(${String(steps.length).padStart(2, "0")}) Etapas de proyecto`}
        />
      </motion.div>

      <div className="relative">
        <TimelineLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:gap-x-10 lg:gap-x-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
