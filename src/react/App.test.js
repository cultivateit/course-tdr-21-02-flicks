import { initialState, render, screen, withIntl, withRouter, withState } from '../test/utils/rtl'

import App from './App'

describe('App', () => {
  it('displays app title while initializing', () => {
    const state = { ...initialState, initStatus: { isInitialized: false } }
    render(<App />, withIntl(), withState(state), withRouter())
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i)
  })

  it('displays app title when initialized', () => {
    const state = { ...initialState, initStatus: { isInitialized: true } }
    render(<App />, withIntl(), withState(state), withRouter())
    expect(screen.getByText('Flicks')).toBeInTheDocument()
  })
})
