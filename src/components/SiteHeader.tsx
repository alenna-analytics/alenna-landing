import { LangToggle } from '@/components/LangToggle'
import { Button } from '@/components/ui/Button'
import { useScrollNav } from '@/hooks/useScrollNav'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useState } from 'react'

const LOGO_SRC = '/assets/alenna-logo.svg'

export function SiteHeader() {
  const { lang } = useLanguage()
  const scrolled = useScrollNav()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={['nav', scrolled ? 'is-scrolled' : ''].filter(Boolean).join(' ')} id="nav">
      <div className="container nav__inner">
        <a href="/" className="nav__logo" aria-label={landingT(lang, 'brandName')}>
          <img src={LOGO_SRC} alt={landingT(lang, 'brandName')} width={100} height={20} />
        </a>

        <nav className="nav__links" aria-label="Principal">
          <a href="/#features">{landingT(lang, 'navFeatures')}</a>
          <a href="/#pricing">{landingT(lang, 'navPlans')}</a>
        </nav>

        <div className="nav__actions">
          <LangToggle />
          <Button href="/#pricing" variant="primary" className="nav__cta">
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
        <a href="/#features" onClick={closeMobile}>
          {landingT(lang, 'navFeatures')}
        </a>
        <a href="/#pricing" onClick={closeMobile}>
          {landingT(lang, 'navPlans')}
        </a>
        <Button href="/#pricing" variant="primary" onClick={closeMobile}>
          {landingT(lang, 'navCta')}
        </Button>
      </nav>
    </header>
  )
}
