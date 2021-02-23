import { createMemoryHistory } from 'history'
import { initialState } from '../reducers/initialState'
import configureStore, { configureStoreDev, configureStoreProd } from './configureStore'

let history

beforeEach(() => {
  jest.resetAllMocks()
  history = createMemoryHistory()
})

describe('redux store', () => {

  describe('configureStore', () => {
    it('configures store', () => {
      const store = configureStore(history, initialState)
      expect(store.dispatch).toBeDefined()
      expect(store.getState()).toBeDefined()
    })
  })

  describe('configureStoreDev', () => {
    it('configures store', () => {
      const store = configureStoreDev(history, initialState)
      expect(store.dispatch).toBeDefined()
    })

    it('initializes state (assuming all reducers and their initial states are mounted)', () => {
      const store = configureStoreDev(history, initialState)
      const { router, ...rest } = store.getState()
      expect(router).toBeTruthy()
      expect(rest).toEqual(initialState)
    })

    it('initializes reducers', done => {
      const store = configureStoreDev(history, initialState)
      store.subscribe(() => {
        expect(store.getState().router.location.pathname).toEqual('/foo')
        done()
      })
      store.dispatch({ type: '@@router/LOCATION_CHANGE', payload: { location: { pathname: '/foo' } } })
    })
  })

  describe('configureStoreProd', () => {
    it('configures store', () => {
      const store = configureStoreProd(history, initialState)
      expect(store.dispatch).toBeDefined()
    })

    it('initializes state (assuming all reducers and their initial states are mounted)', () => {
      const store = configureStoreProd(history, initialState)

      const { router, ...rest } = store.getState()
      expect(router).toBeTruthy()
      expect(rest).toEqual(initialState)
    })
  })
})
