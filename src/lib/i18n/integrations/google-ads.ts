import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Google Ads — próximamente en Alenna',
  metaDescription:
    'Google Ads llegará a Alenna para traer gasto y rendimiento de campañas al P&L de publicidad. Aún no está abierto a conectar.',
  pageTitle: 'Google Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Google Ads',
  intro:
    'Vamos a conectar Google Ads para traer gasto y rendimiento de campañas al mismo P&L de publicidad. El conector ya está en código; aún no está abierto a conectar. Sin fecha pública.',
  bullets: [
    'Campaña × día en solo lectura (Search, Shopping, Performance Max y el resto de tipos que ya mapeamos).',
    'El gasto irá al P&L junto a MELI Ads y Amazon Ads.',
    'Sin TACoS de Google: no hay canal de ventas hermano.',
  ],
  socialProof:
    'Igual que ya hacemos con Mercado Libre Ads y Amazon Ads: un módulo Publicidad, no vanity metrics.',
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: '',
  kpis: [],
  dataTitle: '',
  dataItems: [],
  howTitle: '',
  howItems: [],
  ctaTitle: '',
  ctaBody: 'Mientras tanto puedes conectar los canales de venta y publicidad ya disponibles.',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Google Ads — coming soon to Alenna',
  metaDescription:
    'Google Ads is coming to Alenna to bring campaign spend and performance into the ads P&L. Not open to connect yet.',
  pageTitle: 'Google Ads',
  eyebrow: 'Advertising integration',
  title: 'Google Ads',
  intro:
    'We will connect Google Ads to bring campaign spend and performance into the same advertising P&L. The connector is already in code; it is not open to connect yet. No public date.',
  bullets: [
    'Campaign × day read-only (Search, Shopping, Performance Max, and the other types we already map).',
    'Spend will enter the P&L next to MELI Ads and Amazon Ads.',
    'No Google TACoS: there is no sibling sales channel.',
  ],
  socialProof:
    'Same as we already do with Mercado Libre Ads and Amazon Ads: one Ads module, not vanity metrics.',
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: '',
  kpis: [],
  dataTitle: '',
  dataItems: [],
  howTitle: '',
  howItems: [],
  ctaTitle: '',
  ctaBody: 'In the meantime you can connect the sales and advertising channels already available.',
  ctaLabel: '',
}

export function googleAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
