export const INIT_SUCCESS = 'INIT_SUCCESS'
export const initSuccess = () => ({ type: INIT_SUCCESS })

export const INIT_FAILURE = 'INIT_FAILURE'
export const initFailure = error => ({ type: INIT_FAILURE, error })
