import { test, expect } from '@playwright/test';

test('external links have valid hrefs', async ({ page }) => {
  await page.goto('/');

  const externalLinks = page.locator('a[target="_blank"]');

  const count = await externalLinks.count();

  for (let i = 0; i < count; i++) {
    const href = await externalLinks.nth(i).getAttribute('href');

    expect(href).toBeTruthy();
    expect(href).toMatch(/^https?:\/\//);
  }
});

test('mobile layout has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({
    width: 390,
    height: 844,
  });

  await page.goto('/');

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);
});