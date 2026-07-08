import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { TERMS_PATH, termsContent } from '@/lib/i18n/terms-strings'
import { sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function TermsPage() {
  const { lang } = useLanguage()
  const content = termsContent(lang)

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
          <p className="legal-page__intro legal-page__intro--placeholder">{content.placeholder}</p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

export { TERMS_PATH }
