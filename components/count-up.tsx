"use client"

import { animate, useInView, useMotionValue, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  to: number
  duration?: number
  className?: string
}

export function CountUp({ to, duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.5, once: true })
  const value = useMotionValue(0)
  const rounded = useTransform(value, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v))
    return () => unsub()
  }, [rounded])

  useEffect(() => {
    if (!inView) return
    const controls = animate(value, to, {
      duration,
      ease: [0.4, 0, 0.2, 1],
    })
    return () => controls.stop()
  }, [inView, to, duration, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
