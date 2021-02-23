import { render, screen, withIntl } from '../../../test/utils/rtl'

import Error from './Error'

describe('Error', () => {
  it('renders heading', () => {
    render(<Error />, withIntl())
    expect(screen.getByRole('alert')).toHaveTextContent('Error')
  })
})
