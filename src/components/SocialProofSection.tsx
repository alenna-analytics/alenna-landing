import { FadeIn } from '@/components/ui/FadeIn'
import { PARTNER_LOGOS } from '@/lib/integration-logos'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

export function SocialProofSection() {
  const { lang } = useLanguage()

  return (
    <section className="social-proof" id="social-proof">
      <div className="container">
        <FadeIn className="social-proof__inner">
          <div className="social-proof__logos" aria-label="Plataformas compatibles">
            {PARTNER_LOGOS.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} height={36} />
            ))}
          </div>
          <p className="social-proof__caption">{landingT(lang, 'socialProofCaption')}</p>
        </FadeIn>
      </div>
    </section>
  )
}
