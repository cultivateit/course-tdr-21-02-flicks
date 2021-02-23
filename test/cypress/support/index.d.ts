/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs a BDD Given statement
     * @example
     * cy.given('I open the user list')
     */
    Given(title: string): Chainable<any>

    /**
     * Logs a BDD When statement
     * @example
     * cy.when('I create a user')
     */
    When(title: string): Chainable<any>

    /**
     * Logs a BDD Then statement
     * @example
     * cy.then('I see a user')
     */
    Then(title: string): Chainable<any>

    /**
     * Logs a BDD And statement
     * @example
     * cy.and('I see an updated user count')
     */
    And(title: string): Chainable<any>

    /**
     * Logs a BDD Finally statement
     * @example
     * cy.finally('I delete the user again')
     */
    Finally(title: string): Chainable<any>
  }
}
