"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer || typeof IntersectionObserver === "undefined") return
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting && entry.intersectionRatio > 0.6),
      { threshold: [0, 0.3, 0.6, 1] }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {mounted && !hidden && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60]"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <div className="relative">
            {/* Pulse rings */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[hsl(var(--wa))]"
              animate={{
                scale: [1, 1.9, 1.9],
                opacity: [0.55, 0, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-full bg-[hsl(var(--wa))]"
              animate={{
                scale: [1, 1.6, 1.6],
                opacity: [0.4, 0, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.0,
              }}
            />

            {/* Tooltip / label that expands on hover */}
            <AnimatePresence>
              {hover && (
                <motion.div
                  initial={{ opacity: 0, x: 12, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 12, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="hidden md:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 items-center pointer-events-none"
                >
                  <div className="bg-foreground text-background rounded-full pl-4 pr-5 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.55)] whitespace-nowrap">
                    <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                      Cotizar por WhatsApp
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar por WhatsApp"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex items-center justify-center h-14 w-14 md:h-[60px] md:w-[60px] rounded-full bg-[hsl(var(--wa))] text-white ring-1 ring-white/15 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-7 w-7 md:h-[30px] md:w-[30px] fill-white"
                aria-hidden="true"
              >
                <path d="M16.003 3.2C8.94 3.2 3.203 8.933 3.203 16c0 2.255.59 4.46 1.71 6.404L3.2 28.8l6.546-1.69A12.78 12.78 0 0 0 16 28.72h.005c7.063 0 12.8-5.733 12.8-12.8 0-3.42-1.332-6.633-3.752-9.052A12.72 12.72 0 0 0 16.003 3.2zm0 23.36h-.004a10.58 10.58 0 0 1-5.395-1.477l-.387-.23-3.886 1.004 1.037-3.79-.252-.39A10.6 10.6 0 0 1 5.4 16c0-5.852 4.762-10.61 10.61-10.61 2.834 0 5.495 1.105 7.498 3.108a10.55 10.55 0 0 1 3.106 7.502c0 5.852-4.762 10.612-10.61 10.612zm5.823-7.94c-.32-.16-1.889-.93-2.18-1.037-.293-.107-.506-.16-.72.16-.213.32-.825 1.037-1.012 1.25-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.624-.524-.54-.72-.55-.187-.008-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.823.673.766.244 1.463.21 2.014.127.614-.092 1.889-.773 2.156-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
