import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { reducer as initStatus } from './initStatus'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  initStatus,
})

export default createRootReducer
