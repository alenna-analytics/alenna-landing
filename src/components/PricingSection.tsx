import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

type PlanConfig = {
  highlight?: boolean
  badgeKey: LandingStringKey
  nameKey: LandingStringKey
  priceKey: LandingStringKey
  periodKey: LandingStringKey
  featureKeys: LandingStringKey[]
  ctaKey: LandingStringKey
  variant: 'outline' | 'primary'
}

const PLANS: PlanConfig[] = [
  {
    badgeKey: 'starterBadge',
    nameKey: 'starterName',
    priceKey: 'starterPrice',
    periodKey: 'starterPeriod',
    featureKeys: ['starterFeature1', 'starterFeature2', 'starterFeature3', 'starterFeature4'],
    ctaKey: 'starterCta',
    variant: 'outline',
  },
  {
    highlight: true,
    badgeKey: 'proBadge',
    nameKey: 'proName',
    priceKey: 'proPrice',
    periodKey: 'proPeriod',
    featureKeys: ['proFeature1', 'proFeature2', 'proFeature3', 'proFeature4'],
    ctaKey: 'proCta',
    variant: 'primary',
  },
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
          {PLANS.map((plan) => (
            <FadeIn
              key={plan.nameKey}
              as="article"
              className={['pricing-card', plan.highlight ? 'pricing-card--highlight' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <span className="pricing-card__badge">{landingT(lang, plan.badgeKey)}</span>
              <h3 className="pricing-card__name">{landingT(lang, plan.nameKey)}</h3>
              <p className="pricing-card__price">{landingT(lang, plan.priceKey)}</p>
              <p className="pricing-card__period">{landingT(lang, plan.periodKey)}</p>
              <ul className="pricing-card__features">
                {plan.featureKeys.map((key) => (
                  <li key={key}>
                    <CheckIcon />
                    <span>{landingT(lang, key)}</span>
                  </li>
                ))}
              </ul>
              <Button href={app} variant={plan.variant}>
                {landingT(lang, plan.ctaKey)}
              </Button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
