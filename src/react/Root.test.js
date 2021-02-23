import { BUILD_INFO, ERROR, WELCOME } from '../domain/routes'
import { configureHistory, configureStore, initialState, render, screen } from '../test/utils/rtl'
import Root from './Root'

beforeEach(jest.resetAllMocks)

describe('Root', () => {
  it('displays internationalized app', () => {
    const history = configureHistory({ initialEntries: [ ERROR ] })
    render(<Root history={history} store={configureStore(initialState, history)} />)
    expect(screen.getByRole('heading', { name: /error/i })).toBeInTheDocument()
  })

  it('renders content based on redux store state', () => {
    const history = configureHistory({ initialEntries: [ WELCOME ] })
    render(<Root history={history} store={configureStore(initialState, history)} />)
    expect(screen.queryByRole('heading', { name: /welcome/i })).toBeInTheDocument()
  })

  it('renders content based on history', () => {
    const history = configureHistory({ initialEntries: [ BUILD_INFO ] })
    render(<Root history={history} store={configureStore(initialState, history)} />)
    expect(screen.getByRole('heading', { name: /build info/i })).toBeInTheDocument()
  })
})
