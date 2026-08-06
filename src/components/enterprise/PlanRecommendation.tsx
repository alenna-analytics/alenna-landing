import type { PlanRecommendationContent } from '@/lib/i18n/enterprise-strings'
import type { RecommendedPlan } from '@/lib/enterprise-form'
import { planHref } from '@/lib/pricing-links'

type PlanRecommendationProps = {
  plan: RecommendedPlan
  content: PlanRecommendationContent
}

export function PlanRecommendation({ plan, content }: PlanRecommendationProps) {
  const copy = content[plan]

  return (
    <div className={`plan-tip plan-tip--${plan}`} role="status">
      <div className="plan-tip__accent" aria-hidden="true" />
      <div className="plan-tip__body">
        <p className="plan-tip__eyebrow">{copy.eyebrow}</p>
        <p className="plan-tip__title">{copy.title}</p>
        <p className="plan-tip__desc">{copy.description}</p>
        <a href={planHref({ id: plan })} className="plan-tip__cta">
          {copy.cta}
          <span className="plan-tip__cta-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </div>
  )
}
