import { FadeIn } from '@/components/ui/FadeIn'
import { IntegrationCatalogCard } from '@/components/IntegrationCatalogCard'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { INTEGRATION_CATALOG } from '@/lib/integrations-catalog'
import { INTEGRATIONS_PATH, integrationsContent } from '@/lib/i18n/integrations-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function IntegrationsPage() {
  const { lang } = useLanguage()
  const content = integrationsContent(lang)

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  return (
    <>
      <SiteHeader />
      <main className="integrations-directory">
        <div className="container integrations-directory__inner">
          <FadeIn className="integrations-directory__head">
            <p className="eyebrow">{landingT(lang, 'integrationsEyebrow')}</p>
            <h1 className="integrations-directory__title">{content.title}</h1>
            <p className="integrations-directory__lede">{content.lede}</p>
          </FadeIn>

          <ul className="integrations-directory__grid">
            {INTEGRATION_CATALOG.map((item, index) => (
              <FadeIn as="li" key={item.id} delay={index * 40}>
                <IntegrationCatalogCard item={item} id={item.id} />
              </FadeIn>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export { INTEGRATIONS_PATH }
