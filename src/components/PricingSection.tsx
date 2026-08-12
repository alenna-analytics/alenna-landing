import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { planHref } from '@/lib/pricing-links'
import { useLanguage } from '@/providers/language-provider'

type PlanCard = {
  id: string
  nameKey: LandingStringKey
  priceKey: LandingStringKey
  noteKey?: LandingStringKey
  badgeKey?: LandingStringKey
  featureKeys: LandingStringKey[]
  ctaKey: LandingStringKey
  ctaVariant: 'primary' | 'secondary'
  featured?: boolean
}

const PLANS: PlanCard[] = [
  {
    id: 'basic',
    nameKey: 'planBasicName',
    priceKey: 'planBasicPriceCompact',
    noteKey: 'planBasicBadge',
    featureKeys: [
      'planBasicOrdersLimit',
      'planBasicProductsLimit',
      'planBasicUsersLimit',
      'planFeatureCore',
    ],
    ctaKey: 'planBasicCta',
    ctaVariant: 'primary',
  },
  {
    id: 'growth',
    nameKey: 'planGrowthName',
    priceKey: 'planGrowthPriceCompact',
    badgeKey: 'planGrowthBadge',
    featureKeys: [
      'planGrowthOrdersLimit',
      'planGrowthProductsLimit',
      'planGrowthUsersLimit',
      'planFeatureCore',
    ],
    ctaKey: 'planGrowthCta',
    ctaVariant: 'secondary',
    featured: true,
  },
  {
    id: 'custom',
    nameKey: 'planCustomName',
    priceKey: 'planCustomPriceCompact',
    featureKeys: ['planCustomLimits', 'planCustomUsersLimit', 'planFeatureCore'],
    ctaKey: 'planCustomCta',
    ctaVariant: 'secondary',
  },
]

export function PricingSection() {
  const { lang } = useLanguage()

  return (
    <section className="plans section" id="pricing">
      <div className="container plans__layout">
        <FadeIn className="plans__intro">
          <p className="eyebrow">{landingT(lang, 'pricingEyebrow')}</p>
          <h2 className="section-heading section-heading--center">{landingT(lang, 'pricingTitleMinimal')}</h2>
          <p className="section-lede">{landingT(lang, 'pricingSubtitle')}</p>
        </FadeIn>

        <div className="plans__cards">
          {PLANS.map((plan, index) => (
            <FadeIn
              key={plan.id}
              as="article"
              className={['plan-card', plan.featured ? 'plan-card--featured' : ''].filter(Boolean).join(' ')}
              delay={index * 50}
            >
              {plan.badgeKey ? <span className="plan-card__badge">{landingT(lang, plan.badgeKey)}</span> : null}
              <h3 className="plan-card__name">{landingT(lang, plan.nameKey)}</h3>
              <p className="plan-card__price">{landingT(lang, plan.priceKey)}</p>
              {plan.noteKey ? <p className="plan-card__note">{landingT(lang, plan.noteKey)}</p> : null}
              <p className="plan-card__includes">{landingT(lang, 'planIncludesLabel')}</p>
              <ul className="plan-card__features">
                {plan.featureKeys.map((key) => (
                  <li key={key}>
                    <CheckIcon />
                    <span>{landingT(lang, key)}</span>
                  </li>
                ))}
              </ul>
              <Button href={planHref(plan)} variant={plan.ctaVariant} className="plan-card__cta">
                {landingT(lang, plan.ctaKey)}
              </Button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
