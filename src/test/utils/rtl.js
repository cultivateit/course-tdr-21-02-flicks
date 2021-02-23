// React Testing Library (rtl)
//
// Import all things rtl from here (rtl is re-exported in this file).
//
// Useful links:
//
// rtl Guiding Principles - https://testing-library.com/docs/guiding-principles
// Which query should I use? - https://testing-library.com/docs/guide-which-query
// ARIA roles - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#Roles
// rtl Cheatsheet - https://testing-library.com/docs/react-testing-library/cheatsheet
// Jest expect DOM extensions - https://github.com/testing-library/jest-dom#table-of-contents
// User Events - https://github.com/testing-library/user-event#table-of-contents
// Common mistakes with React Testing Library - https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
// Index of ARIA Design Pattern Examples - https://www.w3.org/TR/wai-aria-practices/examples/

import '@testing-library/jest-dom/extend-expect'
import { render as rtlRender } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { IntlProvider } from 'react-intl'
import { Provider as StoreProvider } from 'react-redux'
import { Route, Router as RouterProvider } from 'react-router-dom'
import configureStoreMock from 'redux-mock-store'
import { getMessages } from '../../domain/intl'
import { enUS } from '../../domain/intl/locales'
import { initialState as initialStoreState } from '../../redux/reducers/initialState'
import { configureStoreProd } from '../../redux/store/configureStore'

export * from '@testing-library/react'

const decorate = (node, ...decorators) => decorators
  ? decorators.reduce((decorated, decorator) => decorator(decorated), node)
  : node

export const render = (node, ...decorators) => {
  const { rerender, ...otherProps } = rtlRender(decorate(node, ...decorators))
  return { ...otherProps, rerender: node => rerender(decorate(node, ...decorators)) }
}

// intl

export const withIntl = (locale = enUS) => node => (
  <IntlProvider messages={getMessages(locale)} locale={locale} defaultLocate={enUS}>{node}</IntlProvider>
)

// redux

const thunkMock = () => next => action => {
  if (!action) return next({ type: 'MOCKED_THUNK' })
  if (typeof action === 'function') return next({ type: 'THUNK' })
  return next(action)
}
const middlewares = [ thunkMock ]
export const initialState = initialStoreState
export const configureMockStore = (state = {}) => configureStoreMock(middlewares)(state)
export const configureStore = (state = {}, history = configureHistory()) => configureStoreProd(history, state)
export const withStore = store => node => <StoreProvider store={store}>{node}</StoreProvider>
export const withState = (state = {}) => withStore(configureMockStore(state))

// router

export const configureHistory = options => createMemoryHistory(options)
export const withHistory = history => node => <RouterProvider history={history}>{node}</RouterProvider>
export const withLocation = (location = '/') => withHistory(configureHistory({ initialEntries: [ location ] }))
export const withRouter = () => withLocation('/')
export const withRoute = path => node => <Route path={path} render={() => node} />
