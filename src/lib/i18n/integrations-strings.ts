import type { Language } from '@/providers/language-provider'

export type IntegrationsHubContent = {
  metaTitle: string
  title: string
  lede: string
}

const INTEGRATIONS_ES: IntegrationsHubContent = {
  metaTitle: 'Integraciones — Alenna Analytics',
  title: 'Integraciones',
  lede: 'Un mismo panel para ventas y publicidad. Elige un canal para ver qué datos entran a Alenna y cómo conectar.',
}

const INTEGRATIONS_EN: IntegrationsHubContent = {
  metaTitle: 'Integrations — Alenna Analytics',
  title: 'Integrations',
  lede: 'One dashboard for sales and advertising. Open a channel to see what data comes into Alenna and how to connect.',
}

const INTEGRATIONS_CONTENT: Record<Language, IntegrationsHubContent> = {
  es: INTEGRATIONS_ES,
  en: INTEGRATIONS_EN,
}

export function integrationsContent(lang: Language): IntegrationsHubContent {
  return INTEGRATIONS_CONTENT[lang]
}

export const INTEGRATIONS_PATH = '/integraciones'
