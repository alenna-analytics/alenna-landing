# alenna-landing

Marketing landing page for Alenna — React + vanilla CSS. Spanish-first with EN toggle.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Setup

```bash
pnpm install
cp .env.example .env
```

Edit `.env` and set `VITE_APP_URL` to your dashboard origin.

## Scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Vite dev server |
| `pnpm build` | Typecheck + production build (`dist/`) |
| `pnpm preview` | Preview production build |
| `pnpm typecheck` | TypeScript check |

## Structure

```
src/
  App.tsx                    Page composition
  index.css                  Global styles (no Tailwind)
  components/
    SiteHeader.tsx           Nav + mobile menu
    HeroSection.tsx
    SocialProofSection.tsx
    HowItWorksSection.tsx
    FeaturesSection.tsx
    PricingSection.tsx
    FinalCtaSection.tsx
    SiteFooter.tsx
    ui/                      Button, FadeIn, SectionHeader
  lib/i18n/landing-strings.ts
  providers/language-provider.tsx
public/assets/               Logo, dashboard screenshot
```

## i18n

Copy lives in `src/lib/i18n/landing-strings.ts`. Language persists via `localStorage` key `ecom-analytics-lang`.
