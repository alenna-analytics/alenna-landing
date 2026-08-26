import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'outline'
type ButtonSize = 'tiny' | 'default'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'default',
  href,
  className = '',
  children,
  onClick,
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, size !== 'default' ? `btn--${size}` : '', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
