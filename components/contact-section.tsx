"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { EmbeddedMap } from "@/components/embedded-map"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."
const EMAIL = "contacto@grupokms.com"
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico"

const blocks = [
  {
    label: "Cotizaciones",
    title: "Atención por WhatsApp",
    body: "Respuesta directa con un responsable técnico.",
    href: WHATSAPP_URL,
    external: true,
    linkText: "Enviar mensaje",
  },
  {
    label: "Correo",
    title: EMAIL,
    body: "Para cotizaciones formales y documentación técnica.",
    href: `mailto:${EMAIL}`,
    external: false,
    linkText: "Escribir correo",
  },
  {
    label: "Cobertura",
    title: "Atención en todo México",
    body: "Servicios industriales y comerciales en planta y obra.",
    href: MAPS_URL,
    external: true,
    linkText: "Ver en mapa",
  },
]

export function ContactSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)

  return (
    <section
      id="contacto"
      className="relative px-6 py-24 md:px-12 lg:px-20 md:py-32 bg-foreground text-background overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 mb-14 md:mb-20">
        <div
          ref={headRef}
          className={`lg:col-span-6 transition-all duration-1000 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/45 mb-6">
            <span className="inline-block h-px w-8 align-middle bg-background/30 mr-3" />
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-extralight leading-[1.1] tracking-tight text-balance">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-[15px] md:text-base leading-[1.75] text-background/75 mt-8 max-w-xl text-pretty">
            Cuéntanos qué necesitas fabricar, instalar, mantener o desarrollar. En KMS
            te ayudamos a definir el alcance técnico y aterrizar una solución viable.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 bg-background text-foreground px-7 py-4 text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-background/90 transition-colors duration-300"
            >
              Enviar WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={`mailto:${EMAIL}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="group inline-flex items-center justify-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase text-background/80 hover:text-background border border-background/25 hover:border-background/60 px-7 py-4 transition-colors duration-300"
            >
              Escribir por correo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </div>

        <div
          ref={bodyRef}
          className={`lg:col-span-6 flex flex-col justify-end transition-all duration-1000 delay-200 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 gap-px bg-background/10 border border-background/10">
            {blocks.map((block) => (
              <motion.a
                key={block.label}
                href={block.href}
                {...(block.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                transition={{ duration: 0.3 }}
                className="group block bg-foreground p-6 md:p-7"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-background/40 mb-3">
                  {block.label}
                </p>
                <p className="text-[15px] md:text-base text-background font-light mb-1.5 break-words">
                  {block.title}
                </p>
                <p className="text-sm leading-[1.65] text-background/60 text-pretty">
                  {block.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-background/55 group-hover:text-background transition-colors duration-300">
                  {block.linkText}
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <EmbeddedMap />
    </section>
  )
}
