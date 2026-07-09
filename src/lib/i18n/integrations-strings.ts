import type { Language } from '@/providers/language-provider'
import type { LegalPageContent } from '@/lib/i18n/legal-types'

const INTEGRATIONS_ES: LegalPageContent = {
  metaTitle: 'Integraciones — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Integraciones y permisos',
  updated: 'Última actualización: 9 de julio de 2026',
  intro:
    'Alenna conecta tus canales de venta mediante OAuth para sincronizar datos comerciales y mostrarte métricas de margen, inventario y rentabilidad. Seguimos un enfoque metrics-only: no almacenamos datos personales de compradores (nombres, correos, teléfonos ni direcciones). Para el tratamiento completo de datos, consulta alenna.io/privacidad.',
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
      title: 'Shopify (disponible)',
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
      title: 'Mercado Libre (disponible)',
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
      title: 'Amazon (próximamente)',
      blocks: [
        {
          kind: 'p',
          text: 'La integración con Amazon Selling Partner API (SP-API) está en desarrollo. Alenna solicitará únicamente los roles mínimos para analytics de seller, sin acceso a datos personales de compradores:',
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
          text: 'Qué no planeamos solicitar ni guardar',
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
          text: 'Esta integración se anunciará en alenna.io cuando esté disponible. El uso de datos seguirá nuestra Política de Privacidad en alenna.io/privacidad y los requisitos de la Data Protection Policy de Amazon.',
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
  updated: 'Last updated: July 9, 2026',
  intro:
    'Alenna connects your sales channels via OAuth to sync commercial data and show margin, inventory, and profitability metrics. We follow a metrics-only approach: we do not store buyer personal data (names, emails, phones, or addresses). For full data processing details, see alenna.io/privacidad.',
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
      title: 'Shopify (available)',
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
      title: 'Mercado Libre (available)',
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
      title: 'Amazon (coming soon)',
      blocks: [
        {
          kind: 'p',
          text: 'Integration with Amazon Selling Partner API (SP-API) is in development. Alenna will request only the minimum seller analytics roles, with no access to buyer personal data:',
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
          text: 'What we do not plan to request or store',
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
          text: 'This integration will be announced on alenna.io when available. Data use will follow our Privacy Policy at alenna.io/privacidad and Amazon\'s Data Protection Policy requirements.',
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
