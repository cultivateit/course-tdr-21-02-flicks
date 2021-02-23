import { push } from 'connected-react-router'
import { BUILD_INFO, ROOT } from '../../../domain/routes'
import { configureStore } from '../../../test/utils/redux'
import { onPush } from '../../thunks/routing'

describe('onPush', () => {
  it('changes location', () => {
    const store = configureStore().store
    store.dispatch(push(ROOT))
    expect(store.getState().router.location.pathname).toBe(ROOT)
    store.dispatch(onPush(BUILD_INFO))
    expect(store.getState().router.location.pathname).toBe(BUILD_INFO)
  })

  it('keeps current search', () => {
    const store = configureStore().store
    store.dispatch(push(ROOT + '?key=Value'))
    expect(store.getState().router.location.search).toBe('?key=Value')
    store.dispatch(onPush(BUILD_INFO))
    expect(store.getState().router.location.search).toBe('?key=Value')
  })
})

