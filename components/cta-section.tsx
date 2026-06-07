"use client"

import { motion, useInView, useScroll, useTransform } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import { WordReveal } from "@/components/word-reveal"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."
const EMAIL = "contacto@grupokms.com"

export function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { amount: 0.2, once: true })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0])

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden bg-foreground text-background"
      >
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          aria-hidden
          style={{ y: imgY, scale: imgScale }}
        >
          <img
            src="/kms/areas/estructuras/05.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.42]"
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/55 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/35 via-transparent to-foreground/40" />
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

        {/* Decorative giant index */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 0.08, x: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="hidden lg:block absolute -right-6 -bottom-12 text-background font-extralight tabular-nums leading-none tracking-[-0.05em] text-[clamp(14rem,22vw,22rem)] pointer-events-none select-none"
        >
          ↗
        </motion.span>

        {/* Top section meta */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 md:pt-14 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-background/55">
          <motion.span
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-background/30" />
            Próximos proyectos
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:inline-block tabular-nums"
          >
            KMS · 2026
          </motion.span>
        </div>

        {/* Main content */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-extralight leading-[1.05] tracking-[-0.025em] text-balance drop-shadow-[0_2px_22px_rgba(0,0,0,0.5)]">
              <WordReveal text="¿Tienes un proyecto industrial por resolver?" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="mt-8 max-w-xl text-sm md:text-[15px] leading-[1.7] text-background/80 text-pretty"
            >
              Hablemos del alcance técnico y la mejor forma de ejecutarlo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3"
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              pullStrength={0.28}
              radius={140}
              className="group relative inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] md:text-xs tracking-[0.22em] uppercase font-medium overflow-hidden"
            >
              <span className="relative z-10">Cotizar por WhatsApp</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center gap-2 text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:delay-100"
              >
                <span className="text-[11px] tracking-[0.22em] uppercase font-medium">
                  Cotizar por WhatsApp
                </span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </MagneticButton>

            <MagneticButton
              href={`mailto:${EMAIL}`}
              pullStrength={0.22}
              radius={140}
              className="group inline-flex items-center justify-center gap-2 text-[11px] md:text-xs tracking-[0.22em] uppercase text-background/85 hover:text-background border border-background/30 hover:border-background/70 px-7 py-4 transition-colors duration-300 backdrop-blur-sm"
            >
              Escribir por correo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
