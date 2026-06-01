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

**State** (`store/usePortfolioStore.ts`): Zustand store with `persist` middleware. Tracks `darkMode` (persisted to localStorage as `portfolio-storage`), `activeSection`, `isMobileMenuOpen`, `showScrollTop`. Theme is also driven by `next-themes` — keep both in sync when changing theme logic.

**Sections** (`components/sections/`): `Hero`, `About` load eagerly; `Projects`, `Skills`, `Contact` are `next/dynamic` lazy imports for bundle splitting.

**Active section detection** (`hooks/useActiveSection.ts`): IntersectionObserver-style scroll listener. Section IDs must match the `sections` array in that hook and `navigationSections` in `lib/constants.ts`.

**Aceternity components** (`components/aceternity/`): Custom animated components (3D card, colourful text). These use `motion` (Framer Motion v12) — avoid `blur` filters on animated elements (perf regression, see git history).

**Linter**: Biome (not ESLint/Prettier for JS/TS). Config in `biome.json` — single quotes, no semicolons, 2-space indent, 100-char line width. ESLint config (`eslint.config.mjs`) exists only for Next.js rules.

**Types** (`types/index.ts`): `Project`, `SkillItem`, `SkillCategory`. `Project.status` union includes `'Production Ready'` — keep this in sync with any status badge rendering in `Projects.tsx`.

## Environment

`NEXT_PUBLIC_SITE_URL` — used in metadata and JSON-LD structured data. Falls back to `https://namri-amine.vercel.app`.
