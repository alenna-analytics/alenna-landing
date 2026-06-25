import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import dashboardImage from '@/assets/dashboard.png'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <FadeIn className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">{landingT(lang, 'heroHeadlineLine1')}</span>
            <span className="hero__title-line hero__title-accent">{landingT(lang, 'heroHeadlineLine2')}</span>
          </h1>
          <p className="hero__subtext">{landingT(lang, 'heroSupporting')}</p>
          <div className="hero__actions">
            <Button href="#pricing" variant="primary">
              {landingT(lang, 'heroCtaPrimary')}
            </Button>
            <Button href="#features" variant="secondary">
              {landingT(lang, 'heroCtaSecondary')}
            </Button>
          </div>
        </FadeIn>
        <FadeIn className="hero__preview">
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
