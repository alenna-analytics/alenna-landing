export const ENTERPRISE_FIELD_LIMITS = {
  companyName: 200,
  contactName: 120,
  email: 320,
  userCount: 6,
  productCount: 7,
  message: 2000,
} as const

export type RecommendedPlan = 'basic' | 'growth'

export type MonthlyOrderRange =
  | 'up_to_1000'
  | '1001_2000'
  | '2001_3000'
  | '3001_4000'
  | '4001_5000'
  | '5000_plus'

export const MONTHLY_ORDER_RANGES: MonthlyOrderRange[] = [
  'up_to_1000',
  '1001_2000',
  '2001_3000',
  '3001_4000',
  '4001_5000',
  '5000_plus',
]

export function recommendedPlanForRange(range: MonthlyOrderRange | ''): RecommendedPlan | null {
  if (range === 'up_to_1000') return 'basic'
  if (range === '1001_2000') return 'growth'
  return null
}

export function monthlyOrdersFromRange(range: MonthlyOrderRange): number {
  const values: Record<MonthlyOrderRange, number> = {
    up_to_1000: 1000,
    '1001_2000': 2000,
    '2001_3000': 3000,
    '3001_4000': 4000,
    '4001_5000': 5000,
    '5000_plus': 5001,
  }
  return values[range]
}

export function parseCountInput(raw: string, maxDigits: number): number | null {
  const trimmed = raw.trim()
  if (!trimmed || trimmed.length > maxDigits || !/^\d+$/.test(trimmed)) {
    return null
  }
  const value = Number.parseInt(trimmed, 10)
  if (!Number.isFinite(value) || value < 1) {
    return null
  }
  return value
}

export function buildInquiryMessage(contactName: string, message: string, namePrefix: string): string | null {
  const parts: string[] = []
  const name = contactName.trim()
  const body = message.trim()

  if (name) {
    parts.push(`${namePrefix}: ${name}`)
  }
  if (body) {
    parts.push(body)
  }

  return parts.length > 0 ? parts.join('\n\n') : null
}
