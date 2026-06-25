import { LandingPage } from '@/pages/LandingPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { currentAppPath } from '@/lib/utils'

export default function App() {
  const path = currentAppPath()

  if (path === PRIVACY_PATH) {
    return <PrivacyPolicyPage />
  }

  return <LandingPage />
}
