import { appUrl } from '@/lib/utils'

const CONTACT_MAILTO = 'mailto:support@alenna.io?subject=Custom%20plan%20inquiry'

type PricingLinkPlan = {
  id: string
  hrefKind: 'app' | 'custom'
}

function stripePaymentLink(planId: string): string | null {
  if (planId === 'basic') {
    const url = import.meta.env.VITE_STRIPE_PAYMENT_LINK_BASIC as string | undefined
    return url?.trim() || null
  }
  if (planId === 'growth') {
    const url = import.meta.env.VITE_STRIPE_PAYMENT_LINK_GROWTH as string | undefined
    return url?.trim() || null
  }
  return null
}

export function planHref(plan: PricingLinkPlan): string {
  if (plan.hrefKind === 'custom') return CONTACT_MAILTO
  const stripeLink = stripePaymentLink(plan.id)
  if (stripeLink) return stripeLink
  return appUrl()
}

export function planOpensNewTab(plan: PricingLinkPlan): boolean {
  return plan.hrefKind === 'app' && stripePaymentLink(plan.id) !== null
}
