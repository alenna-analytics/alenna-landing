import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { PRIVACY_PATH, privacyContent } from '@/lib/i18n/privacy-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function PrivacyPolicyPage() {
  const { lang } = useLanguage()
  const content = privacyContent(lang)

  useEffect(() => {
    document.title = content.metaTitle
  }, [content.metaTitle])

  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <a href="/" className="legal-page__back">
            ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </a>
          <h1 className="legal-page__title">{content.title}</h1>
          <p className="legal-page__updated">{content.updated}</p>
          <p className="legal-page__intro">{content.intro}</p>

          {content.sections.map((section) => (
            <section key={section.title} className="legal-page__section">
              <h2 className="legal-page__heading">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="legal-page__paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="legal-page__section">
            <h2 className="legal-page__heading">{content.contactLabel}</h2>
            <p className="legal-page__paragraph">
              <a href={`mailto:${content.contactEmail}`} className="legal-page__email">
                {content.contactEmail}
              </a>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export { PRIVACY_PATH }
