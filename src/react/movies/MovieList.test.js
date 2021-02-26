import userEvent from '@testing-library/user-event'
import { render, screen, within, withIntl } from '../../test/utils/rtl'
import MovieList from './MovieList'

const props = {
  movie: '',
  onCreateMovie: jest.fn(),
}

beforeEach(jest.resetAllMocks)

describe('MovieList', () => {
  it('shows no movies when there is no movie', () => {
    render(<MovieList {...props} movie='' />, withIntl())
    const list = screen.getByRole('list', { name: /movies/i })
    expect(within(list).queryByRole('listitem')).not.toBeInTheDocument()
  })

  it('shows one movie when there is one movie', () => {
    const { rerender } = render(<MovieList {...props} movie='Movie Title 1' />, withIntl())
    const list = screen.getByRole('list', { name: /movies/i })
    within(list).getByRole('listitem', { name: 'Movie Title 1' })

    rerender(<MovieList {...props} movie='Movie Title 2' />)
    const list2 = screen.getByRole('list', { name: /movies/i })
    within(list2).getByRole('listitem', { name: 'Movie Title 2' })
  })

  it('signals new movie when new movie was clicked', () => {
    const onCreateMovie = jest.fn()
    render(<MovieList {...props} onCreateMovie={onCreateMovie} />, withIntl())
    userEvent.click(screen.getByRole('button', { name: /new/i }))
    expect(onCreateMovie).toHaveBeenCalled()
  })
})
