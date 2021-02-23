describe('Feature: Build Info Page', () => {
  it('Scenario: Build info page should be displayed', () => {
    cy.When('I visit the build info page')
    cy.visit('/build-info')

    cy.Then('I see the build info')
    cy.findByRole('alert').should('contain', 'Build Info')
  })
})
