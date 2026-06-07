"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type CardCarouselProps = {
  images: string[]
  alt: string
  intervalMs?: number
  hoverZoomSingle?: boolean
}

export function CardCarousel({
  images,
  alt,
  intervalMs = 5500,
  hoverZoomSingle = false,
}: CardCarouselProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const isSingle = images.length <= 1

  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  // Auto-advance
  useEffect(() => {
    if (isSingle || paused) return
    const t = setInterval(next, intervalMs)
    return () => clearInterval(t)
  }, [isSingle, paused, intervalMs, next])

  // Pause when off-screen to save work
  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === "undefined") return
    const obs = new IntersectionObserver(
      ([entry]) => setPaused((p) => (entry.isIntersecting ? false : true)),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Keyboard nav when focused
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      next()
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prev()
    }
  }

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 40) prev()
    else if (delta < -40) next()
    touchStartX.current = null
    setTimeout(() => setPaused(false), 1200)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/40 group/carousel select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKey}
      tabIndex={isSingle ? -1 : 0}
      role={isSingle ? undefined : "region"}
      aria-roledescription={isSingle ? undefined : "carrusel"}
      aria-label={isSingle ? undefined : `${alt} — galería`}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`${alt}${images.length > 1 ? ` (${i + 1}/${images.length})` : ""}`}
          aria-hidden={i !== active}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          } ${hoverZoomSingle && isSingle ? "group-hover:scale-[1.06]" : ""}`}
        />
      ))}

      {!isSingle && (
        <>
          {/* Subtle bottom shade for dot legibility */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/45 to-transparent pointer-events-none"
          />

          {/* Counter — top right */}
          <div className="absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 bg-foreground/55 backdrop-blur-md text-background text-[10px] tracking-[0.18em] uppercase px-2.5 py-1.5 font-medium tabular-nums">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <span className="text-background/55">/</span>
            <span className="text-background/55">{String(images.length).padStart(2, "0")}</span>
          </div>

          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 z-20 flex items-center justify-center h-9 w-9 md:h-10 md:w-10 bg-background/90 text-foreground hover:bg-background opacity-60 md:opacity-0 -translate-x-0 md:-translate-x-1 md:group-hover/carousel:opacity-100 md:group-hover/carousel:translate-x-0 transition-all duration-300 backdrop-blur-sm focus-visible:opacity-100 focus-visible:translate-x-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 z-20 flex items-center justify-center h-9 w-9 md:h-10 md:w-10 bg-background/90 text-foreground hover:bg-background opacity-60 md:opacity-0 translate-x-0 md:translate-x-1 md:group-hover/carousel:opacity-100 md:group-hover/carousel:translate-x-0 transition-all duration-300 backdrop-blur-sm focus-visible:opacity-100 focus-visible:translate-x-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Dot indicators — bottom center */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostrar imagen ${i + 1} de ${images.length}`}
                aria-current={i === active}
                className={`h-[3px] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/80 focus-visible:ring-offset-1 focus-visible:ring-offset-foreground/40 ${
                  i === active
                    ? "w-7 bg-background"
                    : "w-2.5 bg-background/45 hover:bg-background/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
