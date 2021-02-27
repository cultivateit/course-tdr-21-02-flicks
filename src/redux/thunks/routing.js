import { goBack, push } from 'connected-react-router'
import { BACK, PUSH } from '../actions/routing'

export const THUNKS = {
  [PUSH]: location => (dispatch, getState) => {
    dispatch(push(location + getState().router.location.search))
  },
  [BACK]: () => dispatch => {
    dispatch(goBack())
  },
}
