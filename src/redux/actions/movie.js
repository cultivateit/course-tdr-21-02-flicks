export const MOVIE_INIT = 'MOVIE_INIT'
export const onInitMovie = () => ({ type: MOVIE_INIT })

export const MOVIE_INIT_SUCCESS = 'MOVIE_INIT_SUCCESS'
export const onInitMovieSuccess = movie => ({ type: MOVIE_INIT_SUCCESS, movie })

export const MOVIE_CREATE = 'MOVIE_CREATE'
export const onCreateMovie = movie => ({ type: MOVIE_CREATE, movie })
