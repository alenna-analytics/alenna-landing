import { PartnerLogo } from '@/components/PartnerLogo'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { ChevronLeftIcon } from '@/components/ui/ChevronLeftIcon'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/CheckIcon'
import { FadeIn } from '@/components/ui/FadeIn'
import {
  getIntegrationBySlug,
  type CatalogItem,
  type IntegrationDetailSlug,
} from '@/lib/integrations-catalog'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { integrationDetailContent } from '@/lib/i18n/integrations'
import { landingT, type LandingStringKey } from '@/lib/i18n/landing-strings'
import { appUrl, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

type IntegrationDetailPageProps = {
  slug: IntegrationDetailSlug
}

type IntegrationDetailMetaRow = {
  label: string
  value: string
  accent?: boolean
}

function categoryKey(item: CatalogItem): LandingStringKey {
  return item.group === 'ecommerce' ? 'footerColEcommerce' : 'moduleAds'
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
    : landingT(lang, 'integrationsConnectCta')
  const statusLabel = isSoon
    ? landingT(lang, 'integrationsInProgressBanner')
    : landingT(lang, 'integrationStatusLive')
  const categoryLabel = catalogItem
    ? landingT(lang, categoryKey(catalogItem))
    : content.eyebrow
  const disclaimer = isSoon ? content.ctaBody : landingT(lang, 'integrationDetailDisclaimer')

  const metaRows: IntegrationDetailMetaRow[] = [
    {
      label: landingT(lang, 'integrationDetailStatus'),
      value: statusLabel,
    },
    {
      label: landingT(lang, 'integrationDetailCategory'),
      value: categoryLabel,
      accent: true,
    },
    {
      label: landingT(lang, 'integrationDetailAccess'),
      value: landingT(lang, 'integrationDetailReadOnly'),
    },
  ]

  useEffect(() => {
    document.title = `${name} | Alenna Analytics`
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.metaDescription)
    }
  }, [name, content.metaDescription])

  return (
    <>
      <SiteHeader />
      <main className="integration-detail">
        <div className="container integration-detail__inner">
          <FadeIn>
            <a href={sitePath(INTEGRATIONS_PATH)} className="integration-detail__back">
              <ChevronLeftIcon />
              {landingT(lang, 'integrationsBack')}
            </a>
          </FadeIn>

          <FadeIn className="integration-detail__header" delay={30}>
            <div className="integration-detail__heading">
              {catalogItem ? (
                <PartnerLogo src={catalogItem.logoSrc} alt={name} size="header" />
              ) : null}
              <h1 className="integration-detail__title">{name}</h1>
              {isSoon ? <span className="integration-detail__status">{statusLabel}</span> : null}
            </div>
            <Button href={primaryHref} variant="primary" size="tiny">
              {primaryLabel}
            </Button>
          </FadeIn>

          <FadeIn delay={50}>
            <div className="integration-detail__tabs">
              <span className="integration-detail__tab">{content.eyebrow}</span>
            </div>
          </FadeIn>

          <div className="integration-detail__layout">
            <div className="integration-detail__main">
              <FadeIn as="section" className="integration-detail__section" delay={70}>
                <h2 className="integration-detail__section-title">
                  {content.overviewTitle || landingT(lang, 'integrationDetailOverview')}
                </h2>
                <p className="integration-detail__body">{content.intro}</p>
                {content.overviewBody ? (
                  <p className="integration-detail__body">{content.overviewBody}</p>
                ) : null}
                <ul className="integration-detail__bullets">
                  {content.bullets.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {content.socialProof ? (
                  <p className="integration-detail__body">{content.socialProof}</p>
                ) : null}
              </FadeIn>

              {!isSoon ? (
                <>
                  <FadeIn as="section" className="integration-detail__section" delay={90}>
                    <h2 className="integration-detail__section-title">{content.kpisTitle}</h2>
                    <table className="integration-detail__table">
                      <thead>
                        <tr>
                          <th>{landingT(lang, 'integrationDetailMetric')}</th>
                          <th>{landingT(lang, 'integrationDetailIncluded')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {content.kpis.map((item) => (
                          <tr key={item}>
                            <td>{item}</td>
                            <td>
                              <CheckIcon />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </FadeIn>

                  <FadeIn as="section" className="integration-detail__section" delay={110}>
                    <h2 className="integration-detail__section-title">{content.dataTitle}</h2>
                    <ul className="integration-detail__list">
                      {content.dataItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </FadeIn>

                  <FadeIn as="section" className="integration-detail__section" delay={130}>
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
                </>
              ) : null}
            </div>

            <aside className="integration-detail__aside">
              <FadeIn delay={80}>
                <p className="integration-detail__aside-label">
                  {landingT(lang, 'integrationDetailDetails')}
                </p>
                <dl className="integration-detail__meta">
                  {metaRows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd className={row.accent ? 'is-accent' : undefined}>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="integration-detail__note">{disclaimer}</p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
