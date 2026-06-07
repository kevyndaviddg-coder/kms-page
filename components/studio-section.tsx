"use client"

import { motion } from "motion/react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CountUp } from "@/components/count-up"

type Stat = {
  value: string
  suffix: string
  label: string
  countTo?: number
}

const stats: Stat[] = [
  { value: "8", suffix: "años", label: "De experiencia técnica", countTo: 8 },
  { value: "MX", suffix: "", label: "Atención en todo el país" },
  { value: "10", suffix: "+", label: "Especialidades técnicas", countTo: 10 },
  { value: "CNC", suffix: "", label: "Corte, desarrollo y mantenimiento" },
]

export function StudioSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.1)

  return (
    <section
      id="nosotros"
      className="relative px-6 py-24 md:px-12 lg:px-20 md:py-36 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src="/kms/areas/hvac/06.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/50 via-transparent to-foreground/30" />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/50 to-transparent z-10"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div
          ref={headRef}
          className={`lg:col-span-5 transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/45 mb-6">
            <span className="inline-block h-px w-8 align-middle bg-background/30 mr-3" />
            Sobre KMS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance">
            Criterio técnico, fabricación precisa y ejecución confiable
          </h2>
        </div>

        <div
          ref={bodyRef}
          className={`lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-10 transition-all duration-1000 delay-200 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col gap-6 max-w-[58ch]">
            <p className="text-[15px] md:text-base leading-[1.75] text-background/80">
              KMS es una empresa industrial con 8 años de experiencia técnica, enfocada en
              proyectos donde la fabricación, la instalación y el mantenimiento requieren
              orden, precisión y respuesta en campo.
            </p>
            <p className="text-[15px] md:text-base leading-[1.75] text-background/75">
              Integramos servicios de HVAC, ductería, aislamiento, TPO, recubrimientos,
              estructuras metálicas, montajes y soluciones CNC para atender necesidades
              industriales y comerciales en México.
            </p>
            <p className="text-[15px] md:text-base leading-[1.75] text-background/75">
              Nuestra capacidad CNC va más allá del corte. Desarrollamos maquinaria,
              fabricamos soluciones a medida y damos mantenimiento a equipos existentes
              para mejorar procesos de producción.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        ref={statsRef}
        initial={false}
        animate={statsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 mt-16 md:mt-24 pt-10 md:pt-12 border-t border-background/15"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              animate={statsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={`relative ${i > 0 ? "lg:pl-10 lg:border-l lg:border-background/10" : ""}`}
            >
              <p className="flex items-baseline gap-1 text-[clamp(2rem,4.5vw,3.25rem)] font-extralight text-background tracking-tight leading-none">
                {stat.countTo !== undefined ? (
                  <CountUp to={stat.countTo} duration={1.8} />
                ) : (
                  <span>{stat.value}</span>
                )}
                {stat.suffix && (
                  <span className="text-base md:text-lg text-background/60 font-light">
                    {stat.suffix}
                  </span>
                )}
              </p>
              <p className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-background/55 mt-4 leading-snug max-w-[20ch]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
