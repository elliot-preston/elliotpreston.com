import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Elliot Preston/i);
});

test('main navigation is visible', async ({ page }) => {
  await page.goto('/');

  const nav = page.getByRole('navigation', { name: 'Main navigation' });

  await expect(
    nav.getByRole('link', { name: 'Work', exact: true })
  ).toBeVisible();

  await expect(
    nav.getByRole('link', { name: 'Music', exact: true })
  ).toBeVisible();
});