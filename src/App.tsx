import { EnterprisePage } from '@/pages/EnterprisePage'
import { IntegrationsPage } from '@/pages/IntegrationsPage'
import { LandingPage } from '@/pages/LandingPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { TermsPage } from '@/pages/TermsPage'
import { ENTERPRISE_PATH } from '@/lib/i18n/enterprise-strings'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
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

  if (path === INTEGRATIONS_PATH) {
    return <IntegrationsPage />
  }

  if (path === ENTERPRISE_PATH) {
    return <EnterprisePage />
  }

  return <LandingPage />
}
