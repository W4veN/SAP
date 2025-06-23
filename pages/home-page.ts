import { type Page, type Locator } from '@playwright/test'
export class HomePage {
    readonly page: Page
    readonly financialServicesArticleSection: Locator
    readonly bankingColumn: Locator
    readonly financialServicesContainer: Locator
    constructor(page: Page) {
        this.page = page
        this.financialServicesContainer = page
            .locator('.container-fluid')
            .describe('Financial Services Container')
        this.financialServicesArticleSection = page
            .getByRole('article')
            .filter({ hasText: 'End-to-end solutions for financial services' })
            .describe('End-to-end solutions for financial services article')
        this.bankingColumn = page
            .locator('div > a[aria-label="Learn more"]')
            .describe('Banking Column Section')
    }
}
