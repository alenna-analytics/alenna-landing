import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Shopify analytics y rentabilidad — Alenna',
  metaDescription:
    'Conecta Shopify a Alenna: pedidos, catálogo e inventario en el mismo P&L que tus otros canales. Solo lectura.',
  pageTitle: 'Shopify',
  eyebrow: 'Integración ecommerce',
  title: 'Shopify',
  intro:
    'Conecta tu tienda y trae pedidos, catálogo e inventario al mismo P&L que Amazon y Mercado Libre. Alenna lee en solo lectura y calcula margen con el costo de variante de Shopify cuando existe, o con el COGS que cargas tú.',
  bullets: [
    'Pedidos, productos y stock junto al resto de canales; sin datos de comprador.',
    'COGS desde unitCost de Shopify, o carga manual si la tienda no lo trae.',
    'Inventario y alertas sobre el catálogo sincronizado. Shopify no trae comisiones de canal.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas y pedidos',
    'Margen bruto y contribución (con COGS)',
    'Inventario y alertas de stock',
    'Mix vs otros canales',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados y líneas de producto (sin PII de compradores).',
    'Productos y variantes.',
    'Niveles de inventario y unitCost si Shopify lo expone.',
    'Incremental ~cada 6 h; catálogo diario. Histórico: Alenna pide hasta 3 años; Shopify puede limitar a ~60 días.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones elige Shopify e indica el dominio de la tienda.',
    'Autoriza OAuth con read_orders, read_products y read_inventory.',
    'Lanza la primera sincronización; el incremental sigue solo.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Shopify analytics and profitability — Alenna',
  metaDescription:
    'Connect Shopify to Alenna: orders, catalog, and inventory in the same P&L as your other channels. Read-only.',
  pageTitle: 'Shopify',
  eyebrow: 'Ecommerce integration',
  title: 'Shopify',
  intro:
    'Connect your store and bring orders, catalog, and inventory into the same P&L as Amazon and Mercado Libre. Alenna reads the shop read-only and computes margin from Shopify variant unitCost when it exists, or from COGS you load.',
  bullets: [
    'Orders, products, and stock next to your other channels; no buyer data.',
    'COGS from Shopify unitCost, or a one-time load if the store does not send it.',
    'Inventory and alerts on the synced catalog. Shopify does not send channel commissions.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'What you can see',
  kpis: [
    'Net sales and orders',
    'Gross margin and contribution (with COGS)',
    'Inventory and stock alerts',
    'Mix vs other channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, and line items (no buyer PII).',
    'Products and variants.',
    'Inventory levels and unitCost when Shopify exposes it.',
    'Incremental ~every 6 hours; catalog daily. History: Alenna asks for up to 3 years; Shopify may cap at ~60 days.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations choose Shopify and enter the shop domain.',
    'Authorize OAuth with read_orders, read_products, and read_inventory.',
    'Run the first sync; incremental updates continue on their own.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function shopifyDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
