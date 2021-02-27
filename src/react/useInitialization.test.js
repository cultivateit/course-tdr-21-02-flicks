import { onInit } from '../redux/actions/init'
import { configureMockStore, initialState, render, screen, withIntl, withState, withStore } from '../test/utils/rtl'
import { useInitialization } from './useInitialization'

const uninitializedState = { ...initialState, initStatus: { isInitialized: false } }
const initializedState = { ...initialState, initStatus: { isInitialized: true } }

const NeedsInitialization = () => {
  const { WithInitialization } = useInitialization()
  return <WithInitialization>Done</WithInitialization>
}

beforeEach(jest.resetAllMocks)

describe('useInitialization', () => {
  it('shows loader when not initialized', () => {
    render(<NeedsInitialization />, withIntl(), withState(uninitializedState))
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i)
  })

  it('shows no loader when initialized', () => {
    render(<NeedsInitialization />, withIntl(), withState(initializedState))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('shows no child component when not initialized', () => {
    render(<NeedsInitialization />, withIntl(), withState(uninitializedState))
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  it('shows child component when initialized', () => {
    render(<NeedsInitialization />, withIntl(), withState(initializedState))
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  it('signals init', () => {
    const store = configureMockStore(uninitializedState)
    render(<NeedsInitialization />, withIntl(), withStore(store))
    expect(store.getActions()).toContainEqual(onInit())
  })

  it('signals init only when not loaded already', () => {
    const store = configureMockStore(initializedState)
    render(<NeedsInitialization />, withIntl(), withStore(store))
    expect(store.getActions()).not.toContainEqual(onInit())
  })

  it('signals init only once', () => {
    const store = configureMockStore(uninitializedState)
    const { rerender } = render(<NeedsInitialization />, withIntl(), withStore(store))
    rerender(<NeedsInitialization />)
    expect(store.getActions()).toHaveLength(1)
  })
})
