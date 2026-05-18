/// <reference types="cypress" />

describe('Task 1 — Form Submission Functional Tests', () => {

  // Form Test 1
  it('Form Test 1: Fill out checkout form, submit, and assert results page', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    // Navigate to the form page
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    // Fill out the form fields
    cy.get('[data-test="firstName"]').type('Haris')
    cy.get('[data-test="lastName"]').type('Muhammad')
    cy.get('[data-test="postalCode"]').type('54000')

    // Submit the form
    cy.get('[data-test="continue"]').click()

    // Assertion: Assert the result confirmation/overview page displays
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('.title').should('have.text', 'Checkout: Overview')
  })
})