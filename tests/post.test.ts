import AxeBuilder from "@axe-core/playwright";
import { test } from "@playwright/test";

test.describe("post page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").waitFor();
    const locator = page.getByRole("main").getByRole("link").first();
    const headingText = await locator
      .getByRole("heading", { level: 3 })
      .textContent();

    test.expect(headingText).not.toBe(null);

    await locator.click();
    await page.getByRole("heading", { level: 1 }).first().waitFor();
  });

  test("it should have a header", async ({ page }) => {
    await test.expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test.describe("a11y", () => {
    test.describe("light mode", () => {
      test.use({ colorScheme: "light" });
      test("should not have any automatically detectable accessibility issues", async ({
        page,
      }) => {
        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        test.expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
    test.describe("dark mode", () => {
      test.use({ colorScheme: "dark" });
      test("should not have any automatically detectable accessibility issues", async ({
        page,
      }) => {
        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        test.expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  });
});
