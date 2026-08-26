import { FaqSection } from '@/components/FaqSection'
import { FinalCtaSection } from '@/components/FinalCtaSection'
import { PricingSection } from '@/components/PricingSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { pricingFaq, pricingPageContent } from '@/lib/i18n/pricing-strings'
import { landingT } from '@/lib/i18n/landing-strings'
import { useLanguage } from '@/providers/language-provider'
import { useEffect } from 'react'

export function PricingPage() {
  const { lang } = useLanguage()
  const content = pricingPageContent(lang)

  useEffect(() => {
    document.title = content.metaTitle
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.metaDescription)
    }
  }, [content.metaDescription, content.metaTitle])

  return (
    <>
      <SiteHeader />
      <main className="plans-page">
        <div className="container plans-page__hero">
          <FadeIn>
            <h1 className="plans-page__title">{content.title}</h1>
            <p className="plans-page__lede">{content.lede}</p>
          </FadeIn>
        </div>
        <PricingSection showIntro={false} />
        <FaqSection id="planes-faq" items={pricingFaq(lang)} title={landingT(lang, 'faqTitle')} />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
