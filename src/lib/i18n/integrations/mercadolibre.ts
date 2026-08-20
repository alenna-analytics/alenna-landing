import type { Language } from '@/providers/language-provider'
import type { IntegrationDetailContent } from '@/lib/i18n/integrations/types'

const ES: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre analytics y margen — Alenna',
  metaDescription:
    'Conecta Mercado Libre a Alenna: pedidos, publicaciones e inventario con margen real junto a otros canales de venta.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Integración ecommerce',
  title: 'Mercado Libre con rentabilidad clara',
  intro:
    'Conecta tu cuenta de vendedor MELI y ve ventas, publicaciones e inventario en el mismo panel que tus otros canales de venta — listo para COGS y margen.',
  bullets: [
    'Pedidos y envíos en solo lectura para métricas de ventas.',
    'Publicaciones e inventario sincronizados al catálogo de Alenna.',
    'Base para TACoS cuando también conectas canales de publicidad.',
  ],
  overviewTitle: 'El marketplace que más pesa en MX, en tu P&L',
  overviewBody:
    'Seller Center de MELI no consolida el resto de tus canales de venta. Alenna conecta OAuth con PKCE, sincroniza pedidos y catálogo en solo lectura y los mete en reportes multicanal.',
  kpisTitle: 'Qué puedes ver',
  kpis: [
    'Ventas netas Mercado Libre',
    'Margen tras costos',
    'Inventario y publicaciones',
    'Comparativa vs otros canales de venta',
    'Base de revenue para TACoS (con Ads)',
  ],
  dataTitle: 'Datos que sincronizamos',
  dataItems: [
    'Pedidos y envíos (solo lectura): montos, estados y métricas de ventas.',
    'Publicación y sincronización (solo lectura): catálogo e inventario.',
    'offline_access para renovar el token con seguridad.',
    'Sin datos del comprador (nombre, email, teléfono, dirección).',
  ],
  howTitle: 'Cómo conectar',
  howItems: [
    'En Integraciones elige Mercado Libre y autoriza OAuth.',
    'Confirma los permisos de lectura de pedidos y catálogo.',
    'Corre la primera sync; el incremental mantiene el panel al día.',
  ],
  ctaTitle: 'Conecta Mercado Libre',
  ctaBody: 'Une MELI a tu operación consolidada y mide margen de verdad.',
  ctaLabel: 'Empezar',
}

const EN: IntegrationDetailContent = {
  metaTitle: 'Mercado Libre analytics and margin — Alenna',
  metaDescription:
    'Connect Mercado Libre to Alenna: orders, listings, and inventory with real margin next to your other sales channels.',
  pageTitle: 'Mercado Libre',
  eyebrow: 'Ecommerce integration',
  title: 'Mercado Libre with clear profitability',
  intro:
    'Connect your MELI seller account and see sales, listings, and inventory in the same panel as your other sales channels — ready for COGS and margin.',
  bullets: [
    'Orders and shipments read-only for sales metrics.',
    'Listings and inventory synced into Alenna’s catalog.',
    'Foundation for TACoS when you also connect advertising channels.',
  ],
  overviewTitle: 'The marketplace that matters in MX, in your P&L',
  overviewBody:
    'MELI Seller Center does not consolidate your other sales channels. Alenna connects via OAuth with PKCE, syncs orders and catalog read-only, and feeds multichannel reports.',
  kpisTitle: 'What you can see',
  kpis: [
    'Mercado Libre net sales',
    'Margin after costs',
    'Inventory and listings',
    'Compare vs other sales channels',
    'Revenue base for TACoS (with Ads)',
  ],
  dataTitle: 'Data we sync',
  dataItems: [
    'Orders and shipments (read-only): amounts, statuses, and sales metrics.',
    'Listings sync (read-only): catalog and inventory.',
    'offline_access to refresh tokens securely.',
    'No buyer data (name, email, phone, address).',
  ],
  howTitle: 'How to connect',
  howItems: [
    'In Integrations choose Mercado Libre and authorize OAuth.',
    'Confirm read permissions for orders and catalog.',
    'Run the first sync; incremental keeps the panel current.',
  ],
  ctaTitle: 'Connect Mercado Libre',
  ctaBody: 'Add MELI to your consolidated operation and measure true margin.',
  ctaLabel: 'Get started',
}

export function mercadolibreDetailContent(lang: Language): IntegrationDetailContent {
  return lang === 'en' ? EN : ES
}
