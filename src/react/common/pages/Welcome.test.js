import { render, screen, withIntl } from '../../../test/utils/rtl'

import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders heading', () => {
    render(<Welcome />, withIntl())
    expect(screen.getByRole('alert')).toHaveTextContent('Welcome')
  })
})
