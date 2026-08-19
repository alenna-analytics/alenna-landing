import { LegalDocLayout } from '@/components/LegalDocLayout'
import { LegalSections } from '@/components/LegalSections'
import { LegalText } from '@/components/LegalText'
import { OVERVIEW_ID, sectionAnchor } from '@/lib/section-anchor'
import { PRIVACY_PATH, privacyContent } from '@/lib/i18n/privacy-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function PrivacyPolicyPage() {
  const { lang } = useLanguage()
  const content = privacyContent(lang)
  const overviewLabel = landingT(lang, 'legalOverview')

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  const toc = [
    { id: OVERVIEW_ID, label: overviewLabel },
    ...content.sections.map((section) => ({
      id: sectionAnchor(section.title),
      label: section.title,
    })),
  ]

  return (
    <LegalDocLayout title={content.title} updated={content.updated} toc={toc}>
      <section className="legal-page__section" id={OVERVIEW_ID}>
        <h2 className="legal-page__heading">{overviewLabel}</h2>
        <p className="legal-page__intro">
          <LegalText text={content.intro} />
        </p>
      </section>
      <LegalSections sections={content.sections} />
    </LegalDocLayout>
  )
}

export { PRIVACY_PATH }
