import { LangToggle } from '@/components/LangToggle'
import { Button } from '@/components/ui/Button'
import { useScrollNav } from '@/hooks/useScrollNav'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl, publicAsset, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useState } from 'react'

type NavItem = {
  labelKey: LandingStringKey
  href: string
}

export function SiteHeader() {
  const { lang } = useLanguage()
  const scrolled = useScrollNav()
  const [mobileOpen, setMobileOpen] = useState(false)
  const loginUrl = appUrl()
  const closeMobile = () => setMobileOpen(false)

  const navItems: NavItem[] = [
    { labelKey: 'navProduct', href: sitePath('/#product') },
    { labelKey: 'navHowItWorks', href: sitePath('/#flow') },
    { labelKey: 'navIntegrations', href: sitePath(INTEGRATIONS_PATH) },
    { labelKey: 'navPlans', href: sitePath('/#pricing') },
  ]

  return (
    <header className={['site-nav', scrolled ? 'is-scrolled' : ''].filter(Boolean).join(' ')}>
      <div className="site-nav__shell">
        <div className="site-nav__inner">
          <a href={sitePath('/')} className="site-nav__logo" aria-label={landingT(lang, 'brandName')}>
            <img
              src={publicAsset('assets/alenna-logo.svg')}
              alt={landingT(lang, 'brandName')}
              width={100}
              height={20}
            />
          </a>

          <nav className="site-nav__links" aria-label="Principal">
            {navItems.map((item) => (
              <a key={item.labelKey} href={item.href}>
                {landingT(lang, item.labelKey)}
              </a>
            ))}
          </nav>

          <div className="site-nav__actions">
            <LangToggle />
            <a href={loginUrl} className="site-nav__login">
              {landingT(lang, 'navLogin')}
            </a>
            <Button href={sitePath('/#pricing')} variant="primary" className="site-nav__cta">
              {landingT(lang, 'navCta')}
            </Button>
            <button
              type="button"
              className={['site-nav__menu', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
              aria-label="Menú"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav className={['site-nav__drawer', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')} aria-label="Móvil">
        {navItems.map((item) => (
          <a key={item.labelKey} href={item.href} onClick={closeMobile}>
            {landingT(lang, item.labelKey)}
          </a>
        ))}
        <a href={loginUrl} onClick={closeMobile}>
          {landingT(lang, 'navLogin')}
        </a>
        <Button href={sitePath('/#pricing')} variant="primary" onClick={closeMobile}>
          {landingT(lang, 'navCta')}
        </Button>
      </nav>
    </header>
  )
}
