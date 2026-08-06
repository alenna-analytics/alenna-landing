import { appUrl, sitePath } from '@/lib/utils'

type PricingLinkPlan = {
  id: string
}

export function planHref(plan: PricingLinkPlan): string {
  if (plan.id === 'basic') return appUrl('/sign-up?intent=trial')
  if (plan.id === 'growth') return appUrl('/sign-up?intent=growth')
  return sitePath('/enterprise')
}
