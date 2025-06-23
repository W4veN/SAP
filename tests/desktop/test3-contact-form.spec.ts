import { expect } from '@playwright/test'
import { test } from '../../utils/fixtures'
test('Verify contact form email input', async ({
    page,
    homePage,
    contactPage,
}) => {
    const invalidBusinessEmail = '342323'
    await test.step('Given Home Page is opened', async () => {
        await page.goto('/')
        await expect(
            homePage.financialServicesArticleSection,
            'Check if financial services section is visible'
        ).toBeVisible()
    })
    await test.step('When user clicked get in touch button', async () => {
        await homePage.clickGetInTouchButton()
    })
    await test.step('Then user should be redirected to correct url', async () => {
        await page.waitForURL('**/contact-sales/')
        expect(page.url(), 'Verify redirection').toBe(
            'https://www.sapfioneer.com/contact-sales/'
        )
    })
    await test.step('When user provided wrong business email', async () => {
        await contactPage.provideBusinessEmail(invalidBusinessEmail)
    })
    await test.step('Then error message should be displayed and element should contain error class', async () => {
        await expect(
            contactPage.invalidEmailError,
            'Check if invalid email error information is displayed'
        ).toBeVisible()
        await expect(
            contactPage.businessEmailInput,
            'Check if invalid error class is added to the parent'
        ).toContainClass('invalid error')
    })
    await page.close()
})
