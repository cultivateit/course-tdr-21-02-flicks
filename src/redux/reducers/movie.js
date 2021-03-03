import { MOVIE_CREATE, MOVIE_INIT, MOVIE_INIT_SUCCESS } from '../actions/movie'

export const initialState = ''

export const reducer = (movie, action) => {
  switch (action.type) {
  case MOVIE_INIT_SUCCESS:
    return action.movie
  case MOVIE_CREATE:
    return action.movie
  default:
    return initialState
  }
}
