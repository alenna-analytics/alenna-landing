import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'

export type IntegrationGroup = 'ecommerce' | 'ads'
export type IntegrationStatus = 'live' | 'soon'

export type LiveIntegrationSlug =
  | 'shopify'
  | 'amazon'
  | 'mercadolibre'
  | 'amazon-ads'
  | 'mercadolibre-ads'

export const INTEGRATION_SLUGS: readonly LiveIntegrationSlug[] = [
  'shopify',
  'amazon',
  'mercadolibre',
  'amazon-ads',
  'mercadolibre-ads',
] as const

export type CatalogItem = {
  id: string
  slug: string
  nameKey: LandingStringKey
  blurbKey: LandingStringKey
  group: IntegrationGroup
  status: IntegrationStatus
  /** Canonical marketing path for live items; hub hash for soon-only. */
  path: string
  /** @deprecated use path — kept for callers that still read href */
  href: string
}

function detailPath(slug: LiveIntegrationSlug): string {
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
    path: detailPath('mercadolibre-ads'),
    href: detailPath('mercadolibre-ads'),
  },
  {
    id: 'amazon-ads',
    slug: 'amazon-ads',
    nameKey: 'integrationAmazonAds',
    blurbKey: 'integrationBlurbAmazonAds',
    group: 'ads',
    status: 'live',
    path: AMAZON_ADS_CANONICAL_PATH,
    href: AMAZON_ADS_CANONICAL_PATH,
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    nameKey: 'integrationGoogleAdsSoon',
    blurbKey: 'integrationBlurbGoogleAds',
    group: 'ads',
    status: 'soon',
    path: `${INTEGRATIONS_PATH}#google-ads`,
    href: `${INTEGRATIONS_PATH}#google-ads`,
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    nameKey: 'integrationMetaAdsSoon',
    blurbKey: 'integrationBlurbMetaAds',
    group: 'ads',
    status: 'soon',
    path: `${INTEGRATIONS_PATH}#meta-ads`,
    href: `${INTEGRATIONS_PATH}#meta-ads`,
  },
]

export function catalogByGroup(group: IntegrationGroup): CatalogItem[] {
  return INTEGRATION_CATALOG.filter((item) => item.group === group)
}

export function isLiveIntegrationSlug(slug: string): slug is LiveIntegrationSlug {
  return (INTEGRATION_SLUGS as readonly string[]).includes(slug)
}

export function getIntegrationBySlug(slug: string): CatalogItem | undefined {
  return INTEGRATION_CATALOG.find((item) => item.slug === slug)
}

export function liveIntegrations(): CatalogItem[] {
  return INTEGRATION_CATALOG.filter((item) => item.status === 'live')
}

export function parseIntegrationsDetailSlug(pathname: string): LiveIntegrationSlug | null {
  const prefix = `${INTEGRATIONS_PATH}/`
  if (!pathname.startsWith(prefix)) return null
  const slug = pathname.slice(prefix.length).replace(/\/+$/, '')
  if (!slug || slug.includes('/')) return null
  return isLiveIntegrationSlug(slug) ? slug : null
}
