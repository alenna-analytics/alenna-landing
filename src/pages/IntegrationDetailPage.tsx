import { LegalDocLayout } from '@/components/LegalDocLayout'
import { Button } from '@/components/ui/Button'
import type { LiveIntegrationSlug } from '@/lib/integrations-catalog'
import { integrationDetailContent } from '@/lib/i18n/integrations'
import { landingT } from '@/lib/i18n/landing-strings'
import { OVERVIEW_ID } from '@/lib/section-anchor'
import { appUrl } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

type IntegrationDetailPageProps = {
  slug: LiveIntegrationSlug
}

export function IntegrationDetailPage({ slug }: IntegrationDetailPageProps) {
  const { lang } = useLanguage()
  const content = integrationDetailContent(slug, lang)
  const overviewLabel = landingT(lang, 'legalOverview')

  useEffect(() => {
    document.title = content.metaTitle
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.metaDescription)
    }
  }, [content.metaTitle, content.metaDescription])

  const toc = [
    { id: OVERVIEW_ID, label: overviewLabel },
    { id: 'kpis', label: content.kpisTitle },
    { id: 'datos', label: content.dataTitle },
    { id: 'como-conectar', label: content.howTitle },
    { id: 'cta', label: content.ctaTitle },
  ]

  return (
    <LegalDocLayout title={content.pageTitle} updated={undefined} toc={toc} className="integration-detail">
      <section className="legal-page__section" id={OVERVIEW_ID}>
        <p className="integration-detail__eyebrow">{content.eyebrow}</p>
        <h2 className="legal-page__heading">{content.title}</h2>
        <p className="legal-page__intro">{content.intro}</p>
        <ul className="integration-detail__bullets">
          {content.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="legal-page__subheading">{content.overviewTitle}</h3>
        <p className="legal-page__paragraph">{content.overviewBody}</p>
      </section>

      <section className="legal-page__section" id="kpis">
        <h2 className="legal-page__heading">{content.kpisTitle}</h2>
        <ul className="integration-detail__kpis">
          {content.kpis.map((item) => (
            <li key={item} className="integration-detail__kpi">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="datos">
        <h2 className="legal-page__heading">{content.dataTitle}</h2>
        <ul className="legal-page__list">
          {content.dataItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="como-conectar">
        <h2 className="legal-page__heading">{content.howTitle}</h2>
        <ol className="integration-detail__steps">
          {content.howItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="legal-page__section integration-detail__cta" id="cta">
        <h2 className="legal-page__heading">{content.ctaTitle}</h2>
        <p className="legal-page__paragraph">{content.ctaBody}</p>
        <Button href={appUrl()} variant="primary">
          {content.ctaLabel}
        </Button>
      </section>
    </LegalDocLayout>
  )
}
