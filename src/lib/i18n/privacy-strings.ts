import type { Language } from '@/providers/language-provider'

type PrivacySection = {
  title: string
  paragraphs: string[]
}

type PrivacyContent = {
  metaTitle: string
  title: string
  updated: string
  intro: string
  sections: PrivacySection[]
  contactLabel: string
  contactEmail: string
}

const PRIVACY_CONTENT: Record<Language, PrivacyContent> = {
  es: {
    metaTitle: 'Política de privacidad — Alenna Analytics',
    title: 'Política de privacidad',
    updated: 'Última actualización: 25 de junio de 2026',
    intro:
      'Alenna Analytics ("Alenna", "nosotros") opera la plataforma de inteligencia comercial para ecommerce. Esta política describe qué datos recopilamos, cómo los usamos y cuáles son tus derechos.',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        paragraphs: [
          'El responsable del tratamiento de tus datos personales es Alenna Analytics. Para cualquier consulta relacionada con privacidad puedes escribirnos a contacto@alenna.io.',
        ],
      },
      {
        title: '2. Datos que recopilamos',
        paragraphs: [
          'Recopilamos información de cuenta (nombre, correo electrónico, empresa), datos de uso de la plataforma y datos comerciales que conectas desde tus canales de venta (por ejemplo Shopify, Amazon o Mercado Libre), incluyendo pedidos, productos, métricas y configuraciones de integración.',
          'También recopilamos datos técnicos básicos como dirección IP, tipo de navegador y registros de actividad necesarios para seguridad y operación del servicio.',
        ],
      },
      {
        title: '3. Cómo usamos tus datos',
        paragraphs: [
          'Utilizamos los datos para prestar el servicio, sincronizar información de tus tiendas, generar reportes y métricas, mejorar la plataforma, brindar soporte y cumplir obligaciones legales.',
          'No vendemos tus datos personales ni los de tu negocio a terceros.',
        ],
      },
      {
        title: '4. Base legal',
        paragraphs: [
          'Tratamos tus datos con base en la ejecución del contrato de servicio, tu consentimiento cuando corresponda, nuestro interés legítimo en operar y mejorar la plataforma, y el cumplimiento de obligaciones legales aplicables.',
        ],
      },
      {
        title: '5. Compartición con terceros',
        paragraphs: [
          'Podemos compartir datos con proveedores que nos ayudan a operar la plataforma (infraestructura cloud, autenticación, soporte), siempre bajo acuerdos de confidencialidad y procesamiento.',
          'También compartimos datos cuando sea necesario para conectar las integraciones que tú autorizas con plataformas externas.',
        ],
      },
      {
        title: '6. Conservación',
        paragraphs: [
          'Conservamos los datos mientras mantengas una cuenta activa y el tiempo necesario para cumplir obligaciones legales, resolver disputas o hacer valer nuestros acuerdos.',
        ],
      },
      {
        title: '7. Seguridad',
        paragraphs: [
          'Aplicamos medidas técnicas y organizativas razonables para proteger la información contra acceso no autorizado, pérdida o alteración. Ningún sistema es 100% seguro; te recomendamos usar contraseñas robustas y proteger el acceso a tu cuenta.',
        ],
      },
      {
        title: '8. Tus derechos',
        paragraphs: [
          'Puedes solicitar acceso, rectificación, eliminación u oposición al tratamiento de tus datos personales, así como la portabilidad cuando aplique. Para ejercerlos, escribe a contacto@alenna.io.',
        ],
      },
      {
        title: '9. Cambios',
        paragraphs: [
          'Podemos actualizar esta política ocasionalmente. Publicaremos la versión vigente en esta página e indicaremos la fecha de última actualización.',
        ],
      },
    ],
    contactLabel: 'Contacto de privacidad',
    contactEmail: 'contacto@alenna.io',
  },
  en: {
    metaTitle: 'Privacy Policy — Alenna Analytics',
    title: 'Privacy Policy',
    updated: 'Last updated: June 25, 2026',
    intro:
      'Alenna Analytics ("Alenna", "we") operates a commerce intelligence platform for ecommerce. This policy explains what data we collect, how we use it, and your rights.',
    sections: [
      {
        title: '1. Data controller',
        paragraphs: [
          'Alenna Analytics is the data controller for your personal data. For privacy-related inquiries, contact us at contacto@alenna.io.',
        ],
      },
      {
        title: '2. Data we collect',
        paragraphs: [
          'We collect account information (name, email, company), platform usage data, and commercial data you connect from sales channels (such as Shopify, Amazon, or Mercado Libre), including orders, products, metrics, and integration settings.',
          'We also collect basic technical data such as IP address, browser type, and activity logs required for security and service operation.',
        ],
      },
      {
        title: '3. How we use your data',
        paragraphs: [
          'We use data to provide the service, sync your store information, generate reports and metrics, improve the platform, offer support, and comply with legal obligations.',
          'We do not sell your personal data or your business data to third parties.',
        ],
      },
      {
        title: '4. Legal basis',
        paragraphs: [
          'We process your data based on contract performance, your consent where applicable, our legitimate interest in operating and improving the platform, and compliance with applicable legal obligations.',
        ],
      },
      {
        title: '5. Sharing with third parties',
        paragraphs: [
          'We may share data with vendors that help us operate the platform (cloud infrastructure, authentication, support), always under confidentiality and processing agreements.',
          'We also share data when necessary to connect integrations you authorize with external platforms.',
        ],
      },
      {
        title: '6. Retention',
        paragraphs: [
          'We retain data while you maintain an active account and for as long as needed to comply with legal obligations, resolve disputes, or enforce our agreements.',
        ],
      },
      {
        title: '7. Security',
        paragraphs: [
          'We apply reasonable technical and organizational measures to protect information against unauthorized access, loss, or alteration. No system is 100% secure; we recommend using strong passwords and protecting access to your account.',
        ],
      },
      {
        title: '8. Your rights',
        paragraphs: [
          'You may request access, rectification, deletion, or objection to the processing of your personal data, as well as portability where applicable. To exercise your rights, email contacto@alenna.io.',
        ],
      },
      {
        title: '9. Changes',
        paragraphs: [
          'We may update this policy from time to time. We will publish the current version on this page and indicate the last updated date.',
        ],
      },
    ],
    contactLabel: 'Privacy contact',
    contactEmail: 'contacto@alenna.io',
  },
}

export function privacyContent(lang: Language): PrivacyContent {
  return PRIVACY_CONTENT[lang]
}

export const PRIVACY_PATH = '/privacidad'
