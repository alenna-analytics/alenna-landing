import type { Language } from '@/providers/language-provider'

const LANDING_STRINGS = {
  es: {
    brandName: 'alenna',
    navFeatures: 'Funcionalidades',
    navPlans: 'Planes',
    navLogin: 'Iniciar sesión',
    navCta: 'Empezar',
    langEs: 'ES',
    langEn: 'EN',
    heroHeadlineLine1: 'Tu inteligencia comercial',
    heroHeadlineLine2: 'empieza aquí',
    heroSupporting:
      'Conecta Shopify y Mercado Libre para transformar tus datos en insights de margen, alertas de inventario y reportes de rentabilidad. Amazon y canales de publicidad próximamente.',
    heroCtaPrimary: 'Empezar gratis',
    heroCtaSecondary: 'Ver funcionalidades',
    integrationsEyebrow: 'Integraciones',
    integrationsAvailableLabel: 'Disponibles ahora',
    integrationsComingSoonLabel: 'Próximamente',
    integrationShopify: 'Shopify',
    integrationMercadoLibre: 'Mercado Libre',
    integrationAmazonSoon: 'Amazon',
    integrationAdsSoon: 'Google Ads y Meta Ads',
    integrationsCaption: 'Conecta tus canales de venta y unifica métricas en un solo panel.',
    howEyebrow: 'Cómo funciona',
    howTitle: 'De la tienda al insight en minutos',
    step1Title: 'Conecta tu tienda',
    step1Desc:
      'Conecta Shopify y Mercado Libre en pocos clics. Amazon estará disponible pronto. Sin código ni configuraciones complejas.',
    step2Title: 'Sincronizamos tus datos',
    step2Desc:
      'Importamos pedidos, productos y costos automáticamente. Tus métricas se actualizan para que siempre trabajes con datos al día.',
    step3Title: 'Analiza y decide',
    step3Desc:
      'Visualiza márgenes, alertas de inventario y rentabilidad por canal. Toma decisiones con información clara, no con intuición.',
    featuresEyebrow: 'Funcionalidades',
    featuresTitle: 'Todo lo que necesitas para crecer con margen',
    featuresSubtitle:
      'Un panel unificado para entender la rentabilidad real de tu operación multicanal.',
    feature1Title: 'Margen por producto',
    feature1Desc:
      'Conoce la utilidad real de cada SKU, descontando costos y comisiones por canal.',
    feature2Title: 'Alertas de inventario',
    feature2Desc:
      'Recibe avisos antes de quedarte sin stock en tus productos de mayor rotación.',
    feature3Title: 'Reportes de rentabilidad',
    feature3Desc:
      'EBITDA, contribución marginal y utilidad bruta sin hojas de cálculo dispersas.',
    feature4Title: 'Análisis por canal',
    feature4Desc:
      'Compara el desempeño de cada marketplace y tienda propia en un solo lugar.',
    feature5Title: 'Comparación de periodos',
    feature5Desc:
      'Mide el impacto de campañas y estacionalidad comparando semanas, meses o años.',
    feature6Title: 'Vista unificada',
    feature6Desc:
      'KPIs, gráficos y alertas en un panel centralizado para toda tu operación.',
    pricingEyebrow: 'Planes',
    pricingTitle: 'Un plan con acceso completo',
    pricingSubtitle:
      'Prueba Alenna 30 días gratis. Después, un solo plan de USD 99 al mes con todas las funcionalidades incluidas.',
    planBadge: '30 días de prueba gratis',
    planName: 'Alenna',
    planPrice: '$99',
    planPeriod: 'USD / mes · acceso completo tras la prueba',
    planFeature1: 'Panel, KPIs y reportes de rentabilidad',
    planFeature2: 'Integraciones con Shopify y Mercado Libre',
    planFeature3: 'Sincronización de pedidos, catálogo e inventario',
    planFeature4: 'Gastos operativos y análisis por canal',
    planFeature5: 'Alertas de inventario y comparación de periodos',
    planFeature6: 'Soporte por email',
    planCta: 'Empezar prueba gratis',
    finalCtaTitle: 'Empieza gratis hoy.',
    finalCtaSubtext:
      'Conecta tu tienda en minutos y descubre la rentabilidad real de tu ecommerce.',
    finalCtaButton: 'Crear cuenta gratis',
    footerTagline: 'Inteligencia comercial para ecommerce',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerLegal: 'Legal',
    footerContact: 'Contacto',
    footerPrivacy: 'Privacidad',
    footerTerms: 'Términos de uso',
    footerCopyright: '© {year} Alenna Analytics. Todos los derechos reservados.',
  },
  en: {
    brandName: 'alenna',
    navFeatures: 'Features',
    navPlans: 'Plans',
    navLogin: 'Sign in',
    navCta: 'Get started',
    langEs: 'ES',
    langEn: 'EN',
    heroHeadlineLine1: 'Your commerce intelligence',
    heroHeadlineLine2: 'starts here',
    heroSupporting:
      'Connect Shopify and Mercado Libre to transform your data into margin insights, inventory alerts, and profitability reports. Amazon and advertising channels coming soon.',
    heroCtaPrimary: 'Start free',
    heroCtaSecondary: 'See features',
    integrationsEyebrow: 'Integrations',
    integrationsAvailableLabel: 'Available now',
    integrationsComingSoonLabel: 'Coming soon',
    integrationShopify: 'Shopify',
    integrationMercadoLibre: 'Mercado Libre',
    integrationAmazonSoon: 'Amazon',
    integrationAdsSoon: 'Google Ads and Meta Ads',
    integrationsCaption: 'Connect your sales channels and unify metrics in one dashboard.',
    howEyebrow: 'How it works',
    howTitle: 'From store to insight in minutes',
    step1Title: 'Connect your store',
    step1Desc:
      'Connect Shopify and Mercado Libre in a few clicks. Amazon will be available soon. No code or complex setup.',
    step2Title: 'We sync your data',
    step2Desc:
      'We import orders, products, and costs automatically. Your metrics stay up to date so you always work with fresh data.',
    step3Title: 'Analyze and decide',
    step3Desc:
      'View margins, inventory alerts, and channel profitability. Make decisions with clear information, not guesswork.',
    featuresEyebrow: 'Features',
    featuresTitle: 'Everything you need to grow with margin',
    featuresSubtitle:
      'A unified dashboard to understand the real profitability of your multi-channel operation.',
    feature1Title: 'Margin per product',
    feature1Desc: 'Know the real profit of each SKU, after costs and channel fees.',
    feature2Title: 'Inventory alerts',
    feature2Desc: 'Get notified before you run out of stock on your best-selling products.',
    feature3Title: 'Profitability reports',
    feature3Desc: 'EBITDA, marginal contribution, and gross profit without scattered spreadsheets.',
    feature4Title: 'Channel analysis',
    feature4Desc: 'Compare performance across every marketplace and owned store in one place.',
    feature5Title: 'Period comparison',
    feature5Desc: 'Measure campaign and seasonality impact by comparing weeks, months, or years.',
    feature6Title: 'Unified view',
    feature6Desc: 'KPIs, charts, and alerts in one centralized dashboard for your entire operation.',
    pricingEyebrow: 'Plans',
    pricingTitle: 'One plan, full access',
    pricingSubtitle:
      'Try Alenna free for 30 days. Then one plan at USD 99 per month with every feature included.',
    planBadge: '30-day free trial',
    planName: 'Alenna',
    planPrice: '$99',
    planPeriod: 'USD / month · full access after trial',
    planFeature1: 'Dashboard, KPIs, and profitability reports',
    planFeature2: 'Shopify and Mercado Libre integrations',
    planFeature3: 'Order, catalog, and inventory sync',
    planFeature4: 'Operating expenses and channel analysis',
    planFeature5: 'Inventory alerts and period comparison',
    planFeature6: 'Email support',
    planCta: 'Start free trial',
    finalCtaTitle: 'Start free today.',
    finalCtaSubtext:
      'Connect your store in minutes and discover the real profitability of your ecommerce.',
    finalCtaButton: 'Create free account',
    footerTagline: 'Commerce intelligence for ecommerce',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms of use',
    footerCopyright: '© {year} Alenna Analytics. All rights reserved.',
  },
} as const

export type LandingStringKey = keyof (typeof LANDING_STRINGS)['es']

export function landingT(
  lang: Language,
  key: LandingStringKey,
  vars?: Record<string, string | number>,
): string {
  const table = LANDING_STRINGS[lang]
  let text: string = table[key] ?? LANDING_STRINGS.es[key] ?? key
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replaceAll(`{${k}}`, String(v))
    }
  }
  return text
}
