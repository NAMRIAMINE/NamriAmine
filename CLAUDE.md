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
```

Package manager: **pnpm** (not npm/yarn).

## Architecture

Single-page portfolio — Next.js 15 App Router, React 19, TypeScript, Tailwind v4.

**Data layer** (`data/`): Static TS files (`personal.ts`, `projects.ts`, `skills.ts`). All site content lives here. Edit these to update portfolio content.

**State** (`store/usePortfolioStore.ts`): Zustand store with `persist` middleware. Tracks `darkMode` (persisted to localStorage as `portfolio-storage`), `activeSection`, `isMobileMenuOpen`, `showScrollTop`. No-op guards on `setActiveSection` and `setShowScrollTop` prevent redundant re-renders. Theme is also driven by `next-themes` — keep both in sync when changing theme logic.

**Sections** (`components/sections/`): `Hero`, `About` load eagerly; `Projects`, `Skills`, `Contact` are `next/dynamic` lazy imports for bundle splitting.

**Active section detection** (`hooks/useActiveSection.ts`): `IntersectionObserver` with `rootMargin: '-35% 0px -55% 0px'` and 21-point threshold array. Highest `intersectionRatio` wins. Section IDs must match the `sections` array in that hook and `navigationSections` in `lib/constants.ts`.

**Scroll progress** (`components/layout/ScrollProgress.tsx`): Single `ticking` boolean rAF guard — only one `requestAnimationFrame` queued at a time. No CSS transition on the bar (tracks instantly). Uses `will-change-transform`.

**Aceternity components** (`components/aceternity/`): Custom animated components (3D card, colourful text). These use `motion` (Framer Motion v12). Constraints:
- Avoid `blur` filters on animated elements (perf regression, see git history).
- `CardContainer` renders a `<div>`, not a button — it's a presentational element.
- Tilt is disabled when `prefers-reduced-motion: reduce` OR `pointer: coarse`.
- Bounding rect cached on `pointerenter`/`resize` only, not every move.

**Reduced motion**: `MotionConfig reducedMotion="user"` wraps all children inside `ThemeProvider`. All `motion/*` components respect the OS reduce-motion setting automatically — no per-component handling needed.

**Linter**: Biome (not ESLint/Prettier for JS/TS). Config in `biome.json` — single quotes, no semicolons, 2-space indent, 100-char line width. ESLint config (`eslint.config.mjs`) exists only for Next.js rules.

**Types** (`types/index.ts`): `Project`, `SkillItem`, `SkillCategory`. `Project.status` union includes `'Production Ready'` — keep this in sync with any status badge rendering in `Projects.tsx`.

## Visual conventions

- **No scale transforms on large surfaces.** Cards and contact tiles use `hover:shadow-xl transition-shadow` only. Scale transforms cause layout/paint churn.
- **CTA hierarchy in Hero**: primary = gradient button, secondary = outline with `border-2 border-primary`, tertiary = `variant="ghost"` (Download Resume).
- **Gradient text**: used selectively — Hero title (via ColourfulText), "About Me", "Featured Projects" headings. Skills and Contact headings use single accent colors (`text-emerald-500`, `text-rose-500`).
- Project cards show `year · category` in the CardDescription meta row.

## Public assets

`public/` contains: `creaboost.png`, `dr-turbine.png`, `filahi.png`, `indus-inspection.png`, `pdp.png`, `Namri_Amine_Resume.pdf`, `Namri_Amine_Resume.docx`. All are referenced. Do not add unreferenced images — Next.js image optimization only helps files served via `<Image>`.

## Environment

`NEXT_PUBLIC_SITE_URL` — used in metadata and JSON-LD structured data. Falls back to `https://namri-amine.vercel.app`.
