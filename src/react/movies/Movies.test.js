import userEvent from '@testing-library/user-event'
import { onCreateMovie } from '../../redux/actions/movie'
import { configureMockStore, render, screen, within, withIntl, withState, withStore } from '../../test/utils/rtl'
import Movies from './Movies'

const addMovie = movie => {
  userEvent.click(screen.getByRole('button', { name: /new/i }))
  const newForm = screen.getByRole('form', { name: /new/i })
  userEvent.type(within(newForm).getByPlaceholderText(/title/i), movie)
  userEvent.click(within(newForm).getByRole('button', { name: /save/i }))
}

const decorators = [ withIntl(), withState({ movie: '' }) ]

describe('Movies', () => {
  it('has no movie initially when there is no movie', () => {
    render(<Movies />, ...decorators)
    const list = screen.getByRole('list', { name: /movies/i })
    expect(within(list).queryByRole('listitem')).not.toBeInTheDocument()
  })

  it('has one movie when there is one movie', () => {
    render(<Movies />, withIntl(), withState({ movie: 'Movie Title 1' }))
    const movies = screen.getByRole('list', { name: /movies/i })
    within(movies).getByRole('listitem', { name: 'Movie Title 1' })
  })

  it('has different movie when there is a different movie', () => {
    render(<Movies />, withIntl(), withState({ movie: 'Movie Title 2' }))
    const movies = screen.getByRole('list', { name: /movies/i })
    within(movies).getByRole('listitem', { name: 'Movie Title 2' })
  })

  it('signals new movie after adding one', () => {
    const store = configureMockStore({ movie: '' })
    render(<Movies />, withIntl(), withStore(store))
    addMovie('Movie Title 1')
    expect(store.getActions()).toContainEqual(onCreateMovie('Movie Title 1'))
    addMovie('Movie Title 2')
    expect(store.getActions()).toContainEqual(onCreateMovie('Movie Title 2'))
  })

  it('shows new movie form when clicking on new movie button', () => {
    render(<Movies />, ...decorators)
    userEvent.click(screen.getByRole('button', { name: /new/i }))
    screen.getByRole('form', { name: /new/i })
  })

  it('shows no new movie form initially', () => {
    render(<Movies />, ...decorators)
    expect(screen.queryByRole('form', { name: /new/i })).not.toBeInTheDocument()
  })

  it('hides movie list when clicking on the new movie button', () => {
    render(<Movies />, ...decorators)
    userEvent.click(screen.getByRole('button', { name: /new/i }))
    expect(screen.queryByRole('list', { name: /movies/i })).not.toBeInTheDocument()
  })

  it('hides new movie form after saving movie', () => {
    render(<Movies />, ...decorators)
    addMovie('Movie Title')
    expect(screen.queryByRole('form', { name: /new/i })).not.toBeInTheDocument()
  })
})
