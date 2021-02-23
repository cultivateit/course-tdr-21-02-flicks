import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onInit } from '../redux/thunks/init'
import Spinner from './common/display/Spinner'

export const useInitialization = () => {
  const isInitialized = useSelector(state => state.initStatus.isInitialized)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isInitialized) dispatch(onInit())
  }, [ isInitialized, dispatch ])

  const WithInitialization = isInitialized ? ({ children }) => <>{children}</> : Spinner
  return { WithInitialization }
}
