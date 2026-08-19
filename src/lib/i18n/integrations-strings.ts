import type { Language } from '@/providers/language-provider'
import type { LegalPageContent } from '@/lib/i18n/legal-types'

const INTEGRATIONS_ES: LegalPageContent = {
  metaTitle: 'Integraciones — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Integraciones y permisos',
  updated: 'Última actualización: 19 de agosto de 2026',
  intro:
    'Alenna conecta canales de ecommerce (Amazon, Shopify y Mercado Libre) y cuentas de ads mediante OAuth para sincronizar datos comerciales y mostrarte métricas de margen, inventario, gasto publicitario y rentabilidad. Seguimos un enfoque metrics-only: no almacenamos datos personales de compradores (nombres, correos, teléfonos ni direcciones). Para el tratamiento completo de datos, consulta alenna.io/privacidad.',
  sections: [
    {
      title: 'Enfoque general',
      blocks: [
        {
          kind: 'p',
          text: 'Solo solicitamos los permisos mínimos necesarios para cada integración. Los datos se usan para reportes, alertas y análisis dentro de tu panel en app.alenna.io. Puedes desconectar un canal en cualquier momento; al hacerlo eliminamos los tokens de acceso almacenados.',
        },
        {
          kind: 'ul',
          items: [
            'No guardamos nombres, correos, teléfonos ni direcciones de compradores.',
            'No almacenamos blobs completos de API con datos personales de clientes finales.',
            'Los pedidos se normalizan a montos, fechas, estados, comisiones y líneas de producto (SKU, cantidad, precio).',
          ],
        },
      ],
    },
    {
      id: 'shopify',
      title: 'Shopify',
      blocks: [
        {
          kind: 'p',
          text: 'Conectas tu tienda Shopify mediante OAuth. Alenna accede a la API de administración de Shopify con los siguientes alcances:',
        },
        {
          kind: 'ul',
          items: [
            'read_orders — pedidos (montos, fechas, estados financieros y de fulfillment, líneas de producto).',
            'read_products — catálogo de productos y variantes.',
            'read_inventory — niveles de inventario.',
            'read_all_orders — histórico de pedidos más allá de 60 días (sujeto a aprobación de Shopify; se solicita por separado).',
          ],
        },
        {
          kind: 'h3',
          text: 'Qué no pedimos ni guardamos',
        },
        {
          kind: 'ul',
          items: [
            'Campos de customer (nombre, email, teléfono, direcciones de envío o facturación).',
            'Datos de pago de tarjetas o instrumentos financieros de compradores.',
          ],
        },
        {
          kind: 'p',
          text: 'Cumplimos con los webhooks de privacidad de Shopify (customers/data_request, customers/redact, shop/redact, app/uninstalled). Si Shopify envía una solicitud de datos de un comprador, respondemos que no almacenamos esa información.',
        },
      ],
    },
    {
      id: 'mercadolibre',
      title: 'Mercado Libre',
      blocks: [
        {
          kind: 'p',
          text: 'Conectas tu cuenta de vendedor de Mercado Libre mediante OAuth con PKCE. Permisos solicitados:',
        },
        {
          kind: 'ul',
          items: [
            'offline_access — renovación segura del token de acceso.',
            'Pedidos y envíos (solo lectura) — métricas de ventas, estados y montos de pedidos.',
            'Publicación y sincronización (solo lectura) — catálogo, publicaciones e inventario vinculado.',
          ],
        },
        {
          kind: 'h3',
          text: 'Qué no pedimos ni guardamos',
        },
        {
          kind: 'ul',
          items: [
            'Datos del comprador (buyer): nombre, email, teléfono, dirección de envío.',
            'Perfiles de cliente o mensajería con datos personales.',
          ],
        },
      ],
    },
    {
      id: 'mercadolibre-ads',
      title: 'Mercado Libre Ads',
      blocks: [
        {
          kind: 'p',
          text: 'Conectas la cuenta de anuncios de Mercado Libre del anunciante para medición: gasto, rendimiento de campañas y métricas necesarias para ROAS junto al P&L. Solo lectura; no operamos campañas ni compramos medios.',
        },
        {
          kind: 'ul',
          items: [
            'Métricas de campañas y gasto publicitario (sin PII de compradores).',
            'Uso exclusivo para reportes de rentabilidad dentro de app.alenna.io.',
          ],
        },
      ],
    },
    {
      id: 'amazon',
      title: 'Amazon',
      blocks: [
        {
          kind: 'p',
          text: 'Conectas tu cuenta de vendedor de Amazon mediante OAuth con Amazon Selling Partner API (SP-API). Alenna solicita únicamente los roles mínimos para analytics de seller, sin acceso a datos personales de compradores:',
        },
        {
          kind: 'ul',
          items: [
            'Pedidos — montos, fechas, estados, comisiones y líneas de producto (sin datos de buyer).',
            'Finanzas — tarifas, reembolsos y métricas de liquidación para reportes de rentabilidad.',
            'Inventario y catálogo — SKUs, cantidades y disponibilidad para alertas y análisis.',
          ],
        },
        {
          kind: 'h3',
          text: 'Qué no pedimos ni guardamos',
        },
        {
          kind: 'ul',
          items: [
            'Roles de SP-API que expongan PII de compradores (nombre, dirección, email, teléfono).',
            'Restricted Data Token (RDT) ni flujos de datos personales de órdenes.',
            'Datos de identificación de clientes finales de Amazon.',
          ],
        },
        {
          kind: 'p',
          text: 'El uso de datos sigue nuestra Política de Privacidad en alenna.io/privacidad y los requisitos de la Data Protection Policy de Amazon.',
        },
      ],
    },
    {
      id: 'amazon-ads',
      title: 'Amazon Ads',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna ofrece medición publicitaria para otros anunciantes. Estamos trabajando en Amazon Ads API (Sponsored Products, Sponsored Brands y Sponsored Display) para reportar gasto, clics, ventas atribuidas, ROAS y TACoS junto al P&L, sujeto al acceso de partner. Detalle del servicio: alenna.io/amazon-ads.',
        },
        {
          kind: 'ul',
          items: [
            'Medición de campañas de Amazon Ads para el anunciante, no gestión ni compra de medios.',
            'Mercado Libre Ads ya se puede conectar; Amazon Ads, Google Ads y Meta Ads se están incorporando al mismo panel.',
            'Sin Amazon DSP, Amazon Attribution ni Amazon Marketing Cloud en esta fase.',
          ],
        },
        {
          kind: 'h3',
          text: 'Qué no pedimos ni guardamos',
        },
        {
          kind: 'ul',
          items: [
            'No operamos campañas ni escribimos presupuestos o creatividades en la cuenta del anunciante.',
            'No almacenamos PII de compradores finales a través de Amazon Ads.',
          ],
        },
      ],
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      blocks: [
        {
          kind: 'p',
          text: 'Estamos trabajando para conectar Google Ads y medir gasto y rendimiento en el mismo P&L, en solo lectura. No operamos campañas.',
        },
      ],
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      blocks: [
        {
          kind: 'p',
          text: 'Estamos trabajando para conectar Meta Ads y medir gasto y rendimiento en el mismo P&L, en solo lectura. No operamos campañas.',
        },
      ],
    },
    {
      title: 'Contacto',
      blocks: [
        {
          kind: 'p',
          text: 'Para preguntas sobre permisos o datos: contacto@alenna.io (general) o privacidad@alenna.io (privacidad y derechos ARCO).',
        },
      ],
    },
  ],
}

const INTEGRATIONS_EN: LegalPageContent = {
  metaTitle: 'Integrations — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Integrations and permissions',
  updated: 'Last updated: August 19, 2026',
  intro:
    'Alenna connects ecommerce channels (Amazon, Shopify, and Mercado Libre) and ad accounts via OAuth to sync commercial data and show margin, inventory, ad spend, and profitability metrics. We follow a metrics-only approach: we do not store buyer personal data (names, emails, phones, or addresses). For full data processing details, see alenna.io/privacidad.',
  sections: [
    {
      title: 'General approach',
      blocks: [
        {
          kind: 'p',
          text: 'We only request the minimum permissions required for each integration. Data is used for reports, alerts, and analysis in your dashboard at app.alenna.io. You can disconnect a channel at any time; we then delete stored access tokens.',
        },
        {
          kind: 'ul',
          items: [
            'We do not store buyer names, emails, phones, or addresses.',
            'We do not persist full API blobs containing end-customer personal data.',
            'Orders are normalized to amounts, dates, statuses, fees, and line items (SKU, quantity, price).',
          ],
        },
      ],
    },
    {
      id: 'shopify',
      title: 'Shopify',
      blocks: [
        {
          kind: 'p',
          text: 'You connect your Shopify store via OAuth. Alenna accesses the Shopify Admin API with the following scopes:',
        },
        {
          kind: 'ul',
          items: [
            'read_orders — orders (amounts, dates, financial and fulfillment status, line items).',
            'read_products — product and variant catalog.',
            'read_inventory — inventory levels.',
            'read_all_orders — order history beyond 60 days (subject to Shopify approval; requested separately).',
          ],
        },
        {
          kind: 'h3',
          text: 'What we do not request or store',
        },
        {
          kind: 'ul',
          items: [
            'Customer fields (name, email, phone, shipping or billing addresses).',
            'Buyer payment card or financial instrument data.',
          ],
        },
        {
          kind: 'p',
          text: 'We comply with Shopify privacy webhooks (customers/data_request, customers/redact, shop/redact, app/uninstalled). If Shopify requests buyer data, we respond that we do not store it.',
        },
      ],
    },
    {
      id: 'mercadolibre',
      title: 'Mercado Libre',
      blocks: [
        {
          kind: 'p',
          text: 'You connect your Mercado Libre seller account via OAuth with PKCE. Permissions requested:',
        },
        {
          kind: 'ul',
          items: [
            'offline_access — secure access token renewal.',
            'Orders and shipments (read-only) — sales metrics, statuses, and order amounts.',
            'Listing and sync (read-only) — catalog, listings, and linked inventory.',
          ],
        },
        {
          kind: 'h3',
          text: 'What we do not request or store',
        },
        {
          kind: 'ul',
          items: [
            'Buyer data: name, email, phone, shipping address.',
            'Customer profiles or messaging with personal data.',
          ],
        },
      ],
    },
    {
      id: 'mercadolibre-ads',
      title: 'Mercado Libre Ads',
      blocks: [
        {
          kind: 'p',
          text: 'You connect the advertiser\'s Mercado Libre Ads account for measurement: spend, campaign performance, and the metrics needed for ROAS next to the P&L. Read-only; we do not operate campaigns or buy media.',
        },
        {
          kind: 'ul',
          items: [
            'Campaign and ad-spend metrics (no buyer PII).',
            'Used only for profitability reporting inside app.alenna.io.',
          ],
        },
      ],
    },
    {
      id: 'amazon',
      title: 'Amazon',
      blocks: [
        {
          kind: 'p',
          text: 'You connect your Amazon seller account via OAuth with Amazon Selling Partner API (SP-API). Alenna requests only the minimum seller analytics roles, with no access to buyer personal data:',
        },
        {
          kind: 'ul',
          items: [
            'Orders — amounts, dates, statuses, fees, and line items (no buyer data).',
            'Finances — fees, refunds, and settlement metrics for profitability reports.',
            'Inventory and catalog — SKUs, quantities, and availability for alerts and analysis.',
          ],
        },
        {
          kind: 'h3',
          text: 'What we do not request or store',
        },
        {
          kind: 'ul',
          items: [
            'SP-API roles that expose buyer PII (name, address, email, phone).',
            'Restricted Data Token (RDT) or order personal data flows.',
            'End-customer identification data from Amazon.',
          ],
        },
        {
          kind: 'p',
          text: 'Data use follows our Privacy Policy at alenna.io/privacidad and Amazon\'s Data Protection Policy requirements.',
        },
      ],
    },
    {
      id: 'amazon-ads',
      title: 'Amazon Ads',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna provides advertising measurement for other advertisers. We are working on Amazon Ads API (Sponsored Products, Sponsored Brands, and Sponsored Display) to report spend, clicks, attributed sales, ROAS, and TACoS next to the P&L, subject to partner access. Service details: alenna.io/amazon-ads.',
        },
        {
          kind: 'ul',
          items: [
            'Campaign measurement for the advertiser — we do not buy media or manage campaigns.',
            'Mercado Libre Ads already connects; Amazon Ads, Google Ads, and Meta Ads are being added to the same dashboard.',
            'No Amazon DSP, Amazon Attribution, or Amazon Marketing Cloud in this phase.',
          ],
        },
        {
          kind: 'h3',
          text: 'What we do not request or store',
        },
        {
          kind: 'ul',
          items: [
            'We do not operate campaigns or write budgets or creatives in the advertiser account.',
            'We do not store end-buyer PII through Amazon Ads.',
          ],
        },
      ],
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      blocks: [
        {
          kind: 'p',
          text: 'We are working to connect Google Ads and measure spend and performance in the same P&L, read-only. We do not operate campaigns.',
        },
      ],
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      blocks: [
        {
          kind: 'p',
          text: 'We are working to connect Meta Ads and measure spend and performance in the same P&L, read-only. We do not operate campaigns.',
        },
      ],
    },
    {
      title: 'Contact',
      blocks: [
        {
          kind: 'p',
          text: 'For questions about permissions or data: contacto@alenna.io (general) or privacidad@alenna.io (privacy and data rights).',
        },
      ],
    },
  ],
}

const INTEGRATIONS_CONTENT: Record<Language, LegalPageContent> = {
  es: INTEGRATIONS_ES,
  en: INTEGRATIONS_EN,
}

export function integrationsContent(lang: Language): LegalPageContent {
  return INTEGRATIONS_CONTENT[lang]
}

export const INTEGRATIONS_PATH = '/integraciones'
