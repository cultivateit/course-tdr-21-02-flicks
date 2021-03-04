import { BUILD_INFO, ERROR, MOVIES_NEW, ROOT, WELCOME } from '../domain/routes'
import { initialState, render, screen, withIntl, withLocation, withState } from '../test/utils/rtl'
import Routes from './Routes'

describe('Routes', () => {
  describe('domain pages', () => {
    it('routes to build info page', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation(BUILD_INFO))
      expect(screen.getByRole('heading')).toHaveTextContent(/build info/i)
    })

    it('routes to error page', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation(ERROR))
      expect(screen.getByRole('heading')).toHaveTextContent(/error/i)
    })

    it('routes to not found page', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation('unsupported-route'))
      expect(screen.getByRole('heading')).toHaveTextContent(/not found/i)
    })

    it('routes to not welcome page', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation(WELCOME))
      expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i)
    })

    it('routes to movies and sub pages', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation(MOVIES_NEW))
      expect(screen.getByRole('heading')).toHaveTextContent(/new/i)
    })

    it('redirects from root page to welcome page', () => {
      render(<Routes />, withIntl(), withState(initialState), withLocation(ROOT))
      expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i)
    })
  })
})
