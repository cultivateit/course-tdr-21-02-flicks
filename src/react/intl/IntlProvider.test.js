import { FormattedMessage as T } from 'react-intl'
import * as intl from '../../domain/intl'
import { deDE } from '../../domain/intl/locales'
import { render, screen } from '../../test/utils/rtl'
import IntlProvider from './IntlProvider'

beforeEach(jest.resetAllMocks)

describe('IntlProvider', () => {
  it('provides translations', () => {
    render(<IntlProvider><T id='common.button.new' /></IntlProvider>)
    expect(screen.getByText(/new/i)).toBeInTheDocument()
  })

  it('considers locale', () => {
    jest.spyOn(intl, 'getLocale').mockReturnValue(deDE)
    render(<IntlProvider><T id='common.button.new' /></IntlProvider>)
    expect(screen.getByText(/neu/i)).toBeInTheDocument()
  })
})
