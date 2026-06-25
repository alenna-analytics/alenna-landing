import { FeaturesSection } from '@/components/FeaturesSection'
import { FinalCtaSection } from '@/components/FinalCtaSection'
import { HeroSection } from '@/components/HeroSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { PricingSection } from '@/components/PricingSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SocialProofSection } from '@/components/SocialProofSection'

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
