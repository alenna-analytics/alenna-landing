import type { Language } from '@/providers/language-provider'

export const AMAZON_ADS_PATH = '/amazon-ads'

export type AdsCapability = {
  title: string
  body: string
}

export type AmazonAdsPageContent = {
  metaTitle: string
  metaDescription: string
  brandLabel: string
  eyebrow: string
  title: string
  intro: string
  whoTitle: string
  whoBody: string
  offerTitle: string
  capabilities: AdsCapability[]
  productsTitle: string
  products: string[]
  notTitle: string
  notItems: string[]
  howTitle: string
  howItems: string[]
  companyTitle: string
  companyBody: string
  contactTitle: string
  contactBody: string
}

const AMAZON_ADS_ES: AmazonAdsPageContent = {
  metaTitle: 'Software de medición de Amazon Ads — Alenna Analytics',
  metaDescription:
    'Alenna es software de medición para anunciantes: cruzamos gasto publicitario con ventas y costos. Conectamos Mercado Libre Ads hoy, y estamos trabajando para incorporar Amazon Ads, Google Ads y Meta Ads en el mismo panel.',
  brandLabel: 'Alenna Analytics',
  eyebrow: 'Tecnología publicitaria para anunciantes',
  title: 'Software de medición de ads para vendedores y marcas de ecommerce',
  intro:
    'Alenna ofrece medición de ads para otros anunciantes: un panel que cruza gasto publicitario con ventas y costos. Ya puedes conectar Mercado Libre Ads. Estamos trabajando para incorporar Amazon Ads (Sponsored Products, Brands y Display), Google Ads y Meta Ads. No somos una agencia: no compramos medios ni operamos campañas.',
  whoTitle: 'A quién servimos',
  whoBody:
    'Anunciantes que venden en Amazon, Shopify o Mercado Libre, y marcas que anuncian en esos canales. El producto está pensado para el anunciante (seller o marca), no para uso interno de una sola cuenta propia.',
  offerTitle: 'Qué servicio de ads ofrecemos',
  capabilities: [
    {
      title: 'Mercado Libre Ads',
      body: 'El anunciante conecta su cuenta para ver gasto y rendimiento de campañas, en solo lectura, junto al P&L.',
    },
    {
      title: 'Amazon Ads',
      body: 'Sponsored Products, Sponsored Brands y Sponsored Display: gasto, clics, ventas atribuidas, ROAS y TACoS, a medida que se complete el acceso de partner con Amazon.',
    },
    {
      title: 'Google Ads y Meta Ads',
      body: 'El mismo P&L para comparar canales cuando esas conexiones estén listas en el panel.',
    },
  ],
  productsTitle: 'Amazon Ads: lo que conectaremos',
  products: [
    'Sponsored Products',
    'Sponsored Brands',
    'Sponsored Display',
  ],
  notTitle: 'Qué no hacemos',
  notItems: [
    'No compramos inventario de medios ni gestionamos campañas por el anunciante.',
    'No ofrecemos Amazon DSP, Amazon Attribution ni Amazon Marketing Cloud.',
    'No somos una agencia de managed services.',
  ],
  howTitle: 'Cómo funciona para el anunciante',
  howItems: [
    'El anunciante conecta su cuenta de ads por OAuth. Hoy eso incluye Mercado Libre Ads; Amazon Ads, Google Ads y Meta Ads se están incorporando al mismo flujo.',
    'Alenna sincroniza métricas de campañas en solo lectura para reportes dentro de app.alenna.io.',
    'Esos datos se muestran junto a ventas y costos para decidir presupuesto con margen real, no solo con ROAS de consola.',
  ],
  companyTitle: 'Empresa',
  companyBody:
    'Alenna Analytics es operada por Sergio Garnica González (Querétaro, México). Sitio: alenna.io. Producto: app.alenna.io. Conectamos canales de venta (Amazon, Shopify y Mercado Libre) y estamos trabajando para unir también Amazon Ads, Google Ads y Meta Ads, junto a Mercado Libre Ads.',
  contactTitle: 'Contacto',
  contactBody: 'contacto@alenna.io',
}

const AMAZON_ADS_EN: AmazonAdsPageContent = {
  metaTitle: 'Amazon Ads measurement software — Alenna Analytics',
  metaDescription:
    'Alenna is measurement software for advertisers: we join ad spend with sales and costs. Mercado Libre Ads already connects, and we are working to bring Amazon Ads, Google Ads, and Meta Ads into the same dashboard.',
  brandLabel: 'Alenna Analytics',
  eyebrow: 'Advertising technology for advertisers',
  title: 'Ad measurement software for Amazon sellers and ecommerce advertisers',
  intro:
    'Alenna provides ads measurement for other advertisers: a dashboard that joins ad spend with sales and costs. Advertisers can already connect Mercado Libre Ads. We are working to add Amazon Ads (Sponsored Products, Brands, and Display), Google Ads, and Meta Ads. We are not an agency: we do not buy media or operate campaigns.',
  whoTitle: 'Who we serve',
  whoBody:
    'Advertisers who sell on Amazon, Shopify, or Mercado Libre, and brands that advertise on those channels. The product is built for the advertiser (seller or brand), not as an internal tool for a single in-house account.',
  offerTitle: 'Advertising services we offer',
  capabilities: [
    {
      title: 'Mercado Libre Ads',
      body: 'The advertiser connects their account to see campaign spend and performance, read-only, next to the P&L.',
    },
    {
      title: 'Amazon Ads',
      body: 'Sponsored Products, Sponsored Brands, and Sponsored Display: spend, clicks, attributed sales, ROAS, and TACoS, as partner access with Amazon is completed.',
    },
    {
      title: 'Google Ads and Meta Ads',
      body: 'The same P&L to compare channels as those connections land in the dashboard.',
    },
  ],
  productsTitle: 'Amazon Ads: what we will connect',
  products: [
    'Sponsored Products',
    'Sponsored Brands',
    'Sponsored Display',
  ],
  notTitle: 'What we do not do',
  notItems: [
    'We do not buy media inventory or manage campaigns on the advertiser\'s behalf.',
    'We do not offer Amazon DSP, Amazon Attribution, or Amazon Marketing Cloud.',
    'We are not a managed-services agency.',
  ],
  howTitle: 'How it works for the advertiser',
  howItems: [
    'The advertiser connects their ads account via OAuth. That already includes Mercado Libre Ads; Amazon Ads, Google Ads, and Meta Ads are joining the same flow.',
    'Alenna syncs campaign metrics read-only for reporting inside app.alenna.io.',
    'Those metrics sit next to sales and costs so budget decisions use real margin, not console ROAS alone.',
  ],
  companyTitle: 'Company',
  companyBody:
    'Alenna Analytics is operated by Sergio Garnica González (Querétaro, Mexico). Website: alenna.io. Product: app.alenna.io. We connect sales channels (Amazon, Shopify, and Mercado Libre) and are working to bring in Amazon Ads, Google Ads, and Meta Ads, alongside Mercado Libre Ads.',
  contactTitle: 'Contact',
  contactBody: 'contacto@alenna.io',
}

const AMAZON_ADS_CONTENT: Record<Language, AmazonAdsPageContent> = {
  es: AMAZON_ADS_ES,
  en: AMAZON_ADS_EN,
}

export function amazonAdsContent(lang: Language): AmazonAdsPageContent {
  return AMAZON_ADS_CONTENT[lang]
}
