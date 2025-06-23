import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home-page'

test('has heading', async ({ page }) => {
    await page.goto('/')
    const homePage = new HomePage(page)
    // Expect a title "to contain" a substring.
    await expect(
        homePage.financialServicesSection,
        'Check if financial services section is visible'
    ).toBeVisible()
})
