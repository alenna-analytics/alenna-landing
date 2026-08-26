import { useEffect } from 'react'

import { EnterprisePage } from '@/pages/EnterprisePage'
import { IntegrationDetailPage } from '@/pages/IntegrationDetailPage'
import { IntegrationsPage } from '@/pages/IntegrationsPage'
import { LandingPage } from '@/pages/LandingPage'
import { PricingPage } from '@/pages/PricingPage'
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage'
import { TermsPage } from '@/pages/TermsPage'
import {
  AMAZON_ADS_CANONICAL_PATH,
  AMAZON_ADS_LEGACY_PATH,
  parseIntegrationsDetailSlug,
} from '@/lib/integrations-catalog'
import { ENTERPRISE_PATH } from '@/lib/i18n/enterprise-strings'
import { INTEGRATIONS_PATH } from '@/lib/i18n/integrations-strings'
import { PRICING_PATH } from '@/lib/i18n/pricing-strings'
import { PRIVACY_PATH } from '@/lib/i18n/privacy-strings'
import { TERMS_PATH } from '@/lib/i18n/terms-strings'
import { currentAppPath, sitePath } from '@/lib/utils'

function RedirectTo({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(sitePath(to))
  }, [to])
  return null
}

export default function App() {
  const path = currentAppPath()

  if (path === PRICING_PATH) {
    return <PricingPage />
  }

  if (path === PRIVACY_PATH) {
    return <PrivacyPolicyPage />
  }

  if (path === TERMS_PATH) {
    return <TermsPage />
  }

  if (path === AMAZON_ADS_LEGACY_PATH) {
    return <RedirectTo to={AMAZON_ADS_CANONICAL_PATH} />
  }

  if (path === INTEGRATIONS_PATH) {
    return <IntegrationsPage />
  }

  if (path.startsWith(`${INTEGRATIONS_PATH}/`)) {
    const slug = parseIntegrationsDetailSlug(path)
    if (slug) {
      return <IntegrationDetailPage slug={slug} />
    }
    return <RedirectTo to={INTEGRATIONS_PATH} />
  }

  if (path === ENTERPRISE_PATH) {
    return <EnterprisePage />
  }

  return <LandingPage />
}
