import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

import adsIcon from '@/assets/icons/ads.svg'
import channelsIcon from '@/assets/icons/channels.svg'
import integrationsIcon from '@/assets/icons/integrations.svg'
import productsIcon from '@/assets/icons/products.svg'
import reportsIcon from '@/assets/icons/reports.svg'
import salesIcon from '@/assets/icons/sales.svg'

type ModuleCard = {
  titleKey: LandingStringKey
  descKey: LandingStringKey
  icon: string
}

const MODULES: ModuleCard[] = [
  { titleKey: 'moduleProducts', descKey: 'moduleProductsDesc', icon: productsIcon },
  { titleKey: 'moduleSales', descKey: 'moduleSalesDesc', icon: salesIcon },
  { titleKey: 'moduleReports', descKey: 'moduleReportsDesc', icon: reportsIcon },
  { titleKey: 'moduleAds', descKey: 'moduleAdsDesc', icon: adsIcon },
  { titleKey: 'moduleChannels', descKey: 'moduleChannelsDesc', icon: channelsIcon },
  { titleKey: 'moduleIntegrations', descKey: 'moduleIntegrationsDesc', icon: integrationsIcon },
]

export function ProductSection() {
  const { lang } = useLanguage()

  return (
    <section className="product section" id="product">
      <div className="container">
        <FadeIn className="product__head">
          <p className="eyebrow">{landingT(lang, 'modulesEyebrow')}</p>
          <h2 className="section-heading">{landingT(lang, 'modulesTitle')}</h2>
          <p className="section-lede product__lede">{landingT(lang, 'modulesSubtitle')}</p>
        </FadeIn>

        <div className="module-cards">
          {MODULES.map((mod, index) => (
            <FadeIn key={mod.titleKey} as="article" className="module-card" delay={index * 60}>
              <div className="module-card__icon">
                <img src={mod.icon} alt="" aria-hidden="true" />
              </div>
              <h3 className="module-card__title">{landingT(lang, mod.titleKey)}</h3>
              <p className="module-card__desc">{landingT(lang, mod.descKey)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
