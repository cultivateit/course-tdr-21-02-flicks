import userEvent from '@testing-library/user-event'
import { BUILD_INFO, ROOT } from '../domain/routes'
import { configureHistory, render, screen, withHistory, withIntl } from '../test/utils/rtl'
import Nav from './Nav'

beforeEach(jest.resetAllMocks)

describe('Nav', () => {
  it('navigates to root when title is clicked', () => {
    const history = configureHistory({ initialEntries: [ BUILD_INFO ] })
    render(<Nav />, withIntl(), withHistory(history))
    expect(history.location.pathname).not.toBe(ROOT)
    userEvent.click(screen.getByRole('link', { name: /flicks/i }))
    expect(history.location.pathname).toBe(ROOT)
  })

  it('navigates to root when logo is clicked', () => {
    const history = configureHistory({ initialEntries: [ BUILD_INFO ] })
    render(<Nav />, withIntl(), withHistory(history))
    expect(history.location.pathname).not.toBe(ROOT)
    userEvent.click(screen.getByAltText(/logo/i))
    expect(history.location.pathname).toBe(ROOT)
  })
})
