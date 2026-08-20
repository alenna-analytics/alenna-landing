import type { Language } from '@/providers/language-provider'

export type IntegrationsHubContent = {
  metaTitle: string
  title: string
  lede: string
}

const INTEGRATIONS_ES: IntegrationsHubContent = {
  metaTitle: 'Integraciones — Alenna Analytics',
  title: 'Integraciones',
  lede: 'Conecta los canales donde ya vendes. Cada tarjeta abre el detalle de permisos, datos y cómo sincronizar.',
}

const INTEGRATIONS_EN: IntegrationsHubContent = {
  metaTitle: 'Integrations — Alenna Analytics',
  title: 'Integrations',
  lede: 'Connect the channels where you already sell. Each card opens permissions, data sync, and how to connect.',
}

const INTEGRATIONS_CONTENT: Record<Language, IntegrationsHubContent> = {
  es: INTEGRATIONS_ES,
  en: INTEGRATIONS_EN,
}

export function integrationsContent(lang: Language): IntegrationsHubContent {
  return INTEGRATIONS_CONTENT[lang]
}

export const INTEGRATIONS_PATH = '/integraciones'
