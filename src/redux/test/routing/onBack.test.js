import { push } from 'connected-react-router'
import { BUILD_INFO, ROOT } from '../../../domain/routes'
import { configureStore } from '../../../test/utils/redux'
import { onBack } from '../../actions/routing'

describe('onBack', () => {
  it('changes location to previous location', () => {
    const { store } = configureStore()
    store.dispatch(push(ROOT))
    store.dispatch(push(BUILD_INFO))
    expect(store.getState().router.location.pathname).toBe(BUILD_INFO)
    store.dispatch(onBack())
    expect(store.getState().router.location.pathname).toBe(ROOT)
  })
})
