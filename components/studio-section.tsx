"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "8", suffix: "años", label: "De experiencia técnica" },
  { value: "MX", suffix: "", label: "Atención en todo el país" },
  { value: "10", suffix: "+", label: "Especialidades técnicas" },
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
      {/* Subtle brand accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/50 to-transparent"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div
          ref={headRef}
          className={`lg:col-span-5 transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-6">
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
            <p className="text-[15px] md:text-base leading-[1.75] text-background/75">
              KMS es una empresa industrial con 8 años de experiencia técnica, enfocada en
              proyectos donde la fabricación, la instalación y el mantenimiento requieren
              orden, precisión y respuesta en campo.
            </p>
            <p className="text-[15px] md:text-base leading-[1.75] text-background/70">
              Integramos servicios de HVAC, ductería, aislamiento, TPO, recubrimientos,
              estructuras metálicas, montajes y soluciones CNC para atender necesidades
              industriales y comerciales en México.
            </p>
            <p className="text-[15px] md:text-base leading-[1.75] text-background/70">
              Nuestra capacidad CNC va más allá del corte. Desarrollamos maquinaria,
              fabricamos soluciones a medida y damos mantenimiento a equipos existentes
              para mejorar procesos de producción.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className={`mt-16 md:mt-24 pt-10 md:pt-12 border-t border-background/15 transition-all duration-1000 delay-300 ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-x-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`relative ${i > 0 ? "lg:pl-10 lg:border-l lg:border-background/10" : ""} ${
                i === 2 ? "md:border-t-0" : ""
              }`}
            >
              <p className="flex items-baseline gap-1 text-[clamp(2rem,4.5vw,3.25rem)] font-extralight text-background tracking-tight leading-none">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-base md:text-lg text-background/55 font-light">
                    {stat.suffix}
                  </span>
                )}
              </p>
              <p className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-background/45 mt-4 leading-snug max-w-[20ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
