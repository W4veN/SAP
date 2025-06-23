import { type Page, type Locator } from '@playwright/test'

export class ContactPage {
    readonly page: Page
    readonly businessEmailInput: Locator
    readonly invalidEmailError: Locator

    constructor(page: Page) {
        this.page = page
        this.businessEmailInput = page.locator('input[name="email"]')
        this.invalidEmailError = page
            .locator('label')
            .filter({ hasText: 'Email must be formatted correctly.' })
    }

    async provideBusinessEmail(text: string) {
        await this.businessEmailInput.fill(text)
    }
}
