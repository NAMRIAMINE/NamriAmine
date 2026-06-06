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
    'SaaS, AI, and field operations',
  )
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
    await noHorizontalOverflow(page)
  }
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

// ─── Project order ───────────────────────────────────────────────────────────

test('first project is Indus Inspection', async ({ page }) => {
  await page.goto('/')
  const firstProject = page.locator('#projects article').first()
  await expect(firstProject).toContainText('Indus Inspection')
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
})

test('Filahi is rendered as an archive project', async ({ page }) => {
  await page.goto('/')
  const archiveProject = page.locator('[data-project-presentation="archive"]')
  await expect(archiveProject).toContainText('Filahi WebApp')
  await expect(archiveProject.locator('img')).toBeVisible()
})

test('skills section keeps brand and niche technologies visible', async ({ page }) => {
  await page.goto('/')
  const skills = page.locator('#skills')
  await skills.scrollIntoViewIfNeeded()
  await expect(skills).toContainText('FastAPI')
  await expect(skills).toContainText('Better Auth')
  await expect(skills).toContainText('MapLibreGL')
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

  // project cards still render
  const articles = page.locator('#projects article')
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await expect(articles.first()).toBeVisible()

  await context.close()
})
