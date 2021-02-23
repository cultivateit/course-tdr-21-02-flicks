import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import { failuresListener } from '../middlewares/failures'
import createRootReducer from '../reducers'

const createMiddlewares = history => [
  routerMiddleware(history),
  thunk,
  failuresListener,
]

export const configureStoreProd = (history, initialState) => createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(...createMiddlewares(history))),
)

export const configureStoreDev = (history, initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...[ ...createMiddlewares(history), reduxImmutableStateInvariant() ])),
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextCreateRootReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextCreateRootReducer(history))
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
