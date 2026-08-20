import { PartnerLogo } from '@/components/PartnerLogo'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import {
  getIntegrationBySlug,
  type IntegrationDetailSlug,
} from '@/lib/integrations-catalog'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { integrationDetailContent } from '@/lib/i18n/integrations'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

type IntegrationDetailPageProps = {
  slug: IntegrationDetailSlug
}

export function IntegrationDetailPage({ slug }: IntegrationDetailPageProps) {
  const { lang } = useLanguage()
  const content = integrationDetailContent(slug, lang)
  const catalogItem = getIntegrationBySlug(slug)
  const name = catalogItem ? landingT(lang, catalogItem.nameKey) : content.pageTitle
  const isSoon = catalogItem?.status === 'soon'
  const primaryHref = isSoon ? sitePath(INTEGRATIONS_PATH) : appUrl()
  const primaryLabel = isSoon
    ? landingT(lang, 'integrationsSoonCta')
    : content.ctaLabel

  useEffect(() => {
    document.title = content.metaTitle
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.metaDescription)
    }
  }, [content.metaTitle, content.metaDescription])

  return (
    <>
      <SiteHeader />
      <main className="integration-detail">
        <div className="container integration-detail__inner">
          <FadeIn>
            <a href={sitePath(INTEGRATIONS_PATH)} className="integration-detail__back">
              ← {landingT(lang, 'integrationsBack')}
            </a>
          </FadeIn>

          <FadeIn className="integration-detail__hero" delay={40}>
            {catalogItem ? (
              <PartnerLogo src={catalogItem.logoSrc} alt={name} size="xl" className="integration-detail__logo" />
            ) : null}
            {isSoon ? (
              <p className="integration-detail__status">
                {landingT(lang, 'integrationsInProgressBanner')}
              </p>
            ) : null}
            <p className="integration-detail__eyebrow">{content.eyebrow}</p>
            <h1 className="integration-detail__title">{content.title}</h1>
            <p className="integration-detail__intro">{content.intro}</p>
            <ul className="integration-detail__bullets">
              {content.bullets.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
          </FadeIn>

          <FadeIn as="section" className="integration-detail__section" delay={80}>
            <h2 className="integration-detail__section-title">{content.overviewTitle}</h2>
            <p className="integration-detail__body">{content.overviewBody}</p>
          </FadeIn>

          <FadeIn as="section" className="integration-detail__section" delay={100}>
            <h2 className="integration-detail__section-title">{content.kpisTitle}</h2>
            <ul className="integration-detail__kpis">
              {content.kpis.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn as="section" className="integration-detail__section" delay={120}>
            <h2 className="integration-detail__section-title">{content.dataTitle}</h2>
            <ul className="integration-detail__list">
              {content.dataItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn as="section" className="integration-detail__section" delay={140}>
            <h2 className="integration-detail__section-title">{content.howTitle}</h2>
            <ol className="integration-detail__steps">
              {content.howItems.map((item, index) => (
                <li key={item}>
                  <span className="integration-detail__step-num">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn as="section" className="integration-detail__cta" delay={160}>
            <h2 className="integration-detail__section-title">{content.ctaTitle}</h2>
            <p className="integration-detail__body">{content.ctaBody}</p>
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
          </FadeIn>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
