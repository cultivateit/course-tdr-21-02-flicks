describe('Feature: Not Found Page', () => {
  it('Scenario: Not found page should be displayed when visiting not existing page', () => {
    cy.When('I visit a non-existing page')
    cy.visit('/non-existing-page')

    cy.Then('I see a not found warning')
    cy.findByRole('alert').should('contain', 'Not Found')
  })
})
