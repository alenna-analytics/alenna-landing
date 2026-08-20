import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailSlug } from '@/lib/integrations-catalog'
import { amazonDetailContent } from '@/lib/i18n/integrations/amazon'
import { amazonAdsDetailContent } from '@/lib/i18n/integrations/amazon-ads'
import { googleAdsDetailContent } from '@/lib/i18n/integrations/google-ads'
import { mercadolibreDetailContent } from '@/lib/i18n/integrations/mercadolibre'
import { mercadolibreAdsDetailContent } from '@/lib/i18n/integrations/mercadolibre-ads'
import { metaAdsDetailContent } from '@/lib/i18n/integrations/meta-ads'
import { shopifyDetailContent } from '@/lib/i18n/integrations/shopify'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

export type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

export function integrationDetailContent(
  slug: IntegrationDetailSlug,
  lang: Language,
): IntegrationDetailContent {
  switch (slug) {
    case 'shopify':
      return shopifyDetailContent(lang)
    case 'amazon':
      return amazonDetailContent(lang)
    case 'mercadolibre':
      return mercadolibreDetailContent(lang)
    case 'mercadolibre-ads':
      return mercadolibreAdsDetailContent(lang)
    case 'amazon-ads':
      return amazonAdsDetailContent(lang)
    case 'google-ads':
      return googleAdsDetailContent(lang)
    case 'meta-ads':
      return metaAdsDetailContent(lang)
  }
}
