import userEvent from '@testing-library/user-event'
import { render, screen, within, withIntl } from '../../test/utils/rtl'
import Movies from './Movies'

const addMovie = movie => {
  userEvent.click(screen.getByRole('button', { name: /new/i }))
  const newForm = screen.getByRole('form', { name: /new/i })
  userEvent.type(within(newForm).getByPlaceholderText(/title/i), movie)
  userEvent.click(within(newForm).getByRole('button', { name: /save/i }))
}

describe('Movies', () => {
  it('has no movies initially', () => {
    render(<Movies />, withIntl())
    const list = screen.getByRole('list', { name: /movies/i })
    expect(within(list).queryByRole('listitem')).not.toBeInTheDocument()
  })

  it('has one movie after adding one', () => {
    render(<Movies />, withIntl())
    addMovie('Movie Title 1')
    const movies = screen.getByRole('list', { name: /movies/i })
    within(movies).getByRole('listitem', { name: 'Movie Title 1' })
  })

  it('has different movie after adding different one', () => {
    render(<Movies />, withIntl())
    addMovie('Movie Title 2')
    const movies = screen.getByRole('list', { name: /movies/i })
    within(movies).getByRole('listitem', { name: 'Movie Title 2' })
  })

  it('shows new movie form when clicking on new movie button', () => {
    render(<Movies />, withIntl())
    userEvent.click(screen.getByRole('button', { name: /new/i }))
    screen.getByRole('form', { name: /new/i })
  })

  it('shows no new movie form initially', () => {
    render(<Movies />, withIntl())
    expect(screen.queryByRole('form', { name: /new/i })).not.toBeInTheDocument()
  })

  it('hides movie list when clicking on the new movie button', () => {
    render(<Movies />, withIntl())
    userEvent.click(screen.getByRole('button', { name: /new/i }))
    expect(screen.queryByRole('list', { name: /movies/i })).not.toBeInTheDocument()
  })

  it('hides new movie form after saving movie', () => {
    render(<Movies />, withIntl())
    addMovie('Movie Title')
    expect(screen.queryByRole('form', { name: /new/i })).not.toBeInTheDocument()
  })
})
