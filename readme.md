# Cypress UI Functional Automation Suite

This repository contains beautifully organized, isolated End-to-End automated testing suites built using Cypress against the Swag Labs platform to fulfill Task 1 requirement modules.

## Repository File Architecture
All core test files are cleanly partitioned into functional specifications inside the main execution environment directory:
* `cypress/e2e/login.cy.js` — Automates valid credential landing states and incorrect password error container validations.
* `cypress/e2e/navigation.cy.js` — Automates external menu redirection logic and multi-page state traversal flows sequentially.
* `cypress/e2e/form.cy.js` — Handles dynamic input simulation across complex multi-field application form modules.

## Local Execution Guide

1. Clone this repository workspace down to your local desktop environment.
2. Run the package deployment command in your project root terminal to configure all required testing node engine dependencies:
   ```bash
   npm install

#Boot up the graphic test execution visual console wrapper dashboard:
   npx cypress open --e2e
