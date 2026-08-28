import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Google Ads: gasto, ROAS y rendimiento — Alenna',
  metaDescription:
    'Conecta Google Ads y ve gasto, conversiones y ROAS junto a tus otros canales. Solo lectura.',
  pageTitle: 'Google Ads',
  eyebrow: 'Publicidad',
  title: 'Google Ads',
  intro:
    'Conecta Google Ads en solo lectura y mide gasto, conversiones y ROAS junto a Amazon Ads y Mercado Libre Ads, en el mismo panel de publicidad.',
  bullets: [
    'Compara campañas de Search, Shopping, Performance Max y más con el resto de tus canales.',
    'Ve el gasto junto a tus ventas, no en una consola aparte.',
    'No editamos campañas ni compramos medios: somos medición para anunciantes, no una agencia.',
  ],
  overviewTitle: 'Google Ads, con el contexto de tu operación',
  overviewBody:
    'Sincronizamos campañas por tipo de canal (Search, Display, Shopping, Video, Performance Max, Demand Gen y más). El gasto entra al mismo módulo de Publicidad que Amazon Ads y Mercado Libre Ads, para que compares canales sin exportar reportes.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Gasto',
    'Conversiones',
    'Valor de conversiones',
    'ROAS',
    'CPA',
    'ROAS de equilibrio',
    'Tendencia diaria',
    'Comparación con otros canales de publicidad',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Por campaña y por día: impresiones, clics, gasto, conversiones y valor de conversiones.',
    'Search, Display, Shopping, Video, Performance Max, Demand Gen y otros tipos de campaña.',
    'La primera sincronización cubre unos 90 días; después, cada 6 horas.',
    'No traemos datos personales de compradores.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Google Ads.',
    'Inicia sesión con tu cuenta de Google. La conexión es de solo lectura.',
    'Si tienes varias cuentas bajo el MCC, elige la que quieres conectar. Lanza la primera sincronización y revisa Publicidad.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Google Ads: spend, ROAS, and performance — Alenna',
  metaDescription:
    'Connect Google Ads and see spend, conversions, and ROAS next to your other channels. Read-only.',
  pageTitle: 'Google Ads',
  eyebrow: 'Advertising',
  title: 'Google Ads',
  intro:
    'Connect Google Ads read-only and measure spend, conversions, and ROAS next to Amazon Ads and Mercado Libre Ads, in the same advertising dashboard.',
  bullets: [
    'Compare Search, Shopping, Performance Max, and other campaign types with your other channels.',
    'See spend next to your sales, not in a separate console.',
    'We do not edit campaigns or buy media: measurement for advertisers, not an agency.',
  ],
  overviewTitle: 'Google Ads, with your operation in context',
  overviewBody:
    'We sync campaigns by channel type (Search, Display, Shopping, Video, Performance Max, Demand Gen, and more). Spend lands in the same Ads module as Amazon Ads and Mercado Libre Ads, so you can compare channels without exporting reports.',
  kpisTitle: 'What you can see',
  kpis: [
    'Spend',
    'Conversions',
    'Conversion value',
    'ROAS',
    'CPA',
    'Break-even ROAS',
    'Daily trend',
    'Comparison with other advertising channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'By campaign and by day: impressions, clicks, spend, conversions, and conversion value.',
    'Search, Display, Shopping, Video, Performance Max, Demand Gen, and other campaign types.',
    'The first sync covers about 90 days; after that, every 6 hours.',
    'We do not pull buyer personal data.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Google Ads.',
    'Sign in with your Google account. The connection is read-only.',
    'If you have multiple accounts under the MCC, pick the one you want to connect. Run the first sync and review Ads.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function googleAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
