# Playwright
The project is a basic end to end flow encompassing below scenarios.


## 🧾 Sample Test Scenario:

- Navigate to login page  
- Log in using credentials through a data-driven approach  
- Click on one of the product tabs from **My Account**  
- Select and add a product to cart  
- View the cart  
- Assert cart contents and page title  

---

## 📁 Project Structure

├── .github/
│   └── workflows/                # GitHub Actions workflow YAML files (e.g., playwright.yml)
│
├── allure-results/               # Allure report results (auto-generated after test runs)
│
├── cucumber-features/            # Gherkin .feature files describing test scenarios
│
├── cucumber-step-definitions/    # Step definition files (TypeScript functions for Gherkin steps)
│
├── fixtures/                     # Base test setup (e.g., baseTest.ts and any common fixtures)
│   └── baseTest.ts               # Base test setup for Playwright, etc.
│
├── pages/                        # Page Object Model classes (e.g., LoginPage, MyAccountPage, CamerasPage)
│
├── tests/                        # Additional test specs if needed
│
├── testdata/                     # Test data in JSON format
│
├── utils/                        # Utility helpers (e.g., data provider, navigation helpers, constants)
│   ├── constants.ts              # Shared constants (URLs, expected titles, product names)
│   ├── dataProvider.ts           # Data provider utilities
│   ├── navigation.ts             # Navigation helpers
│   └── otherUtils.ts             # Other utility helpers (if any)
│
├── playwright-report/            # Playwright's native HTML report (auto-generated)
│
├── test-results/                 # Optional directory for storing consolidated test outputs
│
├── cucumber-report.html          # Generated HTML report from Cucumber CLI
├── playwright.config.ts          # Playwright configuration file
├── tsconfig.json                 # TypeScript configuration
├── .gitignore                    # Files and folders to exclude from Git
└── README.md                     # Project documentation (you’re here!)



## Features

- Modular Page Object Model (POM) design
- Data-driven testing with JSON support
- Reusable helper utilities
- Clean locators and assertions
- Separation of concerns: data, logic, UI interactions


You can now clone, install any dependencies and run the tests.

---

# Playwright + Cucumber E2E Testing

This project uses [Playwright](https://playwright.dev/) with [Cucumber](https://cucumber.io/) for Behavior-Driven Development (BDD) style end-to-end testing.

## Project Structure

- `cucumber-features/` — Feature files with Gherkin scenarios
- `cucumber-step-definitions/` — Step definition files implementing the steps
- `pages/` — Page Object Models for UI interactions 
- `utils/` — Helper utilities and data providers
- `testdata/` — External test data

## Setup

- Install dependencies:  
  Make sure you have `ts-node` and `typescript` installed (already in `devDependencies`).  
   
- Configure `tsconfig.json`:  
  Ensure proper TypeScript support and `"moduleResolution": "node"` is set.

---

## Running Tests:
npx cucumber-js cucumber-features --require cucumber-step-definitions/**/*.ts --require-module ts-node/register 

This command will:

- Load feature files from cucumber-features/
- Load step definitions from cucumber-step-definitions/
- Compile TypeScript on the fly

---

OR  (with tagged test case):

- npx cucumber-js cucumber-features --require cucumber-step-definitions/**/*.ts --require-module ts-node/register --tags @Regression

OR (with html report):

- npx cucumber-js cucumber-features --require cucumber-step-definitions/**/*.ts --require-module ts-node/register --format html:cucumber-report.html

OR (retry for failed test cases):

- npx cucumber-js cucumber-features --require cucumber-step-definitions/**/*.ts --require-module ts-node/register --retry 1

---

## Notes

- Playwright's page object is accessed via Cucumber's this.page in step definitions.
- Test data is loaded from JSON files via a data provider utility.
- Page Objects encapsulate UI actions and assertions.
- Feature files can contain multiple scenarios (test cases).

---

## Troubleshooting

- Ensure tsconfig.json includes:

{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}

- If you get "module not found" errors, verify your folder structure and file names carefully.

