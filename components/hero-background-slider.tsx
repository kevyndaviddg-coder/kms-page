"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

type HeroBackgroundSliderProps = {
  images: string[]
  intervalMs?: number
}

export function HeroBackgroundSlider({
  images,
  intervalMs = 6500,
}: HeroBackgroundSliderProps) {
  const [index, setIndex] = useState(0)
  const [ready, setReady] = useState(false)
  const reduce = useReducedMotion()

  // Preload all images so transitions never flash
  useEffect(() => {
    let mounted = true
    Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image()
            img.src = src
            img.onload = () => resolve()
            img.onerror = () => resolve()
          })
      )
    ).then(() => {
      if (mounted) setReady(true)
    })
    return () => {
      mounted = false
    }
  }, [images])

  useEffect(() => {
    if (!ready || images.length <= 1) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(t)
  }, [ready, images.length, intervalMs])

  const current = images[index]

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-foreground" aria-hidden>
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.img
            src={current}
            alt=""
            className="w-full h-full object-cover object-center will-change-transform"
            style={{ filter: "brightness(1.08) contrast(1.04)" }}
            initial={{ scale: reduce ? 1.0 : 1.08 }}
            animate={{ scale: reduce ? 1.0 : 1.18 }}
            transition={{ duration: reduce ? 0 : 8.5, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Softer overlays — image is now the protagonist */}
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-foreground/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/45 via-transparent to-transparent" />

      {/* Progress indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-[92px] md:bottom-[104px] right-6 md:right-12 lg:right-20 flex items-center gap-2 z-10">
          {images.map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="h-[2px] bg-background"
              animate={{
                width: i === index ? 40 : 14,
                opacity: i === index ? 1 : 0.4,
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
