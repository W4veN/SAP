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
module.exports = defineConfig({
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
    testMatch: '*.spec.ts',
    expect: { timeout: 20000 },
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'https://www.sapfioneer.com/',
        headless: true,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        actionTimeout: 10000,
        screenshot: 'only-on-failure',
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'Desktop e2e',
            testMatch: '/*/desktop/*.spec.ts',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1440, height: 900 },
                isMobile: false,
            },
        },
        {
            name: 'Mobile e2e',
            testMatch: '/*/mobile/*.spec.ts',
            use: {
                ...devices['Pixel 7'],
                viewport: { width: 412, height: 915 },
                isMobile: true,
            },
        },
    ],
})
