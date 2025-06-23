# Install all project dependencies

npm install

# Install Playwright browsers

npx playwright install

# Run all tests

npx playwright test

# Run specifile file

npx playwright test tests/desktop/test1-financial-services.spec.ts

# View Report

npx playwright show-report

# Directories

.
├── tests/
│ └── desktop/
| └── test1-financial-services.spec.ts
| └── test2-engine.spec.ts
| └── test3-contact-form.spec
| └── mobile/
| └── test1-financial-services.spec.ts
| └── test2-engine.spec.ts
| └── test3-contact-form.spec
├── playwright.config.ts
├── package.json

# Next Steps

1. Move to better reporter like Allure
2. Improve the ci/cd to install only needed browsers / cache them
3. Install playwright eslint rules
4. Improve assertion for 1 test to be more specific
5. Add bdd support

# Tests

Feature: Financial Services Section
As a website visitor
I want to see the financial services section displayed correctly
So that I can access detailed information about Banking, Insurance, and Finance & ESG solutions

Scenario: Financial services section is visible
Given I open the homepage
Then the "End-to-end solutions for financial services" section should be visible
And the section should contain:
| Category | Heading | Description | Link URL |
| Banking | Banking | Reach more customers and build trust with real-time financial insights and risk control. Join the 800 banks globally who have chosen our platform. | https://www.sapfioneer.com/banking/ |
| Insurance | Insurance | Accelerate digital insurance processes to meet customer expectations and create new revenue streams by connecting easily to the ecosystem. | https://www.sapfioneer.com/insurance/ |
| Finance & ESG | Finance & ESG | Establish a single source of truth for profitability and turn compliance into your advantage using our integrated finance & ESG platform. | https://www.sapfioneer.com/finance-esg/ |

Feature: ESG KPI Engine Redirection

As a website visitor
I want to navigate to the ESG KPI Engine page
So that I can learn more about ESG KPIs and related solutions

Scenario: User is redirected to ESG KPI Engine page
Given I open the homepage
When I expand the "Products" bookmark
And I select "Finance & ESG" in the expanded bookmark
And I select "ESG KPI Engine" from the menu
Then I should be redirected to "https://www.sapfioneer.com/finance-esg/esg-kpi-engine/"

Feature: Business Email Validation in Contact Form

As a potential customer
I want to be warned when I enter an invalid business email
So that I can correct it and successfully submit the contact form

Scenario: Invalid business email shows error in contact form
Given I open the homepage
When I click the "Get in Touch" button
Then I should be redirected to "https://www.sapfioneer.com/contact-sales/"
When I enter an invalid business email "342323"
Then I should see an error message for invalid email
And the business email input should have an "invalid error" class
