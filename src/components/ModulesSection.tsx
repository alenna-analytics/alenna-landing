import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

import channelsIcon from '@/assets/icons/channels.svg'
import growthIcon from '@/assets/icons/growth.svg'
import homeIcon from '@/assets/icons/home.svg'
import notificationsIcon from '@/assets/icons/notifications.svg'
import productsIcon from '@/assets/icons/products.svg'
import reportsIcon from '@/assets/icons/reports.svg'

type ModuleTile = {
  titleKey: LandingStringKey
  descKey: LandingStringKey
  icon: string
  layout: 'wide' | 'tall' | 'default'
}

const MODULES: ModuleTile[] = [
  { titleKey: 'moduleHome', descKey: 'moduleHomeDesc', icon: homeIcon, layout: 'wide' },
  { titleKey: 'moduleProducts', descKey: 'moduleProductsDesc', icon: productsIcon, layout: 'default' },
  { titleKey: 'moduleSales', descKey: 'moduleSalesDesc', icon: growthIcon, layout: 'default' },
  { titleKey: 'moduleReports', descKey: 'moduleReportsDesc', icon: reportsIcon, layout: 'tall' },
  { titleKey: 'moduleAds', descKey: 'moduleAdsDesc', icon: growthIcon, layout: 'default' },
  { titleKey: 'moduleChannels', descKey: 'moduleChannelsDesc', icon: channelsIcon, layout: 'default' },
  { titleKey: 'moduleSimulations', descKey: 'moduleSimulationsDesc', icon: notificationsIcon, layout: 'default' },
  { titleKey: 'moduleIntegrations', descKey: 'moduleIntegrationsDesc', icon: channelsIcon, layout: 'wide' },
]

export function ModulesSection() {
  const { lang } = useLanguage()

  return (
    <section className="modules section" id="modules">
      <div className="container">
        <FadeIn>
          <SectionHeader
            eyebrow={landingT(lang, 'modulesEyebrow')}
            title={landingT(lang, 'modulesTitle')}
            subtitle={landingT(lang, 'modulesSubtitle')}
          />
        </FadeIn>
        <div className="modules__bento">
          {MODULES.map((mod) => (
            <FadeIn
              key={mod.titleKey}
              as="article"
              className={[
                'module-tile',
                mod.layout === 'wide' ? 'module-tile--wide' : '',
                mod.layout === 'tall' ? 'module-tile--tall' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="module-tile__icon-wrap">
                <img src={mod.icon} className="module-tile__icon" alt="" aria-hidden="true" />
              </div>
              <h3 className="module-tile__title">{landingT(lang, mod.titleKey)}</h3>
              <p className="module-tile__desc">{landingT(lang, mod.descKey)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
