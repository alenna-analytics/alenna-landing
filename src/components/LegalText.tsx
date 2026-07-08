import type { ReactNode } from 'react'

const LINK_TOKENS = new Set([
  'privacidad@alenna.io',
  'contacto@alenna.io',
  'alenna.io/privacidad',
  'alenna.io/terminos',
  'alenna.io',
])

const LINK_PATTERN =
  /(privacidad@alenna\.io|contacto@alenna\.io|alenna\.io\/privacidad|alenna\.io\/terminos|alenna\.io)/g

function linkForToken(token: string): { href: string; label: string } {
  if (token.includes('@')) {
    return { href: `mailto:${token}`, label: token }
  }
  if (token === 'alenna.io/privacidad') {
    return { href: 'https://alenna.io/privacidad', label: token }
  }
  if (token === 'alenna.io/terminos') {
    return { href: 'https://alenna.io/terminos', label: token }
  }
  return { href: 'https://alenna.io', label: token }
}

export function LegalText({ text }: { text: string }) {
  const parts = text.split(LINK_PATTERN)

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null

        if (LINK_TOKENS.has(part)) {
          const { href, label } = linkForToken(part)
          return (
            <a key={`${part}-${index}`} href={href} className="legal-page__email">
              {label}
            </a>
          )
        }

        return part
      })}
    </>
  )
}

export function LegalListItem({ text }: { text: string }): ReactNode {
  return <LegalText text={text} />
}
