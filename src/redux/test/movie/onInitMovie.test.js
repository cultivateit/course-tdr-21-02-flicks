import { getMovie } from '../../../services/movies'
import { configureStore } from '../../../test/utils/redux'
import { onInitMovie } from '../../actions/movie'

jest.mock('../../../services/movies')

beforeEach(jest.resetAllMocks)

describe('onInitMovie', () => {
  it('gets movie with service', () => {
    const { store } = configureStore()
    getMovie.mockResolvedValue('Movie Title')
    store.dispatch(onInitMovie())
    expect(getMovie).toHaveBeenCalled()
  })

  it('puts movie into store', async () => {
    const { store } = configureStore()

    getMovie.mockResolvedValue('Movie Title')
    await store.dispatch(onInitMovie())
    expect(store.getState().movie).toBe('Movie Title')

    getMovie.mockResolvedValue('Movie Title 2')
    await store.dispatch(onInitMovie())
    expect(store.getState().movie).toBe('Movie Title 2')
  })
})
