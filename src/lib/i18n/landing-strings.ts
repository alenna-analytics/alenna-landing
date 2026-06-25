import type { Language } from '@/providers/language-provider'

const LANDING_STRINGS = {
  es: {
    brandName: 'alenna',
    navFeatures: 'Funcionalidades',
    navPlans: 'Planes',
    navCta: 'Empezar',
    langEs: 'ES',
    langEn: 'EN',
    heroHeadlineLine1: 'Tu inteligencia comercial',
    heroHeadlineLine2: 'empieza aquí',
    heroSupporting:
      'Conecta Shopify, Amazon, Mercado Libre y tus canales de Ads para transformar tus datos en insights de margen, alertas de inventario y reportes de rentabilidad.',
    heroCtaPrimary: 'Empezar gratis',
    heroCtaSecondary: 'Ver funcionalidades',
    socialProofLabel: 'Conectado con',
    socialProofCaption: 'Integraciones con las plataformas que ya usas.',
    howEyebrow: 'Cómo funciona',
    howTitle: 'De la tienda al insight en minutos',
    step1Title: 'Conecta tu tienda',
    step1Desc:
      'Integra Shopify, Mercado Libre y Amazon con unos pocos clics. Sin código ni configuraciones complejas.',
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
    pricingTitle: 'Elige el plan para tu operación',
    pricingSubtitle: 'Empieza sin compromiso y escala cuando tu negocio lo necesite.',
    starterBadge: '30 días de prueba',
    starterName: 'Starter',
    starterPrice: 'Gratis',
    starterPeriod: 'durante el periodo de prueba',
    starterFeature1: 'Panel y reportes esenciales',
    starterFeature2: 'Hasta 2 integraciones activas',
    starterFeature3: 'Sincronización de pedidos',
    starterFeature4: 'Soporte por email',
    starterCta: 'Probar 30 días',
    proBadge: 'Más popular',
    proName: 'Pro',
    proPrice: '$99',
    proPeriod: 'USD / mes',
    proFeature1: 'Todo lo de Starter',
    proFeature2: 'Integraciones ilimitadas',
    proFeature3: 'Catálogo y gastos operativos',
    proFeature4: 'Historial amplio de pedidos',
    proCta: 'Empezar con Pro',
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
    navCta: 'Get started',
    langEs: 'ES',
    langEn: 'EN',
    heroHeadlineLine1: 'Your commerce intelligence',
    heroHeadlineLine2: 'starts here',
    heroSupporting:
      'Connect Shopify, Amazon, Mercado Libre, and your Ads channels to transform your data into margin insights, inventory alerts, and profitability reports.',
    heroCtaPrimary: 'Start free',
    heroCtaSecondary: 'See features',
    socialProofLabel: 'Connected with',
    socialProofCaption: 'Integrations with the platforms you already use.',
    howEyebrow: 'How it works',
    howTitle: 'From store to insight in minutes',
    step1Title: 'Connect your store',
    step1Desc:
      'Integrate Shopify, Mercado Libre, and Amazon in a few clicks. No code or complex setup.',
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
    pricingTitle: 'Choose the plan for your operation',
    pricingSubtitle: 'Start with no commitment and scale when your business needs it.',
    starterBadge: '30-day trial',
    starterName: 'Starter',
    starterPrice: 'Free',
    starterPeriod: 'during the trial period',
    starterFeature1: 'Essential dashboard and reports',
    starterFeature2: 'Up to 2 active integrations',
    starterFeature3: 'Order synchronization',
    starterFeature4: 'Email support',
    starterCta: 'Try 30 days',
    proBadge: 'Most popular',
    proName: 'Pro',
    proPrice: '$99',
    proPeriod: 'USD / month',
    proFeature1: 'Everything in Starter',
    proFeature2: 'Unlimited integrations',
    proFeature3: 'Catalog and operating expenses',
    proFeature4: 'Extended order history',
    proCta: 'Start with Pro',
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
