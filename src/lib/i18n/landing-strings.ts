import type { Language } from '@/providers/language-provider'

const LANDING_STRINGS = {
  es: {
    brandName: 'alenna',
    navProduct: 'Producto',
    navHowItWorks: 'Cómo funciona',
    navIntegrations: 'Integraciones',
    navFeatures: 'Funcionalidades',
    navPlans: 'Planes',
    navLogin: 'Iniciar sesión',
    navCta: 'Empezar',
    langEs: 'ES',
    langEn: 'EN',
    heroEyebrow: 'Inteligencia comercial para ecommerce',
    heroHeadlineLead: 'Todo tu negocio',
    heroHeadlineHighlight: 'consolidado',
    heroHeadlineEnd: 'en un solo lugar.',
    heroHeadlineLine1: 'Todo tu negocio',
    heroHeadlineAccent: 'consolidado en un solo lugar.',
    brandSlogan: 'Todo tu negocio consolidado en un solo lugar',
    heroSupporting:
      'Conecta tus canales de venta y publicidad. De gestionar datos a decidir con claridad.',
    heroCtaPrimary: 'Empezar gratis',
    heroCtaSecondary: 'Ver el producto',
    heroStatTrial: '15 días de prueba en Basic',
    heroStatModules: 'Todos los módulos incluidos',
    heroStatSync: 'Sync automático de pedidos y catálogo',
    modulesEyebrow: 'El producto',
    modulesTitle: 'Un panel para toda tu operación',
    modulesSubtitle:
      'Desde el resumen diario hasta COGS y reportes: lo que ya usas en Alenna, explicado en la landing.',
    moduleHome: 'Inicio',
    moduleHomeDesc: 'KPIs, tendencias y vista general de tu negocio.',
    moduleProducts: 'Productos',
    moduleProductsDesc: 'Catálogo, COGS y margen por SKU.',
    moduleSales: 'Ventas',
    moduleSalesDesc: 'Pedidos, ingresos y desglose por periodo.',
    moduleReports: 'Reportes',
    moduleReportsDesc: 'EBITDA, contribución marginal y utilidad.',
    moduleAds: 'Publicidad',
    moduleAdsDesc: 'ROAS y gasto publicitario unificado.',
    moduleChannels: 'Canales',
    moduleChannelsDesc: 'Compara marketplaces y tienda propia.',
    moduleSimulations: 'Simulaciones',
    moduleSimulationsDesc: 'Proyecta escenarios antes de decidir.',
    moduleIntegrations: 'Integraciones',
    moduleIntegrationsDesc: 'Conecta Shopify o Mercado Libre y sincroniza pedidos y catálogo.',
    integrationsEyebrow: 'Integraciones',
    integrationsAvailableLabel: 'Disponibles ahora',
    integrationsComingSoonLabel: 'Próximamente',
    integrationShopify: 'Shopify',
    integrationMercadoLibre: 'Mercado Libre',
    integrationAmazon: 'Amazon',
    integrationAmazonSoon: 'Amazon',
    integrationTiendaNube: 'Tienda Nube',
    integrationWooCommerce: 'WooCommerce',
    integrationAdsSoon: 'Google Ads y Meta Ads',
    integrationsStripCaption: 'Integraciones disponibles hoy',
    integrationsCaption: 'Shopify y Mercado Libre conectan hoy. Amazon llegará pronto.',
    integrationStatusLive: 'Disponible',
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
    pricingTitle: 'Basic, Growth o a medida',
    pricingTitleMinimal: 'Planes',
    pricingSubtitle:
      'Prueba Basic 15 días gratis. Todos los planes incluyen todos los módulos e integraciones ilimitadas.',
    planIncludesLabel: 'Incluye:',
    planBasicBadge: '15 días de prueba gratis',
    planBasicName: 'Basic',
    planBasicTagline: '15 días de prueba gratis',
    planBasicPrice: '$30',
    planBasicPriceCompact: '$30/mes',
    planBasicPeriod: 'USD / mes',
    planBasicOrdersLimit: 'Hasta 1,000 pedidos sincronizados al mes',
    planBasicProductsLimit: '500 productos',
    planBasicUsersLimit: 'Hasta 3 usuarios por espacio de trabajo',
    planBasicRolesLimit: '3 roles de acceso predefinidos para asignar a tus usuarios',
    planBasicCta: 'Empezar prueba gratis',
    planGrowthName: 'Growth',
    planGrowthTagline: 'Para equipos que están creciendo',
    planGrowthPrice: '$60',
    planGrowthPriceCompact: '$60/mes',
    planGrowthPeriod: 'USD / mes',
    planGrowthOrdersLimit: 'Hasta 5,000 pedidos sincronizados al mes',
    planGrowthProductsLimit: '2,000 productos',
    planGrowthUsersLimit: 'Hasta 5 usuarios por espacio de trabajo',
    planGrowthRolesLimit:
      '5 roles de acceso (4 configurables y 1 propietario) para asignar a tus usuarios',
    planGrowthBadge: 'Más popular',
    planGrowthIncludesPrior: 'Todo lo de Basic, y además:',
    planGrowthCta: 'Empezar con Growth',
    planCustomName: 'Enterprise',
    planCustomTagline: 'Para grandes empresas que operan a escala',
    planCustomPrice: 'A medida',
    planCustomPriceCompact: 'A medida',
    planCustomPeriod: 'Límites y precio a medida',
    planCustomLimits: 'Volúmenes y requisitos personalizados',
    planCustomUsersLimit: 'Hasta 10 usuarios por espacio de trabajo',
    planCustomIncludesPrior: 'Todo lo de Growth, y además:',
    planCustomCta: 'Contáctanos',
    planFeatureCore:
      'Todos los módulos, integraciones ilimitadas, reportes multicanal, sync y soporte por email',
    planFeatureModules: 'Todos los módulos incluidos',
    planFeatureIntegrations: 'Integraciones ilimitadas',
    planFeatureReports: 'Reportes de rentabilidad multicanal',
    planFeatureSync: 'Sincronización de pedidos y catálogo',
    planFeatureSupport: 'Soporte por email',
    finalCtaTitle: 'Empieza gratis hoy.',
    finalCtaSubtext:
      'Conecta tu tienda en minutos y descubre la rentabilidad real de tu ecommerce.',
    finalCtaButton: 'Crear cuenta gratis',
    footerTagline: 'Todo tu negocio consolidado en un solo lugar',
    footerCta: 'Crear cuenta gratis',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerLegal: 'Legal',
    footerContact: 'Contacto',
    footerPrivacy: 'Privacidad',
    footerTerms: 'Términos de uso',
    footerIntegrations: 'Integraciones',
    footerLegalLine:
      'Alenna Analytics · Operado por Sergio Garnica González · Querétaro, México · contacto@alenna.io',
    footerCopyright: '© {year} Alenna Analytics. Todos los derechos reservados.',
    navFaq: 'FAQ',
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Lo que suelen preguntar los equipos de ecommerce',
    faqSubtitle: 'Canales, datos, márgenes y planes, en un solo lugar.',
  },
  en: {
    brandName: 'alenna',
    navProduct: 'Product',
    navHowItWorks: 'How it works',
    navIntegrations: 'Integrations',
    navFeatures: 'Features',
    navPlans: 'Plans',
    navLogin: 'Sign in',
    navCta: 'Get started',
    langEs: 'ES',
    langEn: 'EN',
    heroEyebrow: 'Commerce intelligence for ecommerce',
    heroHeadlineLead: 'Your entire business',
    heroHeadlineHighlight: 'consolidated',
    heroHeadlineEnd: 'in one place.',
    heroHeadlineLine1: 'Your entire business',
    heroHeadlineAccent: 'consolidated in one place.',
    brandSlogan: 'Your entire business consolidated in one place',
    heroSupporting:
      'Connect your sales and advertising channels. From managing data to deciding with clarity.',
    heroCtaPrimary: 'Start free',
    heroCtaSecondary: 'See the product',
    heroStatTrial: '15-day trial on Basic',
    heroStatModules: 'All modules included',
    heroStatSync: 'Automatic order and catalog sync',
    modulesEyebrow: 'The product',
    modulesTitle: 'One dashboard for your entire operation',
    modulesSubtitle:
      'From daily KPIs to COGS and reports: the same modules you use in Alenna.',
    moduleHome: 'Home',
    moduleHomeDesc: 'KPIs, trends, and a snapshot of your business.',
    moduleProducts: 'Products',
    moduleProductsDesc: 'Catalog, COGS, and margin per SKU.',
    moduleSales: 'Sales',
    moduleSalesDesc: 'Orders, revenue, and period breakdowns.',
    moduleReports: 'Reports',
    moduleReportsDesc: 'EBITDA, marginal contribution, and profit.',
    moduleAds: 'Advertising',
    moduleAdsDesc: 'Unified ROAS and ad spend.',
    moduleChannels: 'Channels',
    moduleChannelsDesc: 'Compare marketplaces and owned stores.',
    moduleSimulations: 'Simulations',
    moduleSimulationsDesc: 'Project scenarios before you decide.',
    moduleIntegrations: 'Integrations',
    moduleIntegrationsDesc: 'Connect Shopify or Mercado Libre and sync orders and catalog.',
    integrationsEyebrow: 'Integrations',
    integrationsAvailableLabel: 'Available now',
    integrationsComingSoonLabel: 'Coming soon',
    integrationShopify: 'Shopify',
    integrationMercadoLibre: 'Mercado Libre',
    integrationAmazon: 'Amazon',
    integrationAmazonSoon: 'Amazon',
    integrationTiendaNube: 'Tienda Nube',
    integrationWooCommerce: 'WooCommerce',
    integrationAdsSoon: 'Google Ads and Meta Ads',
    integrationsStripCaption: 'Integrations available today',
    integrationsCaption: 'Shopify and Mercado Libre connect today. Amazon is coming soon.',
    integrationStatusLive: 'Available',
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
    pricingTitle: 'Basic, Growth, or custom',
    pricingTitleMinimal: 'Pricing',
    pricingSubtitle:
      'Try Basic free for 15 days. Every plan includes all modules and unlimited integrations.',
    planIncludesLabel: 'Includes:',
    planBasicBadge: '15-day free trial',
    planBasicName: 'Basic',
    planBasicTagline: '15-day free trial',
    planBasicPrice: '$30',
    planBasicPriceCompact: '$30/mo',
    planBasicPeriod: 'USD / month',
    planBasicOrdersLimit: 'Up to 1,000 orders synced per month',
    planBasicProductsLimit: '500 products',
    planBasicUsersLimit: 'Up to 3 users per workspace',
    planBasicRolesLimit: '3 predefined access roles to assign to your users',
    planBasicCta: 'Start free trial',
    planGrowthName: 'Growth',
    planGrowthTagline: 'For teams that are scaling',
    planGrowthPrice: '$60',
    planGrowthPriceCompact: '$60/mo',
    planGrowthPeriod: 'USD / month',
    planGrowthOrdersLimit: 'Up to 5,000 orders synced per month',
    planGrowthProductsLimit: '2,000 products',
    planGrowthUsersLimit: 'Up to 5 users per workspace',
    planGrowthRolesLimit:
      '5 access roles (4 configurable and 1 owner) to assign to your users',
    planGrowthBadge: 'Most popular',
    planGrowthIncludesPrior: 'Everything in Basic, plus:',
    planGrowthCta: 'Start with Growth',
    planCustomName: 'Enterprise',
    planCustomTagline: 'For large businesses operating at scale',
    planCustomPrice: 'Custom',
    planCustomPriceCompact: 'Custom',
    planCustomPeriod: 'Tailored limits and pricing',
    planCustomLimits: 'Custom volumes and requirements',
    planCustomUsersLimit: 'Up to 10 users per workspace',
    planCustomIncludesPrior: 'Everything in Growth, plus:',
    planCustomCta: 'Contact us',
    planFeatureCore:
      'All modules, unlimited integrations, multi-channel reports, sync, and email support',
    planFeatureModules: 'All modules included',
    planFeatureIntegrations: 'Unlimited integrations',
    planFeatureReports: 'Multi-channel profitability reports',
    planFeatureSync: 'Order and catalog sync',
    planFeatureSupport: 'Email support',
    finalCtaTitle: 'Start free today.',
    finalCtaSubtext:
      'Connect your store in minutes and discover the real profitability of your ecommerce.',
    finalCtaButton: 'Create free account',
    footerTagline: 'Your entire business consolidated in one place',
    footerCta: 'Create free account',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms of use',
    footerIntegrations: 'Integrations',
    footerLegalLine:
      'Alenna Analytics · Operated by Sergio Garnica González · Querétaro, Mexico · contacto@alenna.io',
    footerCopyright: '© {year} Alenna Analytics. All rights reserved.',
    navFaq: 'FAQ',
    faqEyebrow: 'FAQ',
    faqTitle: 'What ecommerce teams usually ask',
    faqSubtitle: 'Channels, data, margins, and plans — in one place.',
  },
} as const

export type LandingFaqItem = {
  id: string
  question: string
  answer: string
}

const LANDING_FAQ: Record<Language, LandingFaqItem[]> = {
  es: [
    {
      id: 'what-is',
      question: '¿Qué es Alenna Analytics?',
      answer:
        'Es un panel de analítica para ecommerce multicanal. Conectas tus canales de venta en línea y ves pedidos, márgenes, inventario y rentabilidad en un solo lugar, sin unir exportaciones a mano.',
    },
    {
      id: 'channels',
      question: '¿Puedo ver varios canales de venta juntos?',
      answer:
        'Sí. El objetivo de Alenna es consolidar tu operación: compara marketplaces y tienda propia, y revisa margen y ventas de toda la operación, no de un canal aislado.',
    },
    {
      id: 'integrations',
      question: '¿Qué integraciones están disponibles?',
      answer:
        'Hoy puedes conectar Shopify y Mercado Libre. Amazon estará disponible pronto. Todos los planes incluyen integraciones ilimitadas.',
    },
    {
      id: 'privacy',
      question: '¿Alenna accede a datos de mis clientes?',
      answer:
        'No. La app se centra en analítica de tienda: pedidos, productos e inventario. No accede a nombres, correos, teléfonos ni direcciones de clientes.',
    },
    {
      id: 'margin',
      question: '¿Cómo veo si un producto es rentable?',
      answer:
        'Consultas margen y beneficio por producto y a nivel de SKU, con costos y comisiones por canal. Así detectas SKUs que generan pérdidas y no solo ingresos.',
    },
    {
      id: 'inventory',
      question: '¿Hay alertas de inventario?',
      answer:
        'Sí. Recibes avisos antes de que el stock bajo frene las ventas o dañe los márgenes, sobre todo en productos de mayor rotación.',
    },
    {
      id: 'pricing',
      question: '¿Hay prueba gratis y qué incluyen los planes?',
      answer:
        'Basic incluye 15 días de prueba gratis. Basic cuesta 30 USD al mes y Growth 60 USD al mes. Basic incluye 3 roles predefinidos; Growth incluye 5 roles (4 configurables y 1 propietario). Todos los planes incluyen todos los módulos, reportes multicanal y sync de pedidos y catálogo. Enterprise es a medida.',
    },
  ],
  en: [
    {
      id: 'what-is',
      question: 'What is Alenna Analytics?',
      answer:
        'It is an analytics dashboard for multi-channel ecommerce. You connect your online sales channels and see orders, margins, inventory, and profitability in one place — without stitching manual exports.',
    },
    {
      id: 'channels',
      question: 'Can I see multiple sales channels together?',
      answer:
        'Yes. Alenna is built to consolidate your operation: compare marketplaces and your own store, and review margin and sales across the whole business, not one channel in isolation.',
    },
    {
      id: 'integrations',
      question: 'Which integrations are available?',
      answer:
        'You can connect Shopify and Mercado Libre today. Amazon is coming soon. Every plan includes unlimited integrations.',
    },
    {
      id: 'privacy',
      question: 'Does Alenna access my customer data?',
      answer:
        'No. The app focuses on store analytics: orders, products, and inventory. It does not access customer names, emails, phone numbers, or addresses.',
    },
    {
      id: 'margin',
      question: 'How do I see if a product is profitable?',
      answer:
        'You can review margin and profit by product and at SKU level, after costs and channel fees. That helps you spot SKUs that lose money, not just revenue.',
    },
    {
      id: 'inventory',
      question: 'Are there inventory alerts?',
      answer:
        'Yes. You get notified before low stock slows sales or hurts margins, especially on your fastest-moving products.',
    },
    {
      id: 'pricing',
      question: 'Is there a free trial, and what do plans include?',
      answer:
        'Basic includes a 15-day free trial. Basic is $30 USD per month and Growth is $60 USD per month. Basic includes 3 predefined roles; Growth includes 5 roles (4 configurable and 1 owner). Every plan includes all modules, multi-channel reports, and order and catalog sync. Enterprise is custom.',
    },
  ],
}

export function landingFaq(lang: Language): LandingFaqItem[] {
  return LANDING_FAQ[lang]
}

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
