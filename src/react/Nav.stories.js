import { withLocation } from '../test/utils/storybook'
import Nav from './Nav'

export default {
  title: 'common/Nav',
  component: Nav,
  decorators: [ withLocation() ],
}

export const Default = () => <Nav />
