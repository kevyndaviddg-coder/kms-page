"use client"

import { forwardRef, useEffect, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  target?: string
  rel?: string
  className?: string
  pullStrength?: number
  radius?: number
  onClick?: () => void
}

export const MagneticButton = forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  function MagneticButton(
    {
      children,
      href,
      target,
      rel,
      className = "",
      pullStrength = 0.3,
      radius = 110,
      onClick,
    },
    forwardedRef
  ) {
    const internalRef = useRef<HTMLAnchorElement>(null)
    const ref = (forwardedRef as React.RefObject<HTMLAnchorElement>) ?? internalRef
    const mx = useMotionValue(0)
    const my = useMotionValue(0)
    const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 })
    const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 })
    const reduce = useReducedMotion()

    useEffect(() => {
      if (reduce) return
      if (typeof window === "undefined") return
      if (window.matchMedia("(hover: none)").matches) return

      const handleMove = (e: MouseEvent) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < radius) {
          const factor = (1 - dist / radius) * pullStrength
          mx.set(dx * factor)
          my.set(dy * factor)
        } else {
          mx.set(0)
          my.set(0)
        }
      }

      window.addEventListener("mousemove", handleMove, { passive: true })
      return () => window.removeEventListener("mousemove", handleMove)
    }, [mx, my, pullStrength, radius, ref, reduce])

    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        style={{ x, y }}
        className={className}
      >
        {children}
      </motion.a>
    )
  }
)
