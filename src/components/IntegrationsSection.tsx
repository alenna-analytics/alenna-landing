import { FadeIn } from '@/components/ui/FadeIn'
import { IntegrationCatalogCard } from '@/components/IntegrationCatalogCard'
import { INTEGRATION_CATALOG } from '@/lib/integrations-catalog'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

export function IntegrationsSection() {
  const { lang } = useLanguage()

  return (
    <section className="integrations-band section" id="integrations">
      <div className="container">
        <FadeIn className="integrations-band__head">
          <p className="eyebrow">{landingT(lang, 'integrationsEyebrow')}</p>
          <h2 className="section-heading">{landingT(lang, 'integrationsCatalogTitle')}</h2>
          <p className="section-lede">{landingT(lang, 'integrationsCatalogLede')}</p>
        </FadeIn>

        <ul className="integrations-band__cards">
          {INTEGRATION_CATALOG.map((item, index) => (
            <FadeIn as="li" key={item.id} delay={index * 35}>
              <IntegrationCatalogCard item={item} />
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="integrations-band__more">
          <a href={sitePath(INTEGRATIONS_PATH)}>{landingT(lang, 'integrationsCatalogCta')}</a>
        </FadeIn>
      </div>
    </section>
  )
}
