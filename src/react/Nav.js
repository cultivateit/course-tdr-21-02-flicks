import { FormattedMessage as T } from 'react-intl'
import { Link } from 'react-router-dom'
import { ROOT } from '../domain/routes'

const Nav = () => (
  <nav className='navbar navbar-light bg-light navbar-expand-sm'>
    <div className='container'>
      <Link className='title navbar-brand justify-content-start align-middle' to={ROOT}>
        <img
          className='d-inline-block'
          src='/logo-400x400.png'
          width={35}
          height={35}
          alt='cultivate logo'
          loading='lazy'
        />
        <span className='pl-3'>
          <T id='nav.title' defaultMessage='Flicks' />
        </span>
      </Link>
    </div>
  </nav>
)

export default Nav
