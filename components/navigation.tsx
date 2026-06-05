"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 60)
      setHidden(currentY > lastScrollY && currentY > 400)
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link
          href="#inicio"
          aria-label="KMS — Inicio"
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/kms/logo.png"
            alt="KMS"
            className={`h-9 md:h-10 w-auto transition-all duration-500 ${
              scrolled || isOpen ? "" : "logo-invert"
            }`}
          />
          <span
            className={`hidden xl:inline-block pl-3 ml-3 border-l text-[9px] tracking-[0.35em] uppercase font-medium transition-colors duration-500 ${
              scrolled || isOpen
                ? "text-muted-foreground border-border"
                : "text-background/55 border-background/25"
            }`}
          >
            Soluciones Industriales
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] tracking-[0.15em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-background/65 hover:text-background"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors duration-500 ${
            scrolled || isOpen ? "text-foreground" : "text-background"
          }`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        } bg-background border-t border-border`}
      >
        <div className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-foreground/85 transition-colors duration-300"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
