import { MOVIE_CREATE } from '../actions/movie'

export const initialState = ''

export const reducer = (movie = initialState, action) => {
  switch (action.type) {
  case MOVIE_CREATE:
    return action.movie
  default:
    return movie
  }
}
