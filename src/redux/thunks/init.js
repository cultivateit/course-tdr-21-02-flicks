import { initSuccess } from '../actions/init'

export const onInit = () => async dispatch => {
  await dispatch(initSuccess())
}
