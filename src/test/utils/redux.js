import { render } from '@testing-library/react'
import { ConnectedRouter as RouterProvider } from 'connected-react-router'
import { createMemoryHistory } from 'history'
import { Provider as StoreProvider } from 'react-redux'
import { initialState } from '../../redux/reducers/initialState'
import { configureStoreProd } from '../../redux/store/configureStore'

export const configureStore = (state = initialState) => {
  const history = createMemoryHistory()
  const store = configureStoreProd(history, state)
  render(<StoreProvider store={store}><RouterProvider history={history} /></StoreProvider>)
  return { history, store }
}
