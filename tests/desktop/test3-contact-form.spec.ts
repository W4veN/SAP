import { expect } from '@playwright/test'
import { test } from '../../utils/fixtures'
test('Verify contact form', async ({ page, homePage, contactPage }) => {
    const invalidBusinessEmail = '342323'
    await page.goto('/')

    await expect(
        homePage.financialServicesArticleSection,
        'Check if financial services section is visible'
    ).toBeVisible()
    await homePage.clickGetInTouchButton()
    await page.waitForURL('**/contact-sales/')
    expect(page.url(), 'Verify redirection').toBe(
        'https://www.sapfioneer.com/contact-sales/'
    )
    await contactPage.provideBusinessEmail(invalidBusinessEmail)
    await expect(
        contactPage.invalidEmailError,
        'Check if invalid email error information is displayed'
    ).toBeVisible()
    await expect(
        contactPage.businessEmailInput,
        'Check if invalid error class is added to the parent'
    ).toContainClass('invalid error')
    await page.close()
})
