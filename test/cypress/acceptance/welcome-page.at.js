describe('Feature: Welcome Page', () => {
  it('Scenario: Welcome page should be displayed', () => {
    cy.When('I visit the welcome page')
    cy.visit('/')

    cy.Then('I see the welcome page')
    cy.findByRole('alert').should('contain', 'Welcome')
  })
})
