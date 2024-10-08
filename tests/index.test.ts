import AxeBuilder from "@axe-core/playwright";
import { test } from "@playwright/test";

test.describe("index page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("navigation").waitFor();
  });

  test("it should have at least one page", async ({ page }) => {
    test
      .expect(await page.getByRole("main").getByRole("link").count())
      .toBeGreaterThan(1);
  });

  test("it should link to the details page", async ({ page }) => {
    const locator = page.getByRole("main").getByRole("link").first();
    const headingText = await locator
      .getByRole("heading", { level: 3 })
      .textContent();

    test.expect(headingText).not.toBe(null);

    await locator.click();
    await page.getByRole("heading", { level: 1 }).first().waitFor();
    await test
      .expect(page.getByRole("heading", { level: 1 }).first())
      .toHaveText(headingText ?? "");
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
