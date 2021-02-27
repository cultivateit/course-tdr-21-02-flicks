import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserHistory } from 'history'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './config'
import Root from './react/Root'
import { onInit } from './redux/actions/init'
import { initialState } from './redux/reducers/initialState'
import configureStore from './redux/store/configureStore'

export const history = createBrowserHistory()

const appId = 'flicks'

const renderApp = (history, store) => {
  render(
    <StrictMode>
      <Root store={store} history={history} />
    </StrictMode>,
    document.getElementById(appId),
  )
}

const store = configureStore(history, initialState)
store.dispatch(onInit())
renderApp(history, store)
