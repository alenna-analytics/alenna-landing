import { FeaturesSection } from '@/components/FeaturesSection'
import { FinalCtaSection } from '@/components/FinalCtaSection'
import { HeroSection } from '@/components/HeroSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { PricingSection } from '@/components/PricingSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntegrationsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
