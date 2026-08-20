import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Meta Ads — próximamente en Alenna',
  metaDescription:
    'Meta Ads llegará a Alenna: mide gasto y rendimiento de campañas junto a otros canales de venta. En progreso.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Meta Ads en tu rentabilidad',
  intro:
    'Estamos construyendo la conexión con Meta Ads para traer gasto y rendimiento de campañas junto a otros canales de venta — con el mismo enfoque de margen, no vanity metrics.',
  bullets: [
    'Gasto y métricas de campañas en solo lectura.',
    'Cruce con tu P&L y otros canales de publicidad cuando esté listo.',
    'Solo lectura: medimos campañas; no las operamos ni compramos medios.',
  ],
  overviewTitle: 'Publicidad de Meta, en progreso',
  overviewBody:
    'La integración aún no está disponible para conectar. El objetivo es sincronizar métricas de Meta Ads en solo lectura y cruzarlas con tu rentabilidad en Alenna, igual que el resto de canales de publicidad.',
  kpisTitle: 'Qué podrás ver',
  kpis: ['Gasto (spend)', 'Rendimiento de campañas', 'ROAS', 'CPA / clics e impresiones', 'Comparativa vs otros canales de publicidad'],
  dataTitle: 'Datos que planeamos sincronizar',
  dataItems: [
    'Métricas de campañas y gasto publicitario (sin PII de compradores).',
    'Uso exclusivo para reportes de rentabilidad en app.alenna.io.',
    'Conexión OAuth de solo lectura cuando la integración esté lista.',
    'No operaremos ni editaremos campañas.',
  ],
  howTitle: 'Cómo conectar (cuando esté listo)',
  howItems: [
    'En Integraciones → Publicidad elige Meta Ads.',
    'Autoriza el consentimiento OAuth de lectura.',
    'Sincroniza y revisa Publicidad e Inicio con el filtro de canales.',
  ],
  ctaTitle: 'Meta Ads está en progreso',
  ctaBody: 'Mientras tanto puedes conectar los canales de venta y publicidad ya disponibles.',
  ctaLabel: 'Ver integraciones disponibles',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Meta Ads — coming soon to Alenna',
  metaDescription:
    'Meta Ads is coming to Alenna: measure campaign spend and performance next to your other sales channels. In progress.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Advertising integration',
  title: 'Meta Ads in your profitability',
  intro:
    'We are building the Meta Ads connection to bring campaign spend and performance next to your other sales channels — with the same margin focus, not vanity metrics.',
  bullets: [
    'Campaign spend and metrics read-only.',
    'Crossed with your P&L and other advertising channels when ready.',
    'Read-only: we measure campaigns; we do not run them or buy media.',
  ],
  overviewTitle: 'Meta advertising, in progress',
  overviewBody:
    'This integration is not available to connect yet. The goal is to sync Meta Ads metrics read-only and cross them with profitability in Alenna, like the rest of our advertising channels.',
  kpisTitle: 'What you will see',
  kpis: ['Spend', 'Campaign performance', 'ROAS', 'CPA / clicks and impressions', 'Compare vs other advertising channels'],
  dataTitle: 'Data we plan to sync',
  dataItems: [
    'Campaign metrics and ad spend (no buyer PII).',
    'Used only for profitability reports in app.alenna.io.',
    'Read-only OAuth when the integration ships.',
    'We will not operate or edit campaigns.',
  ],
  howTitle: 'How to connect (when ready)',
  howItems: [
    'In Integrations → Ads choose Meta Ads.',
    'Authorize read-only OAuth consent.',
    'Sync and review Ads and Home with the channel filter.',
  ],
  ctaTitle: 'Meta Ads is in progress',
  ctaBody: 'In the meantime you can connect the sales and advertising channels already available.',
  ctaLabel: 'See available integrations',
}

export function metaAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
