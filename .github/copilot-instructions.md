# Copilot Instructions

## Commands

- Use `pnpm`. The repository is pinned to `pnpm@10.15.1`.
- Build: `pnpm build`
- Lint: `pnpm lint`
- Auto-fix lint issues: `pnpm lint:fix`
- Format: `pnpm format`
- Type-check: `pnpm type-check`
- Run the e2e suite: `pnpm test:e2e`
- Run a single Playwright test: `pnpm exec playwright test tests/portfolio.spec.ts --grep "homepage loads with correct title"`
- Run one browser target: `pnpm exec playwright test --project=chromium`

E2E tests run against the production server on port `3001` via `pnpm exec next start -p 3001`. Run `pnpm build` before `pnpm test:e2e`. `playwright.config.ts` sets `reuseExistingServer: true`, so after rebuilding, stop any older `next start` process on port `3001` before rerunning tests to avoid stale chunks.

## High-level architecture

- This is a single-page portfolio built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Motion, `react-icons`, Phosphor icons, and Zustand.
- `app/page.tsx` composes the page as fixed navigation, scroll progress, `Hero`, lazy `Projects`, eager `About`, lazy `Skills`, and lazy `Contact`, followed by the footer and scroll-to-top control.
- Portfolio content is mostly data-driven. `data/personal.ts`, `data/projects.ts`, and `data/skills.ts` are the source of truth for profile, project, and skill content. Section components render those objects into the UI.
- UI state is centralized in `store/usePortfolioStore.ts` and consumed by navigation, active-section tracking, and the scroll-to-top button.
- Section highlighting is driven by `hooks/useActiveSection.ts`, which uses `IntersectionObserver` plus scroll listeners to keep `activeSection` and `showScrollTop` in sync with the viewport.
- Metadata and SEO are spread across `app/layout.tsx`, `app/opengraph-image.tsx`, `app/robots.ts`, `app/sitemap.ts`, and the JSON-LD scripts in `app/page.tsx`. They all rely on `NEXT_PUBLIC_SITE_URL` with a fallback to `https://namri-amine.vercel.app`.
- `components/theme/theme-provider.tsx` is not a theming system. It only wraps the app with `MotionConfig reducedMotion="user"` so motion components follow the OS reduced-motion preference.
- `components/sections/Projects.tsx` renders static case studies keyed by `presentation`: flagship projects first, then the supporting secondary/archive pair.
- `components/sections/About.tsx` is an editorial credibility section with compact stats and current/recent contract context. Keep factual wording aligned with the resume.
- `components/sections/Skills.tsx` uses one marquee rail plus grouped capability rows, with `react-icons/si` for brand coverage and Phosphor fallbacks for niche tools.

## Key conventions

- The site is light-only. Do not add dark mode state, `dark:` Tailwind utilities, or `next-themes` patterns back into the app.
- Keep section IDs aligned across three places: the DOM section `id`, the `sections` array in `hooks/useActiveSection.ts`, and `navigationSections` in `lib/constants.ts`.
- Preserve the mobile menu trigger label `aria-label="Open navigation menu"` and the main hero CTAs `View Work`, `Contact`, and `Download Resume`. The Playwright tests depend on them.
- Project rendering depends on the `presentation` field in `data/projects.ts`. `flagship`, `secondary`, and `archive` provide hierarchy and Playwright selectors; preserve Indus and Creaboost as flagship, Dr Turbine as secondary, and Filahi as archive.
- Keep `types/index.ts` in sync with project rendering. In particular, `Project.status` values must match the cases handled by `Status` in `components/sections/Projects.tsx`.
- Prefer editing `data/*.ts` for portfolio content changes instead of hardcoding copy directly in section components, unless the copy is structural to the section layout itself.
- The horizontal overflow protections are intentional and all three need to stay in place: `html { overflow-x: hidden }` in `app/globals.css`, `overflow-x-hidden` on `<body>` in `app/layout.tsx`, and `overflow-x-hidden` on `#projects`.
- Keep the hero wide. The H1 should stay editorial and avoid collapsing into a narrow 5-6 line text wall. Do not reintroduce raw stats or badge piles beneath the hero.
- Shared project screenshots still use `object-contain`, not cropped thumbnails. Pass an explicit `sizes` prop when the rendered column width is known.
- Motion should stay restrained: opacity/y reveals, orbit rotation, marquee movement, and subtle hover treatment only. Avoid bouncy spring-heavy interactions or gimmicky scroll tricks.
- Skill chips should keep icon coverage. Prefer `react-icons/si` for brands and intentional domain fallbacks for tools without brand icons instead of blank placeholders.
- Use Biome conventions from `biome.json`: single quotes, no semicolons, 2-space indentation, and 100-character line width.
- Avoid em dashes in copy.

## Professional content consistency

Portfolio, resume, and LinkedIn must use the same confirmed title, dates, role wording, stack versions, availability, URLs, and defensible metrics. Canonical portfolio content sources are `data/personal.ts`, `data/projects.ts`, and `data/skills.ts`. Do not add sensitive personal data or unverified resume claims to the repo.
