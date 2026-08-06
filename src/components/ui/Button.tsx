import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'dark' | 'outline'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
  target?: string
  rel?: string
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target={target} rel={rel}>
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
