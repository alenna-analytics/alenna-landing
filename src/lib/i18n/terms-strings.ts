import type { Language } from '@/providers/language-provider'

export type TermsContent = {
  metaTitle: string
  brandLabel: string
  title: string
  placeholder: string
}

const TERMS_ES: TermsContent = {
  metaTitle: 'Términos y Condiciones — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Términos y Condiciones',
  placeholder: 'El contenido de estos términos se publicará próximamente.',
}

const TERMS_EN: TermsContent = {
  metaTitle: 'Terms and Conditions — Alenna Analytics',
  brandLabel: 'Alenna Analytics',
  title: 'Terms and Conditions',
  placeholder: 'The terms content will be published soon.',
}

const TERMS_CONTENT: Record<Language, TermsContent> = {
  es: TERMS_ES,
  en: TERMS_EN,
}

export function termsContent(lang: Language): TermsContent {
  return TERMS_CONTENT[lang]
}

export const TERMS_PATH = '/terminos'
