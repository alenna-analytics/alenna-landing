import { LangToggle } from '@/components/LangToggle'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { publicAsset, sitePath } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

const CONTACT_EMAIL = 'contacto@alenna.io'

export function SiteFooter() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__cols">
          <div className="footer__col">
            <a href={sitePath('/#features')}>{landingT(lang, 'navFeatures')}</a>
            <a href={sitePath('/#pricing')}>{landingT(lang, 'navPlans')}</a>
            <a href={sitePath('/#how-it-works')}>{landingT(lang, 'howEyebrow')}</a>
          </div>
          <div className="footer__col">
            <a href={sitePath('/#features')}>{landingT(lang, 'feature1Title')}</a>
            <a href={sitePath('/#features')}>{landingT(lang, 'feature3Title')}</a>
            <a href={sitePath('/#features')}>{landingT(lang, 'feature4Title')}</a>
          </div>
          <div className="footer__col">
            <p className="footer__col-label">{landingT(lang, 'footerContact')}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="footer__email">
              {CONTACT_EMAIL}
            </a>
            <a href={sitePath(PRIVACY_PATH)}>{landingT(lang, 'footerPrivacy')}</a>
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
        <img src={publicAsset('assets/alenna-logo-white.svg')} alt="" />
      </div>

      <div className="container footer__bar">
        <p className="footer__copyright">{landingT(lang, 'footerCopyright', { year })}</p>
      </div>
    </footer>
  )
}
