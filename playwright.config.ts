import { defineConfig, devices } from '@playwright/test'
import path from 'path'
import dotenv from 'dotenv'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';

require('dotenv').config()
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    name: 'Interview Tests',
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://www.sapfioneer.com/',
        headless: false,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        actionTimeout: 10000,
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'Desktop e2e',
            use: { ...devices['Desktop Chrome'] },
            testMatch: '/*/desktop/*.spec.ts',
        },
        {
            name: 'Mobile e2e',
            use: {
                ...devices['Pixel 7'],
                viewport: { width: 412, height: 915 },
            },
            testMatch: '/*/mobile/*.spec.ts',
        },
    ],
})
