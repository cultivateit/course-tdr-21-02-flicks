import { v4 as uuid } from 'uuid'
import { readMovie as readMovieFromDb, readMovies, removeMovie, removeMovies, upsertMovie } from '../db/movies'
import { NotFoundError, ValidationError } from '../domain/errors'
import { sanitize } from '../domain/movies/sanitization'
import { isValidMovie } from '../domain/movies/validation'

export const listMovies = readMovies

export const deleteMovies = removeMovies

export const readMovie = async movieId => {
  const movie = await readMovieFromDb(movieId)
  if (!movie) throw new NotFoundError()
  return movie
}

export const createMovie = async newMovie => {
  const sanitizedMovie = sanitize(newMovie)
  if (!isValidMovie(sanitizedMovie)) throw new ValidationError()
  const movieId = uuid()
  await upsertMovie({ ...sanitizedMovie, movieId })
  return movieId
}

export const updateMovie = async (movieId, movie) => {
  const sanitizedMovie = sanitize(movie)
  if (!isValidMovie(sanitizedMovie)) throw new ValidationError()
  await upsertMovie({ ...sanitizedMovie, movieId })
}

export const deleteMovie = removeMovie
