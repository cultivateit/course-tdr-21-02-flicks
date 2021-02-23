import Movies from './Movies'
import { render, screen, within, withIntl } from '../../test/utils/rtl'

describe('Movies', () => {
  it('has no movies initially', () => {
    render(<Movies />, withIntl())
    const list = screen.getByRole('list', { name: /movies/i })
    expect(within(list).queryByRole('listitem')).not.toBeInTheDocument()
  })
})
