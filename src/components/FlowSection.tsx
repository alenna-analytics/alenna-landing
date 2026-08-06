import { FadeIn } from '@/components/ui/FadeIn'
import type { LandingStringKey } from '@/lib/i18n/landing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

const STEPS: Array<{ titleKey: LandingStringKey; descKey: LandingStringKey }> = [
  { titleKey: 'step1Title', descKey: 'step1Desc' },
  { titleKey: 'step2Title', descKey: 'step2Desc' },
  { titleKey: 'step3Title', descKey: 'step3Desc' },
]

export function FlowSection() {
  const { lang } = useLanguage()

  return (
    <section className="flow section" id="flow">
      <div className="container">
        <FadeIn className="flow__head">
          <p className="eyebrow">{landingT(lang, 'howEyebrow')}</p>
          <h2 className="section-heading section-heading--center">{landingT(lang, 'howTitle')}</h2>
        </FadeIn>

        <div className="flow__grid">
          {STEPS.map((step, index) => (
            <FadeIn key={step.titleKey} as="article" className="flow__step" delay={index * 60}>
              <span className="flow__step-num">{index + 1}</span>
              <h3>{landingT(lang, step.titleKey)}</h3>
              <p>{landingT(lang, step.descKey)}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
