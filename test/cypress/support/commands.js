import '@testing-library/cypress/add-commands'

Cypress.Commands.add('Given', message => cy.log(`**GIVEN ${message}**`))
Cypress.Commands.add('When', message => cy.log(`**WHEN ${message}**`))
Cypress.Commands.add('Then', message => cy.log(`**THEN ${message}**`))
Cypress.Commands.add('And', message => cy.log(`**AND ${message}**`))
Cypress.Commands.add('Finally', message => cy.log(`**FINALLY ${message}**`))

Cypress.Commands.add('createMovie', title => {
  cy.visit('/movies')
  cy.findByRole('button', { name: /new/i }).click()
  cy.findByRole('form', { name: /new/i }).within(() => {
    cy.findByPlaceholderText(/title/i).type(title)
    cy.findByRole('button', { name: /save/i }).click()
  })
  cy.findByRole('list', { name: /movies/i }).within(() => {
    cy.findByRole('listitem', { name: title }).should('exist')
  })
})
