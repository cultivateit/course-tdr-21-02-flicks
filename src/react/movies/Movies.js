import { useState } from 'react'
import MovieEditor from './MovieEditor'
import MovieList from './MovieList'

const Movies = () => {
  const [ movie, setMovie ] = useState('')
  const [ showNewMovieForm, setShowNewMovieForm ] = useState(false)
  return showNewMovieForm ? (
    <MovieEditor onCreateMovie={movie => { setShowNewMovieForm(false); setMovie(movie) }} />
  ) : (
    <MovieList movie={movie} onCreateMovie={() => setShowNewMovieForm(true)} />
  )
}

export default Movies
