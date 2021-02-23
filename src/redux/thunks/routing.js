import { goBack, push } from 'connected-react-router'

export const onPush = location => (dispatch, getState) => {
  dispatch(push(location + getState().router.location.search))
}

export const onBack = () => dispatch => {
  dispatch(goBack())
}
