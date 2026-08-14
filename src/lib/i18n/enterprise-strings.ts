import type { Language } from '@/providers/language-provider'
import type { MonthlyOrderRange, RecommendedPlan } from '@/lib/enterprise-form'
import { MONTHLY_ORDER_RANGES } from '@/lib/enterprise-form'

export const ENTERPRISE_PATH = '/enterprise'
export const ENTERPRISE_CONTACT_EMAIL = 'contacto@alenna.io'

export type PlanRecommendationCopy = {
  eyebrow: string
  title: string
  description: string
  cta: string
}

export type PlanRecommendationContent = Record<RecommendedPlan, PlanRecommendationCopy>

export type EnterpriseContent = {
  metaTitle: string
  brandLabel: string
  title: string
  intro: string
  contactEmailLabel: string
  companyLabel: string
  contactNameLabel: string
  emailLabel: string
  userCountLabel: string
  productCountLabel: string
  monthlyOrdersLabel: string
  monthlyOrdersPlaceholder: string
  monthlyOrderOptions: Record<MonthlyOrderRange, string>
  planRecommendations: PlanRecommendationContent
  messageLabel: string
  messagePlaceholder: string
  submit: string
  submitting: string
  successTitle: string
  successMessage: string
  errorGeneric: string
  errorConfig: string
  inquiryNamePrefix: string
}

const MONTHLY_ORDER_OPTIONS_ES: Record<MonthlyOrderRange, string> = {
  up_to_1000: 'Menos de 1,000',
  '1001_2000': 'Entre 1,001 y 2,000',
  '2001_3000': 'Entre 2,001 y 3,000',
  '3001_4000': 'Entre 3,001 y 4,000',
  '4001_5000': 'Entre 4,001 y 5,000',
  '5000_plus': '5,000 o más',
}

const MONTHLY_ORDER_OPTIONS_EN: Record<MonthlyOrderRange, string> = {
  up_to_1000: 'Fewer than 1,000',
  '1001_2000': '1,001 – 2,000',
  '2001_3000': '2,001 – 3,000',
  '3001_4000': '3,001 – 4,000',
  '4001_5000': '4,001 – 5,000',
  '5000_plus': '5,000 or more',
}

const PLAN_RECOMMENDATIONS_ES: PlanRecommendationContent = {
  basic: {
    eyebrow: 'Te recomendamos',
    title: 'Plan Basic',
    description: 'Hasta 1,000 pedidos y 500 productos al mes. Incluye 15 días de prueba gratis.',
    cta: 'Empezar prueba gratis',
  },
  growth: {
    eyebrow: 'Te recomendamos',
    title: 'Plan Growth',
    description:
      'Hasta 5,000 pedidos y 2,000 productos al mes. Incluye creación de roles para tu equipo.',
    cta: 'Empezar con Growth',
  },
}

const PLAN_RECOMMENDATIONS_EN: PlanRecommendationContent = {
  basic: {
    eyebrow: 'We recommend',
    title: 'Basic plan',
    description: 'Up to 1,000 orders and 500 products per month. Includes a 15-day free trial.',
    cta: 'Start free trial',
  },
  growth: {
    eyebrow: 'We recommend',
    title: 'Growth plan',
    description:
      'Up to 5,000 orders and 2,000 products per month. Includes role creation for your team.',
    cta: 'Start with Growth',
  },
}

const ENTERPRISE_ES: EnterpriseContent = {
  metaTitle: 'Plan Enterprise — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Plan a medida',
  intro:
    'Cuéntanos sobre tu operación y te contactaremos con un plan adaptado a tu volumen y equipo.',
  contactEmailLabel: 'Correo de contacto',
  companyLabel: 'Nombre de empresa',
  contactNameLabel: 'Nombre',
  emailLabel: 'Correo electrónico',
  userCountLabel: 'No. Usuarios',
  productCountLabel: 'No. de productos',
  monthlyOrdersLabel: 'Pedidos mensuales',
  monthlyOrdersPlaceholder: 'Selecciona un rango',
  monthlyOrderOptions: MONTHLY_ORDER_OPTIONS_ES,
  planRecommendations: PLAN_RECOMMENDATIONS_ES,
  messageLabel: 'Mensaje (opcional)',
  messagePlaceholder: 'Cuéntanos más sobre tu operación o necesidades',
  submit: 'Enviar solicitud',
  submitting: 'Enviando…',
  successTitle: 'Solicitud enviada',
  successMessage: 'Gracias. Revisaremos tu información y te contactaremos pronto.',
  errorGeneric: 'No pudimos enviar tu solicitud. Intenta de nuevo.',
  errorConfig: 'El formulario no está disponible en este momento.',
  inquiryNamePrefix: 'Nombre',
}

const ENTERPRISE_EN: EnterpriseContent = {
  metaTitle: 'Enterprise Plan — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Custom plan',
  intro: 'Tell us about your operation and we will follow up with a plan tailored to your volume and team.',
  contactEmailLabel: 'Contact email',
  companyLabel: 'Company name',
  contactNameLabel: 'Name',
  emailLabel: 'Email address',
  userCountLabel: 'No. of users',
  productCountLabel: 'No. of products',
  monthlyOrdersLabel: 'Monthly orders',
  monthlyOrdersPlaceholder: 'Select a range',
  monthlyOrderOptions: MONTHLY_ORDER_OPTIONS_EN,
  planRecommendations: PLAN_RECOMMENDATIONS_EN,
  messageLabel: 'Message (optional)',
  messagePlaceholder: 'Share more about your operation or requirements',
  submit: 'Submit inquiry',
  submitting: 'Submitting…',
  successTitle: 'Inquiry sent',
  successMessage: 'Thank you. We will review your details and get back to you soon.',
  errorGeneric: 'We could not submit your inquiry. Please try again.',
  errorConfig: 'The form is unavailable right now.',
  inquiryNamePrefix: 'Name',
}

export function enterpriseContent(lang: Language): EnterpriseContent {
  return lang === 'es' ? ENTERPRISE_ES : ENTERPRISE_EN
}

export { MONTHLY_ORDER_RANGES }
