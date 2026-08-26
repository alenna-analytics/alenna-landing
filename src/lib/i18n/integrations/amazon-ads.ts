import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads: gasto, ROAS y TACoS — Alenna',
  metaDescription:
    'Conecta Amazon Ads y ve gasto, ventas atribuidas y TACoS junto a tus otros canales. Solo lectura.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Publicidad',
  title: 'Amazon Ads',
  intro:
    'Alenna ofrece analítica de publicidad a anunciantes de ecommerce. Conecta Amazon Ads en solo lectura y mide gasto, ventas atribuidas y ROAS junto a tus ventas de Amazon, Shopify y Mercado Libre.',
  bullets: [
    'Compara campañas y decide dónde invertir más y dónde recortar.',
    'Si también conectas Amazon Seller, calculamos TACoS. Si no, ves el rendimiento de las campañas sin mezclar ventas.',
    'No editamos campañas ni compramos medios: somos medición para anunciantes, no una agencia.',
  ],
  overviewTitle: 'Rendimiento de campañas, con el contexto de tus ventas',
  overviewBody:
    'Sincronizamos Sponsored Products, Sponsored Brands y Sponsored Display. Amazon atribuye las ventas a clics de los últimos 14 días. El gasto entra al mismo módulo de Publicidad que Mercado Libre Ads, para que compares canales sin exportar reportes.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Gasto',
    'Ventas atribuidas',
    'Conversiones atribuidas',
    'ROAS',
    'CPA',
    'ROAS de equilibrio',
    'TACoS (con Amazon Seller conectado)',
    'Tendencia diaria',
    'Comparación con otros canales de publicidad',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Por campaña y por día: impresiones, clics, gasto, ventas atribuidas y conversiones.',
    'Sponsored Products, Sponsored Brands y Sponsored Display.',
    'La primera sincronización cubre unos 90 días; después, cada 6 horas.',
    'No traemos datos personales de compradores.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Amazon Ads.',
    'Inicia sesión con tu cuenta de Amazon Advertising. La conexión es de solo lectura.',
    'Alenna usa el perfil de publicidad de México, o el que tengas configurado. Lanza la primera sincronización y revisa Publicidad.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon Ads: spend, ROAS, and TACoS — Alenna',
  metaDescription:
    'Connect Amazon Ads and see spend, attributed sales, and TACoS next to your other channels. Read-only.',
  pageTitle: 'Amazon Ads',
  eyebrow: 'Advertising',
  title: 'Amazon Ads',
  intro:
    'Alenna provides advertising analytics to ecommerce advertisers. Connect Amazon Ads read-only and measure spend, attributed sales, and ROAS next to your Amazon, Shopify, and Mercado Libre sales.',
  bullets: [
    'Compare campaigns and decide where to invest more and where to cut.',
    'If you also connect Amazon Seller, we calculate TACoS. If not, you still see campaign performance without mixing in sales.',
    'We do not edit campaigns or buy media: measurement for advertisers, not an agency.',
  ],
  overviewTitle: 'Campaign performance, with your sales in context',
  overviewBody:
    'We sync Sponsored Products, Sponsored Brands, and Sponsored Display. Amazon attributes sales to clicks in the last 14 days. Spend lands in the same Ads module as Mercado Libre Ads, so you can compare channels without exporting reports.',
  kpisTitle: 'What you can see',
  kpis: [
    'Spend',
    'Attributed sales',
    'Attributed conversions',
    'ROAS',
    'CPA',
    'Break-even ROAS',
    'TACoS (when Amazon Seller is connected)',
    'Daily trend',
    'Comparison with other advertising channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'By campaign and by day: impressions, clicks, spend, attributed sales, and conversions.',
    'Sponsored Products, Sponsored Brands, and Sponsored Display.',
    'The first sync covers about 90 days; after that, every 6 hours.',
    'We do not pull buyer personal data.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Amazon Ads.',
    'Sign in with your Amazon Advertising account. The connection is read-only.',
    'Alenna uses the Mexico advertising profile, or the one you have configured. Run the first sync and review Ads.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function amazonAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
