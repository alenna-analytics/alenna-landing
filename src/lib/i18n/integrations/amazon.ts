import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Amazon seller analytics y P&L — Alenna',
  metaDescription:
    'Conecta Amazon Seller (SP-API) a Alenna: pedidos, fees de liquidación e inventario en el mismo P&L.',
  pageTitle: 'Amazon',
  eyebrow: 'Integración ecommerce',
  title: 'Amazon',
  intro:
    'Conecta Amazon Seller (SP-API) y ve pedidos, fees de liquidación e inventario de listings en el mismo P&L, sin armar settlements a mano.',
  bullets: [
    'Pedidos y líneas, sin PII de comprador.',
    'Comisiones y settlements (Finances: ~90 días la primera vez, luego diario).',
    'Listings e inventario (SKU, ASIN, título, precio, stock). Si también conectas Amazon Ads y coincide el seller, sale TACoS.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas Amazon',
    'Comisiones y settlements',
    'Margen tras costos',
    'Inventario y alertas',
    'Mix vs otros canales',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos: montos, fechas, estados y líneas (sin PII de compradores).',
    'Finances: comisiones y liquidaciones.',
    'Merchant listings: SKU, ASIN, título, precio, cantidad y estado.',
    'Pedidos ~cada 6 h; catálogo diario; Finances diario.',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones elige Amazon.',
    'Autoriza con LWA en Seller Central. Seller Central no usa scopes tipo Shopify; el consentimiento cubre SP-API Orders, Reports (listings) y Finances.',
    'Lanza la sincronización inicial; el incremental sigue solo.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Amazon seller analytics and P&L — Alenna',
  metaDescription:
    'Connect Amazon Seller (SP-API) to Alenna: orders, settlement fees, and inventory in the same P&L.',
  pageTitle: 'Amazon',
  eyebrow: 'Ecommerce integration',
  title: 'Amazon',
  intro:
    'Connect Amazon Seller (SP-API) and see orders, settlement fees, and listing inventory in the same P&L — without assembling settlements by hand.',
  bullets: [
    'Orders and line items, with no buyer PII.',
    'Commissions and settlements (Finances: ~90 days the first time, then daily).',
    'Listings and inventory (SKU, ASIN, title, price, stock). If you also connect Amazon Ads and the seller matches, TACoS appears.',
  ],
  overviewTitle: '',
  overviewBody: '',
  kpisTitle: 'What you can see',
  kpis: [
    'Amazon net sales',
    'Commissions and settlements',
    'Margin after costs',
    'Inventory and alerts',
    'Mix vs other channels',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders: amounts, dates, statuses, and line items (no buyer PII).',
    'Finances: commissions and settlements.',
    'Merchant listings: SKU, ASIN, title, price, quantity, and status.',
    'Orders ~every 6 hours; catalog daily; Finances daily.',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations choose Amazon.',
    'Authorize with LWA in Seller Central. Seller Central does not use Shopify-style scopes; consent covers SP-API Orders, Reports (listings), and Finances.',
    'Run the initial sync; incremental updates continue on their own.',
  ],
  ctaTitle: '',
  ctaBody: '',
  ctaLabel: '',
}

export function amazonDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
