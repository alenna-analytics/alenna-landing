import { FinalCtaSection } from '@/components/FinalCtaSection'
import { FlowSection } from '@/components/FlowSection'
import { HeroSection } from '@/components/HeroSection'
import { PricingSection } from '@/components/PricingSection'
import { ProductSection } from '@/components/ProductSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductSection />
        <FlowSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
