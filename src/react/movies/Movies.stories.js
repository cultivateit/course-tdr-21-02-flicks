import { initialState, withState } from '../../test/utils/storybook'
import Movies from './Movies'

export default {
  title: 'movies/Movies',
  component: Movies,
  decorators: [ withState(initialState) ],
}

export const Empty = () => <Movies />
export const WithMovie = () => <Movies />
WithMovie.decorators = [ withState({ movie: 'Tenet' }) ]
