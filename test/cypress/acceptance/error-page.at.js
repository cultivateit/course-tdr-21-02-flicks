describe('Feature: Error Page', () => {
  it('Scenario: Error page should be displayed', () => {
    cy.When('I visit the error page')
    cy.visit('/error')

    cy.Then('I see an error')
    cy.findByRole('alert').should('contain', 'Error')
  })
})
