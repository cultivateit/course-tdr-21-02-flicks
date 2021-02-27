import { INIT_REQUEST, onInitSuccess } from '../actions/init'

export const THUNKS = {
  [INIT_REQUEST]: () => async dispatch => {
    await dispatch(onInitSuccess())
  },
}
