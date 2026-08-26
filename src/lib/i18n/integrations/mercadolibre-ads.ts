import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Product Ads de Mercado Libre a Alenna: gasto y rendimiento de campañas (campaña × día) en Publicidad y en el P&L.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Mercado Libre Ads',
  intro:
    'Conecta Product Ads y trae gasto y rendimiento (campaña × día) a Publicidad y al P&L.',
  bullets: [
    'Solo Product Ads. No Brand Ads ni Display.',
    'ROAS, CPA y TACoS (TACoS si hay ventas MELI vinculadas).',
    'Solo lectura de reportes. Alenna no edita campañas ni compra medios.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Gasto',
    'Ventas atribuidas',
    'Conversiones / unidades atribuidas',
    'ROAS',
    'CPA',
    'Break-even ROAS',
    'TACoS (si hay ventas del mismo canal)',
    'Tendencia diaria',
    'Mix vs otros canales de publicidad',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Campaña × día: clicks, impresiones (prints), cost, total_amount, units_quantity.',
    'Primera sync ~90 días; después ~cada 6 h.',
    'Sin PII de compradores. Sin Brand Ads ni Display.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones → Publicidad elige Mercado Libre Ads.',
    'Autoriza OAuth con offline_access y advertising. Si ya tienes MELI ventas, se piden ambos grupos de scopes.',
    'Lanza la sincronización y revisa Publicidad e Inicio.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads ROAS and TACoS — Alenna',
  metaDescription:
    'Connect Mercado Libre Product Ads to Alenna: campaign spend and performance (campaign × day) in Ads and in the P&L.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Advertising integration',
  title: 'Mercado Libre Ads',
  intro:
    'Connect Product Ads and bring spend and performance (campaign × day) into Ads and the P&L.',
  bullets: [
    'Product Ads only. No Brand Ads or Display.',
    'ROAS, CPA, and TACoS (TACoS when MELI sales are linked).',
    'Read-only reports. Alenna does not edit campaigns or buy media.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'What you can see',
  kpis: [
    'Spend',
    'Attributed sales',
    'Attributed conversions / units',
    'ROAS',
    'CPA',
    'Break-even ROAS',
    'TACoS (when sales from the same channel are linked)',
    'Daily trend',
    'Mix vs other advertising channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Campaign × day: clicks, impressions (prints), cost, total_amount, units_quantity.',
    'First sync ~90 days; then ~every 6 hours.',
    'No buyer PII. No Brand Ads or Display.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations → Ads choose Mercado Libre Ads.',
    'Authorize OAuth with offline_access and advertising. If MELI sales is already connected, both scope groups are requested.',
    'Run the sync and review Ads and Home.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function mercadolibreAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
