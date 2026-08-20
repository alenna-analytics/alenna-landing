import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon seller analytics y P&L — Alenna',
  metaDescription:
    'Conecta Amazon Seller (SP-API) a Alenna: pedidos, fees, inventario y margen junto a otros canales de venta.',
  pageTitle: 'Amazon',
  eyebrow: 'Integración ecommerce',
  title: 'Amazon seller analytics con fees reales',
  intro:
    'Conecta tu cuenta de vendedor Amazon y ve pedidos, comisiones e inventario en el mismo P&L que tus otros canales de venta — sin hojas de cálculo.',
  bullets: [
    'Pedidos y líneas de producto sin datos personales de compradores.',
    'Fees y comisiones del canal para un margen cercano a la realidad.',
    'Inventario y catálogo de listings junto a otros canales de venta.',
  ],
  overviewTitle: 'Marketplace seller, en un solo panel',
  overviewBody:
    'Los reportes de Seller Central no cruzan el resto de tus canales. Alenna usa Selling Partner API en solo lectura para traer pedidos, fees e inventario y calcular rentabilidad consolidada.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas Amazon',
    'Comisiones y fees del canal',
    'Margen tras costos',
    'Inventario y alertas',
    'Comparativa vs otros canales de venta',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados, comisiones y líneas de producto (sin buyer PII).',
    'Finanzas / fees del seller cuando están disponibles.',
    'Listings e inventario vinculado.',
    'Tokens OAuth; se eliminan al desconectar.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones elige Amazon y autoriza con Seller Central / LWA.',
    'Alenna solicita solo roles mínimos de analytics de seller.',
    'Lanza la sincronización inicial; el incremental sigue solo.',
  ],
  ctaTitle: 'Conecta Amazon Seller',
  ctaBody: 'Une Amazon a tu P&L multicanal y deja de reconciliar fees a mano.',
  ctaLabel: 'Empezar',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon seller analytics and P&L — Alenna',
  metaDescription:
    'Connect Amazon Seller (SP-API) to Alenna: orders, fees, inventory, and margin next to your other sales channels.',
  pageTitle: 'Amazon',
  eyebrow: 'Ecommerce integration',
  title: 'Amazon seller analytics with real fees',
  intro:
    'Connect your Amazon seller account and see orders, commissions, and inventory in the same P&L as your other sales channels — without spreadsheets.',
  bullets: [
    'Orders and line items without buyer personal data.',
    'Channel fees and commissions for margin closer to reality.',
    'Inventory and listings next to your other sales channels.',
  ],
  overviewTitle: 'Marketplace seller, one panel',
  overviewBody:
    'Seller Central reports do not cross your other sales channels. Alenna uses Selling Partner API read-only to pull orders, fees, and inventory and compute consolidated profitability.',
  kpisTitle: 'What you can see',
  kpis: [
    'Amazon net sales',
    'Channel fees and commissions',
    'Margin after costs',
    'Inventory and alerts',
    'Compare vs other sales channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, commissions, and line items (no buyer PII).',
    'Seller finances / fees when available.',
    'Listings and linked inventory.',
    'OAuth tokens; removed when you disconnect.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations choose Amazon and authorize via Seller Central / LWA.',
    'Alenna requests only minimum seller analytics roles.',
    'Run the initial sync; incremental updates continue on their own.',
  ],
  ctaTitle: 'Connect Amazon Seller',
  ctaBody: 'Add Amazon to your multichannel P&L and stop reconciling fees by hand.',
  ctaLabel: 'Get started',
}

export function amazonDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
