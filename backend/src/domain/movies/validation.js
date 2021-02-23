import Joi from 'joi'

export const MAX_TITLE_LENGTH = 120

export const MOVIE_ID = Joi.string()
const TITLE = Joi.string().min(1).max(MAX_TITLE_LENGTH).required()
const YEAR = Joi.number().min(0)

const MOVIE = Joi.object({
  movieId: MOVIE_ID,
  title: TITLE,
  year: YEAR,
})

export const isValidMovieId = movieId => !MOVIE_ID.validate(movieId).error
export const isValidTitle = title => !TITLE.validate(title).error
export const isValidYear = year => !YEAR.validate(year).error
export const isValidMovie = movie => !MOVIE.validate(movie).error
