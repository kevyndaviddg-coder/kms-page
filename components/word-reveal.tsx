"use client"

import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef, type ReactNode } from "react"

type WordRevealProps = {
  text: string
  className?: string
  wrapperClassName?: string
  delay?: number
  staggerStep?: number
  duration?: number
  blurAmount?: number
  yOffset?: number
  decoration?: { prefix?: ReactNode; suffix?: ReactNode }
}

export function WordReveal({
  text,
  className = "",
  wrapperClassName = "",
  delay = 0,
  staggerStep = 0.045,
  duration = 0.6,
  blurAmount = 8,
  yOffset = 18,
  decoration,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.35, once: true })
  const reduce = useReducedMotion()
  const words = text.split(" ")
  const effectiveBlur = reduce ? 0 : blurAmount
  const effectiveY = reduce ? 0 : yOffset
  const effectiveDuration = reduce ? 0.001 : duration
  const effectiveStagger = reduce ? 0 : staggerStep

  return (
    <span ref={ref} className={wrapperClassName}>
      {decoration?.prefix}
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: effectiveY,
            filter: `blur(${effectiveBlur}px)`,
          }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: effectiveDuration,
            delay: delay + i * effectiveStagger,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={`inline-block ${className}`}
          style={{ marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
      {decoration?.suffix}
    </span>
  )
}
