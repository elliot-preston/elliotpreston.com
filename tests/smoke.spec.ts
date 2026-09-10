import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Elliot Preston/i);
});

test('main navigation is visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: /work/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /music/i })).toBeVisible();
});