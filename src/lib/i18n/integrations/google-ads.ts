import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Google Ads — próximamente en Alenna',
  metaDescription:
    'Google Ads llegará a Alenna para ver gasto y rendimiento de campañas junto al resto de tu publicidad. Aún no está abierto a conectar.',
  pageTitle: 'Google Ads',
  eyebrow: 'Publicidad',
  title: 'Google Ads',
  intro:
    'Pronto podrás ver Google Ads junto a Amazon Ads y Mercado Libre Ads: gasto y rendimiento de campañas en el mismo panel, comparado con tus ventas.',
  bullets: [
    'Compara Google Ads con el resto de tus canales de publicidad.',
    'Ve el gasto junto a las ventas, no en una consola aparte.',
    'Solo lectura: no editaremos campañas ni compraremos medios.',
  ],
  overviewTitle: 'Google Ads, en el mismo panel de publicidad',
  overviewBody:
    'Aún no está abierto a conectar y no hay fecha pública. Cuando esté listo, el gasto de Google Ads entrará al módulo de Publicidad.',
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
    'Google Ads is coming to Alenna so you can see campaign spend and performance next to your other advertising. Not open to connect yet.',
  pageTitle: 'Google Ads',
  eyebrow: 'Advertising',
  title: 'Google Ads',
  intro:
    'Soon you will see Google Ads next to Amazon Ads and Mercado Libre Ads: campaign spend and performance in the same dashboard, compared with your sales.',
  bullets: [
    'Compare Google Ads with the rest of your advertising channels.',
    'See spend next to sales, not in a separate console.',
    'Read-only: we will not edit campaigns or buy media.',
  ],
  overviewTitle: 'Google Ads, in the same advertising dashboard',
  overviewBody:
    'It is not open to connect yet, and there is no public date. When it is ready, Google Ads spend will enter the Ads module.',
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
