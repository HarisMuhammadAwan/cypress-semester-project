/// <reference types="cypress" />

describe('Task 1 — Navigation Functional Tests', () => {

  // Navigation Test 1
  it('Navigation Test 1: Click on menu link and assert page change', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Click on a menu link (About)
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()

    // Assertion: Correct external page opens and URL matches
    cy.url().should('include', 'saucelabs.com')
  })

  // Navigation Test 2
  it('Navigation Test 2: Visit 2 different pages in sequence', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Page 1: Navigate to Cart Page
    cy.get('.shopping_cart_link').click()
    cy.get('.title').should('have.text', 'Your Cart') // Assert visible heading

    // Page 2: Navigate back to Inventory Page by clicking continue shopping
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('.title').should('have.text', 'Products') // Assert visible heading
  })
})