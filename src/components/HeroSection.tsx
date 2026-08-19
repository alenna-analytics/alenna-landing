import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import dashboardImage from '@/assets/dashboard.png'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <FadeIn className="hero__copy">
          <p className="hero__eyebrow">{landingT(lang, 'heroEyebrow')}</p>
          <h1 className="hero__title">
            <span className="hero__title-line">{landingT(lang, 'heroHeadlineLead')}</span>
            <span className="hero__title-line hero__title-line--lead">
              <span className="hero__highlight">{landingT(lang, 'heroHeadlineHighlight')}</span>{' '}
              {landingT(lang, 'heroHeadlineEnd')}
            </span>
          </h1>

          <p className="hero__lede">{landingT(lang, 'heroSupporting')}</p>

          <div className="hero__actions">
            <Button href={appUrl()} variant="primary">
              {landingT(lang, 'heroCtaPrimary')}
            </Button>
            <Button href={sitePath('/#pricing')} variant="soft">
              {landingT(lang, 'heroCtaSecondary')}
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="hero__frame" delay={60}>
          <div className="hero__frame-chrome">
            <span />
            <span />
            <span />
          </div>
          <img
            src={dashboardImage}
            alt="Panel de Alenna con KPIs, análisis por canal y productos más vendidos"
            width={1200}
            height={720}
            loading="eager"
          />
        </FadeIn>
      </div>
    </section>
  )
}
