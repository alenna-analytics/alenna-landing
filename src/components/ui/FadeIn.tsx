import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'header' | 'section' | 'li'
  delay?: number
}

export function FadeIn({ children, className = '', as: Tag = 'div', delay = 0 }: FadeInProps) {
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
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['fade-in', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')
  const style: CSSProperties = delay > 0 ? { '--fade-delay': `${delay}ms` } as CSSProperties : {}

  return (
    <Tag ref={ref as never} className={classes} style={style}>
      {children}
    </Tag>
  )
}
