import { LangToggle } from '@/components/LangToggle'
import { Button } from '@/components/ui/Button'
import { useScrollNav } from '@/hooks/useScrollNav'
import { landingT } from '@/lib/i18n/landing-strings'
import { publicAsset, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useState } from 'react'

export function SiteHeader() {
  const { lang } = useLanguage()
  const scrolled = useScrollNav()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={['nav', scrolled ? 'is-scrolled' : ''].filter(Boolean).join(' ')} id="nav">
      <div className="container nav__inner">
        <a href={sitePath('/')} className="nav__logo" aria-label={landingT(lang, 'brandName')}>
          <img
            src={publicAsset('assets/alenna-logo.svg')}
            alt={landingT(lang, 'brandName')}
            width={100}
            height={20}
          />
        </a>

        <nav className="nav__links" aria-label="Principal">
          <a href={sitePath('/#features')}>{landingT(lang, 'navFeatures')}</a>
          <a href={sitePath('/#pricing')}>{landingT(lang, 'navPlans')}</a>
        </nav>

        <div className="nav__actions">
          <LangToggle />
          <Button href={sitePath('/#pricing')} variant="primary" className="nav__cta">
            {landingT(lang, 'navCta')}
          </Button>
          <button
            type="button"
            className={['nav__menu-btn', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
            aria-label="Menú"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={['nav__mobile', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
        aria-label="Móvil"
      >
        <a href={sitePath('/#features')} onClick={closeMobile}>
          {landingT(lang, 'navFeatures')}
        </a>
        <a href={sitePath('/#pricing')} onClick={closeMobile}>
          {landingT(lang, 'navPlans')}
        </a>
        <Button href={sitePath('/#pricing')} variant="primary" onClick={closeMobile}>
          {landingT(lang, 'navCta')}
        </Button>
      </nav>
    </header>
  )
}
