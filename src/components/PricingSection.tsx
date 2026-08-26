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
  taglineKey: LandingStringKey
  priceKey?: LandingStringKey
  periodKey?: LandingStringKey
  badgeKey?: LandingStringKey
  includesPriorKey?: LandingStringKey
  featureKeys: LandingStringKey[]
  ctaKey: LandingStringKey
  ctaVariant: 'primary' | 'secondary'
  featured?: boolean
}

const PLANS: PlanCard[] = [
  {
    id: 'basic',
    nameKey: 'planBasicName',
    taglineKey: 'planBasicTagline',
    priceKey: 'planBasicPrice',
    periodKey: 'planBasicPeriod',
    featureKeys: [
      'planBasicOrdersLimit',
      'planBasicProductsLimit',
      'planBasicUsersLimit',
      'planBasicRolesLimit',
      'planFeatureModules',
      'planFeatureIntegrations',
      'planFeatureReports',
      'planFeatureSync',
      'planFeatureSupport',
    ],
    ctaKey: 'planBasicCta',
    ctaVariant: 'primary',
  },
  {
    id: 'growth',
    nameKey: 'planGrowthName',
    taglineKey: 'planGrowthTagline',
    priceKey: 'planGrowthPrice',
    periodKey: 'planGrowthPeriod',
    badgeKey: 'planGrowthBadge',
    includesPriorKey: 'planGrowthIncludesPrior',
    featureKeys: [
      'planGrowthOrdersLimit',
      'planGrowthProductsLimit',
      'planGrowthUsersLimit',
      'planGrowthRolesLimit',
    ],
    ctaKey: 'planGrowthCta',
    ctaVariant: 'secondary',
    featured: true,
  },
  {
    id: 'custom',
    nameKey: 'planCustomName',
    taglineKey: 'planCustomTagline',
    includesPriorKey: 'planCustomIncludesPrior',
    featureKeys: ['planCustomLimits', 'planCustomUsersLimit'],
    ctaKey: 'planCustomCta',
    ctaVariant: 'secondary',
  },
]

export function PricingSection({ showIntro = true }: { showIntro?: boolean }) {
  const { lang } = useLanguage()

  return (
    <section className="plans section" id="pricing">
      <div className={['container plans__layout', showIntro ? '' : 'plans__layout--solo'].filter(Boolean).join(' ')}>
        {showIntro ? (
          <FadeIn className="plans__intro">
            <h2 className="section-heading section-heading--center">{landingT(lang, 'pricingTitleMinimal')}</h2>
            <p className="section-lede">{landingT(lang, 'pricingSubtitle')}</p>
          </FadeIn>
        ) : null}

        <div className="plans__cards">
          {PLANS.map((plan, index) => (
            <FadeIn
              key={plan.id}
              as="article"
              className={['plan-card', plan.featured ? 'plan-card--featured' : ''].filter(Boolean).join(' ')}
              delay={index * 50}
            >
              {plan.badgeKey ? <span className="plan-card__badge">{landingT(lang, plan.badgeKey)}</span> : null}

              <div className="plan-card__header">
                <h3 className="plan-card__name">{landingT(lang, plan.nameKey)}</h3>
                <p className="plan-card__tagline">{landingT(lang, plan.taglineKey)}</p>
                <div className="plan-card__pricing">
                  {plan.priceKey ? (
                    <p className="plan-card__price">{landingT(lang, plan.priceKey)}</p>
                  ) : null}
                  {plan.periodKey ? (
                    <p className="plan-card__period">{landingT(lang, plan.periodKey)}</p>
                  ) : null}
                </div>
              </div>

              <Button href={planHref(plan)} variant={plan.ctaVariant} className="plan-card__cta">
                {landingT(lang, plan.ctaKey)}
              </Button>

              <div className="plan-card__divider" aria-hidden="true" />

              {plan.includesPriorKey ? (
                <p className="plan-card__includes-prior">{landingT(lang, plan.includesPriorKey)}</p>
              ) : null}
              <ul className="plan-card__features">
                {plan.featureKeys.map((key) => (
                  <li key={key}>
                    <CheckIcon />
                    <span>{landingT(lang, key)}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
