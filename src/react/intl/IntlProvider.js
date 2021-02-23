import PropTypes from 'prop-types'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { getLocale, getMessages } from '../../domain/intl'
import { enUS } from '../../domain/intl/locales'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const IntlProvider = ({ children }) => (
  <ReactIntlProvider messages={getMessages(getLocale())} locale={getLocale()} defaultLocate={enUS}>
    {children}
  </ReactIntlProvider>
)

IntlProvider.propTypes = propTypes

export default IntlProvider
