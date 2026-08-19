import { FadeIn } from '@/components/ui/FadeIn'
import { catalogByGroup } from '@/lib/integrations-catalog'
import { landingT } from '@/lib/i18n/landing-strings'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

export function IntegrationsSection() {
  const { lang } = useLanguage()
  const ecommerce = catalogByGroup('ecommerce')
  const ads = catalogByGroup('ads')

  return (
    <section className="integrations-band section" id="integrations">
      <div className="container">
        <FadeIn className="integrations-band__head">
          <p className="eyebrow">{landingT(lang, 'integrationsEyebrow')}</p>
          <h2 className="section-heading">{landingT(lang, 'integrationsCatalogTitle')}</h2>
          <p className="section-lede">{landingT(lang, 'integrationsCatalogLede')}</p>
        </FadeIn>

        <div className="integrations-band__grid">
          <FadeIn as="div" className="integrations-band__col">
            <h3>{landingT(lang, 'footerColEcommerce')}</h3>
            <ul>
              {ecommerce.map((item) => (
                <li key={item.id}>
                  <a href={sitePath(item.href)}>
                    <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                    <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn as="div" className="integrations-band__col" delay={60}>
            <h3>{landingT(lang, 'footerColAds')}</h3>
            <ul>
              {ads.map((item) => (
                <li key={item.id}>
                  <a href={sitePath(item.href)} className={item.status === 'soon' ? 'is-soon' : undefined}>
                    <span className="integrations-band__name">{landingT(lang, item.nameKey)}</span>
                    <span className="integrations-band__blurb">{landingT(lang, item.blurbKey)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn className="integrations-band__more">
          <a href={sitePath(INTEGRATIONS_PATH)}>{landingT(lang, 'integrationsCatalogCta')}</a>
        </FadeIn>
      </div>
    </section>
  )
}
