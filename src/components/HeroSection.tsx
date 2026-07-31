import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import dashboardImage from '@/assets/dashboard.png'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

const AVAILABLE: LandingStringKey[] = ['integrationShopify', 'integrationMercadoLibre']
const COMING_SOON: LandingStringKey[] = ['integrationAmazonSoon', 'integrationAdsSoon']

const HERO_STATS: LandingStringKey[] = ['heroStatTrial', 'heroStatModules', 'heroStatSync']

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__grid">
          <FadeIn className="hero__lead">
            <p className="hero__eyebrow">{landingT(lang, 'heroEyebrow')}</p>
            <h1 className="hero__title">
              <span className="hero__title-line">{landingT(lang, 'heroHeadlineLine1')}</span>
              <span className="hero__title-line hero__title-accent">
                {landingT(lang, 'heroHeadlineAccent')}
              </span>
            </h1>
            <div className="hero__actions">
              <Button href={sitePath('/#pricing')} variant="primary">
                {landingT(lang, 'heroCtaPrimary')}
              </Button>
              <Button href={sitePath('/#modules')} variant="secondary">
                {landingT(lang, 'heroCtaSecondary')}
              </Button>
            </div>
          </FadeIn>

          <FadeIn className="hero__support">
            <p className="hero__subtext">{landingT(lang, 'heroSupporting')}</p>
            <ul className="hero__stats">
              {HERO_STATS.map((key) => (
                <li key={key}>{landingT(lang, key)}</li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn className="hero__integrations">
          <span className="hero__integrations-label">{landingT(lang, 'integrationsEyebrow')}</span>
          <div className="hero__integrations-row">
            <ul className="hero__integration-list" aria-label={landingT(lang, 'integrationsAvailableLabel')}>
              {AVAILABLE.map((key) => (
                <li key={key} className="hero__integration hero__integration--live">
                  {landingT(lang, key)}
                </li>
              ))}
            </ul>
            <ul className="hero__integration-list" aria-label={landingT(lang, 'integrationsComingSoonLabel')}>
              {COMING_SOON.map((key) => (
                <li key={key} className="hero__integration hero__integration--soon">
                  {landingT(lang, key)}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="hero__preview-wrap">
          <div className="hero__preview-glow" aria-hidden="true" />
          <div className="hero__preview">
            <img
              src={dashboardImage}
              alt="Panel de Alenna con KPIs, análisis por canal y productos más vendidos"
              width={1200}
              height={720}
              loading="eager"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
