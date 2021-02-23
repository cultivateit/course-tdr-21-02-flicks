import Nav from './Nav'
import Routes from './Routes'

const Layout = () => (
  <>
    <Nav />
    <main className='container pt-2 pt-md-3 pt-lg-4 pt-xl-5'>
      <Routes />
    </main>
  </>
)

export default Layout
