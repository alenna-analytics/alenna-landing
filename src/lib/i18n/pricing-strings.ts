import type { LandingFaqItem } from '@/lib/i18n/landing-strings'
import type { Language } from '@/providers/language-provider'

export const PRICING_PATH = '/planes'

export type PricingPageContent = {
  metaTitle: string
  metaDescription: string
  title: string
  lede: string
}

const PRICING_ES: PricingPageContent = {
  metaTitle: 'Planes — Alenna Analytics',
  metaDescription:
    'Precios de Alenna: Basic $30 USD/mes, Growth $60 USD/mes y Enterprise a medida. 15 días de prueba en Basic. Sin cargos extra por límites.',
  title: 'Precios predecibles, pensados para crecer',
  lede: 'Empieza gratis, colabora con tu equipo y escala cuando tu operación lo pida.',
}

const PRICING_EN: PricingPageContent = {
  metaTitle: 'Pricing — Alenna Analytics',
  metaDescription:
    'Alenna pricing: Basic $30 USD/month, Growth $60 USD/month, and custom Enterprise. 15-day trial on Basic. No extra charges for hitting plan limits.',
  title: 'Predictable pricing, designed to scale',
  lede: 'Start for free, collaborate with your team, then scale as your operation grows.',
}

const PRICING_CONTENT: Record<Language, PricingPageContent> = {
  es: PRICING_ES,
  en: PRICING_EN,
}

export function pricingPageContent(lang: Language): PricingPageContent {
  return PRICING_CONTENT[lang]
}

const PRICING_FAQ: Record<Language, LandingFaqItem[]> = {
  es: [
    {
      id: 'limits',
      question: 'Me preocupa terminar el mes con una factura enorme.',
      answer:
        'No pasa. Pagas el precio de tu plan, sin cargos extra al final del mes. Si llegas al tope de pedidos o productos, la sincronización de esos datos se pausa. Si llegas al tope de usuarios, no podrás crear más. Lo que ya está en el panel se queda.',
    },
    {
      id: 'billing-cycle',
      question: '¿Cuándo me cobran?',
      answer:
        'Nuestros planes se cobran por adelantado, en un ciclo mensual. Cualquier cancelación no es reembolsable. Si alcanzas algún límite de tu plan, no te preocupes, no hay cargos extra de uso.',
    },
    {
      id: 'cancel',
      question: '¿Qué pasa si cancelo mi suscripción?',
      answer:
        'Dejas de recibir cargos futuros. No hay reembolso del periodo ya iniciado. El espacio de trabajo queda con acceso restringido hasta que renueves; guardamos tu configuración para cuando vuelvas.\n\nCancelas desde Facturación en el panel (portal de Stripe) o escribiendo a contacto@alenna.io. Borrar la cuenta es otro paso: se solicita en Configuración, con 90 días de gracia.',
    },
    {
      id: 'future-pricing',
      question: '¿Van a cambiar los precios en el futuro?',
      answer:
        'Pueden cambiar. Si ocurre, te avisaremos de antemano. Puedes cancelar en cualquier momento. Nuestro compromiso es mantener precios simples y justos para todos.',
    },
    {
      id: 'usage',
      question: '¿Cómo veo el uso de mi plan?',
      answer:
        'En el panel, entra a Facturación. Ahí ves pedidos sincronizados del mes, productos activos y usuarios creados contra los límites de tu plan, y el periodo de cobro vigente.',
    },
  ],
  en: [
    {
      id: 'limits',
      question: 'I’m worried I could end up with a huge bill at the end of the month.',
      answer:
        'You won’t. You pay your plan price, with no extra charges at month end. If you hit the order or product cap, that sync pauses. If you hit the user cap, you can’t create more. What’s already in the dashboard stays there.',
    },
    {
      id: 'billing-cycle',
      question: 'When will I be billed?',
      answer:
        'Our plans are charged up front, on a monthly cycle. Cancellations are not refundable. If you hit a plan limit, don’t worry: there are no extra usage charges.',
    },
    {
      id: 'cancel',
      question: 'What happens if I cancel my subscription?',
      answer:
        'Future charges stop. There is no refund for a period already started. Workspace access is restricted until you renew; we keep your setup for when you come back.\n\nCancel from Billing in the dashboard (Stripe portal) or by emailing contacto@alenna.io. Deleting the account is a separate step: request it in Settings, with a 90-day grace period.',
    },
    {
      id: 'future-pricing',
      question: 'Are you going to change your pricing in the future?',
      answer:
        'They may change. If they do, we will let you know in advance. You can cancel at any time. Our commitment is to keep pricing simple and fair for everyone.',
    },
    {
      id: 'usage',
      question: 'How can I see my plan usage?',
      answer:
        'In the dashboard, open Billing. You will see orders synced this month, active products, and users created against your plan limits, plus the current billing period.',
    },
  ],
}

export function pricingFaq(lang: Language): LandingFaqItem[] {
  return PRICING_FAQ[lang]
}
