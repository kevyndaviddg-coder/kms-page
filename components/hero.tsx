"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

const trustItems = [
  { value: "8", label: "Años de experiencia" },
  { value: "MX", label: "Atención nacional" },
  { value: "HVAC", label: "Ductería e instalación" },
  { value: "CNC", label: "Corte y desarrollo" },
]

export function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kms/hero.jpg"
          alt="Instalación industrial KMS — operación técnica y maquinaria"
          className={`w-full h-full object-cover object-center transition-transform duration-[2000ms] ease-out ${
            visible ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-12 pt-32 md:px-12 lg:px-20 md:pb-16 md:pt-36">
        <div className="max-w-5xl">
          <div
            className={`overflow-hidden mb-6 transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-background/40" />
              <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-background/65">
                8 años de experiencia técnica — Capacidad en todo México
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-[clamp(2rem,6vw,5.25rem)] font-extralight leading-[1.04] tracking-[-0.03em] text-background text-balance max-w-[22ch]">
              Soluciones técnicas para infraestructura y operación industrial
            </h1>
          </div>

          <div
            className={`mt-8 md:mt-10 max-w-2xl transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0 delay-[900ms]" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-sm md:text-base leading-[1.7] text-background/70 text-pretty">
              KMS integra HVAC, ductería, aislamiento, TPO, recubrimientos, fabricación
              metálica, montajes y soluciones CNC para proyectos industriales, comerciales
              y de mantenimiento especializado.
            </p>
          </div>

          <div
            className={`mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0 delay-[1100ms]"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-3.5 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/90 transition-all duration-300"
            >
              Cotizar por WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicios"
              className="group inline-flex items-center justify-center gap-2 border border-background/40 text-background px-7 py-3.5 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/10 hover:border-background/70 transition-all duration-300"
            >
              Ver servicios
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div
        className={`relative z-10 border-t border-background/15 backdrop-blur-sm bg-foreground/25 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0 delay-[1300ms]" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20 py-5 md:py-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-10">
            {trustItems.map((item) => (
              <li key={item.label} className="flex flex-col gap-1.5 min-w-0">
                <span className="text-base md:text-lg font-light text-background tracking-tight tabular-nums leading-none">
                  {item.value}
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-background/55 leading-snug">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
