import { ERROR } from '../../domain/routes'
import { onPush } from '../thunks/routing'

export const failuresListener = store => next => action => {
  if (action.type && action.type.endsWith('_FAILURE')) {
    logFailureAction(action)
    store.dispatch(onPush(ERROR))
  }
  return next(action)
}

const logFailureAction = action => {
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.error('Unexpected failure action:', action.type)
    // eslint-disable-next-line no-console
    console.error(action.error)
  }
}
