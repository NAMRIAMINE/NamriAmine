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

**State** (`store/usePortfolioStore.ts`): Plain Zustand store (no persist middleware). Tracks `activeSection`, `isMobileMenuOpen`, `showScrollTop`. No-op guards on `setActiveSection` and `setShowScrollTop` prevent redundant re-renders. No dark mode state — site is light-only.

**Sections** (`components/sections/`): `Hero`, `About` load eagerly; `Projects`, `Skills`, `Contact` are `next/dynamic` lazy imports for bundle splitting.

**Active section detection** (`hooks/useActiveSection.ts`): `IntersectionObserver` with `rootMargin: '-35% 0px -55% 0px'` and 21-point threshold array. Highest `intersectionRatio` wins. Section IDs must match the `sections` array in that hook and `navigationSections` in `lib/constants.ts`.

**Scroll progress** (`components/layout/ScrollProgress.tsx`): Single `ticking` boolean rAF guard — only one `requestAnimationFrame` queued at a time. No CSS transition on the bar (tracks instantly). Uses `will-change-transform`.

**Aceternity components** (`components/aceternity/`): `3d-card.tsx` and `colourful-text.tsx` are present but currently unused. Do not delete — may be used in future. Do not import them unless intentionally adding back.

**Theme**: Light-only. No dark mode. `next-themes` has been removed. `ThemeProvider` in `components/theme/theme-provider.tsx` is a thin wrapper around `MotionConfig reducedMotion="user"` only. Do not add dark mode back without updating globals.css, layout.tsx, all components, and removing the `@custom-variant dark` line that was intentionally deleted.

**Reduced motion**: `MotionConfig reducedMotion="user"` wraps all children inside `ThemeProvider`. All `motion/*` components respect the OS reduce-motion setting automatically — no per-component handling needed.

**Linter**: Biome (not ESLint/Prettier for JS/TS). Config in `biome.json` — single quotes, no semicolons, 2-space indent, 100-char line width. ESLint config (`eslint.config.mjs`) exists only for Next.js rules.

**Types** (`types/index.ts`): `Project`, `SkillItem`, `SkillCategory`. `Project.status` union includes `'Production Ready'` — keep this in sync with any status badge rendering in `Projects.tsx`.

## Visual conventions

- **Light-only system.** Background alternates: white sections (Hero, Projects, Contact) and slate-50 sections (About, Skills, Footer). Never add `dark:` utilities — there is no dark variant registered.
- **Primary accent: sky-600.** Used in nav active underline, primary CTA button, profile ring, About/Projects section heading accent word.
- **Secondary accents**: emerald-600 (Skills heading, geospatial keyword), rose-500 (Contact heading), indigo-600 (industrial inspection keyword), amber-500 (open to opportunities badge). Use sparingly and consistently per section.
- **No scale transforms on large surfaces.** Cards use `hover:shadow-md transition-shadow` only.
- **CTA hierarchy in Hero**: primary = `bg-sky-600` solid, secondary = outline `border border-slate-300`, tertiary = `variant="ghost"` (Download Resume).
- **Section headings**: left-aligned (not centered). Heading pattern: `text-slate-900` main word + accent-colored keyword.
- **Project cards**: flat `article` with `border border-slate-200`, no glassmorphism, `fill` image with `object-cover object-center` in a `relative` container.
- **Skills**: chip-based layout (no progress bars). Each chip shows `icon + name + years` with category-color border.
- **Contact**: 2×2 grid of flat `<Link>` cards, each with a small icon tile and truncated value.
- **No em-dashes (`—`) anywhere.** Use period, comma, or colon instead.

## Public assets

`public/` contains: `creaboost.png`, `dr-turbine.png`, `filahi.png`, `indus-inspection.png`, `pdp.png`, `Namri_Amine_Resume.pdf`, `Namri_Amine_Resume.docx`. All are referenced. Do not add unreferenced images — Next.js image optimization only helps files served via `<Image>`.

## Environment

`NEXT_PUBLIC_SITE_URL` — used in metadata and JSON-LD structured data. Falls back to `https://namri-amine.vercel.app`.
