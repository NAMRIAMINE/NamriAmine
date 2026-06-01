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

test('hero contains positioning text', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Senior Full-Stack')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Developer')
})

test('primary CTA scrolls to projects section', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'View My Work' }).click()
  await page.waitForTimeout(600)
  const projectsSection = page.locator('#projects')
  await expect(projectsSection).toBeInViewport()
})

test('resume link points to correct PDF', async ({ page }) => {
  await page.goto('/')
  const resumeLink = page.getByRole('link', { name: /Download Resume/i })
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

// ─── Reduced motion ──────────────────────────────────────────────────────────

test('page renders correctly under reduced motion preference', async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  await page.goto('/')
  await page.waitForLoadState('networkidle')

  // heading still present
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  // project cards still render
  const articles = page.locator('#projects article')
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await expect(articles.first()).toBeVisible()

  await context.close()
})
