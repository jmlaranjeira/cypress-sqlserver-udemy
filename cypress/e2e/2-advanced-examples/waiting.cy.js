/// <reference types="cypress" />

context('Waiting', () => {
  let data

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/waiting')
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  it('Database Interaction', () => {

    cy.sqlServer('Select * from Persons').then((result) => {
        data = result
    })

  })

  // https://on.cypress.io/wait
  it('cy.wait() - wait for a specific amount of time', () => {
    cy.get('.wait-input1').type(data[1])
    cy.wait(1000)
    cy.get('.wait-input2').type(data[2])
    cy.wait(1000)
    cy.get('.wait-input3').type(data[3])
    cy.wait(1000)
  })

  it('cy.wait() - wait for a specific route', () => {
    // Listen to GET to comments/1
    cy.intercept('GET', '**/comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // wait for GET comments/1
    cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
  })
})
