import { render, screen, withIntl, withRouter } from '../test/utils/rtl'

import Layout from './Layout'

const decorators = [ withIntl(), withRouter() ]

describe('Layout', () => {
  it('displays navigation', () => {
    render(<Layout />, ...decorators)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('displays main', () => {
    render(<Layout />, ...decorators)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
