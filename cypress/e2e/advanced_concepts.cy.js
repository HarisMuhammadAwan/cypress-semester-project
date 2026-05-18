/// <reference types="cypress" />

describe('Task 2 — Advanced Assertions, Aliases & Custom Commands', () => {

  // 1. beforeEach Hook: Runs before every single test case below to remove code duplication
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // Covers Custom Command, Alias Practice, and 3 Different Assertion Types
  it('Exercise: Employs custom commands, aliases, and explicit element assertions', () => {
    
    // A. Custom Command usage: Logs in using our newly created command asset
    cy.login('standard_user', 'secret_sauce')

    // B. Alias Practice: Caches the main shopping cart link container element as an alias
    cy.get('.shopping_cart_link').as('cartButton')

    // C. Assertion Practice 1: Uses cy.should('be.visible') on our saved alias node
    cy.get('@cartButton').should('be.visible')

    // D. Assertion Practice 2: Click an item to add to cart and use cy.should('have.text', '...')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('@cartButton').should('have.text', '1')

    // E. Assertion Practice 3: Target a different element (the remove button) and use cy.should('have.attr', '...')
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.attr', 'name', 'remove-sauce-labs-backpack')
  })

  // Covers Negative Assertions
  it('Exercise: Verifies element removal via negative assertions', () => {
    // Log in using our custom command
    cy.login('standard_user', 'secret_sauce')

    // Negative Assertion: Asserts that the login button NO LONGER exists on the page once on the inventory dashboard
    cy.get('[data-test="login-button"]').should('not.exist')
  })
})