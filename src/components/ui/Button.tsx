import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'outline'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  onClick,
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

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
