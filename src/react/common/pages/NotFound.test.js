import { render, screen, withIntl } from '../../../test/utils/rtl'

import NotFound from './NotFound'

describe('NotFound', () => {
  it('renders heading', () => {
    render(<NotFound />, withIntl())
    expect(screen.getByRole('alert')).toHaveTextContent('Not Found')
  })
})
