import { expect, test } from '@playwright/test'

const WIDTHS = [390, 640, 768, 1024, 1440] as const

// ─── Helpers ────────────────────────────────────────────────────────────────

async function noHorizontalOverflow(page: import('@playwright/test').Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  )
  expect(overflow, 'horizontal overflow detected').toBe(false)
}

// ─── Basic load ─────────────────────────────────────────────────────────────

test('homepage loads with correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Namri Amine/)
  await expect(page).toHaveTitle(/Senior JavaScript Full-Stack Developer/)
})

test('metadata and structured data use the canonical professional title', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'Namri Amine - Senior JavaScript Full-Stack Developer',
  )
  await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
    'content',
    'Namri Amine - Senior JavaScript Full-Stack Developer',
  )

  const personJson = await page.locator('script#ld-json-person').textContent()
  expect(JSON.parse(personJson ?? '{}').jobTitle).toBe('Senior JavaScript Full-Stack Developer')
})

// ─── No horizontal overflow at all target widths ────────────────────────────

for (const width of WIDTHS) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    await page.waitForLoadState('load')
    await noHorizontalOverflow(page)
  })
}

// ─── Hero content ───────────────────────────────────────────────────────────

test('hero contains the new positioning headline', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Namri Amine')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('full-stack systems')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'SaaS, APIs, and AI workflows',
  )
})

test('display typography uses Geist with restrained heading weights', async ({ page }) => {
  await page.goto('/')

  const typography = await page.locator('h1, h2, h3').evaluateAll((elements) =>
    elements.map((element) => {
      const styles = getComputedStyle(element)
      return { family: styles.fontFamily, weight: Number.parseInt(styles.fontWeight, 10) }
    }),
  )

  expect(typography.length).toBeGreaterThan(0)
  expect(typography.every(({ family }) => /geist/i.test(family))).toBe(true)
  expect(typography.every(({ weight }) => weight <= 600)).toBe(true)
})

test('content keeps minimum responsive page gutters', async ({ page }) => {
  for (const viewport of [
    { width: 390, height: 844, minimumGutter: 20 },
    { width: 1440, height: 900, minimumGutter: 60 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    const heading = await page.locator('#home h1').boundingBox()
    expect(heading).not.toBeNull()
    expect(heading?.x ?? 0).toBeGreaterThanOrEqual(viewport.minimumGutter)
  }
})

test('hero primary actions are visible at mobile and desktop widths', async ({ page }) => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await page.waitForLoadState('load')

    const hero = page.locator('#home')
    await expect(hero.getByRole('button', { name: 'View Work' })).toBeVisible()
    await expect(hero.getByRole('button', { name: 'Contact' })).toBeVisible()
    await expect(hero.getByRole('link', { name: /Download Resume/i })).toBeVisible()
    await expect(hero.getByRole('button', { name: 'View Work' })).toBeInViewport()
    await noHorizontalOverflow(page)
  }
})

test('hero uses optimized profile assets and a desktop-only orbit', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const hero = page.locator('#home')
  await expect(hero.locator('[data-hero-orbit]')).toBeVisible()
  await expect(hero.locator('img[src*="profile.webp"]')).toBeVisible()
  await expect(hero.locator('canvas')).toHaveCount(0)

  await page.setViewportSize({ width: 390, height: 844 })
  await expect(hero.locator('[data-hero-orbit]')).not.toBeVisible()
  await expect(hero.locator('img[src*="profile-thumb.webp"]')).toBeVisible()
})

test('primary CTA scrolls to projects section', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'View Work' }).click()
  await expect(page.locator('#projects')).toBeInViewport({ timeout: 5000 })
})

test('resume link points to correct PDF', async ({ page }) => {
  await page.goto('/')
  const resumeLink = page.locator('#home').getByRole('link', { name: /Download Resume/i })
  await expect(resumeLink).toHaveAttribute('href', '/Namri_Amine_Resume.pdf')
})

test('hero and about use bounded Talio contract wording', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#home')).toContainText('Talio contract: February 2026 - August 2026')
  await expect(page.locator('#about')).toContainText('Talio contract: February 2026 - August 2026')
  await expect(page.locator('#home')).not.toContainText('Currently at Talio')
  await expect(page.locator('#about')).not.toContainText('since February 2026')
})

// ─── Project order ───────────────────────────────────────────────────────────

test('first project is Indus Inspection', async ({ page }) => {
  await page.goto('/')
  const firstProject = page.locator('#projects article').first()
  await expect(firstProject).toContainText('Indus Inspection')
  await expect(firstProject).toContainText('October 2025 - Present')
  await expect(firstProject).toContainText('Early Product Team / Full-Stack Developer')
  await expect(firstProject).toContainText('Next.js 16')
})

test('second project is Creaboost', async ({ page }) => {
  await page.goto('/')
  const secondProject = page.locator('#projects article').nth(1)
  await expect(secondProject).toContainText('Creaboost')
})

test('flagship projects expose proof actions', async ({ page }) => {
  await page.goto('/')
  const flagshipProject = page.locator('[data-project-presentation="flagship"]').first()
  await expect(flagshipProject.locator('a').first()).toBeVisible()
})

test('Dr Turbine is rendered as a secondary project case study', async ({ page }) => {
  await page.goto('/')
  const secondaryProject = page.locator('[data-project-presentation="secondary"]')
  await expect(secondaryProject).toContainText('Dr Turbine')
  await expect(secondaryProject.locator('img')).toBeVisible()
  await expect(
    secondaryProject.locator('a[href="https://park-wind-turbine-inspection.vercel.app"]'),
  ).toHaveCount(0)
})

test('Filahi is rendered as an archive project', async ({ page }) => {
  await page.goto('/')
  const archiveProject = page.locator('[data-project-presentation="archive"]')
  await expect(archiveProject).toContainText('Filahi WebApp')
  await expect(archiveProject.locator('img')).toBeVisible()
})

test('supporting projects share equal visual geometry at desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  await page.locator('[data-supporting-projects]').scrollIntoViewIfNeeded()

  const supporting = page.locator('[data-supporting-projects] [data-project-tier="supporting"]')
  await expect(supporting).toHaveCount(2)

  const frames = supporting.locator('[data-project-image]')
  await expect(frames).toHaveCount(2)
  await expect(frames.nth(0)).toBeVisible()
  await expect(frames.nth(1)).toBeVisible()

  const first = await frames.nth(0).boundingBox()
  const second = await frames.nth(1).boundingBox()

  expect(first).not.toBeNull()
  expect(second).not.toBeNull()
  expect(Math.abs((first?.width ?? 0) - (second?.width ?? 0))).toBeLessThanOrEqual(1)
  expect(Math.abs((first?.height ?? 0) - (second?.height ?? 0))).toBeLessThanOrEqual(1)
})

test('skills section keeps brand and niche technologies visible', async ({ page }) => {
  await page.goto('/')
  const skills = page.locator('#skills')
  await skills.scrollIntoViewIfNeeded()
  await expect(skills).toContainText('FastAPI')
  await expect(skills).toContainText('Better Auth')
  await expect(skills).toContainText('MapLibreGL')
  await expect(page.locator('body')).not.toContainText('GraphQL')
})

// ─── Mobile menu ─────────────────────────────────────────────────────────────

test('mobile menu opens and shows nav items at 390px', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const menuButton = page.getByRole('button', { name: 'Open navigation menu' })
  await expect(menuButton).toBeVisible()
  await menuButton.click()

  // nav items visible and focusable inside sheet
  const aboutBtn = page.getByRole('button', { name: 'About' })
  await expect(aboutBtn).toBeVisible()
  await expect(aboutBtn).toBeEnabled()

  const projectsBtn = page.getByRole('button', { name: 'Projects' })
  await expect(projectsBtn).toBeVisible()
})

// ─── Light-only / no dark mode ───────────────────────────────────────────────

test('no dark theme toggle button is present', async ({ page }) => {
  await page.goto('/')
  const darkToggle = page.getByRole('button', { name: /Switch to (dark|light) mode/i })
  await expect(darkToggle).toHaveCount(0)
})

test('html element does not have dark class', async ({ page }) => {
  await page.goto('/')
  const hasDark = await page.evaluate(() => document.documentElement.classList.contains('dark'))
  expect(hasDark).toBe(false)
})

// ─── Static asset routes ─────────────────────────────────────────────────────

test('opengraph-image route returns 200', async ({ page }) => {
  const response = await page.goto('/opengraph-image')
  expect(response?.status()).toBe(200)
})

test('unknown route renders the branded 404 page', async ({ page }) => {
  const response = await page.goto('/missing-page')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('This page is not here')
})

test('resume PDF returns 200 with pdf content-type', async ({ request }) => {
  const response = await request.get('/Namri_Amine_Resume.pdf')
  expect(response.status()).toBe(200)
  const contentType = response.headers()['content-type'] ?? ''
  expect(contentType).toContain('pdf')
})

test('external links are safely configured', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('a[href="https://github.com/NAMRIAMINE/indusNov"]')).toHaveCount(0)

  const externalLinks = page.locator('a[href^="http"]')
  const count = await externalLinks.count()
  expect(count).toBeGreaterThan(0)

  for (let index = 0; index < count; index += 1) {
    const link = externalLinks.nth(index)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener/)
  }
})

for (const image of [
  '/indus-inspection.webp',
  '/creaboost.webp',
  '/dr-turbine.webp',
  '/filahi.webp',
  '/profile.webp',
  '/profile-thumb.webp',
]) {
  test(`public image ${image} returns 200`, async ({ page }) => {
    const response = await page.goto(image)
    expect(response?.status()).toBe(200)
  })
}

// ─── Reduced motion ──────────────────────────────────────────────────────────

test('page renders correctly under reduced motion preference', async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  await page.goto('/')
  await page.waitForLoadState('load')

  // heading still present
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('#home canvas')).toHaveCount(0)

  const orbitRing = page.locator('[data-orbit-ring]').first()
  const before = await orbitRing.evaluate((element) => getComputedStyle(element).transform)
  await page.waitForTimeout(150)
  const after = await orbitRing.evaluate((element) => getComputedStyle(element).transform)
  expect(after).toBe(before)

  // project cards still render
  const articles = page.locator('#projects article')
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await expect(articles.first()).toBeVisible()

  await context.close()
})
