import { onInit } from '../redux/thunks/init'
import { initialState, render, screen, withIntl, withState } from '../test/utils/rtl'
import { useInitialization } from './useInitialization'

jest.mock('../redux/thunks/init')

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
    render(<NeedsInitialization />, withIntl(), withState(uninitializedState))
    expect(onInit).toHaveBeenCalled()
  })

  it('signals init only when not loaded already', () => {
    render(<NeedsInitialization />, withIntl(), withState(initializedState))
    expect(onInit).not.toHaveBeenCalled()
  })

  it('signals init only once', () => {
    const { rerender } = render(<NeedsInitialization />, withIntl(), withState(uninitializedState))
    rerender(<NeedsInitialization />)
    expect(onInit).toHaveBeenCalledTimes(1)
  })
})
