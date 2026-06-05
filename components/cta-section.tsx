"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div
        ref={ref}
        className={`relative overflow-hidden bg-foreground text-background transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Subtle brand gradient accent */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand))]/15 via-transparent to-transparent pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/60 to-transparent"
        />

        <div className="relative px-6 md:px-12 lg:px-20 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/45 mb-6">
              <span className="inline-block h-px w-8 align-middle bg-background/30 mr-3" />
              Próximos proyectos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extralight leading-[1.2] tracking-tight text-balance">
              ¿Tienes un proyecto industrial por resolver?
            </h2>
            <p className="mt-6 max-w-xl text-sm md:text-[15px] leading-[1.7] text-background/65 text-pretty">
              Hablemos del alcance técnico y la mejor forma de ejecutarlo.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-stretch xl:items-center gap-3 lg:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/90 transition-all duration-300"
            >
              Cotizar por WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="tel:+526761123869"
              className="inline-flex items-center justify-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase text-background/70 hover:text-background border border-background/20 hover:border-background/50 px-7 py-4 transition-all duration-300"
            >
              +52 676 112 3869
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
