"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."

const SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
  mass: 0.7,
}

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 900)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const footer = document.querySelector("footer")
    if (!footer || typeof IntersectionObserver === "undefined") return
    const obs = new IntersectionObserver(
      ([entry]) =>
        setHidden(entry.isIntersecting && entry.intersectionRatio > 0.55),
      { threshold: [0, 0.3, 0.55, 1] }
    )
    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {mounted && !hidden && (
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.85 }}
          transition={SPRING}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] will-change-transform"
        >
          <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Ambient green halo — continuous breath */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full bg-[hsl(var(--wa))]/45 blur-2xl"
              animate={{
                opacity: hover ? 0.95 : [0.55, 0.8, 0.55],
                scale: hover ? 1.25 : [1, 1.12, 1],
              }}
              transition={
                hover
                  ? { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
              }
            />

            {/* Tooltip on hover (desktop) */}
            <AnimatePresence>
              {hover && (
                <motion.div
                  initial={{ opacity: 0, x: 8, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.96 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="hidden md:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 items-center pointer-events-none"
                >
                  <div className="relative bg-foreground text-background rounded-full pl-4 pr-5 py-2.5 shadow-[0_14px_32px_-10px_rgba(0,0,0,0.55)] ring-1 ring-white/10 whitespace-nowrap">
                    <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                      Cotizar por WhatsApp
                    </span>
                    <span
                      aria-hidden
                      className="absolute right-[-3px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rotate-45 bg-foreground ring-1 ring-white/10"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main green circular button */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar por WhatsApp"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="relative flex h-14 w-14 md:h-[60px] md:w-[60px] items-center justify-center rounded-full bg-[hsl(var(--wa))] text-white ring-1 ring-white/25 shadow-[0_16px_38px_-12px_rgba(0,0,0,0.55),0_5px_14px_-3px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.65),0_8px_18px_-3px_rgba(0,0,0,0.35)] transition-shadow duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {/* Glossy top highlight (subtle) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent"
              />

              {/* Inner darker rim for depth */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"
              />

              {/* WhatsApp icon — white with subtle motion */}
              <motion.svg
                viewBox="0 0 32 32"
                className="relative h-[26px] w-[26px] md:h-[28px] md:w-[28px] fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
                aria-hidden="true"
                animate={
                  hover
                    ? { rotate: -6, scale: 1.06 }
                    : { rotate: [0, 3, -3, 0], scale: [1, 1.03, 1] }
                }
                transition={
                  hover
                    ? { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
                    : {
                        duration: 4.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                <path d="M16.003 3.2C8.94 3.2 3.203 8.933 3.203 16c0 2.255.59 4.46 1.71 6.404L3.2 28.8l6.546-1.69A12.78 12.78 0 0 0 16 28.72h.005c7.063 0 12.8-5.733 12.8-12.8 0-3.42-1.332-6.633-3.752-9.052A12.72 12.72 0 0 0 16.003 3.2zm0 23.36h-.004a10.58 10.58 0 0 1-5.395-1.477l-.387-.23-3.886 1.004 1.037-3.79-.252-.39A10.6 10.6 0 0 1 5.4 16c0-5.852 4.762-10.61 10.61-10.61 2.834 0 5.495 1.105 7.498 3.108a10.55 10.55 0 0 1 3.106 7.502c0 5.852-4.762 10.612-10.61 10.612zm5.823-7.94c-.32-.16-1.889-.93-2.18-1.037-.293-.107-.506-.16-.72.16-.213.32-.825 1.037-1.012 1.25-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.59-1.893-1.777-2.213-.187-.32-.02-.493.14-.653.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.624-.524-.54-.72-.55-.187-.008-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.823.673.766.244 1.463.21 2.014.127.614-.092 1.889-.773 2.156-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
              </motion.svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
