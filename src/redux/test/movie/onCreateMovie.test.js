import { configureStore } from '../../../test/utils/redux'
import { onCreateMovie } from '../../actions/movie'

describe('onCreateMovie', () => {
  it('sets movie', () => {
    const { store } = configureStore()

    store.dispatch(onCreateMovie('Movie Title 1'))
    expect(store.getState().movie).toBe('Movie Title 1')

    store.dispatch(onCreateMovie('Movie Title 2'))
    expect(store.getState().movie).toBe('Movie Title 2')
  })
})
