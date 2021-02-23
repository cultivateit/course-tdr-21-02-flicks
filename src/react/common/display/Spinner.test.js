import { render, screen, withIntl } from '../../../test/utils/rtl'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders', () => {
    render(<Spinner />, withIntl())
    expect(screen.getByRole('status')).toHaveTextContent('Loading...')
  })
})
