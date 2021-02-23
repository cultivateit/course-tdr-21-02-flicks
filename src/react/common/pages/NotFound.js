import { FormattedMessage as T } from 'react-intl'

const NotFound = () => (
  <div className='alert alert-warning' role='alert'>
    <h4 className='alert-heading'><T id='page.notFound.title' defaultMessage='Not Found' /></h4>
    <p><T id='page.notFound.subTitle' defaultMessage='Unfortunately something went wrong' /></p>
    <hr />
    <p><T id='page.notFound.message' defaultMessage='Please check URL' /></p>
  </div>
)

export default NotFound
