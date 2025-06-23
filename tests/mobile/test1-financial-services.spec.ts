import { expect } from '@playwright/test'
import { test } from '../../utils/fixtures'
test('Verify End-to-end solutions for financial services section', async ({
    page,
    homePage,
}) => {
    await test.step('Given Home Page is opened', async () => {
        await page.goto('/')
    })
    await test.step('End-to-end solutions for financial services section should be visible and the section should contain correct data', async () => {
        await expect(
            homePage.financialServicesArticleSection,
            'Check if financial services section is visible'
        ).toBeVisible()
        await expect(
            homePage.financialServicesArticleSection,
            'Financial Services section should contain proper data'
        ).toMatchAriaSnapshot(`- article:
  - heading "End-to-end solutions for financial services" [level=2]
  - list:
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/banking/
        - figure
        - heading "Banking" [level=3]
        - paragraph: Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/insurance/
        - figure
        - heading "Insurance" [level=3]
        - paragraph: Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/finance-esg/
        - figure
        - heading "Finance & ESG" [level=3]
        - paragraph: Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/banking/
        - figure
        - heading "Banking" [level=3]
        - paragraph: Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/insurance/
        - figure
        - heading "Insurance" [level=3]
        - paragraph: Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/finance-esg/
        - figure
        - heading "Finance & ESG" [level=3]
        - paragraph: Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/banking/
        - figure
        - heading "Banking" [level=3]
        - paragraph: Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/insurance/
        - figure
        - heading "Insurance" [level=3]
        - paragraph: Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem.
        - text: Learn more 
    - listitem:
      - link "Learn more":
        - /url: https://www.sapfioneer.com/finance-esg/
        - figure
        - heading "Finance & ESG" [level=3]
        - paragraph: Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform.
        - text: Learn more 
  - button "Go to slide 0"
  - button "Go to slide 1"
  - button "Go to slide 2"
  - button "Previous": 
  - button "Next": `)
    })
    await page.close()
})
