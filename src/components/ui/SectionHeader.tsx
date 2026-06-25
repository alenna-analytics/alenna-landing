type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  const headerClass = ['section-header', centered ? 'section-header--center' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  )
}
