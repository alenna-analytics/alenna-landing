import type { Language } from '@/providers/language-provider'

export type PrivacyBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }

export type PrivacySection = {
  title: string
  blocks: PrivacyBlock[]
}

export type PrivacyContent = {
  metaTitle: string
  brandLabel: string
  title: string
  updated: string
  intro: string
  sections: PrivacySection[]
}

const PRIVACY_ES: PrivacyContent = {
  metaTitle: 'Política de Privacidad — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Política de Privacidad',
  updated: 'Última actualización: 8 de julio de 2026',
  intro:
    'Alenna Analytics ("Alenna", "nosotros") es una plataforma de inteligencia comercial para ecommerce, disponible en alenna.io y operada por Sergio Garnica González. Esta Política de Privacidad describe qué datos recopilamos, cuáles no almacenamos, cómo los tratamos, con quién los compartimos y cuáles son tus derechos. Al crear una cuenta o usar nuestros servicios, aceptas las prácticas descritas en este documento.',
  sections: [
    {
      title: '1. Responsable del tratamiento',
      blocks: [
        { kind: 'p', text: 'El responsable del tratamiento de tus datos personales es:' },
        {
          kind: 'ul',
          items: [
            'Nombre: Sergio Garnica González',
            'Nombre comercial: Alenna Analytics',
            'RFC: GAGS010219FW2',
            'Domicilio: Querétaro, México',
            'Correo de privacidad: privacidad@alenna.io',
            'Contacto general: contacto@alenna.io',
          ],
        },
      ],
    },
    {
      title: '2. Datos que recopilamos',
      blocks: [
        { kind: 'h3', text: '2.1 Datos de tu cuenta en Alenna' },
        { kind: 'p', text: 'Cuando te registras y usas Alenna, tratamos:' },
        {
          kind: 'ul',
          items: [
            'Nombre y correo electrónico (gestionados a través de Clerk, nuestro proveedor de autenticación).',
            'Nombre de tu empresa o espacio de trabajo, si lo proporcionas.',
            'Rol y membresía en el espacio de trabajo (tenant).',
            'Preferencias de la cuenta (por ejemplo, moneda de visualización).',
            'Si contratas un plan de pago: identificadores de facturación y estado de suscripción a través de nuestro proveedor de pagos. No almacenamos números de tarjeta.',
          ],
        },
        {
          kind: 'p',
          text: 'Las contraseñas y el inicio de sesión los gestiona Clerk. Alenna no almacena contraseñas en texto plano ni hashes de contraseña en sus propios servidores.',
        },
        { kind: 'h3', text: '2.2 Datos comerciales de tus canales conectados' },
        {
          kind: 'p',
          text: 'Al conectar Shopify o Mercado Libre, sincronizamos únicamente datos comerciales y de catálogo necesarios para reportes, métricas e inventario, conforme a los permisos que tú autorizas:',
        },
        {
          kind: 'ul',
          items: [
            'Pedidos: identificadores, fechas, estados, montos, comisiones, impuestos, descuentos, envío (como monto), líneas de producto (SKU, cantidad, precios).',
            'Productos y catálogo: títulos, SKUs, variantes, precios, imágenes de producto, existencias.',
            'Métricas y agregados derivados (por ejemplo, ventas por día, margen, alertas de inventario).',
            'Metadatos de integración: dominio de tienda, identificadores de cuenta en la plataforma, estado de sincronización y tokens de acceso cifrados.',
          ],
        },
        { kind: 'h3', text: '2.3 Datos técnicos y de operación' },
        { kind: 'p', text: 'Para operar el servicio de forma segura recopilamos de forma limitada:' },
        {
          kind: 'ul',
          items: [
            'Registros técnicos (logs) de la API y trabajos de sincronización, sin incluir tokens ni cuerpos completos de respuestas de marketplace.',
            'Datos de sesión y cookies estrictamente necesarias para autenticación (ver Sección 9).',
            'Información técnica que tu navegador envía de forma habitual (tipo de agente, dirección IP) en las solicitudes a nuestros servicios.',
          ],
        },
      ],
    },
    {
      title: '3. Datos que no almacenamos',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna adopta un enfoque de minimización de datos (metrics-only). No persistimos en base de datos, copias de seguridad ni logs los siguientes datos de compradores o clientes finales de tus tiendas:',
        },
        {
          kind: 'ul',
          items: [
            'Nombres, correos electrónicos, teléfonos o direcciones de compradores.',
            'Perfiles de buyer/customer, documentos de identidad o datos de pago de terceros.',
            'Direcciones de envío o facturación de clientes finales.',
            'Blobs completos de respuestas de API que contengan información personal identificable.',
          ],
        },
        {
          kind: 'p',
          text: 'Durante una sincronización, las APIs de Shopify o Mercado Libre pueden devolver temporalmente información adicional en memoria. Esa información se descarta antes de guardar datos en nuestra base de datos; solo persistimos los campos comerciales descritos en la Sección 2.2.',
        },
      ],
    },
    {
      title: '4. Finalidades del tratamiento',
      blocks: [
        { kind: 'p', text: 'Utilizamos los datos para:' },
        {
          kind: 'ul',
          items: [
            'Prestar el servicio: sincronizar, procesar y mostrar métricas, reportes, dashboards y alertas de tu operación.',
            'Gestionar tu cuenta: autenticación, soporte, facturación de planes de pago y comunicaciones del servicio.',
            'Mantener la seguridad: detectar errores, abusos y proteger credenciales de integración.',
            'Cumplir obligaciones legales aplicables.',
          ],
        },
        {
          kind: 'p',
          text: 'No vendemos, alquilamos ni comercializamos tus datos personales ni los datos comerciales de tu negocio a terceros.',
        },
      ],
    },
    {
      title: '5. Base legal del tratamiento',
      blocks: [
        { kind: 'p', text: 'Tratamos tus datos con base en:' },
        {
          kind: 'ul',
          items: [
            'Ejecución del contrato: para prestarte el servicio conforme a los Términos y Condiciones.',
            'Interés legítimo: seguridad, prevención de fraude y mejora operativa del servicio.',
            'Consentimiento: cuando la ley lo exija para comunicaciones opcionales.',
            'Obligación legal: cuando debamos conservar o divulgar información por mandato legal.',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna opera bajo la legislación mexicana (LFPDPPP). Si procesas datos sujetos a otras jurisdicciones (por ejemplo, GDPR o CCPA), aplican los derechos reconocidos en la Sección 11.',
        },
      ],
    },
    {
      title: '6. Compartición con terceros',
      blocks: [
        { kind: 'p', text: 'No vendemos datos. Compartimos información solo en estos casos:' },
        { kind: 'h3', text: '6.1 Proveedores de servicios (encargados)' },
        {
          kind: 'p',
          text: 'Contratamos proveedores que nos ayudan a operar la plataforma, bajo obligaciones de confidencialidad:',
        },
        {
          kind: 'ul',
          items: [
            'Clerk — autenticación e identidad de usuarios.',
            'Supabase — base de datos (PostgreSQL).',
            'Fly.io — alojamiento de la API y trabajos de sincronización.',
            'Vercel — alojamiento del sitio web y panel de usuario.',
            'Proveedor de pagos — facturación de suscripciones, cuando contrates un plan de pago.',
          ],
        },
        { kind: 'h3', text: '6.2 Plataformas que tú conectas' },
        {
          kind: 'p',
          text: 'Cuando conectas Shopify o Mercado Libre, Alenna lee datos conforme a los permisos OAuth que otorgas. Puedes desconectar la integración en cualquier momento desde tu panel; al hacerlo, eliminamos los tokens de acceso almacenados.',
        },
        { kind: 'h3', text: '6.3 Requerimientos legales' },
        {
          kind: 'p',
          text: 'Podemos divulgar datos cuando una ley, autoridad competente u orden judicial lo exija, o para proteger derechos y seguridad de Alenna y sus usuarios.',
        },
      ],
    },
    {
      title: '7. Transferencias internacionales',
      blocks: [
        {
          kind: 'p',
          text: 'Algunos proveedores (Clerk, Supabase, Fly.io, Vercel) pueden procesar datos en Estados Unidos u otros países. Cuando esto ocurre, nos apoyamos en las salvaguardas contractuales y de seguridad que ofrecen dichos proveedores, y en las bases legales aplicables bajo la LFPDPPP.',
        },
      ],
    },
    {
      title: '8. Plazos de conservación',
      blocks: [
        {
          kind: 'p',
          text: 'Conservamos cada categoría de datos solo el tiempo necesario para las finalidades descritas:',
        },
        {
          kind: 'ul',
          items: [
            'Datos de cuenta (perfil, email, configuración del espacio de trabajo): mientras tu cuenta esté activa.',
            'Datos comerciales sincronizados (pedidos, catálogo, métricas): mientras tu cuenta esté activa, para que puedas consultar el historial completo de tu operación en la plataforma. Solo se eliminan si cancelas tu cuenta o nos lo solicitas expresamente.',
            'Tokens de integración (OAuth): mientras la conexión esté activa; se eliminan al desconectar la integración.',
            'Registros técnicos y de seguridad: hasta 12 meses, o el plazo que imponga el proveedor de infraestructura.',
            'Datos de facturación: el plazo que exija la legislación fiscal aplicable (hasta 5 años en México, cuando corresponda).',
          ],
        },
        {
          kind: 'h3',
          text: 'Eliminación de cuenta',
        },
        {
          kind: 'p',
          text: 'Si solicitas la eliminación de tu cuenta en privacidad@alenna.io, marcaremos tu cuenta para baja. Transcurridos 90 días desde la solicitud verificada, eliminaremos o anonimizaremos de forma definitiva tus datos personales y los datos comerciales asociados a tu espacio de trabajo. Este plazo permite recuperar la cuenta en caso de cancelación accidental. Si prefieres una eliminación antes de esos 90 días, indícalo expresamente en tu solicitud y la procesaremos en un plazo máximo de 30 días hábiles tras verificar tu identidad.',
        },
        {
          kind: 'p',
          text: 'Las copias en respaldo se purgarán en un plazo adicional de hasta 30 días después de la eliminación definitiva. Los datos que debamos conservar por obligación legal (por ejemplo, registros fiscales) se mantendrán bloqueados únicamente para ese fin.',
        },
        {
          kind: 'p',
          text: 'Desconectar una integración (Shopify o Mercado Libre) no elimina por sí sola el historial de pedidos ya importado; elimina los tokens de acceso. Puedes solicitar la eliminación de datos históricos en el mismo correo de privacidad.',
        },
      ],
    },
    {
      title: '9. Cookies y tecnologías similares',
      blocks: [
        {
          kind: 'p',
          text: 'Utilizamos cookies y almacenamiento local estrictamente necesarios para:',
        },
        {
          kind: 'ul',
          items: [
            'Mantener tu sesión autenticada (Clerk).',
            'Recordar preferencias básicas como idioma.',
          ],
        },
        {
          kind: 'p',
          text: 'No utilizamos cookies de publicidad ni de seguimiento de terceros en el panel. Si en el futuro incorporamos analítica opcional, actualizaremos esta política y solicitaremos tu consentimiento cuando la ley lo requiera.',
        },
      ],
    },
    {
      title: '10. Medidas de seguridad',
      blocks: [
        {
          kind: 'p',
          text: 'Aplicamos medidas técnicas y organizativas razonables, incluyendo:',
        },
        {
          kind: 'ul',
          items: [
            'Cifrado en tránsito (HTTPS/TLS) en todas las comunicaciones.',
            'Cifrado de tokens de integración almacenados (Fernet).',
            'Aislamiento de datos por espacio de trabajo (tenant) en la base de datos.',
            'Acceso restringido a infraestructura y secretos de producción.',
            'Autenticación de dos factores (2FA): estará disponible para las cuentas de usuario; te notificaremos cuando se active en la plataforma.',
          ],
        },
        {
          kind: 'p',
          text: 'Si detectamos una violación de seguridad que afecte tus datos personales, te notificaremos en un plazo razonable y, cuando la ley lo exija, a las autoridades competentes.',
        },
      ],
    },
    {
      title: '11. Tus derechos',
      blocks: [
        { kind: 'p', text: 'Puedes ejercer los siguientes derechos respecto a tus datos personales:' },
        {
          kind: 'ul',
          items: [
            'Acceso: conocer qué datos tratamos sobre ti.',
            'Rectificación: corregir datos inexactos.',
            'Cancelación / supresión: solicitar la eliminación cuando ya no sean necesarios.',
            'Oposición: oponerte a ciertos tratamientos.',
            'Portabilidad: recibir tus datos en formato estructurado, cuando aplique.',
            'Revocación del consentimiento: cuando el tratamiento se base en consentimiento.',
          ],
        },
        {
          kind: 'p',
          text: 'Envía tu solicitud a privacidad@alenna.io indicando tu nombre, correo registrado y el derecho que deseas ejercer. Responderemos en un plazo máximo de 20 días hábiles (LFPDPPP). Podemos pedir verificación de identidad.',
        },
        {
          kind: 'p',
          text: 'Si consideras que el tratamiento no cumple la normativa, puedes acudir al INAI (México) o a la autoridad de protección de datos de tu país.',
        },
      ],
    },
    {
      title: '12. Menores de edad',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna está dirigido a personas mayores de 18 años que actúan como comerciantes o profesionales. No recopilamos conscientemente datos de menores.',
        },
      ],
    },
    {
      title: '13. Cambios a esta política',
      blocks: [
        {
          kind: 'p',
          text: 'Podemos actualizar esta política para reflejar cambios en el servicio o en la ley. Si los cambios son materiales, te notificaremos por correo o mediante un aviso en la plataforma con al menos 15 días de anticipación. La versión vigente estará siempre en alenna.io/privacidad.',
        },
      ],
    },
    {
      title: '14. Contacto',
      blocks: [
        { kind: 'p', text: 'Para consultas, solicitudes de derechos o reportes de privacidad:' },
        {
          kind: 'ul',
          items: [
            'Privacidad: privacidad@alenna.io',
            'General: contacto@alenna.io',
            'Sitio web: alenna.io',
          ],
        },
      ],
    },
  ],
}

const PRIVACY_EN: PrivacyContent = {
  metaTitle: 'Privacy Policy — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Privacy Policy',
  updated: 'Last updated: July 8, 2026',
  intro:
    'Alenna Analytics ("Alenna", "we") is a commerce intelligence platform for ecommerce, available at alenna.io and operated by Sergio Garnica González. This Privacy Policy describes what data we collect, what we do not store, how we process it, who we share it with, and your rights. By creating an account or using our services, you accept the practices described in this document.',
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        { kind: 'p', text: 'The data controller for your personal data is:' },
        {
          kind: 'ul',
          items: [
            'Name: Sergio Garnica González',
            'Trade name: Alenna Analytics',
            'Tax ID (RFC): GAGS010219FW2',
            'Address: Querétaro, Mexico',
            'Privacy email: privacidad@alenna.io',
            'General contact: contacto@alenna.io',
          ],
        },
      ],
    },
    {
      title: '2. Data we collect',
      blocks: [
        { kind: 'h3', text: '2.1 Your Alenna account data' },
        { kind: 'p', text: 'When you register and use Alenna, we process:' },
        {
          kind: 'ul',
          items: [
            'Name and email address (managed through Clerk, our authentication provider).',
            'Company or workspace name, if you provide it.',
            'Role and workspace (tenant) membership.',
            'Account preferences (e.g. display currency).',
            'If you subscribe to a paid plan: billing identifiers and subscription status through our payment provider. We do not store card numbers.',
          ],
        },
        {
          kind: 'p',
          text: 'Passwords and sign-in are managed by Clerk. Alenna does not store plaintext passwords or password hashes on its own servers.',
        },
        { kind: 'h3', text: '2.2 Commercial data from your connected channels' },
        {
          kind: 'p',
          text: 'When you connect Shopify or Mercado Libre, we sync only commercial and catalog data needed for reports, metrics, and inventory, according to the permissions you authorize:',
        },
        {
          kind: 'ul',
          items: [
            'Orders: identifiers, dates, statuses, amounts, fees, taxes, discounts, shipping (as an amount), line items (SKU, quantity, prices).',
            'Products and catalog: titles, SKUs, variants, prices, product images, stock levels.',
            'Derived metrics and aggregates (e.g. daily sales, margin, inventory alerts).',
            'Integration metadata: shop domain, platform account identifiers, sync status, and encrypted access tokens.',
          ],
        },
        { kind: 'h3', text: '2.3 Technical and operational data' },
        { kind: 'p', text: 'To operate the service securely we collect on a limited basis:' },
        {
          kind: 'ul',
          items: [
            'Technical logs from the API and sync jobs, without tokens or full marketplace API response bodies.',
            'Session data and strictly necessary cookies for authentication (see Section 9).',
            'Technical information your browser routinely sends (user agent, IP address) in requests to our services.',
          ],
        },
      ],
    },
    {
      title: '3. Data we do not store',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna follows a data-minimization approach (metrics-only). We do not persist in our database, backups, or logs the following data about your store\'s buyers or end customers:',
        },
        {
          kind: 'ul',
          items: [
            'Buyer names, email addresses, phone numbers, or addresses.',
            'Buyer/customer profiles, identity documents, or third-party payment data.',
            'End-customer shipping or billing addresses.',
            'Full API response blobs containing personally identifiable information.',
          ],
        },
        {
          kind: 'p',
          text: 'During a sync, Shopify or Mercado Libre APIs may temporarily return additional information in memory. That information is discarded before saving to our database; we only persist the commercial fields described in Section 2.2.',
        },
      ],
    },
    {
      title: '4. Purposes of processing',
      blocks: [
        { kind: 'p', text: 'We use data to:' },
        {
          kind: 'ul',
          items: [
            'Provide the service: sync, process, and display metrics, reports, dashboards, and alerts for your operation.',
            'Manage your account: authentication, support, paid-plan billing, and service communications.',
            'Maintain security: detect errors, abuse, and protect integration credentials.',
            'Comply with applicable legal obligations.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not sell, rent, or commercialize your personal data or your business data to third parties.',
        },
      ],
    },
    {
      title: '5. Legal basis for processing',
      blocks: [
        { kind: 'p', text: 'We process your data based on:' },
        {
          kind: 'ul',
          items: [
            'Contract performance: to provide the service under the Terms and Conditions.',
            'Legitimate interest: security, fraud prevention, and operational improvement.',
            'Consent: when required by law for optional communications.',
            'Legal obligation: when we must retain or disclose information by law.',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna operates under Mexican law (LFPDPPP). If you process data subject to other jurisdictions (e.g. GDPR or CCPA), the rights in Section 11 apply.',
        },
      ],
    },
    {
      title: '6. Sharing with third parties',
      blocks: [
        { kind: 'p', text: 'We do not sell data. We share information only in these cases:' },
        { kind: 'h3', text: '6.1 Service providers (processors)' },
        {
          kind: 'p',
          text: 'We use providers that help us operate the platform, under confidentiality obligations:',
        },
        {
          kind: 'ul',
          items: [
            'Clerk — user authentication and identity.',
            'Supabase — database (PostgreSQL).',
            'Fly.io — API hosting and sync workers.',
            'Vercel — website and dashboard hosting.',
            'Payment provider — subscription billing when you subscribe to a paid plan.',
          ],
        },
        { kind: 'h3', text: '6.2 Platforms you connect' },
        {
          kind: 'p',
          text: 'When you connect Shopify or Mercado Libre, Alenna reads data according to the OAuth permissions you grant. You can disconnect at any time from your dashboard; we then delete stored access tokens.',
        },
        { kind: 'h3', text: '6.3 Legal requirements' },
        {
          kind: 'p',
          text: 'We may disclose data when required by law, competent authority, or court order, or to protect the rights and safety of Alenna and its users.',
        },
      ],
    },
    {
      title: '7. International transfers',
      blocks: [
        {
          kind: 'p',
          text: 'Some providers (Clerk, Supabase, Fly.io, Vercel) may process data in the United States or other countries. When this occurs, we rely on contractual and security safeguards offered by those providers and applicable legal bases under LFPDPPP.',
        },
      ],
    },
    {
      title: '8. Retention periods',
      blocks: [
        {
          kind: 'p',
          text: 'We retain each category of data only as long as necessary for the purposes described:',
        },
        {
          kind: 'ul',
          items: [
            'Account data (profile, email, workspace settings): while your account is active.',
            'Synchronized commercial data (orders, catalog, metrics): while your account is active, so you can access your full operational history on the platform. Deleted only if you close your account or explicitly request deletion.',
            'Integration tokens (OAuth): while the connection is active; deleted when you disconnect.',
            'Technical and security logs: up to 12 months, or as required by the infrastructure provider.',
            'Billing data: as required by applicable tax law (up to 5 years in Mexico, when applicable).',
          ],
        },
        {
          kind: 'h3',
          text: 'Account deletion',
        },
        {
          kind: 'p',
          text: 'If you request account deletion at privacidad@alenna.io, we will mark your account for closure. After 90 days from your verified request, we will permanently delete or anonymize your personal data and commercial data associated with your workspace. This period allows account recovery in case of accidental cancellation. If you prefer deletion before those 90 days, state so explicitly in your request and we will process it within 30 business days after verifying your identity.',
        },
        {
          kind: 'p',
          text: 'Backup copies are purged within an additional 30 days after permanent deletion. Data we must retain by law (e.g. tax records) is kept blocked solely for that purpose.',
        },
        {
          kind: 'p',
          text: 'Disconnecting an integration (Shopify or Mercado Libre) does not by itself delete previously imported order history; it deletes access tokens. You can request deletion of historical data at the same privacy email.',
        },
      ],
    },
    {
      title: '9. Cookies and similar technologies',
      blocks: [
        {
          kind: 'p',
          text: 'We use cookies and local storage strictly necessary for:',
        },
        {
          kind: 'ul',
          items: [
            'Keeping you signed in (Clerk).',
            'Remembering basic preferences such as language.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not use third-party advertising or tracking cookies in the dashboard. If we add optional analytics in the future, we will update this policy and request consent when required by law.',
        },
      ],
    },
    {
      title: '10. Security measures',
      blocks: [
        {
          kind: 'p',
          text: 'We apply reasonable technical and organizational measures, including:',
        },
        {
          kind: 'ul',
          items: [
            'Encryption in transit (HTTPS/TLS) for all communications.',
            'Encryption of stored integration tokens (Fernet).',
            'Data isolation per workspace (tenant) in the database.',
            'Restricted access to production infrastructure and secrets.',
            'Two-factor authentication (2FA): will be available for user accounts; we will notify you when it is enabled on the platform.',
          ],
        },
        {
          kind: 'p',
          text: 'If we detect a security breach affecting your personal data, we will notify you within a reasonable time and, when required by law, the competent authorities.',
        },
      ],
    },
    {
      title: '11. Your rights',
      blocks: [
        { kind: 'p', text: 'You may exercise the following rights regarding your personal data:' },
        {
          kind: 'ul',
          items: [
            'Access: know what data we process about you.',
            'Rectification: correct inaccurate data.',
            'Erasure: request deletion when data is no longer necessary.',
            'Objection: object to certain processing.',
            'Portability: receive your data in a structured format, where applicable.',
            'Withdrawal of consent: when processing is based on consent.',
          ],
        },
        {
          kind: 'p',
          text: 'Send your request to privacidad@alenna.io with your name, registered email, and the right you wish to exercise. We will respond within 20 business days (LFPDPPP). We may request identity verification.',
        },
        {
          kind: 'p',
          text: 'If you believe processing does not comply with regulations, you may contact INAI (Mexico) or the data protection authority in your country.',
        },
      ],
    },
    {
      title: '12. Minors',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna is intended for persons over 18 acting as merchants or professionals. We do not knowingly collect data from minors.',
        },
      ],
    },
    {
      title: '13. Changes to this policy',
      blocks: [
        {
          kind: 'p',
          text: 'We may update this policy to reflect changes in the service or the law. If changes are material, we will notify you by email or through a notice on the platform at least 15 days in advance. The current version will always be at alenna.io/privacidad.',
        },
      ],
    },
    {
      title: '14. Contact',
      blocks: [
        { kind: 'p', text: 'For inquiries, rights requests, or privacy reports:' },
        {
          kind: 'ul',
          items: [
            'Privacy: privacidad@alenna.io',
            'General: contacto@alenna.io',
            'Website: alenna.io',
          ],
        },
      ],
    },
  ],
}

const PRIVACY_CONTENT: Record<Language, PrivacyContent> = {
  es: PRIVACY_ES,
  en: PRIVACY_EN,
}

export function privacyContent(lang: Language): PrivacyContent {
  return PRIVACY_CONTENT[lang]
}

export const PRIVACY_PATH = '/privacidad'
