import { test } from '@playwright/test';
import { expect } from "vitest";

test.beforeEach(async ({ page }) => {
  await page.goto("/")
  const locator = page.getByRole("main").getByRole("link").first();
  const headingText = await locator.getByRole("heading", {level: 3}).textContent();

  test.expect(headingText).not.toBe(null)

  await locator.click()
  await page.getByRole("heading", {level: 1}).first().waitFor()
})

test('it should have a header', async ({ page }) => {
  await test.expect(page.getByRole("heading", {level: 1})).toBeVisible()
});
