import { INIT_FAILURE, INIT_SUCCESS } from '../actions/init'

export const initialState = {
  isInitialized: false,
}

export const reducer = (initStatus = initialState, action) => {
  switch (action.type) {
  case INIT_SUCCESS:
    return { isInitialized: true }
  case INIT_FAILURE:
    return { isInitialized: true }
  default:
    return initStatus
  }
}
