type SectionHeaderProps = {
  eyebrow: string
  title: string
  meta?: string
  inverted?: boolean
}

export function SectionHeader({ eyebrow, title, meta, inverted = false }: SectionHeaderProps) {
  const eyebrowColor = inverted ? "text-background/40" : "text-muted-foreground"
  const titleColor = inverted ? "text-background" : "text-foreground"
  const metaColor = inverted ? "text-background/35" : "text-muted-foreground/55"
  const borderColor = inverted ? "border-background/15" : "border-border"

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b ${borderColor}`}>
      <div>
        <p className={`text-[11px] tracking-[0.3em] uppercase ${eyebrowColor} mb-3`}>
          {eyebrow}
        </p>
        <h2 className={`text-3xl md:text-[2.75rem] font-extralight tracking-tight ${titleColor} text-balance`}>
          {title}
        </h2>
      </div>
      {meta && (
        <span className={`text-[11px] tracking-[0.15em] ${metaColor}`}>
          {meta}
        </span>
      )}
    </div>
  )
}
