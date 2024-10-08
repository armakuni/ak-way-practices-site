import { defineConfig, devices } from '@playwright/test';

const baseUrl =  process.env.PW_BASE_URL ? process.env.PW_BASE_URL : 'http://localhost:8002';
const startWebserver = !process.env.PW_BASE_URL;

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Increase timeout
  timeout: 5 * 60 * 1000,


  // Retry on CI only.
  retries: process.env.CI ? 5 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: 'html',

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: baseUrl,

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: startWebserver ? {
    command: 'npm run start -- --port 8002',
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
    timeout: 5 * 60 * 1000,
  } : undefined,
});