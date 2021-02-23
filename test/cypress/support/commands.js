import '@testing-library/cypress/add-commands'

Cypress.Commands.add('Given', message => cy.log(`**GIVEN ${message}**`))
Cypress.Commands.add('When', message => cy.log(`**WHEN ${message}**`))
Cypress.Commands.add('Then', message => cy.log(`**THEN ${message}**`))
Cypress.Commands.add('And', message => cy.log(`**AND ${message}**`))
Cypress.Commands.add('Finally', message => cy.log(`**FINALLY ${message}**`))
