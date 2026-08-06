import { PlanRecommendation } from '@/components/enterprise/PlanRecommendation'
import type { PlanRecommendationContent } from '@/lib/i18n/enterprise-strings'
import {
  MONTHLY_ORDER_RANGES,
  recommendedPlanForRange,
  type MonthlyOrderRange,
} from '@/lib/enterprise-form'
import { useEffect, useId, useRef, useState } from 'react'

type MonthlyOrdersSelectProps = {
  label: string
  placeholder: string
  options: Record<MonthlyOrderRange, string>
  recommendationContent: PlanRecommendationContent
  value: MonthlyOrderRange | ''
  onChange: (value: MonthlyOrderRange) => void
}

export function MonthlyOrdersSelect({
  label,
  placeholder,
  options,
  recommendationContent,
  value,
  onChange,
}: MonthlyOrdersSelectProps) {
  const listboxId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const recommendedPlan = recommendedPlanForRange(value)

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  function selectOption(range: MonthlyOrderRange) {
    onChange(range)
    setOpen(false)
  }

  const triggerLabel = value ? options[value] : placeholder

  return (
    <div className="enterprise-form__field order-select" ref={rootRef}>
      <span id={`${listboxId}-label`}>{label}</span>

      <input type="hidden" name="monthly_orders_range" value={value} required />

      <button
        type="button"
        className={['order-select__trigger', open ? 'is-open' : '', value ? 'has-value' : ''].filter(Boolean).join(' ')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listboxId}-label`}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? '' : 'order-select__placeholder'}>{triggerLabel}</span>
        <svg className="order-select__chevron" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
          <path
            d="M1 1.5L6 6.5L11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul className="order-select__menu" id={listboxId} role="listbox" aria-labelledby={`${listboxId}-label`}>
          {MONTHLY_ORDER_RANGES.map((range) => (
            <li key={range} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === range}
                className={['order-select__option', value === range ? 'is-selected' : ''].filter(Boolean).join(' ')}
                onClick={() => selectOption(range)}
              >
                {options[range]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {recommendedPlan ? (
        <PlanRecommendation key={recommendedPlan} plan={recommendedPlan} content={recommendationContent} />
      ) : null}
    </div>
  )
}
