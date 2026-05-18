/// <reference types="cypress" />

describe('Task 1 — Login Functional Tests', () => {

  // Login Test 1
  it('Login Test 1: Enter valid username and password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    // Assertion: Lands on the home dashboard page
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  // Login Test 2
  it('Login Test 2: Enter an incorrect password', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()
    
    // Assertion: Error message appears on screen
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })
})