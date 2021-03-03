import { createMovie } from '../../services/movies'
import { MOVIE_CREATE } from '../actions/movie'

export const THUNKS = {
  [MOVIE_CREATE]: movie => async () => {
    await createMovie(movie)
  },
}
