import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  //Global Setup to run before all tests
  globalSetup: './global-setup',

 use: {
    screenshot: 'only-on-failure',
    headless: false
  },
  reporter: [['html'],['line'],['allure-playwright']],

  //Global Teardown to run after all tests
  // globalTeardown: './global-teardown',
  
  testDir: './tests',
  // testMatch: 'FrameTest.test.ts',
  /* Maximum time one test can run for. */
  timeout: 50 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in 'await expect(locator).toHaveText();'
     */
    timeout: 15000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'allure-playwright',
  // reporter: 'allure-playwright',
 // reporter: './utils/MyReporter.ts',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Testing on chromium',
      use: {
        ...devices['Desktop Chrome'],
        // viewport: { width: 1800, height: 1100 },

      launchOptions: {
          slowMo: 1000
        }
      },
      
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
}




export default config;
