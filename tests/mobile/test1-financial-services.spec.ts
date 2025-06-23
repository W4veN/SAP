import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/home.page'
test('Verify End-to-end solutions for financial services section', async ({
    page,
}) => {
    await page.goto('/')

    const homePage = new HomePage(page)
    await expect(
        homePage.financialServicesArticleSection,
        'Check if financial services section is visible'
    ).toBeVisible()
    await expect(
        homePage.financialServicesArticleSection,
        'Financial Services section should contain proper data'
    ).toMatchAriaSnapshot(`- article:
  - heading "End-to-end solutions for financial services" [level=2]
  - link "Learn more":
    - /url: https://www.sapfioneer.com/banking/
    - figure
    - heading "Banking" [level=3]
    - paragraph: Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.
    - text: Learn more 
  - link "Learn more":
    - /url: https://www.sapfioneer.com/insurance/
    - figure
    - heading "Insurance" [level=3]
    - paragraph: Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.
    - text: Learn more 
  - link "Learn more":
    - /url: https://www.sapfioneer.com/finance-esg/
    - figure
    - heading "Finance & ESG" [level=3]
    - paragraph: Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.
    - text: Learn more `)
    await page.close()
})
