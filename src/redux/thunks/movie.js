import { createMovie, getMovie } from '../../services/movies'
import { MOVIE_CREATE, MOVIE_INIT, onInitMovieSuccess } from '../actions/movie'

export const THUNKS = {
  [MOVIE_CREATE]: movie => async () => {
    await createMovie(movie)
  },
  [MOVIE_INIT]: () => async dispatch => {
    const movie = await getMovie()
    dispatch(onInitMovieSuccess(movie))
  },
}
