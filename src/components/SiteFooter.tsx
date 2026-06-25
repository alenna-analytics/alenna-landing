import { LangToggle } from '@/components/LangToggle'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'

const LOGO_SRC = '/assets/alenna-logo-white.svg'
const CONTACT_EMAIL = 'contacto@alenna.io'

export function SiteFooter() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__cols">
          <div className="footer__col">
            <a href="/#features">{landingT(lang, 'navFeatures')}</a>
            <a href="/#pricing">{landingT(lang, 'navPlans')}</a>
            <a href="/#how-it-works">{landingT(lang, 'howEyebrow')}</a>
          </div>
          <div className="footer__col">
            <a href="/#features">{landingT(lang, 'feature1Title')}</a>
            <a href="/#features">{landingT(lang, 'feature3Title')}</a>
            <a href="/#features">{landingT(lang, 'feature4Title')}</a>
          </div>
          <div className="footer__col">
            <p className="footer__col-label">{landingT(lang, 'footerContact')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer__email">
              {CONTACT_EMAIL}
            </a>
            <a href={PRIVACY_PATH}>{landingT(lang, 'footerPrivacy')}</a>
          </div>
          <div className="footer__col">
            <a href="#">{landingT(lang, 'footerTerms')}</a>
          </div>
        </div>

        <div className="footer__aside">
          <LangToggle variant="dark" />
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        <img src={LOGO_SRC} alt="" />
      </div>

      <div className="container footer__bar">
        <p className="footer__copyright">{landingT(lang, 'footerCopyright', { year })}</p>
      </div>
    </footer>
  )
}
