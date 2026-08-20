import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Amazon Ads a Alenna: gasto, clics, ventas atribuidas, ROAS y TACoS junto al P&L de tu seller Amazon.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Amazon Ads con ROAS y TACoS reales',
  intro:
    'Conecta tu cuenta de Amazon Ads y ve gasto, rendimiento y ventas atribuidas en el mismo panel que tus ventas Amazon — para saber si la publicidad paga el margen.',
  bullets: [
    'Sponsored Products, Brands y Display en un solo lugar.',
    'ROAS y TACoS cruzados con el net revenue del sibling de commerce.',
    'Solo lectura: medimos campañas; no las operamos ni compramos medios.',
  ],
  overviewTitle: 'Publicidad de Amazon, en tu rentabilidad',
  overviewBody:
    'La consola de Ads no muestra tu P&L ni COGS. Alenna sincroniza métricas de campañas y las relaciona con el revenue de tu conexión Amazon Seller cuando están linkeadas. Si solo conectas Ads, ves spend y ROAS; TACoS aparece cuando hay sibling de ventas.',
  kpisTitle: 'Qué puedes ver',
  kpis: ['Gasto (spend)', 'Ventas atribuidas', 'ROAS', 'TACoS', 'CPA / clics e impresiones'],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Métricas diarias de campañas: spend, clics, impresiones, ventas y conversiones atribuidas.',
    'Sponsored Products, Sponsored Brands y Sponsored Display.',
    'Vinculación opcional a la cuenta Amazon Seller (mismo tenant) para TACoS.',
    'Sin PII de compradores; no operamos ni editamos campañas.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones → Publicidad elige Amazon Ads.',
    'Autoriza la app LWA de Advertising (consentimiento separado del Seller).',
    'Sincroniza métricas (primera sync ~90 días) y revisa Publicidad e Inicio.',
  ],
  ctaTitle: 'Conecta Amazon Ads',
  ctaBody: 'Mide si tu gasto en Amazon sostiene el margen de tu operación.',
  ctaLabel: 'Empezar',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads ROAS and TACoS — Alenna',
  metaDescription:
    'Connect Amazon Ads to Alenna: spend, clicks, attributed sales, ROAS, and TACoS next to your Amazon seller P&L.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Advertising integration',
  title: 'Amazon Ads with real ROAS and TACoS',
  intro:
    'Connect your Amazon Ads account and see spend, performance, and attributed sales in the same panel as your Amazon sales — so you know if ads pay for margin.',
  bullets: [
    'Sponsored Products, Brands, and Display in one place.',
    'ROAS and TACoS crossed with sibling commerce net revenue.',
    'Read-only: we measure campaigns; we do not run them or buy media.',
  ],
  overviewTitle: 'Amazon advertising, in your profitability',
  overviewBody:
    'The Ads console does not show your P&L or COGS. Alenna syncs campaign metrics and relates them to Amazon Seller revenue when linked. Ads-only tenants still see spend and ROAS; TACoS appears when a sales sibling exists.',
  kpisTitle: 'What you can see',
  kpis: ['Spend', 'Attributed sales', 'ROAS', 'TACoS', 'CPA / clicks and impressions'],
  dataTitle: 'Data we sync',
  dataItems: [
    'Daily campaign metrics: spend, clicks, impressions, attributed sales and conversions.',
    'Sponsored Products, Sponsored Brands, and Sponsored Display.',
    'Optional link to Amazon Seller (same tenant) for TACoS.',
    'No buyer PII; we do not operate or edit campaigns.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations → Ads choose Amazon Ads.',
    'Authorize the Advertising LWA app (separate consent from Seller).',
    'Sync metrics (first sync ~90 days) and review Ads and Home.',
  ],
  ctaTitle: 'Connect Amazon Ads',
  ctaBody: 'Measure whether Amazon spend supports the margin of your operation.',
  ctaLabel: 'Get started',
}

export function amazonAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
