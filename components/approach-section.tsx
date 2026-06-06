"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { SectionHeader } from "@/components/section-header"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Revisamos la necesidad del proyecto, las condiciones del sitio, el proceso involucrado y los puntos críticos antes de proponer una solución.",
  },
  {
    number: "02",
    title: "Propuesta técnica",
    description:
      "Definimos alcances, materiales, tiempos y forma de ejecución para entregar una cotización clara y bien aterrizada.",
  },
  {
    number: "03",
    title: "Fabricación y ejecución",
    description:
      "Fabricamos, instalamos, damos mantenimiento o integramos la solución requerida, cuidando calidad, seguridad y coordinación en campo.",
  },
  {
    number: "04",
    title: "Entrega y seguimiento",
    description:
      "Verificamos detalles finales, funcionamiento y condiciones de entrega para asegurar un resultado listo para operar.",
  },
]

export function ApproachSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { amount: 0.3, once: true })

  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { amount: 0.2, once: true })

  return (
    <section id="proceso" className="px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-secondary/30">
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

      <div ref={lineRef} className="relative">
        {/* Animated connecting line (lg+) */}
        <motion.span
          aria-hidden
          className="hidden lg:block absolute top-[6px] left-0 h-px origin-left bg-gradient-to-r from-foreground/30 via-foreground/15 to-transparent"
          initial={{ scaleX: 0 }}
          animate={lineInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ width: "calc(100% - 1.5rem)" }}
        />

        <motion.div
          initial="hidden"
          animate={lineInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 md:gap-x-10 lg:gap-x-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              whileHover="cardHover"
              className="relative group"
            >
              {/* Dot on the timeline */}
              <div className="flex items-center mb-8 md:mb-10">
                <motion.span
                  className="relative inline-flex items-center justify-center h-3 w-3 shrink-0"
                  variants={{ cardHover: {} }}
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-foreground/20"
                    variants={{ cardHover: { backgroundColor: "rgb(13,13,13)" } }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="absolute inset-[3px] rounded-full bg-background" />
                </motion.span>
                <span
                  aria-hidden
                  className="lg:hidden ml-1 h-px flex-1 bg-gradient-to-r from-foreground/25 via-foreground/15 to-transparent"
                />
              </div>

              {/* Big outline numeral */}
              <div className="flex items-baseline justify-between mb-5">
                <motion.span
                  aria-hidden
                  className="text-[clamp(3.5rem,7vw,5.5rem)] font-extralight leading-none text-foreground/85 tracking-tight tabular-nums"
                  variants={{ cardHover: { color: "rgb(13,13,13)" } }}
                  transition={{ duration: 0.4 }}
                >
                  {step.number}
                </motion.span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground/55 self-start mt-3">
                  Etapa
                </span>
              </div>

              <h3 className="text-lg md:text-xl lg:text-[1.4rem] font-light tracking-tight text-foreground mb-4 leading-snug max-w-[18ch]">
                {step.title}
              </h3>
              <motion.div
                className="h-px bg-foreground/25 mb-5 origin-left"
                style={{ width: "1.5rem" }}
                variants={{
                  cardHover: { width: "3rem", backgroundColor: "rgb(13,13,13)" },
                }}
                transition={{ duration: 0.4 }}
              />
              <p className="text-sm leading-[1.7] text-muted-foreground max-w-[34ch]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
