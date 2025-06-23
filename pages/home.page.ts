import { type Page, type Locator } from '@playwright/test'
type Bookmarks = 'Products' | 'Solutions' | 'Resources' | 'Company'
type RowsInExpandedBookmark =
    | 'Banking'
    | 'Insurance'
    | 'Finance & ESG'
    | 'AI Agent'

export class HomePage {
    readonly page: Page
    readonly financialServicesArticleSection: Locator
    readonly financialServicesContainer: Locator
    readonly navigation: Locator
    readonly getInTouchButton: Locator

    constructor(page: Page) {
        this.page = page
        this.financialServicesContainer = page
            .locator('.container-fluid')
            .describe('Financial Services Container')
        this.financialServicesArticleSection = page
            .getByRole('article')
            .filter({ hasText: 'End-to-end solutions for financial services' })
            .describe('End-to-end solutions for financial services article')
        this.navigation = page
            .getByRole('navigation')
            .describe('Navigation list')
        this.getInTouchButton = page
            .getByRole('link', { name: 'Get in touch' })
            .first()
            .describe('Get In Touch Button')
    }
    async expandBookmark(bookmarkName: Bookmarks) {
        await this.navigation
            .getByRole('listitem')
            .filter({ hasText: bookmarkName })
            .click()
    }
    async selectRowInExpandedBookmark(rowName: RowsInExpandedBookmark) {
        await this.page
            .getByRole('list')
            .getByRole('listitem')
            .locator('h3')
            .filter({ hasText: rowName })
            .click()
    }
    async selectMenu(itemName: string) {
        await this.page.getByRole('listitem').getByLabel(itemName).click()
    }
    async clickGetInTouchButton() {
        await this.getInTouchButton.click()
    }
}
