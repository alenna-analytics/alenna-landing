import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon Seller: ventas, comisiones y margen — Alenna',
  metaDescription:
    'Conecta Amazon Seller y ve pedidos, comisiones e inventario en el mismo panel que el resto de tus canales.',
  pageTitle: 'Amazon',
  eyebrow: 'Ventas',
  title: 'Amazon',
  intro:
    'Lleva pedidos, comisiones e inventario de Amazon al mismo panel que el resto de tus canales. Dejas de armar liquidaciones a mano y ves margen con costos reales.',
  bullets: [
    'Ventas netas y margen junto a Shopify y Mercado Libre.',
    'Comisiones y liquidaciones, sin armar el Excel a mano.',
    'Inventario y alertas sobre el catálogo sincronizado.',
  ],
  overviewTitle: 'Amazon Seller, con comisiones incluidas',
  overviewBody:
    'Sincronizamos pedidos, catálogo e inventario, y las comisiones de liquidación de Amazon. Si también conectas Amazon Ads con la misma cuenta, el TACoS aparece solo. No traemos datos personales de compradores.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas de Amazon',
    'Comisiones y liquidaciones',
    'Margen después de costos',
    'Inventario y alertas',
    'Comparación con otros canales',
  ],
  dataTitle: 'Qué sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados y líneas de producto (sin datos personales de compradores).',
    'Comisiones y liquidaciones de Amazon.',
    'Catálogo e inventario: SKU, ASIN, título, precio, cantidad y estado.',
    'Pedidos cada 6 horas; catálogo y comisiones, una vez al día.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones, elige Amazon.',
    'Autoriza el acceso desde Seller Central. Pedimos solo lectura de pedidos, catálogo y comisiones.',
    'Lanza la primera sincronización. Después, los pedidos se actualizan cada 6 horas.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon Seller: sales, fees, and margin — Alenna',
  metaDescription:
    'Connect Amazon Seller and see orders, commissions, and inventory in the same dashboard as your other channels.',
  pageTitle: 'Amazon',
  eyebrow: 'Sales',
  title: 'Amazon',
  intro:
    'Bring Amazon orders, commissions, and inventory into the same dashboard as your other channels. Stop assembling settlements by hand and see margin with real costs.',
  bullets: [
    'Net sales and margin next to Shopify and Mercado Libre.',
    'Commissions and settlements, without building the spreadsheet yourself.',
    'Inventory and alerts on the synced catalog.',
  ],
  overviewTitle: 'Amazon Seller, with commissions included',
  overviewBody:
    'We sync orders, catalog, and inventory, plus Amazon settlement commissions. If you also connect Amazon Ads with the same account, TACoS appears on its own. We do not pull buyer personal data.',
  kpisTitle: 'What you can see',
  kpis: [
    'Amazon net sales',
    'Commissions and settlements',
    'Margin after costs',
    'Inventory and alerts',
    'Comparison with other channels',
  ],
  dataTitle: 'What we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, and product lines (no buyer personal data).',
    'Amazon commissions and settlements.',
    'Catalog and inventory: SKU, ASIN, title, price, quantity, and status.',
    'Orders every 6 hours; catalog and commissions once a day.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations, choose Amazon.',
    'Authorize access from Seller Central. We request read-only orders, catalog, and commissions.',
    'Run the first sync. After that, orders update every 6 hours.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function amazonDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
