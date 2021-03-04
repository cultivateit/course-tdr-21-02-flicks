import { MOVIES } from '../../domain/routes'
import { initialState, withLocation, withState } from '../../test/utils/storybook'
import Movies from './Movies'

export default {
  title: 'movies/Movies',
  component: Movies,
  decorators: [ withLocation(MOVIES), withState(initialState) ],
}

export const Empty = () => <Movies />
export const WithMovie = () => <Movies />
WithMovie.decorators = [ withState({ movie: 'Tenet' }) ]
