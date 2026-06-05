import Link from "next/link"

const footerLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
]

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/526761123869?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20KMS.",
    external: true,
  },
  { label: "LinkedIn", href: "#", external: false },
  { label: "Correo", href: "#", external: false },
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

        <div className="md:col-span-3 md:col-start-7">
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

        <div className="md:col-span-3 md:col-start-10">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/55 mb-6">
            Contacto
          </p>
          <div className="flex flex-col gap-3">
            {contactLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            )}
            <p className="text-sm text-foreground/75 mt-2 tabular-nums">+52 676 112 3869</p>
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
