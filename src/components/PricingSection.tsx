import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

const PLAN_FEATURES: LandingStringKey[] = [
  'planFeature1',
  'planFeature2',
  'planFeature3',
  'planFeature4',
  'planFeature5',
  'planFeature6',
]

export function PricingSection() {
  const { lang } = useLanguage()
  const app = appUrl()

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <FadeIn>
          <SectionHeader
            eyebrow={landingT(lang, 'pricingEyebrow')}
            title={landingT(lang, 'pricingTitle')}
            subtitle={landingT(lang, 'pricingSubtitle')}
            centered
          />
        </FadeIn>
        <div className="pricing__grid">
          <FadeIn as="article" className="pricing-card pricing-card--highlight">
            <span className="pricing-card__badge">{landingT(lang, 'planBadge')}</span>
            <h3 className="pricing-card__name">{landingT(lang, 'planName')}</h3>
            <p className="pricing-card__price">{landingT(lang, 'planPrice')}</p>
            <p className="pricing-card__period">{landingT(lang, 'planPeriod')}</p>
            <ul className="pricing-card__features">
              {PLAN_FEATURES.map((key) => (
                <li key={key}>
                  <CheckIcon />
                  <span>{landingT(lang, key)}</span>
                </li>
              ))}
            </ul>
            <Button href={app} variant="primary">
              {landingT(lang, 'planCta')}
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
