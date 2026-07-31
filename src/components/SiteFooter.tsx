import { Button } from '@/components/ui/Button'
import { LangToggle } from '@/components/LangToggle'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { TERMS_PATH } from '@/lib/i18n/terms-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { appUrl, publicAsset, sitePath } from '@/lib/utils'
import { useLanguage, type Language } from '@/providers/language-provider'

const CONTACT_EMAIL = 'contacto@alenna.io'

export function SiteFooter() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="footer__brand-band">
        <div className="container footer__brand-inner">
          <div className="footer__brand-copy">
            <a href={sitePath('/')} className="footer__logo" aria-label={landingT(lang, 'brandName')}>
              <img
                src={publicAsset('assets/alenna-logo.svg')}
                alt={landingT(lang, 'brandName')}
                width={110}
                height={22}
              />
            </a>
            <p className="footer__tagline">{landingT(lang, 'footerTagline')}</p>
          </div>
          <Button href={appUrl()} variant="primary" className="footer__cta">
            {landingT(lang, 'footerCta')}
          </Button>
        </div>
      </div>

      <div className="container footer__links-row">
        <nav className="footer__nav" aria-label="Footer">
          <a href={sitePath('/#modules')}>{landingT(lang, 'modulesEyebrow')}</a>
          <a href={sitePath('/#features')}>{landingT(lang, 'navFeatures')}</a>
          <a href={sitePath('/#pricing')}>{landingT(lang, 'navPlans')}</a>
          <a href={sitePath('/#how-it-works')}>{landingT(lang, 'howEyebrow')}</a>
          <a href={sitePath(INTEGRATIONS_PATH)}>{landingT(lang, 'footerIntegrations')}</a>
          <a href={sitePath(PRIVACY_PATH)}>{landingT(lang, 'footerPrivacy')}</a>
          <a href={sitePath(TERMS_PATH)}>{landingT(lang, 'footerTerms')}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
        <LangToggle />
      </div>

      <div className="container footer__bar">
        <p className="footer__legal">
          <LegalFooterLine lang={lang} />
        </p>
        <p className="footer__copyright">{landingT(lang, 'footerCopyright', { year })}</p>
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
      <a href={`mailto:${CONTACT_EMAIL}`} className="footer__legal-email">
        {CONTACT_EMAIL}
      </a>
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
