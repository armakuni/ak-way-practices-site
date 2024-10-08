import { test } from '@playwright/test';


test('it should have at least one page', async ({ page }) => {
  await page.goto("/")
  test.expect(await page.getByRole("main").getByRole("link").count()).toBeGreaterThan(1)
});

test('it should link to the details page', async ({ page }) => {
  await page.goto("/")
  const locator = page.getByRole("main").getByRole("link").first();
  const headingText = await locator.getByRole("heading", {level: 3}).textContent();

  test.expect(headingText).not.toBe(null)

  await locator.click()
  await page.getByRole("heading", {level: 1}).first().waitFor()
  await test.expect(page.getByRole("heading", {level: 1}).first()).toHaveText(headingText ?? "")
});
