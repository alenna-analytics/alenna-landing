import amazonAdsLogo from '@/assets/partners/amazon_ads.svg'
import amazonLogo from '@/assets/partners/amazon.svg'
import googleAdsLogo from '@/assets/partners/google_ads.svg'
import mercadoAdsLogo from '@/assets/partners/mercado_ads.svg'
import mercadoLibreLogo from '@/assets/partners/mercado_libre.svg'
import metaAdsLogo from '@/assets/partners/meta_ads.svg'
import shopifyLogo from '@/assets/partners/shopify.svg'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'

export type IntegrationGroup = 'ecommerce' | 'ads'
export type IntegrationStatus = 'live' | 'soon'

export type IntegrationDetailSlug =
  | 'shopify'
  | 'amazon'
  | 'mercadolibre'
  | 'mercadolibre-ads'
  | 'amazon-ads'
  | 'google-ads'
  | 'meta-ads'

/** @deprecated use IntegrationDetailSlug */
export type LiveIntegrationSlug = IntegrationDetailSlug

export const INTEGRATION_SLUGS: readonly IntegrationDetailSlug[] = [
  'shopify',
  'amazon',
  'mercadolibre',
  'mercadolibre-ads',
  'amazon-ads',
  'google-ads',
  'meta-ads',
] as const

export type CatalogItem = {
  id: string
  slug: IntegrationDetailSlug
  nameKey: LandingStringKey
  blurbKey: LandingStringKey
  group: IntegrationGroup
  status: IntegrationStatus
  logoSrc: string
  path: string
  /** @deprecated use path — kept for callers that still read href */
  href: string
}

function detailPath(slug: IntegrationDetailSlug): string {
  return `${INTEGRATIONS_PATH}/${slug}`
}

export const AMAZON_ADS_CANONICAL_PATH = detailPath('amazon-ads')
export const AMAZON_ADS_LEGACY_PATH = '/amazon-ads'

export const INTEGRATION_CATALOG: CatalogItem[] = [
  {
    id: 'amazon',
    slug: 'amazon',
    nameKey: 'integrationAmazon',
    blurbKey: 'integrationBlurbAmazon',
    group: 'ecommerce',
    status: 'live',
    logoSrc: amazonLogo,
    path: detailPath('amazon'),
    href: detailPath('amazon'),
  },
  {
    id: 'shopify',
    slug: 'shopify',
    nameKey: 'integrationShopify',
    blurbKey: 'integrationBlurbShopify',
    group: 'ecommerce',
    status: 'live',
    logoSrc: shopifyLogo,
    path: detailPath('shopify'),
    href: detailPath('shopify'),
  },
  {
    id: 'mercadolibre',
    slug: 'mercadolibre',
    nameKey: 'integrationMercadoLibre',
    blurbKey: 'integrationBlurbMercadoLibre',
    group: 'ecommerce',
    status: 'live',
    logoSrc: mercadoLibreLogo,
    path: detailPath('mercadolibre'),
    href: detailPath('mercadolibre'),
  },
  {
    id: 'mercadolibre-ads',
    slug: 'mercadolibre-ads',
    nameKey: 'integrationMercadoLibreAds',
    blurbKey: 'integrationBlurbMercadoLibreAds',
    group: 'ads',
    status: 'live',
    logoSrc: mercadoAdsLogo,
    path: detailPath('mercadolibre-ads'),
    href: detailPath('mercadolibre-ads'),
  },
  {
    id: 'amazon-ads',
    slug: 'amazon-ads',
    nameKey: 'integrationAmazonAds',
    blurbKey: 'integrationBlurbAmazonAds',
    group: 'ads',
    status: 'soon',
    logoSrc: amazonAdsLogo,
    path: detailPath('amazon-ads'),
    href: detailPath('amazon-ads'),
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    nameKey: 'integrationGoogleAdsSoon',
    blurbKey: 'integrationBlurbGoogleAds',
    group: 'ads',
    status: 'soon',
    logoSrc: googleAdsLogo,
    path: detailPath('google-ads'),
    href: detailPath('google-ads'),
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    nameKey: 'integrationMetaAdsSoon',
    blurbKey: 'integrationBlurbMetaAds',
    group: 'ads',
    status: 'soon',
    logoSrc: metaAdsLogo,
    path: detailPath('meta-ads'),
    href: detailPath('meta-ads'),
  },
]

export function catalogByGroup(group: IntegrationGroup): CatalogItem[] {
  return INTEGRATION_CATALOG.filter((item) => item.group === group)
}

export function isIntegrationDetailSlug(slug: string): slug is IntegrationDetailSlug {
  return (INTEGRATION_SLUGS as readonly string[]).includes(slug)
}

/** @deprecated use isIntegrationDetailSlug */
export function isLiveIntegrationSlug(slug: string): slug is IntegrationDetailSlug {
  return isIntegrationDetailSlug(slug)
}

export function getIntegrationBySlug(slug: string): CatalogItem | undefined {
  return INTEGRATION_CATALOG.find((item) => item.slug === slug)
}

export function liveIntegrations(): CatalogItem[] {
  return INTEGRATION_CATALOG.filter((item) => item.status === 'live')
}

export function parseIntegrationsDetailSlug(pathname: string): IntegrationDetailSlug | null {
  const prefix = `${INTEGRATIONS_PATH}/`
  if (!pathname.startsWith(prefix)) return null
  const slug = pathname.slice(prefix.length).replace(/\/+$/, '')
  if (!slug || slug.includes('/')) return null
  return isIntegrationDetailSlug(slug) ? slug : null
}
