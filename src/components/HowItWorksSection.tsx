import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

const STEPS: Array<{ number: string; titleKey: LandingStringKey; descKey: LandingStringKey }> = [
  { number: '01', titleKey: 'step1Title', descKey: 'step1Desc' },
  { number: '02', titleKey: 'step2Title', descKey: 'step2Desc' },
  { number: '03', titleKey: 'step3Title', descKey: 'step3Desc' },
]

export function HowItWorksSection() {
  const { lang } = useLanguage()

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <FadeIn>
          <header className="section-header">
            <p className="section-eyebrow">{landingT(lang, 'howEyebrow')}</p>
            <h2 className="section-title">{landingT(lang, 'howTitle')}</h2>
          </header>
        </FadeIn>
        <div className="timeline" role="list">
          {STEPS.map((step, index) => (
            <FadeIn key={step.number} as="article" className="timeline__item">
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__number">{step.number}</span>
                {index < STEPS.length - 1 ? <span className="timeline__line" /> : null}
              </div>
              <div className="timeline__body">
                <h3 className="timeline__title">{landingT(lang, step.titleKey)}</h3>
                <p className="timeline__desc">{landingT(lang, step.descKey)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
