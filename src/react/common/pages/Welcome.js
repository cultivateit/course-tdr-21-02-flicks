import { FormattedMessage as T } from 'react-intl'

const Welcome = () => (
  <div className='alert alert-success' role='alert'>
    <h4 className='alert-heading'><T id='page.welcome.title' defaultMessage='Welcome' /></h4>
    <p><T id='page.welcome.subTitle' defaultMessage='And enjoy!' /></p>
  </div>
)

export default Welcome
