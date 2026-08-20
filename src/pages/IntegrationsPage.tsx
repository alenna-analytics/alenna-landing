import { LegalDocLayout } from '@/components/LegalDocLayout'
import { LegalSections } from '@/components/LegalSections'
import { LegalText } from '@/components/LegalText'
import { catalogByGroup } from '@/lib/integrations-catalog'
import { INTEGRATIONS_PATH, integrationsContent } from '@/lib/i18n/integrations-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { sectionAnchor } from '@/lib/section-anchor'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

const CATALOG_ID = 'canales'

export function IntegrationsPage() {
  const { lang } = useLanguage()
  const content = integrationsContent(lang)
  const ecommerce = catalogByGroup('ecommerce')
  const ads = catalogByGroup('ads')

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  const toc = [
    { id: CATALOG_ID, label: landingT(lang, 'integrationsNavCatalog') },
    ...content.sections.map((section) => ({
      id: sectionAnchor(section.title, section.id),
      label: section.title,
    })),
  ]

  return (
    <LegalDocLayout
      title={content.title}
      updated={content.updated}
      toc={toc}
      className="integrations-page"
    >
      <section className="legal-page__section" id={CATALOG_ID}>
        <h2 className="legal-page__heading">{landingT(lang, 'integrationsCatalogTitle')}</h2>
        <p className="legal-page__intro">{landingT(lang, 'integrationsCatalogLede')}</p>
        <div className="integrations-band__grid integrations-page__catalog">
          <div className="integrations-band__col">
            <h3>{landingT(lang, 'footerColEcommerce')}</h3>
            <ul>
              {ecommerce.map((item) => (
                <li key={item.id}>
                  {item.status === 'live' ? (
                    <a href={sitePath(item.path)} className="integrations-page__catalog-link">
                      <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                      <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                      <span className="integrations-page__catalog-cta">
                        {landingT(lang, 'integrationsViewDetail')}
                      </span>
                    </a>
                  ) : (
                    <div className="integrations-page__catalog-soon is-soon">
                      <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                      <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                      <span className="integrations-page__catalog-badge">
                        {landingT(lang, 'integrationsComingSoonLabel')}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="integrations-band__col">
            <h3>{landingT(lang, 'footerColAds')}</h3>
            <ul>
              {ads.map((item) => (
                <li key={item.id}>
                  {item.status === 'live' ? (
                    <a href={sitePath(item.path)} className="integrations-page__catalog-link">
                      <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                      <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                      <span className="integrations-page__catalog-cta">
                        {landingT(lang, 'integrationsViewDetail')}
                      </span>
                    </a>
                  ) : (
                    <div className="integrations-page__catalog-soon is-soon" id={item.id}>
                      <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                      <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                      <span className="integrations-page__catalog-badge">
                        {landingT(lang, 'integrationsComingSoonLabel')}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="legal-page__paragraph">
          <LegalText text={content.intro} />
        </p>
      </section>
      <LegalSections sections={content.sections} />
    </LegalDocLayout>
  )
}

export { INTEGRATIONS_PATH }
