import '@storybook/addon-console'
import 'bootstrap/dist/css/bootstrap.css'
import { deDE, enUS } from '../src/domain/intl/locales'
import { withIntl } from '../src/test/utils/storybook'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en-US',
    toolbar: {
      icon: 'globe',
      items: [
        { value: enUS, right: '🇺🇸', title: 'English (US)' },
        { value: deDE, right: '🇩🇪', title: 'Deutsch (DE)' },
      ],
    },
  },
}

export const decorators = [ withIntl() ]
