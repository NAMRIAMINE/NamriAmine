# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm start        # serve production build
pnpm lint         # biome check (no fixes)
pnpm lint:fix     # biome check --write --unsafe
pnpm format       # biome format --write
pnpm type-check   # tsc --noEmit
pnpm test:e2e     # playwright e2e (requires prior pnpm build)
```

Package manager: **pnpm** (not npm/yarn).

## Architecture

Single-page portfolio: Next.js 15 App Router, React 19, TypeScript, Tailwind v4.

**Data layer** (`data/`): Static TS files (`personal.ts`, `projects.ts`, `skills.ts`). All site content lives here. Edit these to update portfolio content.

**State** (`store/usePortfolioStore.ts`): Plain Zustand store (no persist middleware). Tracks `activeSection`, `isMobileMenuOpen`, `showScrollTop`. No-op guards on `setActiveSection` and `setShowScrollTop` prevent redundant re-renders. No dark mode state. The site is light-only.

**Sections** (`components/sections/`): `Hero` renders first, followed by lazy `Projects`, eager `About`, lazy `Skills`, and lazy `Contact`. `Projects`, `About`, and `Skills` now carry most of the visual system.

**Active section detection** (`hooks/useActiveSection.ts`): `IntersectionObserver` with `rootMargin: '-35% 0px -55% 0px'` and 21-point threshold array. Highest `intersectionRatio` wins. Section IDs must match the `sections` array in that hook and `navigationSections` in `lib/constants.ts`.

**Scroll progress** (`components/layout/ScrollProgress.tsx`): Single `ticking` boolean rAF guard. Only one `requestAnimationFrame` is queued at a time. No CSS transition on the bar (tracks instantly). Uses `will-change-transform`.

**Theme**: Light-only. No dark mode. `next-themes` has been removed. `ThemeProvider` in `components/theme/theme-provider.tsx` is a thin wrapper around `MotionConfig reducedMotion="user"` only. Do not add dark mode back. The `@custom-variant dark` line was intentionally deleted from globals.css; re-adding it requires updating globals.css, layout.tsx, and all components. Do not add `dark:` utilities anywhere.

**Reduced motion**: `MotionConfig reducedMotion="user"` wraps all children inside `ThemeProvider`. The hero orbit also uses `useReducedMotion`, and the skills marquee is disabled in `globals.css` under `prefers-reduced-motion: reduce`.

**Linter**: Biome (not ESLint/Prettier for JS/TS). Config in `biome.json`: single quotes, no semicolons, 2-space indent, 100-char line width. ESLint config (`eslint.config.mjs`) exists only for Next.js rules.

**Types** (`types/index.ts`): `Project`, `SkillItem`, `SkillCategory`. `Project.status` union includes `'Production Ready'`. Keep this in sync with any status badge rendering in `Projects.tsx`.

## Visual conventions

- **Light-only premium system.** The site uses white and `#f5fdfb` surfaces with slate typography and **teal** as the single primary accent (teal-600 `#0d9488`, teal-300/teal-400 for glows). Never add `dark:` utilities. There is no dark variant registered.
- **Navigation**: floating fixed pill, not a full-width bar. Keep desktop nav on one line and preserve the mobile `aria-label="Open navigation menu"` trigger used by tests.
- **Hero**: wide editorial split with the profile-orbit identity module on desktop and a compact avatar on mobile. Keep `View Work`, `Contact`, and one `Download Resume` link. Do not turn the hero back into a stats wall or badge dump.
- **Projects**: static case-study system driven by `data/projects.ts`. `presentation: 'flagship' | 'secondary' | 'archive'` controls hierarchy and test selectors: Indus and Creaboost are flagship, Dr Turbine is secondary, Filahi is archive.
- **About**: editorial credibility section with compact stats and current/recent contract context. Keep it readable and factual.
- **Skills**: grouped capability rows with one marquee rail, `react-icons/si` brand coverage, and Phosphor fallbacks for niche tools.
- **Image treatment**: project screenshots should still read like real product proof, so use `object-contain` rather than cropping them into generic thumbnails.
- **Contact**: large closing action chapter with direct email, support links, and resume access. Do not turn it back into a generic contact-card grid.
- **Motion**: restrained `opacity/y` reveals, orbit rotation, and marquee movement with reduced-motion support. No large hover scaling, bouncy springs, or scroll gimmicks.
- **No em dashes anywhere.** Use period, comma, colon, or a plain hyphen instead.

## Professional content consistency

Portfolio, resume, and LinkedIn must use the same confirmed title, dates, role wording, stack versions, availability, URLs, and defensible metrics. Canonical portfolio sources are `data/personal.ts`, `data/projects.ts`, and `data/skills.ts`. Do not add sensitive personal data or unverified resume claims to the repo.

## Public assets

`public/` contains: `apple-touch-icon.png`, `creaboost.webp`, `dr-turbine.webp`, `filahi.webp`, `indus-inspection.webp`, `profile.webp`, `profile-thumb.webp`, `Namri_Amine_Resume.docx`, and `Namri_Amine_Resume.pdf`. Do not add unreferenced images. Next.js image optimization only helps files served via `<Image>`.

## E2E tests

Playwright (`tests/portfolio.spec.ts`): tests run across Chromium desktop, Pixel 5 (mobile), Mobile Safari (WebKit).

**Critical**: tests run against the **production build** on port 3001 (`pnpm exec next start -p 3001`). Always run `pnpm build` before `pnpm test:e2e`. Do not switch back to `pnpm dev` as the test server. Dev HMR causes chunk 404s that silently break React hydration and fail click-handler tests.

**Stale server trap**: `playwright.config.ts` has `reuseExistingServer: true`. If a previous `next start` process is still running on port 3001 from a prior build, Playwright will reuse it and serve stale chunks (HTTP 400) causing cryptic "client-side exception" errors in tests. Kill any running server on port 3001 before running tests after a rebuild.

Coverage: overflow at 5 breakpoints, hero content and CTA visibility, metadata title alignment, bounded Talio wording, Indus role/date/stack alignment, CTA scroll, resume PDF (via `request` fixture), project order, skill-tech visibility, mobile menu, external link safety, light-only checks, reduced motion, OG image route, and public WebP images.

## Overflow handling

`html { overflow-x: hidden }` is set in `globals.css` (raw CSS, not utility). The `<body>` also has `overflow-x-hidden` (Tailwind utility in `layout.tsx`) and the `#projects` section has `overflow-x-hidden`. All three are intentional: animated layout shifts can otherwise leak width and break the overflow assertions.

## Environment

`NEXT_PUBLIC_SITE_URL`: used in metadata and JSON-LD structured data. Falls back to `https://namri-amine.vercel.app`.
