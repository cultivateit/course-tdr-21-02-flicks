import { handler } from '../common/handler'
import { CreatedResponse, NoContentResponse, OkResponse } from '../common/response'
import {
  createMovie,
  deleteMovie as removeMovie,
  deleteMovies as removeMovies,
  listMovies,
  readMovie,
  updateMovie,
} from '../services/movies'

export const getMovies = handler(async () => {
  const movies = await listMovies()
  return OkResponse(movies)
})

export const deleteMovies = handler(async () => {
  await removeMovies()
  return NoContentResponse()
})

export const getMovie = handler(async ({ pathParameters: { movieId } }) => {
  const movie = await readMovie(movieId)
  return OkResponse(movie)
})

export const postMovie = handler(async ({ body }) => {
  const movie = JSON.parse(body)
  const newMovieId = await createMovie(movie)
  return CreatedResponse('/movies/' + newMovieId)
})

export const putMovie = handler(async ({ pathParameters: { movieId }, body }) => {
  const movie = JSON.parse(body)
  await updateMovie(movieId, movie)
  return NoContentResponse()
})

export const deleteMovie = handler(async ({ pathParameters: { movieId } }) => {
  await removeMovie(movieId)
  return NoContentResponse()
})
