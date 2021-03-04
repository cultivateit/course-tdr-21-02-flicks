import { v4 as uuid } from 'uuid'

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

  it('Scenario: A movie should be there when created', () => {
    cy.Given('I have a movie title')
    const title = `Movie AT ${uuid()}`

    cy.And('I am on the movies page')
    cy.visit('/movies')

    cy.When('I chose to add a new movie')
    cy.findByRole('button', { name: /new/i }).click()

    cy.And('I provide movie details')
    cy.findByRole('form', { name: /new/i }).within(() => {
      cy.findByPlaceholderText(/title/i).type(title)

      cy.And('I save the movie')
      cy.findByRole('button', { name: /save/i }).click()
    })

    cy.Then('I see the movie in the list of movies')
    cy.findByRole('list', { name: /movies/i }).within(() => {
      cy.findByRole('listitem', { name: title }).should('exist')
    })
  })

  it('Scenario: A movie should be still there on next visit', () => {
    cy.Given('I see a movie in the list of movies')
    const title = `Movie AT ${uuid()}`
    cy.createMovie(title)

    cy.When('I reload the page')
    cy.reload()

    cy.Then('I still see the movie in the list of movies')
    cy.findByRole('listitem', { name: title }).should('exist')
    cy.findByRole('list', { name: /movies/i }).within(() => {
      cy.findByRole('listitem', { name: title }).should('exist')
    })
  })

  it('Scenario: Linking directly into new movie form should be possible', () => {
    cy.Given('I am on the add movie page')
    cy.visit('/movies')
    cy.findByRole('button', { name: /new/i }).click()
    cy.findByRole('form', { name: /new/i }).should('exist')

    cy.When('I share the URL and the URL is opened')
    cy.reload()

    cy.Then('I see the new movie form')
    cy.findByRole('form', { name: /new/i }).should('exist')
  })

  // Z_mbies
})
