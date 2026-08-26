import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Meta Ads — próximamente en Alenna',
  metaDescription:
    'Meta Ads (Facebook e Instagram) llegará a Alenna para ver el gasto de campañas junto al resto de tu publicidad. Hoy no hay conexión.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Publicidad',
  title: 'Meta Ads',
  intro:
    'Pronto podrás medir Facebook e Instagram junto al resto de tu publicidad y ver el gasto de campañas en el mismo panel que tus ventas.',
  bullets: [
    'Compara Meta Ads con Amazon Ads y Mercado Libre Ads.',
    'Ve el gasto junto a las ventas, no solo en el administrador de anuncios.',
    'Solo lectura: no editaremos campañas ni compraremos medios.',
  ],
  overviewTitle: 'Facebook e Instagram, en el mismo panel de publicidad',
  overviewBody:
    'Aún no hay conexión ni fecha pública. Cuando esté listo, Meta Ads entrará al mismo módulo de Publicidad que el resto de tus campañas.',
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
  metaTitle: 'Meta Ads — coming soon to Alenna',
  metaDescription:
    'Meta Ads (Facebook and Instagram) is coming to Alenna so you can see campaign spend next to your other advertising. There is no connection today.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Advertising',
  title: 'Meta Ads',
  intro:
    'Soon you will measure Facebook and Instagram next to the rest of your advertising and see campaign spend in the same dashboard as your sales.',
  bullets: [
    'Compare Meta Ads with Amazon Ads and Mercado Libre Ads.',
    'See spend next to sales, not in Ads Manager on its own.',
    'Read-only: we will not edit campaigns or buy media.',
  ],
  overviewTitle: 'Facebook and Instagram, in the same advertising dashboard',
  overviewBody:
    'There is no connection yet, and no public date. When it is ready, Meta Ads will enter the same Ads module as the rest of your campaigns.',
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

export function metaAdsDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
