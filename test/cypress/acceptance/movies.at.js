describe('Feature: Movies', () => {
  it('Scenario: No movies should be there initially', () => {
    cy.When('I visit the movies page')
    cy.visit('/movies')
    cy.findByRole('heading', { name: /movies/i })

    cy.Then('I should see an empty list of movies')
    cy.findByRole('list', { name: /movies/i }).within(() => {
      cy.findByRole('listitem').should('not.exist')
    })
  })

  // Zombies
})
