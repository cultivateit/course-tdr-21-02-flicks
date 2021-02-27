import { THUNKS } from '../thunks'

export const actionToThunk = () => next => async action => {
  const { type, ...payload } = action
  const thunk = THUNKS[type]
  if (!thunk) return next(action)
  next(action)
  return next(thunk(...Object.values(payload)))
}
