import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS."
const EMAIL = "contacto@grupokms.com"
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Monterrey%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico"

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

const contactLinks = [
  { label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { label: "LinkedIn", href: "#", external: false },
]

export function Footer() {
  return (
    <footer className="px-6 pt-20 pb-10 md:px-12 lg:px-20 md:pt-24 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
        <div className="md:col-span-5">
          <Link href="#inicio" aria-label="KMS — Inicio" className="inline-flex items-center gap-3">
            <img src="/kms/logo.png" alt="KMS" className="h-12 w-auto" />
            <span className="flex flex-col">
              <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium">
                Soluciones
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground font-medium">
                Industriales
              </span>
            </span>
          </Link>
          <p className="text-sm leading-[1.75] text-muted-foreground mt-7 max-w-sm text-pretty">
            Fabricación, instalación, mantenimiento y soluciones industriales en HVAC,
            ductería, aislamiento, TPO, CNC, recubrimientos, estructuras y montajes.
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {["HVAC", "Ductería", "CNC", "TPO", "Estructuras", "Montajes"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-[10px] tracking-[0.12em] uppercase text-muted-foreground border border-border px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/55 mb-6">
            Navegación
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 inline-flex items-center group"
              >
                <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/55 mb-6">
            Contacto
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-foreground hover:text-foreground/70 transition-colors duration-300 break-all"
            >
              {EMAIL}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span>Monterrey, Nuevo León, México</span>
              <ArrowUpRight className="h-3 w-3 mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 pt-4 border-t border-border">
              {contactLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/55">
          © {new Date().getFullYear()} KMS. Todos los derechos reservados.
        </p>
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground/55">
          Servicios industriales y comerciales — Todo México
        </p>
      </div>
    </footer>
  )
}
