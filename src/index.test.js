import { onInit } from './redux/actions/init'
import configureStore from './redux/store/configureStore'

jest.mock('react-dom', () => ({ render: jest.fn() }))
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
    expect(dispatch).toHaveBeenCalledWith(onInit())
    expect(dispatch).toHaveBeenCalledTimes(1)
  })
})
