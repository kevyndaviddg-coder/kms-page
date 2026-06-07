"use client"

import { motion, useScroll, useTransform, useInView } from "motion/react"
import { useRef } from "react"
import { WordReveal } from "@/components/word-reveal"

const QUOTE =
  "En la industria, una solución no termina en el diseño: debe fabricarse bien, instalarse correctamente y funcionar en campo."

export function EditorialBreak() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { amount: 0.5, once: true })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"])
  const captionY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <section
      ref={sectionRef}
      className="relative bg-secondary/30 overflow-hidden"
    >
      {/* Editorial header bar */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 12 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 border-b border-foreground/10 px-6 md:px-12 lg:px-20 py-5"
      >
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-foreground/30" />
            Editorial — 01
          </span>
          <span className="hidden md:inline-flex items-center gap-6">
            <span>KMS</span>
            <span className="text-muted-foreground/40">·</span>
            <span>Operación industrial</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="tabular-nums">MX</span>
          </span>
          <span className="text-muted-foreground/60 tabular-nums">2026</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 px-6 md:px-12 lg:px-20 py-20 md:py-28 gap-12 lg:gap-16 items-stretch">
        {/* Image — tall editorial format with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-7 relative"
        >
          <div className="relative overflow-hidden aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]">
            <motion.img
              src="/kms/editorial.jpg"
              alt="Cubierta industrial KMS con equipos HVAC en operación"
              style={{ y: imgY }}
              className="absolute inset-x-0 -inset-y-[10%] w-full h-[120%] object-cover object-center grayscale"
              whileHover={{ filter: "grayscale(0)" }}
              transition={{ duration: 1.2 }}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-foreground/15"
            />

            {/* Floating index */}
            <motion.span
              aria-hidden
              className="absolute top-6 right-6 text-background/55 font-extralight text-[clamp(2rem,3.5vw,3rem)] leading-none tabular-nums tracking-tight"
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              01
              <span className="text-[0.5em] align-top">/04</span>
            </motion.span>

            {/* Bottom metadata strip with parallax */}
            <motion.div
              style={{ y: captionY }}
              className="absolute inset-x-0 bottom-0 px-6 pb-6"
            >
              <div className="flex items-end justify-between gap-6 text-background">
                <div>
                  <p className="text-[10px] tracking-[0.32em] uppercase text-background/55 mb-1.5">
                    Captura
                  </p>
                  <p className="text-sm md:text-[15px] font-light tracking-tight">
                    Cubierta industrial · TPO + HVAC
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-background/55 mb-1.5">
                    Locación
                  </p>
                  <p className="text-sm md:text-[15px] font-light tracking-tight">
                    Monterrey, NL
                  </p>
                </div>
              </div>
              <div className="mt-4 h-px bg-background/25" />
            </motion.div>
          </div>
        </motion.div>

        {/* Quote column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          {/* Quote eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
          >
            <span className="h-px w-8 bg-foreground/30" />
            Operación en campo
          </motion.div>

          {/* Pull quote with word stagger */}
          <div className="mt-10 lg:mt-0 lg:py-12">
            <span
              aria-hidden
              className="block text-[clamp(3rem,5vw,5rem)] font-extralight leading-none text-[hsl(var(--brand))]/70 mb-2"
            >
              “
            </span>
            <blockquote className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-extralight leading-[1.3] tracking-tight text-foreground text-balance">
              <WordReveal text={QUOTE} />
            </blockquote>
          </div>

          {/* Attribution card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 lg:mt-0 flex items-center gap-5 border-t border-foreground/10 pt-7"
          >
            <span
              aria-hidden
              className="h-12 w-12 inline-flex items-center justify-center rounded-full bg-foreground text-background text-[10px] tracking-[0.18em] font-medium shrink-0"
            >
              KMS
            </span>
            <div className="min-w-0">
              <p className="text-sm text-foreground font-light tracking-tight">
                Equipo técnico KMS
              </p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-1.5">
                Soluciones industriales · México
              </p>
            </div>
            <span
              aria-hidden
              className="ml-auto text-[10px] tracking-[0.3em] uppercase text-muted-foreground/55 tabular-nums hidden sm:block"
            >
              ↘ 03
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
