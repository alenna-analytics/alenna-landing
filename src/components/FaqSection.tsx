import { FadeIn } from '@/components/ui/FadeIn'
import { landingFaq, landingT, type LandingFaqItem } from '@/lib/i18n/landing-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useId, useState } from 'react'

type FaqSectionProps = {
  id?: string
  items?: LandingFaqItem[]
  eyebrow?: string
  title?: string
  subtitle?: string
}

export function FaqSection({ id = 'faq', items, eyebrow, title, subtitle }: FaqSectionProps) {
  const { lang } = useLanguage()
  const resolvedItems = items ?? landingFaq(lang)
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(resolvedItems[0]?.id ?? null)

  return (
    <section className="faq section" id={id}>
      <div className="container faq__layout">
        <FadeIn className="faq__intro">
          {eyebrow !== undefined || items === undefined ? (
            <p className="eyebrow">{eyebrow ?? landingT(lang, 'faqEyebrow')}</p>
          ) : null}
          <h2 className="section-heading">{title ?? landingT(lang, 'faqTitle')}</h2>
          {subtitle !== undefined || items === undefined ? (
            <p className="section-lede">{subtitle ?? landingT(lang, 'faqSubtitle')}</p>
          ) : null}
        </FadeIn>

        <div className="faq__list">
          {resolvedItems.map((item, index) => {
            const isOpen = openId === item.id
            const panelId = `${baseId}-${item.id}`
            const buttonId = `${panelId}-button`
            const paragraphs = item.answer.split('\n\n')

            return (
              <FadeIn key={item.id} as="article" className="faq__item" delay={index * 40}>
                <h3 className="faq__question">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span>{item.question}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={['faq__panel', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
                >
                  <div className="faq__answer">
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.notes?.map((note) => (
                      <p key={note} className="faq__note">
                        {note}
                      </p>
                    ))}
                    {item.href && item.linkLabel ? (
                      <a href={sitePath(item.href)} className="faq__link">
                        {item.linkLabel}
                      </a>
                    ) : null}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
