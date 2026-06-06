"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."
const EMAIL = "contacto@grupokms.com"

export function CtaSection() {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden bg-foreground text-background"
      >
        {/* Background image with subtle parallax-style zoom */}
        <motion.div
          className="absolute inset-0"
          aria-hidden
          initial={{ scale: 1.05 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 2.0, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src="/kms/areas/estructuras/05.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.3] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>

        {/* Brand accents */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand))]/30 via-transparent to-transparent pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand))]/70 to-transparent"
        />

        <div className="relative px-6 md:px-12 lg:px-20 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.3em] uppercase text-background/65 mb-6">
              <span className="inline-block h-px w-8 align-middle bg-background/45 mr-3" />
              Próximos proyectos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extralight leading-[1.2] tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              ¿Tienes un proyecto industrial por resolver?
            </h2>
            <p className="mt-6 max-w-xl text-sm md:text-[15px] leading-[1.7] text-background/80 text-pretty">
              Hablemos del alcance técnico y la mejor forma de ejecutarlo.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-stretch xl:items-center gap-3 lg:justify-end">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/90 transition-colors duration-300"
            >
              Cotizar por WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase text-background/85 hover:text-background border border-background/30 hover:border-background/70 px-7 py-4 transition-colors duration-300 backdrop-blur-sm"
            >
              Escribir por correo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
