import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]): string {
  const key = ids.join('|')
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const list = key.length > 0 ? key.split('|') : []
    if (list.length === 0) return

    setActive(list[0] ?? '')

    const elements = list
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (top?.target.id) {
          setActive(top.target.id)
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.15, 0.4] },
    )

    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [key])

  return active
}
