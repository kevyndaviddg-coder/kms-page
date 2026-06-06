"use client"

import { motion } from "motion/react"
import { useRef } from "react"
import { useInView } from "motion/react"

export function EditorialBreak() {
  const imgRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const imgInView = useInView(imgRef, { amount: 0.2, once: true })
  const quoteInView = useInView(quoteRef, { amount: 0.25, once: true })

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 28 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-7 overflow-hidden"
        >
          <div className="relative">
            <motion.img
              src="/kms/editorial.jpg"
              alt="KMS — cubierta industrial con equipos HVAC en operación"
              className="w-full aspect-[16/10] object-cover object-center grayscale"
              whileHover={{ filter: "grayscale(0)" }}
              transition={{ duration: 1.2 }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-foreground/55 to-transparent pointer-events-none"
            />
            <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] uppercase text-background bg-foreground/55 backdrop-blur-sm px-3 py-1.5">
              KMS · Operación en campo
            </span>
          </div>
        </motion.div>

        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 28 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <div className="w-10 h-px bg-foreground/25 mb-8" />
          <blockquote className="text-2xl md:text-3xl lg:text-[2rem] font-extralight leading-[1.3] tracking-tight text-foreground text-balance">
            <span aria-hidden className="text-[hsl(var(--brand))] mr-1">“</span>
            En la industria, una solución no termina en el diseño: debe fabricarse bien,
            instalarse correctamente y funcionar en campo.
            <span aria-hidden className="text-[hsl(var(--brand))] ml-0.5">”</span>
          </blockquote>
          <div className="flex items-center gap-4 mt-10">
            <span className="h-8 w-px bg-foreground/25" />
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-foreground font-medium">
                KMS
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                Soluciones industriales en México
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
