import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home.page'
import { ContactPage } from '../pages/contact.page'
export const test = base.extend<{
    homePage: HomePage
    contactPage: ContactPage
}>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page)
        await use(contactPage)
    },
})
