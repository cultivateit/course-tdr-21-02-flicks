import { configureStore } from '../../../test/utils/redux'
import { onInit, onInitFailure } from '../../actions/init'

let store

beforeEach(() => {
  jest.resetAllMocks()
  store = configureStore().store
})

describe('onInit', () => {
  it('is initialized on success', async () => {
    expect(store.getState().initStatus.isInitialized).toBe(false)
    await store.dispatch(onInit())
    expect(store.getState().initStatus.isInitialized).toBe(true)
  })

  it('is initialized on failure', async () => {
    expect(store.getState().initStatus.isInitialized).toBe(false)
    await store.dispatch(onInitFailure(new Error()))
    expect(store.getState().initStatus.isInitialized).toBe(true)
  })
})

