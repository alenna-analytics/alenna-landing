import type { Language } from '@/providers/language-provider'
import type { LegalPageContent } from '@/lib/i18n/legal-types'

const TERMS_ES: LegalPageContent = {
  metaTitle: 'Términos y Condiciones — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Términos y Condiciones',
  updated: 'Última actualización: 8 de julio de 2026',
  intro:
    'Estos Términos y Condiciones ("Términos") regulan el acceso y uso de Alenna Analytics ("Alenna", "el Servicio"), disponible en alenna.io y operado por Sergio Garnica González. Al crear una cuenta o usar el Servicio, aceptas estos Términos y nuestra Política de Privacidad en alenna.io/privacidad. Si no estás de acuerdo, no uses el Servicio.',
  sections: [
    {
      title: '1. Prestador del servicio',
      blocks: [
        { kind: 'p', text: 'El Servicio es prestado por:' },
        {
          kind: 'ul',
          items: [
            'Nombre: Sergio Garnica González',
            'Nombre comercial: Alenna Analytics',
            'RFC: GAGS010219FW2',
            'Domicilio: Querétaro, México',
            'Correo general: contacto@alenna.io',
            'Correo de privacidad: privacidad@alenna.io',
          ],
        },
      ],
    },
    {
      title: '2. Descripción del servicio',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna es una plataforma de inteligencia comercial para ecommerce que permite conectar canales de venta, sincronizar datos comerciales y visualizar métricas, reportes y alertas (por ejemplo, margen, inventario y rentabilidad por canal).',
        },
        {
          kind: 'p',
          text: 'Las integraciones actualmente disponibles son Shopify y Mercado Libre. Otras integraciones pueden incorporarse en el futuro y se anunciarán en el Servicio.',
        },
        {
          kind: 'p',
          text: 'Alenna no es un sistema ERP, pasarela de pago, fulfillment ni asesoría fiscal o legal. Las métricas y reportes tienen fines informativos y de apoyo a la toma de decisiones; tú eres responsable de validar la información ante tus asesores y obligaciones legales.',
        },
      ],
    },
    {
      title: '3. Elegibilidad y cuenta',
      blocks: [
        {
          kind: 'p',
          text: 'El Servicio está dirigido a personas mayores de 18 años que actúan como comerciantes, emprendedores o profesionales. Debes proporcionar información veraz al registrarte y mantenerla actualizada.',
        },
        {
          kind: 'p',
          text: 'La autenticación se gestiona a través de Clerk. Eres responsable de la confidencialidad de tus credenciales de acceso y de toda actividad realizada bajo tu cuenta. Notifícanos de inmediato a contacto@alenna.io si detectas un uso no autorizado.',
        },
        {
          kind: 'p',
          text: 'Puedes invitar a otros usuarios a tu espacio de trabajo según las funcionalidades disponibles. El titular o administrador del espacio de trabajo es responsable de los permisos que otorgue a su equipo.',
        },
      ],
    },
    {
      title: '4. Integraciones con terceros',
      blocks: [
        {
          kind: 'p',
          text: 'Para usar Alenna con Shopify o Mercado Libre debes autorizar el acceso mediante OAuth u otros mecanismos que cada plataforma proporcione. Al conectar una integración, declaras que tienes autoridad para vincular esa cuenta y que cumples los términos de la plataforma correspondiente.',
        },
        {
          kind: 'p',
          text: 'Alenna accede y sincroniza datos conforme a los permisos que otorgas. Puedes desconectar una integración en cualquier momento desde tu panel; al hacerlo, eliminamos los tokens de acceso almacenados.',
        },
        {
          kind: 'p',
          text: 'Alenna no almacena datos personales de compradores de tus tiendas (nombres, correos, teléfonos, direcciones). El tratamiento de datos se describe en nuestra Política de Privacidad.',
        },
        {
          kind: 'p',
          text: 'No somos responsables por interrupciones, cambios en APIs o políticas de Shopify, Mercado Libre u otros proveedores externos. Si una plataforma revoca el acceso o modifica sus condiciones, algunas funcionalidades pueden dejar de estar disponibles sin que ello genere responsabilidad adicional para Alenna más allá de lo previsto en estos Términos.',
        },
      ],
    },
    {
      title: '5. Planes, prueba y facturación',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna ofrece un periodo de prueba gratuita de 30 días y un plan de pago único de USD 99 al mes con acceso completo a todas las funcionalidades disponibles. Los precios vigentes se muestran en alenna.io o dentro del panel al momento de contratar.',
        },
        {
          kind: 'p',
          text: 'Al finalizar la prueba, la suscripción de pago se activa según el flujo indicado en el panel, salvo que canceles antes. Si contratas el plan de pago, aceptas la tarifa publicada y el ciclo mensual. Los pagos se procesan a través de nuestro proveedor de pagos; no almacenamos números de tarjeta.',
        },
        {
          kind: 'p',
          text: 'Salvo que se indique lo contrario, las suscripciones se renuevan automáticamente hasta que las canceles desde el panel o nos escribas a contacto@alenna.io. No hay reembolsos por periodos parciales ya iniciados, salvo cuando la ley aplicable exija lo contrario.',
        },
        {
          kind: 'p',
          text: 'Podemos modificar precios o características de los planes con aviso previo razonable. Si no aceptas un cambio material en un plan de pago, podrás cancelar antes de que entre en vigor el nuevo precio.',
        },
      ],
    },
    {
      title: '6. Uso aceptable',
      blocks: [
        { kind: 'p', text: 'Al usar el Servicio te comprometes a no:' },
        {
          kind: 'ul',
          items: [
            'Usar Alenna para fines ilegales, fraudulentos o que vulneren derechos de terceros.',
            'Intentar acceder sin autorización a sistemas, datos o cuentas ajenas.',
            'Revender, sublicenciar o redistribuir el Servicio o los datos obtenidos a través de él, salvo autorización expresa.',
            'Realizar scraping, ingeniería inversa o extracción masiva fuera de las APIs autorizadas por las plataformas conectadas.',
            'Introducir malware, sobrecargar la infraestructura o interferir con el funcionamiento del Servicio.',
            'Utilizar el Servicio de forma que incumpla las políticas de Shopify, Mercado Libre u otros terceros integrados.',
          ],
        },
        {
          kind: 'p',
          text: 'Podemos suspender o terminar tu acceso si detectamos un uso que viole estos Términos o represente un riesgo para el Servicio, otros usuarios o terceros.',
        },
      ],
    },
    {
      title: '7. Propiedad de los datos y licencia',
      blocks: [
        {
          kind: 'p',
          text: 'Tú conservas la titularidad de los datos comerciales de tu negocio que sincronizas a través del Servicio. Alenna no adquiere propiedad sobre ellos.',
        },
        {
          kind: 'p',
          text: 'Nos otorgas una licencia limitada, no exclusiva y revocable para procesar esos datos únicamente con el fin de prestarte el Servicio, conforme a la Política de Privacidad.',
        },
        {
          kind: 'p',
          text: 'El software, diseño, marca y contenido propio de Alenna son propiedad de Sergio Garnica González o sus licenciantes. No se te transfiere ningún derecho de propiedad intelectual sobre la plataforma, salvo el derecho de uso durante la vigencia de tu cuenta y conforme a estos Términos.',
        },
      ],
    },
    {
      title: '8. Disponibilidad y cambios',
      blocks: [
        {
          kind: 'p',
          text: 'Procuramos mantener el Servicio disponible de forma continua, pero no garantizamos operación ininterrumpida ni libre de errores. Puede haber mantenimiento, actualizaciones o incidencias técnicas.',
        },
        {
          kind: 'p',
          text: 'Podemos modificar, añadir o retirar funcionalidades del Servicio. Cuando un cambio sea material y afecte negativamente un plan de pago activo, te lo comunicaremos con antelación razonable.',
        },
      ],
    },
    {
      title: '9. Limitación de responsabilidad',
      blocks: [
        {
          kind: 'p',
          text: 'En la máxima medida permitida por la ley aplicable, Alenna no será responsable por daños indirectos, incidentales, especiales, consecuentes o pérdida de beneficios derivados del uso o la imposibilidad de uso del Servicio.',
        },
        {
          kind: 'p',
          text: 'No garantizamos que las métricas, márgenes, proyecciones o alertas sean exactos, completos o adecuados para un fin particular. Tú eres responsable de contrastar la información con tus registros contables, fiscales y operativos.',
        },
        {
          kind: 'p',
          text: 'La responsabilidad total acumulada de Alenna frente a ti por cualquier reclamación relacionada con el Servicio se limitará al monto que nos hayas pagado por el Servicio en los doce (12) meses anteriores al hecho que originó la reclamación, o a cien dólares estadounidenses (USD 100) si no has contratado un plan de pago.',
        },
      ],
    },
    {
      title: '10. Suspensión y terminación',
      blocks: [
        {
          kind: 'p',
          text: 'Puedes dejar de usar el Servicio en cualquier momento. Si tienes una suscripción de pago, debes cancelarla según el procedimiento indicado para evitar cargos futuros.',
        },
        {
          kind: 'p',
          text: 'Podemos suspender o dar por terminado tu acceso si incumples estos Términos, si la ley lo exige, si dejas de pagar un plan contratado o si discontinuamos el Servicio con aviso previo.',
        },
        {
          kind: 'h3',
          text: 'Eliminación de cuenta y datos',
        },
        {
          kind: 'p',
          text: 'Puedes solicitar la eliminación de tu espacio de trabajo desde el panel, en Configuración → General (administradores y titulares del workspace), o escribiendo a privacidad@alenna.io. Marcaremos la cuenta para baja y, transcurridos 90 días, eliminaremos o anonimizaremos de forma definitiva tus datos personales y los datos comerciales de tu espacio de trabajo, salvo lo que debamos conservar por obligación legal. Durante ese periodo puedes cancelar la solicitud desde el panel. Si deseas una eliminación anticipada, indícalo expresamente en tu solicitud por correo.',
        },
        {
          kind: 'p',
          text: 'Los detalles sobre conservación, desconexión de integraciones y derechos de privacidad se encuentran en alenna.io/privacidad.',
        },
      ],
    },
    {
      title: '11. Ley aplicable y jurisdicción',
      blocks: [
        {
          kind: 'p',
          text: 'Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de estos Términos o del Servicio, las partes se someten a la jurisdicción de los tribunales competentes de Querétaro, México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.',
        },
      ],
    },
    {
      title: '12. Modificaciones',
      blocks: [
        {
          kind: 'p',
          text: 'Podemos actualizar estos Términos para reflejar cambios en el Servicio o en la legislación. Si los cambios son materiales, te notificaremos por correo o mediante un aviso en la plataforma con al menos 15 días de anticipación. El uso continuado del Servicio después de la entrada en vigor constituye aceptación de los Términos actualizados.',
        },
        {
          kind: 'p',
          text: 'La versión vigente estará siempre disponible en alenna.io/terminos.',
        },
      ],
    },
    {
      title: '13. Contacto',
      blocks: [
        { kind: 'p', text: 'Para preguntas sobre estos Términos:' },
        {
          kind: 'ul',
          items: [
            'General: contacto@alenna.io',
            'Privacidad y eliminación de cuenta: privacidad@alenna.io',
            'Sitio web: alenna.io',
          ],
        },
      ],
    },
  ],
}

const TERMS_EN: LegalPageContent = {
  metaTitle: 'Terms and Conditions — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Terms and Conditions',
  updated: 'Last updated: July 8, 2026',
  intro:
    'These Terms and Conditions ("Terms") govern access to and use of Alenna Analytics ("Alenna", "the Service"), available at alenna.io and operated by Sergio Garnica González. By creating an account or using the Service, you accept these Terms and our Privacy Policy at alenna.io/privacidad. If you do not agree, do not use the Service.',
  sections: [
    {
      title: '1. Service provider',
      blocks: [
        { kind: 'p', text: 'The Service is provided by:' },
        {
          kind: 'ul',
          items: [
            'Name: Sergio Garnica González',
            'Trade name: Alenna Analytics',
            'Tax ID (RFC): GAGS010219FW2',
            'Address: Querétaro, Mexico',
            'General email: contacto@alenna.io',
            'Privacy email: privacidad@alenna.io',
          ],
        },
      ],
    },
    {
      title: '2. Service description',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna is a commerce intelligence platform for ecommerce that lets you connect sales channels, sync commercial data, and view metrics, reports, and alerts (e.g. margin, inventory, and channel profitability).',
        },
        {
          kind: 'p',
          text: 'Integrations currently available are Shopify and Mercado Libre. Other integrations may be added in the future and will be announced in the Service.',
        },
        {
          kind: 'p',
          text: 'Alenna is not an ERP, payment gateway, fulfillment provider, or tax or legal advisory service. Metrics and reports are for informational and decision-support purposes; you are responsible for validating information with your advisors and legal obligations.',
        },
      ],
    },
    {
      title: '3. Eligibility and account',
      blocks: [
        {
          kind: 'p',
          text: 'The Service is intended for persons over 18 acting as merchants, entrepreneurs, or professionals. You must provide accurate registration information and keep it up to date.',
        },
        {
          kind: 'p',
          text: 'Authentication is managed through Clerk. You are responsible for keeping your credentials confidential and for all activity under your account. Notify us immediately at contacto@alenna.io if you detect unauthorized use.',
        },
        {
          kind: 'p',
          text: 'You may invite other users to your workspace according to available features. The workspace owner or administrator is responsible for permissions granted to their team.',
        },
      ],
    },
    {
      title: '4. Third-party integrations',
      blocks: [
        {
          kind: 'p',
          text: 'To use Alenna with Shopify or Mercado Libre you must authorize access via OAuth or other mechanisms each platform provides. By connecting an integration, you represent that you have authority to link that account and that you comply with the corresponding platform\'s terms.',
        },
        {
          kind: 'p',
          text: 'Alenna accesses and syncs data according to the permissions you grant. You can disconnect an integration at any time from your dashboard; we then delete stored access tokens.',
        },
        {
          kind: 'p',
          text: 'Alenna does not store personal data of your store\'s buyers (names, emails, phones, addresses). Data processing is described in our Privacy Policy.',
        },
        {
          kind: 'p',
          text: 'We are not responsible for outages, API changes, or policy changes by Shopify, Mercado Libre, or other external providers. If a platform revokes access or changes its conditions, some features may become unavailable without additional liability for Alenna beyond what these Terms provide.',
        },
      ],
    },
    {
      title: '5. Plans, trial, and billing',
      blocks: [
        {
          kind: 'p',
          text: 'Alenna offers a 30-day free trial and a single paid plan at USD 99 per month with full access to all available features. Current prices are shown at alenna.io or in the dashboard when you subscribe.',
        },
        {
          kind: 'p',
          text: 'When the trial ends, the paid subscription starts according to the dashboard flow unless you cancel beforehand. If you subscribe to the paid plan, you accept the published fee and monthly billing cycle. Payments are processed through our payment provider; we do not store card numbers.',
        },
        {
          kind: 'p',
          text: 'Unless stated otherwise, subscriptions renew automatically until you cancel from the dashboard or contact us at contacto@alenna.io. There are no refunds for partial periods already started, except where applicable law requires otherwise.',
        },
        {
          kind: 'p',
          text: 'We may change plan prices or features with reasonable prior notice. If you do not accept a material change to a paid plan, you may cancel before the new price takes effect.',
        },
      ],
    },
    {
      title: '6. Acceptable use',
      blocks: [
        { kind: 'p', text: 'When using the Service you agree not to:' },
        {
          kind: 'ul',
          items: [
            'Use Alenna for illegal, fraudulent purposes or to violate third-party rights.',
            'Attempt unauthorized access to systems, data, or accounts.',
            'Resell, sublicense, or redistribute the Service or data obtained through it without express authorization.',
            'Scrape, reverse engineer, or perform bulk extraction outside APIs authorized by connected platforms.',
            'Introduce malware, overload infrastructure, or interfere with Service operation.',
            'Use the Service in a way that violates Shopify, Mercado Libre, or other integrated third-party policies.',
          ],
        },
        {
          kind: 'p',
          text: 'We may suspend or terminate your access if we detect use that violates these Terms or poses a risk to the Service, other users, or third parties.',
        },
      ],
    },
    {
      title: '7. Data ownership and license',
      blocks: [
        {
          kind: 'p',
          text: 'You retain ownership of your business commercial data synced through the Service. Alenna does not acquire ownership of it.',
        },
        {
          kind: 'p',
          text: 'You grant us a limited, non-exclusive, revocable license to process that data solely to provide the Service, in accordance with the Privacy Policy.',
        },
        {
          kind: 'p',
          text: 'Alenna software, design, brand, and proprietary content belong to Sergio Garnica González or its licensors. No intellectual property rights in the platform are transferred to you except the right to use it during your account term and under these Terms.',
        },
      ],
    },
    {
      title: '8. Availability and changes',
      blocks: [
        {
          kind: 'p',
          text: 'We strive to keep the Service continuously available but do not guarantee uninterrupted or error-free operation. Maintenance, updates, or technical incidents may occur.',
        },
        {
          kind: 'p',
          text: 'We may modify, add, or remove Service features. When a change is material and negatively affects an active paid plan, we will notify you with reasonable advance notice.',
        },
      ],
    },
    {
      title: '9. Limitation of liability',
      blocks: [
        {
          kind: 'p',
          text: 'To the maximum extent permitted by applicable law, Alenna is not liable for indirect, incidental, special, consequential damages, or loss of profits arising from use or inability to use the Service.',
        },
        {
          kind: 'p',
          text: 'We do not warrant that metrics, margins, projections, or alerts are accurate, complete, or fit for a particular purpose. You are responsible for reconciling information with your accounting, tax, and operational records.',
        },
        {
          kind: 'p',
          text: 'Alenna\'s total cumulative liability to you for any claim related to the Service is limited to the amount you paid for the Service in the twelve (12) months before the event giving rise to the claim, or one hundred US dollars (USD 100) if you have not subscribed to a paid plan.',
        },
      ],
    },
    {
      title: '10. Suspension and termination',
      blocks: [
        {
          kind: 'p',
          text: 'You may stop using the Service at any time. If you have a paid subscription, you must cancel it according to the indicated procedure to avoid future charges.',
        },
        {
          kind: 'p',
          text: 'We may suspend or terminate your access if you breach these Terms, if required by law, if you fail to pay for a subscribed plan, or if we discontinue the Service with prior notice.',
        },
        {
          kind: 'h3',
          text: 'Account and data deletion',
        },
        {
          kind: 'p',
          text: 'You may request deletion of your workspace from the dashboard under Settings → General (workspace admins and owners), or by emailing privacidad@alenna.io. We will mark the account for closure and, after 90 days, permanently delete or anonymize your personal data and your workspace commercial data, except what we must retain by law. During that period you may cancel the request from the dashboard. If you want earlier deletion, state so explicitly in your email request.',
        },
        {
          kind: 'p',
          text: 'Details on retention, disconnecting integrations, and privacy rights are at alenna.io/privacidad.',
        },
      ],
    },
    {
      title: '11. Governing law and jurisdiction',
      blocks: [
        {
          kind: 'p',
          text: 'These Terms are governed by the laws of Mexico. For any dispute arising from these Terms or the Service, the parties submit to the jurisdiction of the competent courts of Querétaro, Mexico, waiving any other venue that may apply based on present or future domicile.',
        },
      ],
    },
    {
      title: '12. Modifications',
      blocks: [
        {
          kind: 'p',
          text: 'We may update these Terms to reflect changes in the Service or the law. If changes are material, we will notify you by email or through a notice on the platform at least 15 days in advance. Continued use of the Service after they take effect constitutes acceptance of the updated Terms.',
        },
        {
          kind: 'p',
          text: 'The current version will always be available at alenna.io/terminos.',
        },
      ],
    },
    {
      title: '13. Contact',
      blocks: [
        { kind: 'p', text: 'For questions about these Terms:' },
        {
          kind: 'ul',
          items: [
            'General: contacto@alenna.io',
            'Privacy and account deletion: privacidad@alenna.io',
            'Website: alenna.io',
          ],
        },
      ],
    },
  ],
}

const TERMS_CONTENT: Record<Language, LegalPageContent> = {
  es: TERMS_ES,
  en: TERMS_EN,
}

export function termsContent(lang: Language): LegalPageContent {
  return TERMS_CONTENT[lang]
}

export const TERMS_PATH = '/terminos'
