The project is a basic end to end flow encompassing below scenarios.


🧾 Sample Test Scenario:

Navigate to login page
Log in using credentials through data driven approach
Click on one of the product tabs from My Account
Select and add a product to cart
View the cart
Assert cart and page title.


## 📁 Project Structure

├── pages/ → Page Object Model classes (LoginPage, MyAccountPage, CamerasPage)
├── tests/ → Test specs
├── testdata/ → JSON test data
├── utils/ → Helpers (e.g., dataProvider, navigation)
├── constants/ → Constants like URLs, expected titles, product names
├── playwright.config.ts → Playwright configuration
└── README.md → You're here


## ✅ Features

- ✅ Modular Page Object Model (POM) design
- 📄 Data-driven testing with JSON support
- 🔄 Reusable helper utilities
- 🎯 Clean locators and assertions
- 📂 Separation of concerns: data, logic, UI interactions


You can now clone, install any dependencies and run the tests.