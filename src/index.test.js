import configureStore from './redux/store/configureStore'
import { onInit } from './redux/thunks/init'

jest.mock('react-dom', () => ({ render: jest.fn() }))
jest.mock('./redux/thunks/init')
jest.mock('./redux/store/configureStore')

let dispatch

beforeEach(() => {
  jest.resetAllMocks()
  dispatch = jest.fn().mockReturnValue(Promise.resolve())
  configureStore.mockReturnValue({ dispatch })
})

describe('index', () => {
  it('renders without crashing', () => {
    jest.isolateModules(() => require('./index'))
    expect(onInit).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
  })
})
