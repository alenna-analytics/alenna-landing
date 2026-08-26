import { Button } from '@/components/ui/Button'
import { useScrollNav } from '@/hooks/useScrollNav'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { PRICING_PATH } from '@/lib/i18n/pricing-strings'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl, publicAsset, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  const navItems: NavItem[] = [
    { labelKey: 'navProduct', href: sitePath('/#product') },
    { labelKey: 'navHowItWorks', href: sitePath('/#flow') },
    { labelKey: 'navIntegrations', href: sitePath(INTEGRATIONS_PATH) },
    { labelKey: 'navPlans', href: sitePath(PRICING_PATH) },
  ]

  return (
    <header
      className={['site-nav', scrolled ? 'is-scrolled' : '', mobileOpen ? 'is-menu-open' : '']
        .filter(Boolean)
        .join(' ')}
    >
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
            <Button href={loginUrl} variant="outline" size="tiny" className="site-nav__login">
              {landingT(lang, 'navLogin')}
            </Button>
            <Button href={sitePath('/#pricing')} variant="primary" size="tiny" className="site-nav__cta">
              {landingT(lang, 'navCta')}
            </Button>
            <button
              type="button"
              className={['site-nav__menu', mobileOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
              aria-label={mobileOpen ? 'Cerrar' : 'Menú'}
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
        <div className="site-nav__drawer-links">
          {navItems.map((item) => (
            <a key={item.labelKey} href={item.href} onClick={closeMobile}>
              {landingT(lang, item.labelKey)}
            </a>
          ))}
        </div>
        <div className="site-nav__drawer-actions">
          <Button href={loginUrl} variant="outline" className="site-nav__drawer-btn" onClick={closeMobile}>
            {landingT(lang, 'navLogin')}
          </Button>
          <Button href={sitePath('/#pricing')} variant="primary" className="site-nav__drawer-btn" onClick={closeMobile}>
            {landingT(lang, 'navCta')}
          </Button>
        </div>
      </nav>
    </header>
  )
}
