import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { reducer as initStatus } from './initStatus'
import { reducer as movie } from './movie'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  initStatus,
  movie,
})

export default createRootReducer
