import { FaqSection } from '@/components/FaqSection'
import { FinalCtaSection } from '@/components/FinalCtaSection'
import { FlowSection } from '@/components/FlowSection'
import { HeroSection } from '@/components/HeroSection'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { PricingSection } from '@/components/PricingSection'
import { ProductSection } from '@/components/ProductSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function LandingPage() {
  const { lang } = useLanguage()

  useEffect(() => {
    document.title = `Alenna — ${landingT(lang, 'brandSlogan')}`
  }, [lang])

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductSection />
        <IntegrationsSection />
        <FlowSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
