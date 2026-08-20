import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads — próximamente en Alenna',
  metaDescription:
    'Amazon Ads llegará a Alenna: gasto, ROAS y TACoS junto a otros canales de venta. En progreso.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Amazon Ads con ROAS y TACoS reales',
  intro:
    'Estamos construyendo la conexión con Amazon Ads para ver gasto, rendimiento y ventas atribuidas junto a otros canales de venta — y saber si la publicidad paga el margen.',
  bullets: [
    'Sponsored Products, Brands y Display en un solo lugar.',
    'ROAS y TACoS cruzados con el revenue de commerce cuando esté linkeado.',
    'Solo lectura: medimos campañas; no las operamos ni compramos medios.',
  ],
  overviewTitle: 'Publicidad de Amazon, en progreso',
  overviewBody:
    'La integración aún no está disponible para conectar. El objetivo es sincronizar métricas de campañas y relacionarlas con el revenue de tu conexión de ventas cuando estén linkeadas — igual que el resto de canales de publicidad en Alenna.',
  kpisTitle: 'Qué podrás ver',
  kpis: ['Gasto (spend)', 'Ventas atribuidas', 'ROAS', 'TACoS', 'CPA / clics e impresiones'],
  dataTitle: 'Datos que planeamos sincronizar',
  dataItems: [
    'Métricas diarias de campañas: spend, clics, impresiones, ventas y conversiones atribuidas.',
    'Sponsored Products, Sponsored Brands y Sponsored Display.',
    'Vinculación opcional a la cuenta Amazon Seller (mismo tenant) para TACoS.',
    'Sin PII de compradores; no operamos ni editamos campañas.',
  ],
  howTitle: 'Cómo conectar (cuando esté listo)',
  howItems: [
    'En Integraciones → Publicidad elige Amazon Ads.',
    'Autoriza la app LWA de Advertising (consentimiento separado del Seller).',
    'Sincroniza métricas (primera sync ~90 días) y revisa Publicidad e Inicio.',
  ],
  ctaTitle: 'Amazon Ads está en progreso',
  ctaBody: 'Mientras tanto puedes conectar los canales de venta y publicidad ya disponibles.',
  ctaLabel: 'Ver integraciones disponibles',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads — coming soon to Alenna',
  metaDescription:
    'Amazon Ads is coming to Alenna: spend, ROAS, and TACoS next to your other sales channels. In progress.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Advertising integration',
  title: 'Amazon Ads with real ROAS and TACoS',
  intro:
    'We are building the Amazon Ads connection so you can see spend, performance, and attributed sales next to your other sales channels — and know if ads pay for margin.',
  bullets: [
    'Sponsored Products, Brands, and Display in one place.',
    'ROAS and TACoS crossed with commerce revenue when linked.',
    'Read-only: we measure campaigns; we do not run them or buy media.',
  ],
  overviewTitle: 'Amazon advertising, in progress',
  overviewBody:
    'This integration is not available to connect yet. The goal is to sync campaign metrics and relate them to your sales connection revenue when linked — like the rest of advertising channels in Alenna.',
  kpisTitle: 'What you will see',
  kpis: ['Spend', 'Attributed sales', 'ROAS', 'TACoS', 'CPA / clicks and impressions'],
  dataTitle: 'Data we plan to sync',
  dataItems: [
    'Daily campaign metrics: spend, clicks, impressions, attributed sales and conversions.',
    'Sponsored Products, Sponsored Brands, and Sponsored Display.',
    'Optional link to Amazon Seller (same tenant) for TACoS.',
    'No buyer PII; we do not operate or edit campaigns.',
  ],
  howTitle: 'How to connect (when ready)',
  howItems: [
    'In Integrations → Ads choose Amazon Ads.',
    'Authorize the Advertising LWA app (separate consent from Seller).',
    'Sync metrics (first sync ~90 days) and review Ads and Home.',
  ],
  ctaTitle: 'Amazon Ads is in progress',
  ctaBody: 'In the meantime you can connect the sales and advertising channels already available.',
  ctaLabel: 'See available integrations',
}

export function amazonAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
