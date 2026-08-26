import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Shopify: ventas, catálogo y margen — Alenna',
  metaDescription:
    'Conecta Shopify y ve pedidos, catálogo e inventario junto a Amazon y Mercado Libre. Solo lectura.',
  pageTitle: 'Shopify',
  eyebrow: 'Ventas',
  title: 'Shopify',
  intro:
    'Conecta tu tienda Shopify y ve ventas, catálogo e inventario junto a Amazon y Mercado Libre. El margen usa el costo que ya tienes en Shopify, o el que cargas tú.',
  bullets: [
    'Ventas y productos junto a tus marketplaces, en un solo panel.',
    'Margen con el costo de Shopify o el que tú cargas. Shopify no envía comisiones de canal.',
    'Inventario y alertas sobre el catálogo sincronizado.',
  ],
  overviewTitle: 'Tu tienda propia, junto al resto de canales',
  overviewBody:
    'Alenna lee la tienda en solo lectura: pedidos, productos e inventario. No traemos nombre, correo, teléfono ni dirección del comprador. Ves rentabilidad de la operación, no una base de clientes.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas y pedidos',
    'Margen bruto y de contribución (con costo de producto)',
    'Inventario y alertas',
    'Comparación con otros canales',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados y líneas de producto (sin datos personales de compradores).',
    'Productos, variantes e inventario. El costo de producto, cuando Shopify lo tiene.',
    'Pedidos cada 6 horas; catálogo, una vez al día.',
    'Alenna puede pedir hasta 3 años de pedidos. En Shopify, la tienda a veces limita el historial a unos 60 días.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Shopify e indica el dominio de tu tienda.',
    'Autoriza el acceso de solo lectura a pedidos, productos e inventario.',
    'Lanza la primera sincronización. Después, los pedidos se actualizan cada 6 horas.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Shopify: sales, catalog, and margin — Alenna',
  metaDescription:
    'Connect Shopify and see orders, catalog, and inventory next to Amazon and Mercado Libre. Read-only.',
  pageTitle: 'Shopify',
  eyebrow: 'Sales',
  title: 'Shopify',
  intro:
    'Connect your Shopify store and see sales, catalog, and inventory next to Amazon and Mercado Libre. Margin uses the cost already in Shopify, or the cost you enter.',
  bullets: [
    'Sales and products next to your marketplaces, in one dashboard.',
    'Margin from Shopify cost or the cost you enter. Shopify does not send channel commissions.',
    'Inventory and alerts on the synced catalog.',
  ],
  overviewTitle: 'Your own store, next to the rest of your channels',
  overviewBody:
    'Alenna reads the store read-only: orders, products, and inventory. We do not pull the buyer’s name, email, phone, or address. You see operating profitability, not a customer database.',
  kpisTitle: 'What you can see',
  kpis: [
    'Net sales and orders',
    'Gross and contribution margin (with product cost)',
    'Inventory and stock alerts',
    'Comparison with other channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, and product lines (no buyer personal data).',
    'Products, variants, and inventory. Product cost, when Shopify has it.',
    'Orders every 6 hours; catalog once a day.',
    'Alenna can request up to 3 years of orders. On Shopify, the store sometimes limits history to about 60 days.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Shopify and enter your shop domain.',
    'Authorize read-only access to orders, products, and inventory.',
    'Run the first sync. After that, orders update every 6 hours.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function shopifyDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
