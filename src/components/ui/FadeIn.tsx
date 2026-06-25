import { useEffect, useRef, useState, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'header' | 'section'
}

export function FadeIn({ children, className = '', as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['fade-in', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref as never} className={classes}>
      {children}
    </Tag>
  )
}
