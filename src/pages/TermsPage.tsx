import { LegalDocLayout } from '@/components/LegalDocLayout'
import { LegalSections } from '@/components/LegalSections'
import { LegalText } from '@/components/LegalText'
import { OVERVIEW_ID, sectionAnchor } from '@/lib/section-anchor'
import { TERMS_PATH, termsContent } from '@/lib/i18n/terms-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function TermsPage() {
  const { lang } = useLanguage()
  const content = termsContent(lang)
  const overviewLabel = landingT(lang, 'legalOverview')

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  const toc = [
    { id: OVERVIEW_ID, label: overviewLabel },
    ...content.sections.map((section) => ({
      id: sectionAnchor(section.title, section.id),
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

export { TERMS_PATH }
