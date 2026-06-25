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
  updated: 'Última actualización: 25 de junio de 2026',
  intro:
    'Alenna Analytics ("Alenna", "nosotros", "nuestro") opera la plataforma de inteligencia comercial para ecommerce disponible en alenna.io. Esta Política de Privacidad describe qué datos personales y comerciales recopilamos, cómo los tratamos, con quién los compartimos y cuáles son tus derechos. Al crear una cuenta o usar nuestros servicios, aceptas las prácticas descritas en este documento.',
  sections: [
    {
      title: '1. Responsable del tratamiento',
      blocks: [
        { kind: 'p', text: 'El responsable del tratamiento de datos personales es:' },
        {
          kind: 'ul',
          items: [
            'Nombre: Alenna Analytics, S.A. de C.V.',
            'Domicilio: México',
            'Correo de privacidad: privacidad@alenna.io',
            'Contacto general: contacto@alenna.io',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna actúa como encargada del tratamiento de los datos de tus clientes finales (datos de pedidos, compradores, etc.) que son incorporados a la plataforma a través de las integraciones que tú autorizas. Tú, como titular de la tienda, eres el responsable de dichos datos frente a tus propios usuarios.',
        },
      ],
    },
    {
      title: '2. Datos que recopilamos',
      blocks: [
        { kind: 'h3', text: '2.1 Datos de cuenta' },
        { kind: 'p', text: 'Al registrarte en Alenna recopilamos:' },
        {
          kind: 'ul',
          items: [
            'Nombre completo y nombre de empresa',
            'Correo electrónico y contraseña (almacenada con hash)',
            'País o región',
            'Información de facturación y método de pago (procesada por nuestros proveedores de pago certificados PCI-DSS; no almacenamos datos de tarjeta)',
          ],
        },
        { kind: 'h3', text: '2.2 Datos comerciales de tus canales conectados' },
        {
          kind: 'p',
          text: 'Al conectar tus canales de venta, Alenna accede a los datos que cada plataforma pone a disposición a través de su API, conforme a los permisos que tú otorgas:',
        },
        {
          kind: 'ul',
          items: [
            'Plataformas de ecommerce (Shopify, Amazon, Mercado Libre): pedidos, productos, inventario, precios, reseñas, datos de envío, métricas de tienda y configuraciones de integración.',
            'Plataformas de publicidad (Google Ads, Meta Ads y similares): campañas, grupos de anuncios, métricas de gasto, impresiones, clics, conversiones y segmentos de audiencia agregados.',
            'Datos de clientes finales: nombre, correo electrónico, dirección de envío y datos de transacción que forman parte de los pedidos sincronizados. Estos datos se tratan exclusivamente para generar reportes y métricas dentro de tu cuenta; no son utilizados para fines propios de Alenna.',
          ],
        },
        { kind: 'h3', text: '2.3 Datos técnicos y de uso' },
        { kind: 'p', text: 'Para operar y mejorar la plataforma recopilamos:' },
        {
          kind: 'ul',
          items: [
            'Dirección IP y geolocalización aproximada',
            'Tipo de navegador, sistema operativo y dispositivo',
            'Páginas visitadas, funcionalidades utilizadas y tiempos de sesión',
            'Registros de actividad (logs) y trazas de error',
            'Cookies y tecnologías similares (ver Sección 8)',
          ],
        },
      ],
    },
    {
      title: '3. Finalidades del tratamiento',
      blocks: [
        { kind: 'p', text: 'Utilizamos los datos para las siguientes finalidades:' },
        {
          kind: 'ul',
          items: [
            'Prestación del servicio: sincronizar, procesar y unificar datos de tus canales; generar reportes, dashboards y métricas; ejecutar alertas y automatizaciones configuradas por ti.',
            'Gestión de cuenta y soporte: autenticación, facturación, atención de solicitudes y resolución de incidencias.',
            'Mejora de la plataforma: análisis de uso agregado y anonimizado para desarrollar nuevas funcionalidades, corregir errores y optimizar el rendimiento.',
            'Comunicaciones de servicio: notificaciones transaccionales, alertas de integración, cambios en términos y avisos de seguridad.',
            'Comunicaciones de marketing: novedades, actualizaciones de producto y contenido educativo, únicamente si nos otorgas tu consentimiento explícito o si existe una relación comercial previa que lo permita bajo la ley aplicable. Puedes darte de baja en cualquier momento.',
            'Cumplimiento legal: atender requerimientos de autoridades competentes, prevenir fraude y cumplir obligaciones fiscales y regulatorias.',
          ],
        },
        {
          kind: 'p',
          text: 'No vendemos, alquilamos ni comercializamos tus datos personales ni los datos de tu negocio a terceros.',
        },
      ],
    },
    {
      title: '4. Base legal del tratamiento',
      blocks: [
        { kind: 'p', text: 'Tratamos tus datos con base en alguno de los siguientes fundamentos legales:' },
        {
          kind: 'ul',
          items: [
            'Ejecución del contrato: el tratamiento es necesario para prestarte el servicio conforme a los Términos y Condiciones que aceptaste.',
            'Consentimiento: para comunicaciones de marketing y cualquier tratamiento opcional que no sea estrictamente necesario para el servicio. Puedes revocar tu consentimiento en cualquier momento sin que ello afecte la legalidad del tratamiento previo.',
            'Interés legítimo: para mejorar la plataforma, garantizar la seguridad, prevenir el fraude y mantener la integridad del servicio, siempre que dichos intereses no prevalezcan sobre tus derechos fundamentales.',
            'Obligación legal: cuando la ley aplicable nos exige conservar o divulgar ciertos datos.',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna opera principalmente bajo la legislación mexicana (Ley Federal de Protección de Datos Personales en Posesión de los Particulares, LFPDPPP) y, en la medida en que trates datos de usuarios en otras jurisdicciones, cumplimos con los marcos aplicables incluyendo el GDPR de la Unión Europea y la CCPA de California.',
        },
      ],
    },
    {
      title: '5. Compartición de datos con terceros',
      blocks: [
        { kind: 'p', text: 'Alenna no vende datos. Podemos compartir información en los siguientes supuestos:' },
        { kind: 'h3', text: '5.1 Proveedores de servicios (encargados de tratamiento)' },
        {
          kind: 'p',
          text: 'Contratamos proveedores que nos ayudan a operar la plataforma bajo acuerdos de procesamiento de datos y obligaciones de confidencialidad. Categorías principales:',
        },
        {
          kind: 'ul',
          items: [
            'Infraestructura cloud y almacenamiento (AWS)',
            'Autenticación e identidad',
            'Procesamiento de pagos (certificados PCI-DSS)',
            'Herramientas de soporte y comunicación (email transaccional, chat de soporte)',
            'Analítica de producto (datos agregados y/o anonimizados)',
            'Monitoreo de errores e infraestructura',
          ],
        },
        { kind: 'h3', text: '5.2 Plataformas que tú autorizas (integraciones)' },
        {
          kind: 'p',
          text: 'Cuando conectas una integración (Shopify, Amazon, Mercado Libre, Google Ads, Meta Ads u otras), Alenna actúa como intermediario para leer y escribir datos conforme a los permisos que tú otorgas en cada plataforma. Tú controlas qué integraciones activar y desactivar desde tu panel de configuración.',
        },
        { kind: 'h3', text: '5.3 Requerimientos legales y protección de derechos' },
        {
          kind: 'p',
          text: 'Podemos divulgar datos cuando sea requerido por ley, orden judicial o autoridad competente; para proteger los derechos, propiedad o seguridad de Alenna, sus usuarios o el público; o para prevenir actividades ilegales o fraude.',
        },
        { kind: 'h3', text: '5.4 Reorganización corporativa' },
        {
          kind: 'p',
          text: 'En caso de fusión, adquisición, escisión o venta de activos, los datos podrán ser transferidos al adquirente, quien estará sujeto a compromisos de privacidad al menos equivalentes a los de esta política. Te notificaremos previamente.',
        },
      ],
    },
    {
      title: '6. Transferencias internacionales de datos',
      blocks: [
        {
          kind: 'p',
          text: 'Algunos de nuestros proveedores (en particular infraestructura cloud y herramientas SaaS) procesan datos fuera de México. Cuando esto ocurre, aplicamos salvaguardas adecuadas, incluyendo cláusulas contractuales estándar, certificaciones equivalentes o el consentimiento expreso del titular, según lo exija la legislación aplicable. Los datos de usuarios en la Unión Europea se transfieren únicamente a países con nivel de protección adecuado o bajo cláusulas tipo aprobadas por la Comisión Europea.',
        },
      ],
    },
    {
      title: '7. Plazos de conservación',
      blocks: [
        { kind: 'p', text: 'Conservamos los datos únicamente durante el tiempo necesario para las finalidades descritas:' },
        {
          kind: 'ul',
          items: [
            'Datos de cuenta activa: durante toda la vida de tu suscripción.',
            'Datos comerciales sincronizados: según la ventana histórica configurada en tu plan (por defecto hasta 24 meses de historial).',
            'Tras cancelar la cuenta: conservamos los datos durante 90 días para permitir la recuperación en caso de cancelación accidental. Transcurrido ese plazo procedemos a la eliminación o anonimización, salvo que la ley exija conservación por más tiempo (p. ej. registros fiscales: 5 años en México).',
            'Logs de seguridad: hasta 12 meses.',
            'Copias de respaldo (backups): eliminadas dentro de los 30 días siguientes a la eliminación de los datos originales.',
          ],
        },
      ],
    },
    {
      title: '8. Cookies y tecnologías similares',
      blocks: [
        { kind: 'p', text: 'Alenna utiliza cookies propias y de terceros para:' },
        {
          kind: 'ul',
          items: [
            'Cookies estrictamente necesarias: autenticación y seguridad de sesión. No requieren consentimiento.',
            'Cookies de preferencias: idioma, zona horaria y configuración de la interfaz.',
            'Cookies analíticas: medición de uso de la plataforma con fines de mejora (datos agregados). Requieren tu consentimiento.',
          ],
        },
        {
          kind: 'p',
          text: 'Puedes gestionar tus preferencias de cookies desde el banner al ingresar a la plataforma o en cualquier momento desde Configuración > Privacidad. El rechazo de cookies no esenciales no afecta la funcionalidad principal del servicio.',
        },
      ],
    },
    {
      title: '9. Medidas de seguridad',
      blocks: [
        {
          kind: 'p',
          text: 'Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos contra acceso no autorizado, pérdida, alteración o divulgación:',
        },
        {
          kind: 'ul',
          items: [
            'Cifrado en tránsito mediante TLS 1.2+ para todas las comunicaciones',
            'Cifrado en reposo de datos sensibles almacenados',
            'Control de acceso basado en roles (RBAC) con principio de mínimo privilegio',
            'Autenticación de dos factores (2FA) disponible para todas las cuentas',
            'Auditorías de seguridad y pruebas de penetración periódicas',
            'Monitoreo continuo de accesos y alertas ante comportamientos anómalos',
            'Plan de respuesta a incidentes con procedimiento de notificación a usuarios y autoridades',
          ],
        },
        {
          kind: 'p',
          text: 'En caso de brecha de seguridad que afecte tus datos, te notificaremos dentro de las 72 horas siguientes a su detección (o el plazo exigido por la ley aplicable), describiendo la naturaleza del incidente, las categorías de datos afectados y las medidas adoptadas.',
        },
      ],
    },
    {
      title: '10. Tus derechos',
      blocks: [
        { kind: 'p', text: 'Dependiendo de tu jurisdicción, puedes ejercer los siguientes derechos:' },
        {
          kind: 'ul',
          items: [
            'Acceso: conocer qué datos personales tratamos sobre ti.',
            'Rectificación: corregir datos inexactos o incompletos.',
            'Cancelación / Supresión (derecho al olvido): solicitar la eliminación de tus datos cuando ya no sean necesarios o hayas retirado el consentimiento.',
            'Oposición: oponerte al tratamiento de tus datos para determinadas finalidades (incluyendo marketing directo).',
            'Portabilidad: recibir tus datos en formato estructurado, de uso común y lectura mecánica, y transmitirlos a otro responsable.',
            'Limitación del tratamiento: solicitar que suspendamos el tratamiento de tus datos en ciertos supuestos.',
            'Revocación del consentimiento: retirar el consentimiento otorgado sin que ello afecte la licitud del tratamiento previo.',
          ],
        },
        {
          kind: 'p',
          text: 'Cómo ejercer tus derechos: envía tu solicitud a privacidad@alenna.io indicando tu nombre, correo registrado y el derecho que deseas ejercer. Responderemos dentro de los plazos legales aplicables (20 días hábiles bajo la LFPDPPP; 30 días bajo el GDPR). Es posible que solicitemos verificación de identidad antes de procesar tu solicitud.',
        },
        {
          kind: 'p',
          text: 'Si consideras que el tratamiento de tus datos no se ajusta a la normativa, tienes derecho a presentar una queja ante el INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales) en México, o ante la autoridad de protección de datos competente en tu país.',
        },
      ],
    },
    {
      title: '11. Datos de menores de edad',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna es un servicio dirigido exclusivamente a personas mayores de 18 años que actúan en calidad de comerciantes o profesionales. No recopilamos conscientemente datos personales de menores de edad. Si detectamos que hemos obtenido datos de un menor sin el consentimiento de su tutor legal, los eliminaremos de manera inmediata. Si tienes conocimiento de tal situación, contáctanos en privacidad@alenna.io.',
        },
      ],
    },
    {
      title: '12. Datos de los clientes de tu tienda (sub-encargo)',
      blocks: [
        { kind: 'p', text: 'Al sincronizar pedidos y datos de compradores desde tus canales de venta, Alenna accede a información personal de los clientes de tu tienda (nombres, correos, direcciones). En este contexto:' },
        {
          kind: 'ul',
          items: [
            'Alenna actúa como encargada del tratamiento, siguiendo tus instrucciones como responsable.',
            'Estos datos se procesan únicamente para prestarte el servicio de analítica; no los usamos para fines publicitarios propios ni los cedemos a terceros con fines comerciales.',
            'Eres responsable de informar a tus clientes que sus datos pueden ser procesados por herramientas de análisis como Alenna, y de obtener las bases legales necesarias para dicho tratamiento en tu jurisdicción.',
          ],
        },
        {
          kind: 'p',
          text: 'Suscribimos un Acuerdo de Procesamiento de Datos (DPA) con cualquier usuario que lo requiera por obligaciones regulatorias (p. ej. GDPR). Solicítalo en privacidad@alenna.io.',
        },
      ],
    },
    {
      title: '13. Cambios a esta política',
      blocks: [
        {
          kind: 'p',
          text: 'Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas, en la ley aplicable o en la plataforma. Cuando los cambios sean materiales, te notificaremos por correo electrónico y/o mediante un aviso destacado en la plataforma con al menos 15 días de anticipación. La versión vigente siempre estará disponible en alenna.io/privacidad con la fecha de última actualización.',
        },
      ],
    },
    {
      title: '14. Contacto',
      blocks: [
        {
          kind: 'p',
          text: 'Para cualquier consulta, solicitud de derechos o reporte de incidente relacionado con privacidad:',
        },
        {
          kind: 'ul',
          items: [
            'Correo de privacidad: privacidad@alenna.io',
            'Correo general: contacto@alenna.io',
            'Sitio web: alenna.io',
          ],
        },
        {
          kind: 'p',
          text: 'Nos comprometemos a atender tu solicitud con prontitud y transparencia.',
        },
      ],
    },
  ],
}

const PRIVACY_EN: PrivacyContent = {
  metaTitle: 'Privacy Policy — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Privacy Policy',
  updated: 'Last updated: June 25, 2026',
  intro:
    'Alenna Analytics ("Alenna", "we", "our") operates the commerce intelligence platform for ecommerce available at alenna.io. This Privacy Policy describes what personal and commercial data we collect, how we process it, who we share it with, and your rights. By creating an account or using our services, you accept the practices described in this document.',
  sections: [
    {
      title: '1. Data controller',
      blocks: [
        { kind: 'p', text: 'The data controller for personal data is:' },
        {
          kind: 'ul',
          items: [
            'Name: Alenna Analytics, S.A. de C.V.',
            'Address: Mexico',
            'Privacy email: privacidad@alenna.io',
            'General contact: contacto@alenna.io',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna acts as a data processor for your end customers\' data (order data, buyers, etc.) that is incorporated into the platform through the integrations you authorize. You, as the store owner, are the controller of that data vis-à-vis your own users.',
        },
      ],
    },
    {
      title: '2. Data we collect',
      blocks: [
        { kind: 'h3', text: '2.1 Account data' },
        { kind: 'p', text: 'When you register with Alenna we collect:' },
        {
          kind: 'ul',
          items: [
            'Full name and company name',
            'Email address and password (stored as a hash)',
            'Country or region',
            'Billing information and payment method (processed by our PCI-DSS certified payment providers; we do not store card data)',
          ],
        },
        { kind: 'h3', text: '2.2 Commercial data from your connected channels' },
        {
          kind: 'p',
          text: 'When you connect your sales channels, Alenna accesses data each platform makes available through its API, according to the permissions you grant:',
        },
        {
          kind: 'ul',
          items: [
            'Ecommerce platforms (Shopify, Amazon, Mercado Libre): orders, products, inventory, prices, reviews, shipping data, store metrics, and integration settings.',
            'Advertising platforms (Google Ads, Meta Ads, and similar): campaigns, ad groups, spend metrics, impressions, clicks, conversions, and aggregated audience segments.',
            'End customer data: name, email, shipping address, and transaction data that forms part of synchronized orders. This data is processed exclusively to generate reports and metrics within your account; it is not used for Alenna\'s own purposes.',
          ],
        },
        { kind: 'h3', text: '2.3 Technical and usage data' },
        { kind: 'p', text: 'To operate and improve the platform we collect:' },
        {
          kind: 'ul',
          items: [
            'IP address and approximate geolocation',
            'Browser type, operating system, and device',
            'Pages visited, features used, and session duration',
            'Activity logs and error traces',
            'Cookies and similar technologies (see Section 8)',
          ],
        },
      ],
    },
    {
      title: '3. Purposes of processing',
      blocks: [
        { kind: 'p', text: 'We use data for the following purposes:' },
        {
          kind: 'ul',
          items: [
            'Service delivery: sync, process, and unify data from your channels; generate reports, dashboards, and metrics; run alerts and automations you configure.',
            'Account management and support: authentication, billing, handling requests, and resolving incidents.',
            'Platform improvement: aggregated and anonymized usage analysis to develop new features, fix errors, and optimize performance.',
            'Service communications: transactional notifications, integration alerts, terms changes, and security notices.',
            'Marketing communications: product news, updates, and educational content, only if you give explicit consent or where applicable law allows based on a prior commercial relationship. You may unsubscribe at any time.',
            'Legal compliance: respond to competent authorities, prevent fraud, and meet tax and regulatory obligations.',
          ],
        },
        {
          kind: 'p',
          text: 'We do not sell, rent, or commercialize your personal data or your business data to third parties.',
        },
      ],
    },
    {
      title: '4. Legal basis for processing',
      blocks: [
        { kind: 'p', text: 'We process your data based on one or more of the following legal grounds:' },
        {
          kind: 'ul',
          items: [
            'Contract performance: processing is necessary to provide the service under the Terms and Conditions you accepted.',
            'Consent: for marketing communications and any optional processing not strictly necessary for the service. You may withdraw consent at any time without affecting the lawfulness of prior processing.',
            'Legitimate interest: to improve the platform, ensure security, prevent fraud, and maintain service integrity, provided such interests do not override your fundamental rights.',
            'Legal obligation: when applicable law requires us to retain or disclose certain data.',
          ],
        },
        {
          kind: 'p',
          text: 'Alenna primarily operates under Mexican law (Federal Law on Protection of Personal Data Held by Private Parties, LFPDPPP) and, to the extent you process data of users in other jurisdictions, we comply with applicable frameworks including the EU GDPR and California CCPA.',
        },
      ],
    },
    {
      title: '5. Sharing data with third parties',
      blocks: [
        { kind: 'p', text: 'Alenna does not sell data. We may share information in the following cases:' },
        { kind: 'h3', text: '5.1 Service providers (processors)' },
        {
          kind: 'p',
          text: 'We engage providers that help us operate the platform under data processing agreements and confidentiality obligations. Main categories:',
        },
        {
          kind: 'ul',
          items: [
            'Cloud infrastructure and storage (AWS)',
            'Authentication and identity',
            'Payment processing (PCI-DSS certified)',
            'Support and communication tools (transactional email, support chat)',
            'Product analytics (aggregated and/or anonymized data)',
            'Error and infrastructure monitoring',
          ],
        },
        { kind: 'h3', text: '5.2 Platforms you authorize (integrations)' },
        {
          kind: 'p',
          text: 'When you connect an integration (Shopify, Amazon, Mercado Libre, Google Ads, Meta Ads, or others), Alenna acts as an intermediary to read and write data according to the permissions you grant on each platform. You control which integrations to enable or disable from your settings panel.',
        },
        { kind: 'h3', text: '5.3 Legal requirements and protection of rights' },
        {
          kind: 'p',
          text: 'We may disclose data when required by law, court order, or competent authority; to protect the rights, property, or safety of Alenna, its users, or the public; or to prevent illegal activity or fraud.',
        },
        { kind: 'h3', text: '5.4 Corporate reorganization' },
        {
          kind: 'p',
          text: 'In the event of a merger, acquisition, spin-off, or asset sale, data may be transferred to the acquirer, who will be bound by privacy commitments at least equivalent to this policy. We will notify you in advance.',
        },
      ],
    },
    {
      title: '6. International data transfers',
      blocks: [
        {
          kind: 'p',
          text: 'Some of our providers (particularly cloud infrastructure and SaaS tools) process data outside Mexico. When this occurs, we apply appropriate safeguards, including standard contractual clauses, equivalent certifications, or the data subject\'s express consent, as required by applicable law. Data of users in the European Union is transferred only to countries with an adequate level of protection or under standard clauses approved by the European Commission.',
        },
      ],
    },
    {
      title: '7. Retention periods',
      blocks: [
        { kind: 'p', text: 'We retain data only as long as necessary for the purposes described:' },
        {
          kind: 'ul',
          items: [
            'Active account data: for the entire duration of your subscription.',
            'Synchronized commercial data: according to the historical window configured in your plan (by default up to 24 months of history).',
            'After account cancellation: we retain data for 90 days to allow recovery in case of accidental cancellation. After that period we delete or anonymize it, unless the law requires longer retention (e.g. tax records: 5 years in Mexico).',
            'Security logs: up to 12 months.',
            'Backup copies: deleted within 30 days of deletion of the original data.',
          ],
        },
      ],
    },
    {
      title: '8. Cookies and similar technologies',
      blocks: [
        { kind: 'p', text: 'Alenna uses first-party and third-party cookies for:' },
        {
          kind: 'ul',
          items: [
            'Strictly necessary cookies: authentication and session security. No consent required.',
            'Preference cookies: language, time zone, and interface settings.',
            'Analytics cookies: platform usage measurement for improvement (aggregated data). Require your consent.',
          ],
        },
        {
          kind: 'p',
          text: 'You can manage cookie preferences from the banner when entering the platform or at any time from Settings > Privacy. Rejecting non-essential cookies does not affect core service functionality.',
        },
      ],
    },
    {
      title: '9. Security measures',
      blocks: [
        {
          kind: 'p',
          text: 'We apply appropriate technical and organizational measures to protect data against unauthorized access, loss, alteration, or disclosure:',
        },
        {
          kind: 'ul',
          items: [
            'Encryption in transit via TLS 1.2+ for all communications',
            'Encryption at rest for stored sensitive data',
            'Role-based access control (RBAC) with least privilege',
            'Two-factor authentication (2FA) available for all accounts',
            'Periodic security audits and penetration testing',
            'Continuous access monitoring and alerts for anomalous behavior',
            'Incident response plan with notification procedures for users and authorities',
          ],
        },
        {
          kind: 'p',
          text: 'In the event of a security breach affecting your data, we will notify you within 72 hours of detection (or the period required by applicable law), describing the nature of the incident, categories of data affected, and measures taken.',
        },
      ],
    },
    {
      title: '10. Your rights',
      blocks: [
        { kind: 'p', text: 'Depending on your jurisdiction, you may exercise the following rights:' },
        {
          kind: 'ul',
          items: [
            'Access: know what personal data we process about you.',
            'Rectification: correct inaccurate or incomplete data.',
            'Erasure (right to be forgotten): request deletion when data is no longer necessary or you have withdrawn consent.',
            'Objection: object to processing for certain purposes (including direct marketing).',
            'Portability: receive your data in a structured, commonly used, machine-readable format and transmit it to another controller.',
            'Restriction of processing: request suspension of processing in certain cases.',
            'Withdrawal of consent: withdraw consent without affecting the lawfulness of prior processing.',
          ],
        },
        {
          kind: 'p',
          text: 'How to exercise your rights: send your request to privacidad@alenna.io with your name, registered email, and the right you wish to exercise. We will respond within applicable legal timeframes (20 business days under LFPDPPP; 30 days under GDPR). We may request identity verification before processing your request.',
        },
        {
          kind: 'p',
          text: 'If you believe processing does not comply with regulations, you have the right to file a complaint with INAI (Mexico) or the competent data protection authority in your country.',
        },
      ],
    },
    {
      title: '11. Minors\' data',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna is a service intended exclusively for persons over 18 acting as merchants or professionals. We do not knowingly collect personal data from minors. If we detect that we have obtained a minor\'s data without legal guardian consent, we will delete it immediately. If you are aware of such a situation, contact us at privacidad@alenna.io.',
        },
      ],
    },
    {
      title: '12. Your store customers\' data (sub-processing)',
      blocks: [
        { kind: 'p', text: 'When synchronizing orders and buyer data from your sales channels, Alenna accesses personal information of your store customers (names, emails, addresses). In this context:' },
        {
          kind: 'ul',
          items: [
            'Alenna acts as a processor, following your instructions as controller.',
            'This data is processed solely to provide analytics services; we do not use it for our own advertising purposes nor transfer it to third parties for commercial purposes.',
            'You are responsible for informing your customers that their data may be processed by analytics tools such as Alenna, and for obtaining the necessary legal bases for such processing in your jurisdiction.',
          ],
        },
        {
          kind: 'p',
          text: 'We enter into a Data Processing Agreement (DPA) with any user who requires it for regulatory obligations (e.g. GDPR). Request it at privacidad@alenna.io.',
        },
      ],
    },
    {
      title: '13. Changes to this policy',
      blocks: [
        {
          kind: 'p',
          text: 'We may update this Privacy Policy to reflect changes in our practices, applicable law, or the platform. When changes are material, we will notify you by email and/or through a prominent notice on the platform at least 15 days in advance. The current version will always be available at alenna.io/privacidad with the last updated date.',
        },
      ],
    },
    {
      title: '14. Contact',
      blocks: [
        {
          kind: 'p',
          text: 'For any inquiry, rights request, or privacy-related incident report:',
        },
        {
          kind: 'ul',
          items: [
            'Privacy email: privacidad@alenna.io',
            'General email: contacto@alenna.io',
            'Website: alenna.io',
          ],
        },
        {
          kind: 'p',
          text: 'We are committed to handling your request promptly and transparently.',
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
