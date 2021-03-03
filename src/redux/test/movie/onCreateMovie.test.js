import { createMovie } from '../../../services/movies'
import { configureStore } from '../../../test/utils/redux'
import { onCreateMovie } from '../../actions/movie'

jest.mock('../../../services/movies')

beforeEach(jest.resetAllMocks)

describe('onCreateMovie', () => {
  it('put movie into store', () => {
    const { store } = configureStore()

    store.dispatch(onCreateMovie('Movie Title 1'))
    expect(store.getState().movie).toBe('Movie Title 1')

    store.dispatch(onCreateMovie('Movie Title 2'))
    expect(store.getState().movie).toBe('Movie Title 2')
  })

  it('sends movie with service', () => {
    const { store } = configureStore()
    createMovie.mockResolvedValue()

    store.dispatch(onCreateMovie('Movie Title'))
    expect(createMovie).toHaveBeenCalledWith('Movie Title')

    store.dispatch(onCreateMovie('Movie Title 2'))
    expect(createMovie).toHaveBeenCalledWith('Movie Title 2')
  })
})
