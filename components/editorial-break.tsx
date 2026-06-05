"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditorialBreak() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2)

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div
          ref={imgRef}
          className={`lg:col-span-7 overflow-hidden transition-all duration-1000 ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <img
              src="/kms/editorial.jpg"
              alt="Operación KMS en sitio — extractores y ductería en planta industrial"
              className="w-full aspect-[16/10] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] uppercase text-background/80 bg-foreground/40 backdrop-blur-sm px-3 py-1.5">
              KMS · Operación en campo
            </span>
          </div>
        </div>

        <div
          ref={quoteRef}
          className={`lg:col-span-5 lg:col-start-8 transition-all duration-1000 delay-200 ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
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
        </div>
      </div>
    </section>
  )
}
