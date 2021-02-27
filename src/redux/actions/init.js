export const INIT_REQUEST = 'INIT_REQUEST'
export const onInit = () => ({ type: INIT_REQUEST })

export const INIT_SUCCESS = 'INIT_SUCCESS'
export const onInitSuccess = () => ({ type: INIT_SUCCESS })

export const INIT_FAILURE = 'INIT_FAILURE'
export const onInitFailure = error => ({ type: INIT_FAILURE, error })
