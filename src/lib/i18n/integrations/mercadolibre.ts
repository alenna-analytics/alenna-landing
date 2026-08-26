import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre: ventas, publicaciones y margen — Alenna',
  metaDescription:
    'Conecta Mercado Libre y ve pedidos, publicaciones y comisiones de Mercado Pago junto al resto de tus canales.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Ventas',
  title: 'Mercado Libre',
  intro:
    'Conecta tu cuenta de Mercado Libre y ve pedidos, publicaciones e inventario con las comisiones de Mercado Pago, junto al resto de tus canales.',
  bullets: [
    'Ventas netas y margen junto a Amazon y Shopify.',
    'Comisiones de Mercado Pago asociadas a cada venta.',
    'Publicaciones e inventario en el mismo catálogo.',
  ],
  overviewTitle: 'Mercado Libre, con comisiones de Mercado Pago',
  overviewBody:
    'Sincronizamos pedidos, publicaciones e inventario, y las comisiones de cobro. Si también conectas Mercado Libre Ads con la misma cuenta, el TACoS se calcula solo. No traemos datos personales de compradores.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas de Mercado Libre',
    'Comisiones de Mercado Pago',
    'Margen después de costos',
    'Inventario y publicaciones',
    'Comparación con otros canales',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Pedidos y envíos: montos, estados y métricas de venta (sin datos personales de compradores).',
    'Publicaciones e inventario.',
    'Comisiones de Mercado Pago asociadas a las ventas.',
    'Pedidos cada 6 horas; catálogo, una vez al día.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Mercado Libre.',
    'Inicia sesión con tu cuenta de vendedor. Pedimos solo lectura de pedidos y publicaciones.',
    'Lanza la primera sincronización. Después, los pedidos se actualizan cada 6 horas.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre: sales, listings, and margin — Alenna',
  metaDescription:
    'Connect Mercado Libre and see orders, listings, and Mercado Pago fees next to your other channels.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Sales',
  title: 'Mercado Libre',
  intro:
    'Connect your Mercado Libre account and see orders, listings, and inventory with Mercado Pago fees, next to your other channels.',
  bullets: [
    'Net sales and margin next to Amazon and Shopify.',
    'Mercado Pago fees tied to each sale.',
    'Listings and inventory in the same catalog.',
  ],
  overviewTitle: 'Mercado Libre, with Mercado Pago fees',
  overviewBody:
    'We sync orders, listings, and inventory, plus collection fees. If you also connect Mercado Libre Ads with the same account, TACoS is calculated automatically. We do not pull buyer personal data.',
  kpisTitle: 'What you can see',
  kpis: [
    'Mercado Libre net sales',
    'Mercado Pago fees',
    'Margin after costs',
    'Inventory and listings',
    'Comparison with other channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'Orders and shipments: amounts, statuses, and sales metrics (no buyer personal data).',
    'Listings and inventory.',
    'Mercado Pago fees tied to sales.',
    'Orders every 6 hours; catalog once a day.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Mercado Libre.',
    'Sign in with your seller account. We request read-only orders and listings.',
    'Run the first sync. After that, orders update every 6 hours.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function mercadolibreDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
