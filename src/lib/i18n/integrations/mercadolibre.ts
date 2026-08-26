import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre analytics y margen — Alenna',
  metaDescription:
    'Conecta Mercado Libre a Alenna: pedidos, publicaciones, inventario y comisiones de Mercado Pago.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Integración ecommerce',
  title: 'Mercado Libre',
  intro:
    'Conecta tu cuenta de vendedor y sincroniza pedidos, publicaciones e inventario, con comisiones de Mercado Pago, al P&L junto a los otros canales.',
  bullets: [
    'Pedidos en solo lectura, sin datos de comprador.',
    'Publicaciones e inventario al catálogo de Alenna.',
    'Fees de cobro. Si conectas MELI Ads con el mismo usuario, el vínculo y el TACoS se arman solos.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas Mercado Libre',
    'Comisiones de Mercado Pago',
    'Margen tras costos',
    'Inventario y publicaciones',
    'Mix vs otros canales',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos y envíos: montos, estados y métricas de ventas (sin PII de compradores).',
    'Publicaciones e inventario.',
    'Comisiones de Mercado Pago asociadas a las ventas.',
    'Incremental ~cada 6 h; catálogo diario.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones elige Mercado Libre.',
    'Autoriza OAuth con offline_access, urn:ml:mktp:orders-shipments:/read-only y urn:ml:mktp:publish-sync:/read-only.',
    'Lanza la primera sincronización; el incremental sigue solo.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre analytics and margin — Alenna',
  metaDescription:
    'Connect Mercado Libre to Alenna: orders, listings, inventory, and Mercado Pago fees.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Ecommerce integration',
  title: 'Mercado Libre',
  intro:
    'Connect your seller account and sync orders, listings, and inventory — with Mercado Pago fees — into the P&L next to your other channels.',
  bullets: [
    'Orders read-only, with no buyer data.',
    'Listings and inventory into Alenna’s catalog.',
    'Collection fees. If you connect MELI Ads with the same user, the link and TACoS are created automatically.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'What you can see',
  kpis: [
    'Mercado Libre net sales',
    'Mercado Pago fees',
    'Margin after costs',
    'Inventory and listings',
    'Mix vs other channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders and shipments: amounts, statuses, and sales metrics (no buyer PII).',
    'Listings and inventory.',
    'Mercado Pago fees tied to sales.',
    'Incremental ~every 6 hours; catalog daily.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations choose Mercado Libre.',
    'Authorize OAuth with offline_access, urn:ml:mktp:orders-shipments:/read-only, and urn:ml:mktp:publish-sync:/read-only.',
    'Run the first sync; incremental updates continue on their own.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function mercadolibreDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
