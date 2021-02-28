import userEvent from '@testing-library/user-event'
import { render, screen, within, withIntl } from '../../test/utils/rtl'
import MovieEditor from './MovieEditor'

describe('MovieEditor', () => {
  it('signals new movie when title was entered and save was clicked', () => {
    const onCreateMovie = jest.fn()
    render(<MovieEditor onCreateMovie={onCreateMovie} />, withIntl())
    const newForm = screen.getByRole('form', { name: /new/i })
    userEvent.type(within(newForm).getByPlaceholderText(/title/i), 'Movie Title')
    userEvent.click(within(newForm).getByRole('button', { name: /save/i }))
    expect(onCreateMovie).toHaveBeenCalledWith('Movie Title')
  })

  it('signals another movie when another title was entered and save was clicked', () => {
    const onCreateMovie = jest.fn()
    render(<MovieEditor onCreateMovie={onCreateMovie} />, withIntl())
    const newForm = screen.getByRole('form', { name: /new/i })
    userEvent.type(within(newForm).getByPlaceholderText(/title/i), 'Movie Title 2')
    userEvent.click(within(newForm).getByRole('button', { name: /save/i }))
    expect(onCreateMovie).toHaveBeenCalledWith('Movie Title 2')
  })
})
