"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
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

function StepCard({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)
  const isLast = index === total - 1

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Connector line on lg+ */}
      {!isLast && (
        <div
          aria-hidden
          className="hidden lg:block absolute top-12 left-[calc(100%-1.25rem)] w-full h-px bg-border"
        />
      )}

      {/* Number badge */}
      <div className="flex items-center gap-4 mb-7">
        <div className="relative flex items-center justify-center h-10 w-10 border border-foreground/15 bg-background text-foreground transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
          <span className="text-[11px] tracking-[0.1em] font-medium tabular-nums">
            {step.number}
          </span>
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60">
          Etapa {step.number}
        </span>
      </div>

      <h3 className="text-xl md:text-[1.4rem] font-light tracking-tight text-foreground mb-4 leading-snug">
        {step.title}
      </h3>
      <div className="w-6 h-px bg-foreground/25 mb-5 transition-all duration-500 group-hover:w-12 group-hover:bg-foreground/60" />
      <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
        {step.description}
      </p>
    </div>
  )
}

export function ApproachSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="proceso" className="px-6 py-24 md:px-12 lg:px-20 md:py-36 bg-secondary/20">
      <div
        ref={ref}
        className={`mb-14 md:mb-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeader
          eyebrow="Forma de trabajo"
          title="Proceso"
          meta={`(${String(steps.length).padStart(2, "0")}) Etapas de proyecto`}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
        {steps.map((step, index) => (
          <StepCard key={step.number} step={step} index={index} total={steps.length} />
        ))}
      </div>
    </section>
  )
}
