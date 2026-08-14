import { FadeIn } from '@/components/ui/FadeIn'
import { landingFaq, landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useId, useState } from 'react'

export function FaqSection() {
  const { lang } = useLanguage()
  const items = landingFaq(lang)
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <section className="faq section" id="faq">
      <div className="container faq__layout">
        <FadeIn className="faq__intro">
          <p className="eyebrow">{landingT(lang, 'faqEyebrow')}</p>
          <h2 className="section-heading">{landingT(lang, 'faqTitle')}</h2>
          <p className="section-lede">{landingT(lang, 'faqSubtitle')}</p>
        </FadeIn>

        <div className="faq__list">
          {items.map((item, index) => {
            const isOpen = openId === item.id
            const panelId = `${baseId}-${item.id}`
            const buttonId = `${panelId}-button`

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
                    <p>{item.answer}</p>
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
