import { FormattedMessage as T } from 'react-intl'

const Spinner = () => (
  <div className='spinner-border' role='status'>
    <span className='sr-only visually-hidden'><T id='common.status.loading' defaultMessage='Loading...' /></span>
  </div>
)

export default Spinner
