import { LegalListItem, LegalText } from '@/components/LegalText'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { PRIVACY_PATH, privacyContent } from '@/lib/i18n/privacy-strings'
import { sitePath } from '@/lib/utils'
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
          <a href={sitePath('/')} className="legal-page__back">
            ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
          </a>
          <p className="legal-page__brand">{content.brandLabel}</p>
          <h1 className="legal-page__title">{content.title}</h1>
          <p className="legal-page__updated">{content.updated}</p>
          <p className="legal-page__intro">
            <LegalText text={content.intro} />
          </p>

          {content.sections.map((section) => (
            <section key={section.title} className="legal-page__section">
              <h2 className="legal-page__heading">{section.title}</h2>
              {section.blocks.map((block, index) => {
                const key = `${section.title}-${index}`

                if (block.kind === 'h3') {
                  return (
                    <h3 key={key} className="legal-page__subheading">
                      {block.text}
                    </h3>
                  )
                }

                if (block.kind === 'ul') {
                  return (
                    <ul key={key} className="legal-page__list">
                      {block.items.map((item) => (
                        <li key={item}>
                          <LegalListItem text={item} />
                        </li>
                      ))}
                    </ul>
                  )
                }

                return (
                  <p key={key} className="legal-page__paragraph">
                    <LegalText text={block.text} />
                  </p>
                )
              })}
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export { PRIVACY_PATH }
