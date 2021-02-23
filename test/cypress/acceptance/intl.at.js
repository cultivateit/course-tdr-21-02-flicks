describe('Feature: Language', () => {
  it('Scenario: Browser language should be considered', () => {
    cy.When('I visit the app')
    cy.visit('/welcome', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'de-DE' })
      },
    })

    cy.Then('I see the translated texts')
    cy.findByRole('alert').should('contain', 'Willkommen')
  })
})
