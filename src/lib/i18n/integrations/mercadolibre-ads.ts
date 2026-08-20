import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Mercado Libre Ads a Alenna: gasto y rendimiento de campañas junto al P&L de tu cuenta MELI.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Mercado Libre Ads en tu rentabilidad',
  intro:
    'Conecta la cuenta de publicidad MELI y ve gasto y rendimiento junto a tus ventas de Mercado Libre — ROAS y TACoS en el mismo panel.',
  bullets: [
    'Gasto y métricas de campañas en solo lectura.',
    'ROAS y TACoS con el revenue del sibling de commerce cuando está linkeado.',
    'Misma app MELI, segundo consentimiento: ecommerce y ads se separan en Alenna.',
  ],
  overviewTitle: 'Publicidad MELI, sin operar campañas',
  overviewBody:
    'Alenna no es agencia: no compramos medios ni gestionamos campañas. Sincronizamos métricas de advertising para cruzarlas con tu P&L. Si solo conectas Ads, ves spend; con ventas MELI linkeadas, TACoS cobra sentido.',
  kpisTitle: 'Qué puedes ver',
  kpis: ['Gasto (spend)', 'Rendimiento de campañas', 'ROAS', 'TACoS', 'Comparativa vs otros ads'],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Métricas de campañas y gasto publicitario (sin PII de compradores).',
    'Uso exclusivo para reportes de rentabilidad en app.alenna.io.',
    'Scope advertising + offline_access vía OAuth MELI (intent=ads).',
    'No operamos ni editamos campañas.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones → Publicidad elige Mercado Libre Ads.',
    'Autoriza el consentimiento de advertising (puede unirse a scopes si ya tienes MELI ventas).',
    'Sincroniza y revisa Publicidad e Inicio con el filtro de canales.',
  ],
  ctaTitle: 'Conecta Mercado Libre Ads',
  ctaBody: 'Mide el gasto MELI junto a tus ventas y decide con margen, no con vanity metrics.',
  ctaLabel: 'Empezar',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads ROAS and TACoS — Alenna',
  metaDescription:
    'Connect Mercado Libre Ads to Alenna: campaign spend and performance next to your MELI seller P&L.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Advertising integration',
  title: 'Mercado Libre Ads in your profitability',
  intro:
    'Connect your MELI ads account and see spend and performance next to Mercado Libre sales — ROAS and TACoS in the same panel.',
  bullets: [
    'Campaign spend and metrics read-only.',
    'ROAS and TACoS with sibling commerce revenue when linked.',
    'Same MELI app, second consent: ecommerce and ads stay separate in Alenna.',
  ],
  overviewTitle: 'MELI advertising, without running campaigns',
  overviewBody:
    'Alenna is not an agency: we do not buy media or manage campaigns. We sync advertising metrics to cross them with your P&L. Ads-only shows spend; with linked MELI sales, TACoS makes sense.',
  kpisTitle: 'What you can see',
  kpis: ['Spend', 'Campaign performance', 'ROAS', 'TACoS', 'Compare vs other ads'],
  dataTitle: 'Data we sync',
  dataItems: [
    'Campaign metrics and ad spend (no buyer PII).',
    'Used only for profitability reports in app.alenna.io.',
    'advertising + offline_access scopes via MELI OAuth (intent=ads).',
    'We do not operate or edit campaigns.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations → Ads choose Mercado Libre Ads.',
    'Authorize advertising consent (may merge scopes if MELI sales is already connected).',
    'Sync and review Ads and Home with the channel filter.',
  ],
  ctaTitle: 'Connect Mercado Libre Ads',
  ctaBody: 'Measure MELI spend next to sales and decide on margin, not vanity metrics.',
  ctaLabel: 'Get started',
}

export function mercadolibreAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
