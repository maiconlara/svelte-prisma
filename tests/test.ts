import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Empowered way to develop pages' })).toBeVisible();
});

test('index page has expected p', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('parag1')).toHaveText('Experience the next generation of landing page solutions');
});
