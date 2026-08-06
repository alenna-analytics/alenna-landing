import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

export function FinalCtaSection() {
  const { lang } = useLanguage()

  return (
    <section className="signup section" id="signup">
      <div className="container signup__inner">
        <FadeIn>
          <p className="signup__badge">{landingT(lang, 'planBasicBadge')}</p>
          <h2 className="signup__title">{landingT(lang, 'finalCtaTitle')}</h2>
          <p className="signup__lede">{landingT(lang, 'finalCtaSubtext')}</p>
          <Button href={appUrl()} variant="primary" className="signup__btn">
            {landingT(lang, 'finalCtaButton')}
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
