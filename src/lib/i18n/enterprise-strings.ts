import type { Language } from '@/providers/language-provider'

export const ENTERPRISE_PATH = '/enterprise'

export type EnterpriseContent = {
  metaTitle: string
  brandLabel: string
  title: string
  intro: string
  companyLabel: string
  emailLabel: string
  userCountLabel: string
  productCountLabel: string
  monthlyOrdersLabel: string
  messageLabel: string
  messagePlaceholder: string
  submit: string
  submitting: string
  successTitle: string
  successMessage: string
  errorGeneric: string
  errorConfig: string
}

const ENTERPRISE_ES: EnterpriseContent = {
  metaTitle: 'Plan Enterprise — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Plan a medida',
  intro:
    'Cuéntanos sobre tu operación y te contactaremos con un plan adaptado a tu volumen y equipo.',
  companyLabel: 'Empresa',
  emailLabel: 'Correo de contacto',
  userCountLabel: 'Usuarios en el equipo',
  productCountLabel: 'Productos en catálogo',
  monthlyOrdersLabel: 'Pedidos mensuales',
  messageLabel: 'Mensaje (opcional)',
  messagePlaceholder: 'Cuéntanos más sobre tu operación o necesidades',
  submit: 'Enviar solicitud',
  submitting: 'Enviando…',
  successTitle: 'Solicitud enviada',
  successMessage: 'Gracias. Revisaremos tu información y te contactaremos pronto.',
  errorGeneric: 'No pudimos enviar tu solicitud. Intenta de nuevo.',
  errorConfig: 'El formulario no está disponible en este momento.',
}

const ENTERPRISE_EN: EnterpriseContent = {
  metaTitle: 'Enterprise Plan — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Custom plan',
  intro: 'Tell us about your operation and we will follow up with a plan tailored to your volume and team.',
  companyLabel: 'Company',
  emailLabel: 'Contact email',
  userCountLabel: 'Team users',
  productCountLabel: 'Products in catalog',
  monthlyOrdersLabel: 'Monthly orders',
  messageLabel: 'Message (optional)',
  messagePlaceholder: 'Share more about your operation or requirements',
  submit: 'Submit inquiry',
  submitting: 'Submitting…',
  successTitle: 'Inquiry sent',
  successMessage: 'Thank you. We will review your details and get back to you soon.',
  errorGeneric: 'We could not submit your inquiry. Please try again.',
  errorConfig: 'The form is unavailable right now.',
}

export function enterpriseContent(lang: Language): EnterpriseContent {
  return lang === 'es' ? ENTERPRISE_ES : ENTERPRISE_EN
}
