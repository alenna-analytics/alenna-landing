import { LandingPage } from '@/pages/LandingPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed.length > 0 ? trimmed : '/'
}

export default function App() {
  const path = normalizePath(window.location.pathname)

  if (path === PRIVACY_PATH) {
    return <PrivacyPolicyPage />
  }

  return <LandingPage />
}
