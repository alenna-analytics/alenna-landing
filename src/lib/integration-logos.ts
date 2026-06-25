import amazonLogo from '@/assets/partners/amazon_logo.png'
import mercadolibreLogo from '@/assets/partners/mercado_libre_logo.png'
import shopifyLogo from '@/assets/partners/shopify_logo.png'

export type PartnerLogo = {
  src: string
  alt: string
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: shopifyLogo, alt: 'Shopify' },
  { src: mercadolibreLogo, alt: 'Mercado Libre' },
  { src: amazonLogo, alt: 'Amazon' },
]
