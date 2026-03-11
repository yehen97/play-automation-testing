# Playwright Automation Framework (Cucumber + TypeScript)

## Overview
This project implements a maintainable test automation framework using:

- **Playwright**
- **Cucumber (BDD)**
- **TypeScript**
- **Page Object Model (POM)**

The framework is designed to be scalable, reusable, and easy to maintain.

---

# Project Structure

```
project-root
│
├── features
│   ├── registration.feature
│   ├── product-cart.feature
│   └── admin.feature
│
├── step-definitions
│   ├── userSteps.ts
│   ├── productCartSteps.ts
│   └── adminSteps.ts
│
├── pages
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── AdminPage.ts
│
├── hooks
│   └── hooks.ts
│
├── utils
│   └── testData.json
│
├── playwright.config.ts
├── cucumber.js
├── package.json
└── README.md
```

---

# Prerequisites

Install the following before running the project:

- Node.js (v18 or higher)
- npm
- Git

Check installation:

```bash
node -v
npm -v
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yehen97/play-automation-testing.git
```

Navigate to the project folder:

```bash
cd playwright-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

## Run All Tests

```bash
npm test
```

---

## Run Specific Feature

```bash
npx cucumber-js features/registration.feature
```

---

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

# Reporting

Cucumber reports can be generated using:

```bash
npm run report
```

Playwright HTML report:

```bash
npx playwright show-report
```

---
