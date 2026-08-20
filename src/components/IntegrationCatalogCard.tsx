import { PartnerLogo } from '@/components/PartnerLogo'
import type { CatalogItem } from '@/lib/integrations-catalog'
import { landingT } from '@/lib/i18n/landing-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

type IntegrationCatalogCardProps = {
  item: CatalogItem
  id?: string
}

export function IntegrationCatalogCard({ item, id }: IntegrationCatalogCardProps) {
  const { lang } = useLanguage()
  const name = landingT(lang, item.nameKey)
  const blurb = landingT(lang, item.blurbKey)
  const groupLabel =
    item.group === 'ecommerce'
      ? landingT(lang, 'footerColEcommerce')
      : landingT(lang, 'moduleAds')
  const isSoon = item.status === 'soon'

  return (
    <a
      href={sitePath(item.path)}
      className={['integration-card', isSoon ? 'is-soon' : ''].filter(Boolean).join(' ')}
      id={id}
    >
      <PartnerLogo src={item.logoSrc} alt={name} size="card" />
      <div className="integration-card__copy">
        <h3 className="integration-card__name">{name}</h3>
        <p className="integration-card__blurb">{blurb}</p>
      </div>
      <div className="integration-card__footer">
        <span className="integration-card__group">{groupLabel}</span>
        {isSoon ? (
          <span className="integration-card__pill is-soon">
            {landingT(lang, 'integrationsComingSoonLabel')}
          </span>
        ) : null}
      </div>
    </a>
  )
}
