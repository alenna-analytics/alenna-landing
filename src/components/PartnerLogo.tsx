type PartnerLogoSize = 'sm' | 'md' | 'lg' | 'xl' | 'card' | 'header'

type PartnerLogoProps = {
  src: string
  alt: string
  size?: PartnerLogoSize
  className?: string
}

const SIZE_CLASS: Record<PartnerLogoSize, string> = {
  sm: 'partner-logo--sm',
  md: 'partner-logo--md',
  lg: 'partner-logo--lg',
  xl: 'partner-logo--xl',
  card: 'partner-logo--card',
  header: 'partner-logo--header',
}

export function PartnerLogo({ src, alt, size = 'md', className }: PartnerLogoProps) {
  const classes = ['partner-logo', SIZE_CLASS[size], className].filter(Boolean).join(' ')
  return (
    <div className={classes}>
      <img src={src} alt="" className="partner-logo__img" aria-hidden />
      <span className="sr-only">{alt}</span>
    </div>
  )
}
