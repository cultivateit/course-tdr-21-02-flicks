import { FormattedMessage as T } from 'react-intl'

const Error = () => (
  <div className='alert alert-danger' role='alert'>
    <h4 className='alert-heading'><T id='page.error.title' defaultMessage='Error' /></h4>
    <p><T id='page.error.subTitle' defaultMessage='Unfortunately something went wrong' /></p>
    <hr />
    <p><T id='page.error.message' defaultMessage='Please check connection' /></p>
  </div>
)

export default Error
