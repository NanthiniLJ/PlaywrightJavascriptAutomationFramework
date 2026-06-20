# Playwright JavaScript Automation Framework

## Overview
This project is an end-to-end UI automation framework built using Playwright and JavaScript following the Page Object Model (POM) design pattern.

## Tech Stack
- Playwright
- JavaScript
- Node.js

## Framework Features
- Page Object Model (POM)
- Reusable page classes
- Centralized test data management
- Assertions using Playwright Expect
- HTML Reporting
- End-to-End Purchase Flow Validation

## Test Scenarios Covered
### User Registration
- Register a new user
- Validate successful registration

### Login
- Login with valid credentials
- Validate logged-in user
- Login with invalid credential

### Product Search
- Search products
- Validate search results
- Search invalid products
- Validated with assertion

### Cart
- Add product to cart
- Validate cart content

### Checkout
- Enter billing information
- Enter payment information
- Place order successfully

### Order Validation
- Capture order number
- Validate order number on Order Details page

## Project Structure
PlaywrightJavascriptAutomationFramework
│
├── pages
│   ├── RegisterPage.js
│   ├── LoginPage.js
│   ├── SearchPage.js
│   ├── CartPage.js
│   └── CheckoutPaymentPage.js
│   └── OrderDetailsPage.js
│
├── tests
│   ├── NewUserRegistration.spec.js
│   └── EndToEndFlow.spec.js
│
├── utils
│   ├── constants.js
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

## Installation
```bash
npm install
```

## Run All Tests
```bash
npx playwright test
```

## Run Single Test
```bash
npx playwright test tests/NewUserRegistration.spec.js
```

## Open HTML Report
```bash
npx playwright show-report
```

## Author
Nanthini L J
