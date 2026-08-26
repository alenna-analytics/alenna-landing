import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Meta Ads — próximamente en Alenna',
  metaDescription:
    'Meta Ads (Facebook e Instagram) llegará a Alenna para medir gasto de campañas junto al resto de publicidad. Hoy no hay conector.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Integración de publicidad',
  title: 'Meta Ads',
  intro:
    'Meta Ads (Facebook e Instagram) llegará para medir gasto de campañas junto al resto de publicidad. Hoy no hay conector ni sync.',
  bullets: [
    'Gasto y rendimiento en el mismo panel de Publicidad.',
    'Solo lectura; no operaremos campañas.',
  ],
  socialProof:
    'La misma vista de rentabilidad que ya tienes con Mercado Libre Ads y Amazon Ads.',
  overviewTitle: '',
  overviewBody: '',
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
    'Meta Ads (Facebook and Instagram) is coming to Alenna to measure campaign spend next to your other ads. There is no connector today.',
  pageTitle: 'Meta Ads',
  eyebrow: 'Advertising integration',
  title: 'Meta Ads',
  intro:
    'Meta Ads (Facebook and Instagram) will measure campaign spend next to your other advertising. There is no connector or sync today.',
  bullets: [
    'Spend and performance in the same Ads panel.',
    'Read-only; we will not operate campaigns.',
  ],
  socialProof:
    'The same profitability view you already have with Mercado Libre Ads and Amazon Ads.',
  overviewTitle: '',
  overviewBody: '',
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
