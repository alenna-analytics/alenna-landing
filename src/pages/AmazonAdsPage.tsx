import { LegalDocLayout } from '@/components/LegalDocLayout'
import { AMAZON_ADS_PATH, amazonAdsContent } from '@/lib/i18n/amazon-ads-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { OVERVIEW_ID } from '@/lib/section-anchor'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function AmazonAdsPage() {
  const { lang } = useLanguage()
  const content = amazonAdsContent(lang)
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
    { id: 'a-quien-servimos', label: content.whoTitle },
    { id: 'servicio', label: content.offerTitle },
    { id: 'productos', label: content.productsTitle },
    { id: 'que-no-hacemos', label: content.notTitle },
    { id: 'como-funciona', label: content.howTitle },
    { id: 'empresa', label: content.companyTitle },
    { id: 'contacto', label: content.contactTitle },
  ]

  return (
    <LegalDocLayout title={landingT(lang, 'footerAmazonAds')} updated={undefined} toc={toc}>
      <section className="legal-page__section" id={OVERVIEW_ID}>
        <p className="ads-page__eyebrow">{content.eyebrow}</p>
        <h2 className="legal-page__heading">{content.title}</h2>
        <p className="legal-page__intro">{content.intro}</p>
      </section>

      <section className="legal-page__section" id="a-quien-servimos">
        <h2 className="legal-page__heading">{content.whoTitle}</h2>
        <p className="legal-page__paragraph">{content.whoBody}</p>
      </section>

      <section className="legal-page__section" id="servicio">
        <h2 className="legal-page__heading">{content.offerTitle}</h2>
        <ul className="ads-page__capabilities">
          {content.capabilities.map((item) => (
            <li key={item.title} className="ads-page__capability">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="productos">
        <h2 className="legal-page__heading">{content.productsTitle}</h2>
        <ul className="legal-page__list">
          {content.products.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="que-no-hacemos">
        <h2 className="legal-page__heading">{content.notTitle}</h2>
        <ul className="legal-page__list">
          {content.notItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="como-funciona">
        <h2 className="legal-page__heading">{content.howTitle}</h2>
        <ul className="legal-page__list">
          {content.howItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="legal-page__section" id="empresa">
        <h2 className="legal-page__heading">{content.companyTitle}</h2>
        <p className="legal-page__paragraph">{content.companyBody}</p>
      </section>

      <section className="legal-page__section" id="contacto">
        <h2 className="legal-page__heading">{content.contactTitle}</h2>
        <p className="legal-page__paragraph">
          <a className="legal-page__email" href={`mailto:${content.contactBody}`}>
            {content.contactBody}
          </a>
        </p>
      </section>
    </LegalDocLayout>
  )
}

export { AMAZON_ADS_PATH }
