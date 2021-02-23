import { ConnectedRouter as RouterProvider } from 'connected-react-router'
import PropTypes from 'prop-types'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'
import IntlProvider from './intl/IntlProvider'

const propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const Root = ({ store, history }) => (
  <IntlProvider>
    <StoreProvider store={store}>
      <RouterProvider history={history}>
        <App />
      </RouterProvider>
    </StoreProvider>
  </IntlProvider>
)

Root.propTypes = propTypes

export default Root
