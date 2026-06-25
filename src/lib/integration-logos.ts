import amazonLogo from '@alenna-assets/amazon_logo.png'
import mercadolibreLogo from '@alenna-assets/mercado_libre_logo.png'
import shopifyLogo from '@alenna-assets/shopify_logo.png'

export type PartnerLogo = {
  src: string
  alt: string
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: shopifyLogo, alt: 'Shopify' },
  { src: mercadolibreLogo, alt: 'Mercado Libre' },
  { src: amazonLogo, alt: 'Amazon' },
]
