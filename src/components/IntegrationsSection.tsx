import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

const AVAILABLE: LandingStringKey[] = ['integrationShopify', 'integrationMercadoLibre']
const COMING_SOON: LandingStringKey[] = ['integrationAmazonSoon', 'integrationAdsSoon']

export function IntegrationsSection() {
  const { lang } = useLanguage()

  return (
    <section className="integrations" id="integrations">
      <div className="container">
        <FadeIn className="integrations__inner">
          <p className="integrations__eyebrow">{landingT(lang, 'integrationsEyebrow')}</p>
          <div className="integrations__groups">
            <ul className="integrations__list" aria-label={landingT(lang, 'integrationsAvailableLabel')}>
              {AVAILABLE.map((key) => (
                <li key={key} className="integrations__pill integrations__pill--available">
                  {landingT(lang, key)}
                </li>
              ))}
            </ul>
            <ul className="integrations__list" aria-label={landingT(lang, 'integrationsComingSoonLabel')}>
              {COMING_SOON.map((key) => (
                <li key={key} className="integrations__pill integrations__pill--soon">
                  {landingT(lang, key)}
                </li>
              ))}
            </ul>
          </div>
          <p className="integrations__caption">{landingT(lang, 'integrationsCaption')}</p>
        </FadeIn>
      </div>
    </section>
  )
}
