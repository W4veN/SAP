import { type Page, type Locator } from '@playwright/test'
export class HomePage {
    readonly page: Page
    readonly financialServicesSection: Locator
    constructor(page: Page) {
        this.page = page
        this.financialServicesSection = page
            .getByRole('heading', { name: 'End-to-end solutions for' })
            .describe('End-to-end solutions for financial services Header')
    }
}
