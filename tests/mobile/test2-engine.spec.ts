import { expect } from '@playwright/test'
import { test } from '../../utils/fixtures'
test('Verify redirection to ESG KPI Engine', async ({ page, homePage }) => {
    await page.goto('/')

    await expect(
        homePage.financialServicesArticleSection,
        'Check if financial services section is visible'
    ).toBeVisible()
    await homePage.expandBookmark('Products')
    await homePage.selectRowInExpandedBookmark('Finance & ESG')
    await homePage.selectMenu('ESG KPI Engine')
    await page.waitForURL('**/finance-esg/**')
    expect(page.url(), 'Verify redirection').toBe(
        'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/'
    )
    await page.close()
})
