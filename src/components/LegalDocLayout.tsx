import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { useActiveSection } from '@/hooks/useActiveSection'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import type { ReactNode } from 'react'

export type LegalTocItem = {
  id: string
  label: string
}

type LegalDocLayoutProps = {
  title: string
  updated?: string
  toc: LegalTocItem[]
  className?: string
  children: ReactNode
}

export function LegalDocLayout({ title, updated, toc, className, children }: LegalDocLayoutProps) {
  const { lang } = useLanguage()
  const ids = toc.map((item) => item.id)
  const active = useActiveSection(ids)

  return (
    <>
      <SiteHeader />
      <main className={['legal-page', className].filter(Boolean).join(' ')}>
        <div className="container legal-doc">
          <aside className="legal-doc__sidebar">
            <h1 className="legal-doc__title">{title}</h1>
            {updated ? <p className="legal-doc__updated">{updated}</p> : null}
            <nav className="legal-doc__nav" aria-label={landingT(lang, 'legalToc')}>
              <p className="legal-doc__toc-label">{landingT(lang, 'legalToc')}</p>
              <ol className="legal-doc__toc">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={['legal-doc__link', active === item.id ? 'is-active' : '']
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="legal-doc__body">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
