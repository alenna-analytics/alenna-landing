import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Amazon Ads a Alenna: Sponsored Products, Brands y Display a campaña × día, con TACoS si coincide el Seller.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Amazon Ads',
  intro:
    'Conecta Amazon Ads (LWA aparte del Seller) y sincroniza Sponsored Products, Brands y Display a campaña × día. Si el profile coincide con Amazon Seller, TACoS sale solo.',
  bullets: [
    'SP, SB y SD; atribución click 14 días.',
    'Vínculo automático al Seller si coincide; si no, ves ads sin TACoS.',
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
    'Campaña × día: impresiones, clics, cost, sales14d, purchases14d, campaña/estado/tipo.',
    'Sponsored Products, Sponsored Brands y Sponsored Display.',
    'Primera sync ~90 días; después ~cada 6 h.',
    'Sin PII de compradores.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones → Publicidad elige Amazon Ads.',
    'Autoriza OAuth LWA con advertising::campaign_management. Amazon nombra así el scope; Alenna no escribe campañas.',
    'Alenna toma el profile de MX / marketplace configurado. Lanza la sync y revisa Publicidad e Inicio.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads ROAS and TACoS — Alenna',
  metaDescription:
    'Connect Amazon Ads to Alenna: Sponsored Products, Brands, and Display at campaign × day, with TACoS when Seller matches.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Advertising integration',
  title: 'Amazon Ads',
  intro:
    'Connect Amazon Ads (LWA separate from Seller) and sync Sponsored Products, Brands, and Display at campaign × day. If the profile matches Amazon Seller, TACoS appears on its own.',
  bullets: [
    'SP, SB, and SD; 14-day click attribution.',
    'Automatic link to Seller when it matches; otherwise you see ads without TACoS.',
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
    'Campaign × day: impressions, clicks, cost, sales14d, purchases14d, campaign identity/status/type.',
    'Sponsored Products, Sponsored Brands, and Sponsored Display.',
    'First sync ~90 days; then ~every 6 hours.',
    'No buyer PII.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations → Ads choose Amazon Ads.',
    'Authorize LWA OAuth with advertising::campaign_management. That is Amazon’s scope name; Alenna does not write campaigns.',
    'Alenna picks the MX / configured marketplace profile. Run the sync and review Ads and Home.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function amazonAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
