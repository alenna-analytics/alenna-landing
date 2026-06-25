import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

export function FinalCtaSection() {
  const { lang } = useLanguage()
  const app = appUrl()

  return (
    <section className="final-cta section" id="final-cta">
      <div className="container">
        <FadeIn className="final-cta__inner">
          <h2 className="final-cta__title">{landingT(lang, 'finalCtaTitle')}</h2>
          <p className="final-cta__subtext">{landingT(lang, 'finalCtaSubtext')}</p>
          <Button href={app} variant="primary">
            {landingT(lang, 'finalCtaButton')}
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
