# Cypress End-to-End Automation Project

This repository contains beautifully organized, isolated End-to-End automated testing suites built using Cypress against the Swag Labs platform to fulfill Task 1 and Task 2 curriculum specifications.

## Repository Architecture & Coverage

### 🟢 Task 1: UI Functional Test Suite (`cypress/e2e/`)
* `login.cy.js` — Validates valid credential entry landing states and incorrect password system error handling.
* `navigation.cy.js` — Tracks interactive sidebar structural links and handles sequential multi-page layout traversals.
* `form.cy.js` — Simulates multi-field data submissions using complex custom checkout input forms.

### 🔵 Task 2: Advanced Concepts & Optimization (`cypress/e2e/` & `cypress/support/`)
* `advanced_concepts.cy.js` — Demonstrates element alias tracking, native lifecycle hooks, and negative object verification strategies.
* `commands.js` — Contains the global abstracted custom helper command `cy.login()` to minimize script duplication.

## Execution Guide

1. Clone this repository down to your local framework runtime desktop environment.
2. Install the necessary development dependencies via your system terminal:
   ```bash
   npm install

#Boot up the graphic test execution visual console wrapper dashboard:
   npx cypress open --e2e
