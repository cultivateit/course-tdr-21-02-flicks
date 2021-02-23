import { action as logAction } from '@storybook/addon-actions'
import { IntlProvider } from 'react-intl'
import { Provider as StoreProvider } from 'react-redux'
import { MemoryRouter as RouterProvider } from 'react-router-dom'
import configureStoreMock from 'redux-mock-store'
import { getMessages } from '../../domain/intl'
import { enUS } from '../../domain/intl/locales'

// classname

export const withClassname = cn => (Story, context) => <div className={cn}><Story {...context} /></div>
export const withPadding = (padding = 'p-1') => withClassname(padding)

// intl

export const withLocale = (locale = enUS) => (Story, context) => (
  <IntlProvider messages={getMessages(locale)} locale={locale} defaultLocate={enUS}>
    <Story {...context} />
  </IntlProvider>
)
export const withIntl = () => (Story, context) => (
  <IntlProvider messages={getMessages(context.globals.locale)} locale={context.globals.locale} defaultLocate={enUS}>
    <Story {...context} />
  </IntlProvider>
)

// redux

export const withState = (state = {}) => (Story, context) => {
  const actionsMiddleware = () => () => action => typeof action === 'function'
    ? logAction('redux thunk')(action.name)
    : logAction('redux action')(action)
  const middlewares = [ actionsMiddleware ]
  const store = configureStoreMock(middlewares)(state)
  return (
    <StoreProvider store={store}>
      <Story {...context} />
    </StoreProvider>
  )
}

// router
export const withLocation = (location = '/') => (Story, context) => (
  <RouterProvider initialEntries={[ location ]} initialIndex={0}>
    <Story {...context} />
  </RouterProvider>
)
