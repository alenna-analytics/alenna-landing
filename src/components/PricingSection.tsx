import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

const CONTACT_MAILTO = 'mailto:support@alenna.io?subject=Custom%20plan%20inquiry'

type PricingCardConfig = {
  id: string
  nameKey: LandingStringKey
  priceKey: LandingStringKey
  noteKey?: LandingStringKey
  featureKeys: LandingStringKey[]
  ctaKey: LandingStringKey
  hrefKind: 'app' | 'custom'
  ctaVariant: 'primary' | 'secondary'
}

const PRICING_CARDS: PricingCardConfig[] = [
  {
    id: 'basic',
    nameKey: 'planBasicName',
    priceKey: 'planBasicPriceCompact',
    noteKey: 'planBasicBadge',
    featureKeys: ['planBasicOrdersLimit', 'planBasicProductsLimit', 'planFeatureCore'],
    ctaKey: 'planBasicCta',
    hrefKind: 'app',
    ctaVariant: 'primary',
  },
  {
    id: 'growth',
    nameKey: 'planGrowthName',
    priceKey: 'planGrowthPriceCompact',
    featureKeys: ['planGrowthOrdersLimit', 'planGrowthProductsLimit', 'planFeatureCore'],
    ctaKey: 'planGrowthCta',
    hrefKind: 'app',
    ctaVariant: 'secondary',
  },
  {
    id: 'custom',
    nameKey: 'planCustomName',
    priceKey: 'planCustomPriceCompact',
    featureKeys: ['planCustomLimits', 'planFeatureCore'],
    ctaKey: 'planCustomCta',
    hrefKind: 'custom',
    ctaVariant: 'secondary',
  },
]

function hrefForCard(kind: PricingCardConfig['hrefKind']): string {
  if (kind === 'app') return appUrl()
  return CONTACT_MAILTO
}

export function PricingSection() {
  const { lang } = useLanguage()

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <FadeIn>
          <header className="pricing__header">
            <h2 className="pricing__title">{landingT(lang, 'pricingTitleMinimal')}</h2>
            <p className="pricing__subtitle">{landingT(lang, 'pricingSubtitle')}</p>
          </header>
        </FadeIn>
        <div className="pricing__grid pricing__grid--three">
          {PRICING_CARDS.map((card) => (
            <FadeIn key={card.id} as="article" className="pricing-card">
              <h3 className="pricing-card__name">{landingT(lang, card.nameKey)}</h3>
              <p className="pricing-card__price">{landingT(lang, card.priceKey)}</p>
              {card.noteKey ? (
                <p className="pricing-card__note">{landingT(lang, card.noteKey)}</p>
              ) : null}
              <p className="pricing-card__includes">{landingT(lang, 'planIncludesLabel')}</p>
              <ul className="pricing-card__features">
                {card.featureKeys.map((key) => (
                  <li key={key}>
                    <CheckIcon />
                    <span>{landingT(lang, key)}</span>
                  </li>
                ))}
              </ul>
              <Button href={hrefForCard(card.hrefKind)} variant={card.ctaVariant}>
                {landingT(lang, card.ctaKey)}
              </Button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
