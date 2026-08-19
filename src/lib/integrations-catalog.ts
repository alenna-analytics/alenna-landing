import { AMAZON_ADS_PATH } from '@/lib/i18n/amazon-ads-strings'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'

export type IntegrationGroup = 'ecommerce' | 'ads'
export type IntegrationStatus = 'live' | 'soon'

export type CatalogItem = {
  id: string
  nameKey: LandingStringKey
  blurbKey: LandingStringKey
  group: IntegrationGroup
  status: IntegrationStatus
  href: string
}

export const INTEGRATION_CATALOG: CatalogItem[] = [
  {
    id: 'amazon',
    nameKey: 'integrationAmazon',
    blurbKey: 'integrationBlurbAmazon',
    group: 'ecommerce',
    status: 'live',
    href: `${INTEGRATIONS_PATH}#amazon`,
  },
  {
    id: 'shopify',
    nameKey: 'integrationShopify',
    blurbKey: 'integrationBlurbShopify',
    group: 'ecommerce',
    status: 'live',
    href: `${INTEGRATIONS_PATH}#shopify`,
  },
  {
    id: 'mercadolibre',
    nameKey: 'integrationMercadoLibre',
    blurbKey: 'integrationBlurbMercadoLibre',
    group: 'ecommerce',
    status: 'live',
    href: `${INTEGRATIONS_PATH}#mercadolibre`,
  },
  {
    id: 'mercadolibre-ads',
    nameKey: 'integrationMercadoLibreAds',
    blurbKey: 'integrationBlurbMercadoLibreAds',
    group: 'ads',
    status: 'live',
    href: `${INTEGRATIONS_PATH}#mercadolibre-ads`,
  },
  {
    id: 'amazon-ads',
    nameKey: 'integrationAmazonAdsSoon',
    blurbKey: 'integrationBlurbAmazonAds',
    group: 'ads',
    status: 'soon',
    href: AMAZON_ADS_PATH,
  },
  {
    id: 'google-ads',
    nameKey: 'integrationGoogleAdsSoon',
    blurbKey: 'integrationBlurbGoogleAds',
    group: 'ads',
    status: 'soon',
    href: `${INTEGRATIONS_PATH}#google-ads`,
  },
  {
    id: 'meta-ads',
    nameKey: 'integrationMetaAdsSoon',
    blurbKey: 'integrationBlurbMetaAds',
    group: 'ads',
    status: 'soon',
    href: `${INTEGRATIONS_PATH}#meta-ads`,
  },
]

export function catalogByGroup(group: IntegrationGroup): CatalogItem[] {
  return INTEGRATION_CATALOG.filter((item) => item.group === group)
}
