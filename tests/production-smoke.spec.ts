import { test, expect } from '@playwright/test';

const productionUrl = 'https://elliotpreston.com';

test('production homepage is available', async ({ page }) => {
  const response = await page.goto(productionUrl);

  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/Elliot Preston/i);
});

test('production Work navigation works', async ({ page }) => {
  await page.goto(productionUrl);

  const nav = page.getByRole('navigation', { name: 'Main navigation' });

  await nav.getByRole('link', { name: 'Work', exact: true }).click();

  await expect(page).toHaveURL(/\/work/);
});

test('production Music navigation works', async ({ page }) => {
  await page.goto(productionUrl);

  const nav = page.getByRole('navigation', { name: 'Main navigation' });

  await nav.getByRole('link', { name: 'Music', exact: true }).click();

  await expect(page).toHaveURL(/\/music/);
});