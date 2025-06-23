import { expect } from '@playwright/test'
import { test } from '../../utils/fixtures'
test('Verify redirection to ESG KPI Engine', async ({ page, homePage }) => {
    await test.step('Given Home Page is opened', async () => {
        await page.goto('/')
        await expect(
            homePage.financialServicesArticleSection,
            'Check if financial services section is visible'
        ).toBeVisible()
    })
    await test.step('When user navigated through menu to esg-kpi-engine', async () => {
        await homePage.openMobileBookmarks()
        await homePage.expandBookmark('Products')
        await homePage.selectMobileRowInExpandedBookmark('Finance & ESG')
        await homePage.selectMenu('ESG KPI Engine')
    })
    await test.step('Then user should be redirected to correct url', async () => {
        await page.waitForURL('**/finance-esg/**')
        expect(page.url(), 'Verify redirection').toBe(
            'https://www.sapfioneer.com/finance-esg/esg-kpi-engine/'
        )
    })
    await page.close()
})
