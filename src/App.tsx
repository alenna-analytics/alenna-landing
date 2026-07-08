import { LandingPage } from '@/pages/LandingPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { TermsPage } from '@/pages/TermsPage'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { TERMS_PATH } from '@/lib/i18n/terms-strings'
import { currentAppPath } from '@/lib/utils'

export default function App() {
  const path = currentAppPath()

  if (path === PRIVACY_PATH) {
    return <PrivacyPolicyPage />
  }

  if (path === TERMS_PATH) {
    return <TermsPage />
  }

  return <LandingPage />
}
