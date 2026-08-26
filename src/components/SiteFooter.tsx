import { LangToggle } from '@/components/LangToggle'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { TERMS_PATH } from '@/lib/i18n/terms-strings'
import { publicAsset, sitePath } from '@/lib/utils'
import { useLanguage, type Language } from '@/providers/language-provider'

const CONTACT_EMAIL = 'contacto@alenna.io'

export function SiteFooter() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <a href={sitePath('/')} className="site-footer__logo" aria-label={landingT(lang, 'brandName')}>
            <img
              src={publicAsset('assets/alenna-logo-white.svg')}
              alt={landingT(lang, 'brandName')}
              width={100}
              height={20}
            />
          </a>
          <p className="site-footer__tagline">{landingT(lang, 'footerTagline')}</p>
        </div>

        <nav className="site-footer__columns" aria-label="Footer">
          <div className="site-footer__col">
            <p className="site-footer__heading">{landingT(lang, 'footerProduct')}</p>
            <a href={sitePath(INTEGRATIONS_PATH)}>{landingT(lang, 'footerIntegrations')}</a>
            <a href={sitePath('/#pricing')}>{landingT(lang, 'navPlans')}</a>
            <a href={sitePath('/#flow')}>{landingT(lang, 'navHowItWorks')}</a>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__heading">{landingT(lang, 'footerResources')}</p>
            <a href={sitePath('/#faq')}>{landingT(lang, 'navFaq')}</a>
          </div>

          <div className="site-footer__col">
            <p className="site-footer__heading">{landingT(lang, 'footerLegal')}</p>
            <a href={sitePath(PRIVACY_PATH)}>{landingT(lang, 'footerPrivacy')}</a>
            <a href={sitePath(TERMS_PATH)}>{landingT(lang, 'footerTerms')}</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{landingT(lang, 'footerContact')}</a>
          </div>
        </nav>
      </div>

      <div className="container site-footer__legal">
        <div>
          <p>
            <LegalFooterLine lang={lang} />
          </p>
          <p>{landingT(lang, 'footerCopyright', { year })}</p>
        </div>
        <LangToggle variant="dark" />
      </div>
    </footer>
  )
}

function LegalFooterLine({ lang }: { lang: Language }) {
  const line = landingT(lang, 'footerLegalLine')
  const [beforeEmail, afterEmail] = splitAtEmail(line, CONTACT_EMAIL)

  return (
    <>
      {beforeEmail}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      {afterEmail}
    </>
  )
}

function splitAtEmail(line: string, email: string): [string, string] {
  const index = line.indexOf(email)
  if (index === -1) {
    return [line, '']
  }
  return [line.slice(0, index), line.slice(index + email.length)]
}
