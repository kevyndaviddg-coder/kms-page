"use client"

import { motion } from "motion/react"
import { ArrowUpRight, MapPin } from "lucide-react"

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico"

// OpenStreetMap embed — free, no API key, no iframe blocking.
// Bounding box covers Monterrey metro area. Marker at city center.
const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-100.61%2C25.55%2C-100.10%2C25.85&layer=mapnik&marker=25.6866%2C-100.3161"

export function EmbeddedMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full"
    >
      {/* Map container */}
      <div className="relative w-full aspect-[16/10] md:aspect-[2/1] overflow-hidden border border-background/15 bg-foreground/40">
        <iframe
          src={MAP_EMBED_SRC}
          title="Ubicación KMS — Monterrey, Nuevo León, México"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 w-full h-full grayscale contrast-[1.05] brightness-[0.92] hover:grayscale-0 transition-all duration-700"
          style={{ border: 0 }}
        />
        {/* Subtle tint overlay (non-blocking) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-foreground/5" />

        {/* Floating location card */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -2 }}
            className="pointer-events-auto group inline-flex items-center gap-4 bg-background text-foreground px-5 py-4 md:px-6 md:py-5 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.45)] max-w-[calc(100%-1rem)]"
          >
            <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-foreground text-background shrink-0">
              <MapPin className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/65">
                Ubicación
              </span>
              <span className="text-sm md:text-[15px] font-light tracking-tight text-foreground truncate">
                Monterrey, Nuevo León, México
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1.5 ml-2 pl-5 border-l border-border text-[10px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              Ver en Maps
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <ArrowUpRight className="md:hidden h-3.5 w-3.5 text-muted-foreground shrink-0" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
