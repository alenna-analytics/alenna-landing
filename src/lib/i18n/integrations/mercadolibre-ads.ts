import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads: gasto, ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Product Ads de Mercado Libre y ve gasto, ventas atribuidas y TACoS junto a tus otros canales. Solo lectura.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Publicidad',
  title: 'Mercado Libre Ads',
  intro:
    'Mide Product Ads de Mercado Libre junto a tus ventas y al resto de la publicidad. Ve gasto, ventas atribuidas y rentabilidad por campaña, en el mismo panel.',
  bullets: [
    'Compara campañas y decide dónde invertir más y dónde recortar.',
    'Si también conectas Mercado Libre ventas, calculamos TACoS. Si no, ves el rendimiento de las campañas sin mezclar ventas.',
    'Conexión de solo lectura: no editamos campañas ni compramos medios.',
  ],
  overviewTitle: 'Product Ads, con el contexto de tus ventas',
  overviewBody:
    'Hoy sincronizamos Product Ads. No incluimos Brand Ads ni Display. El gasto entra al mismo módulo de Publicidad que Amazon Ads, para que compares canales sin exportar reportes.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Gasto',
    'Ventas atribuidas',
    'Conversiones atribuidas',
    'ROAS',
    'CPA',
    'ROAS de equilibrio',
    'TACoS (con Mercado Libre ventas conectado)',
    'Tendencia diaria',
    'Comparación con otros canales de publicidad',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Por campaña y por día: impresiones, clics, gasto, ventas atribuidas y unidades.',
    'Solo Product Ads. No Brand Ads ni Display.',
    'La primera sincronización cubre unos 90 días; después, cada 6 horas.',
    'No traemos datos personales de compradores.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Mercado Libre Ads.',
    'Inicia sesión con tu cuenta de Mercado Libre. La conexión es de solo lectura.',
    'Lanza la primera sincronización y revisa Publicidad.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre Ads: spend, ROAS, and TACoS — Alenna',
  metaDescription:
    'Connect Mercado Libre Product Ads and see spend, attributed sales, and TACoS next to your other channels. Read-only.',
  pageTitle: 'Mercado Libre Ads',
  eyebrow: 'Advertising',
  title: 'Mercado Libre Ads',
  intro:
    'Measure Mercado Libre Product Ads next to your sales and the rest of your advertising. See spend, attributed sales, and profitability by campaign, in the same dashboard.',
  bullets: [
    'Compare campaigns and decide where to invest more and where to cut.',
    'If you also connect Mercado Libre sales, we calculate TACoS. If not, you still see campaign performance without mixing in sales.',
    'Read-only connection: we do not edit campaigns or buy media.',
  ],
  overviewTitle: 'Product Ads, with your sales in context',
  overviewBody:
    'Today we sync Product Ads. We do not include Brand Ads or Display. Spend lands in the same Ads module as Amazon Ads, so you can compare channels without exporting reports.',
  kpisTitle: 'What you can see',
  kpis: [
    'Spend',
    'Attributed sales',
    'Attributed conversions',
    'ROAS',
    'CPA',
    'Break-even ROAS',
    'TACoS (when Mercado Libre sales is connected)',
    'Daily trend',
    'Comparison with other advertising channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'By campaign and by day: impressions, clicks, spend, attributed sales, and units.',
    'Product Ads only. No Brand Ads or Display.',
    'The first sync covers about 90 days; after that, every 6 hours.',
    'We do not pull buyer personal data.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Mercado Libre Ads.',
    'Sign in with your Mercado Libre account. The connection is read-only.',
    'Run the first sync and review Ads.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function mercadolibreAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
