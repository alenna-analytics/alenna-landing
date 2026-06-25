import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

import channelsIcon from '@alenna-icons/channels.svg'
import growthIcon from '@alenna-icons/growth.svg'
import homeIcon from '@alenna-icons/home.svg'
import notificationsIcon from '@alenna-icons/notifications.svg'
import productsIcon from '@alenna-icons/products.svg'
import reportsIcon from '@alenna-icons/reports.svg'

const FEATURES: Array<{
  titleKey: LandingStringKey
  descKey: LandingStringKey
  icon: string
}> = [
  { titleKey: 'feature1Title', descKey: 'feature1Desc', icon: productsIcon },
  { titleKey: 'feature2Title', descKey: 'feature2Desc', icon: notificationsIcon },
  { titleKey: 'feature3Title', descKey: 'feature3Desc', icon: reportsIcon },
  { titleKey: 'feature4Title', descKey: 'feature4Desc', icon: channelsIcon },
  { titleKey: 'feature5Title', descKey: 'feature5Desc', icon: growthIcon },
  { titleKey: 'feature6Title', descKey: 'feature6Desc', icon: homeIcon },
]

export function FeaturesSection() {
  const { lang } = useLanguage()

  return (
    <section className="features section" id="features">
      <div className="container">
        <FadeIn>
          <SectionHeader
            title={landingT(lang, 'featuresTitle')}
            subtitle={landingT(lang, 'featuresSubtitle')}
            centered
          />
        </FadeIn>
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <FadeIn key={feature.titleKey} as="article" className="feature-card">
              <img src={feature.icon} className="feature-card__icon" alt="" aria-hidden="true" />
              <h3 className="feature-card__title">{landingT(lang, feature.titleKey)}</h3>
              <p className="feature-card__desc">{landingT(lang, feature.descKey)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
