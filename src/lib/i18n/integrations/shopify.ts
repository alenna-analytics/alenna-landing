import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Shopify analytics y rentabilidad — Alenna',
  metaDescription:
    'Conecta Shopify a Alenna y ve ventas, COGS, margen y P&L junto a Amazon y Mercado Libre. Analítica de tienda propia para ecommerce multicanal.',
  pageTitle: 'Shopify',
  eyebrow: 'Integración ecommerce',
  title: 'Shopify analytics con rentabilidad real',
  intro:
    'Conecta tu tienda Shopify y ve pedidos, catálogo e inventario en el mismo panel que tus marketplaces — con COGS, comisiones y margen, no solo ventas brutas.',
  bullets: [
    'Ventas netas, pedidos y catálogo de tu tienda propia junto a Amazon y Mercado Libre.',
    'Margen por producto y SKU con costos que tú cargas una vez.',
    'Un P&L consolidado: deja de exportar CSV de Shopify a mano.',
  ],
  overviewTitle: 'Tu tienda propia, en contexto multicanal',
  overviewBody:
    'Shopify es el corazón de muchas marcas, pero sus reportes no cruzan marketplaces ni ads. Alenna sincroniza pedidos, productos e inventario en solo lectura y los une a tu P&L, alertas e inventario en un solo lugar.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas y pedidos',
    'Margen bruto y contribución',
    'COGS por producto / SKU',
    'Inventario y alertas de stock',
    'Participación vs otros canales',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados y líneas de producto (sin datos personales de compradores).',
    'Productos y variantes del catálogo.',
    'Niveles de inventario.',
    'Histórico amplio de pedidos cuando Shopify lo autoriza (read_all_orders).',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'Entra a Integraciones en app.alenna.io y elige Shopify.',
    'Autoriza con OAuth los permisos de lectura (pedidos, productos, inventario).',
    'Ejecuta la primera sincronización; los reportes se actualizan solos.',
  ],
  ctaTitle: 'Empieza con tu tienda Shopify',
  ctaBody: 'Conecta Shopify en minutos y ve la rentabilidad de tu operación en un solo panel.',
  ctaLabel: 'Empezar',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Shopify analytics and true profitability — Alenna',
  metaDescription:
    'Connect Shopify to Alenna and see sales, COGS, margin, and P&L next to Amazon and Mercado Libre. Owned-store analytics for multichannel ecommerce.',
  pageTitle: 'Shopify',
  eyebrow: 'Ecommerce integration',
  title: 'Shopify analytics with real profitability',
  intro:
    'Connect your Shopify store and see orders, catalog, and inventory in the same panel as your marketplaces — with COGS, fees, and margin, not just gross sales.',
  bullets: [
    'Net sales, orders, and catalog from your owned store next to Amazon and Mercado Libre.',
    'Margin by product and SKU with costs you load once.',
    'One consolidated P&L — stop exporting Shopify CSVs by hand.',
  ],
  overviewTitle: 'Your owned store, in multichannel context',
  overviewBody:
    'Shopify is the core of many brands, but its reports do not cross marketplaces or ads. Alenna syncs orders, products, and inventory read-only and folds them into your P&L, alerts, and inventory in one place.',
  kpisTitle: 'What you can see',
  kpis: [
    'Net sales and orders',
    'Gross margin and contribution',
    'COGS by product / SKU',
    'Inventory and stock alerts',
    'Share vs other channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, and line items (no buyer PII).',
    'Product catalog and variants.',
    'Inventory levels.',
    'Longer order history when Shopify approves read_all_orders.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'Open Integrations in app.alenna.io and choose Shopify.',
    'Authorize OAuth read scopes (orders, products, inventory).',
    'Run the first sync; reports keep updating on their own.',
  ],
  ctaTitle: 'Start with your Shopify store',
  ctaBody: 'Connect Shopify in minutes and see profitability across your operation in one panel.',
  ctaLabel: 'Get started',
}

export function shopifyDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
