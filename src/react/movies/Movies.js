import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCreateMovie } from '../../redux/actions/movie'
import MovieEditor from './MovieEditor'
import MovieList from './MovieList'

const Movies = () => {
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch()
  const [ showNewMovieForm, setShowNewMovieForm ] = useState(false)
  return showNewMovieForm ? (
    <MovieEditor onCreateMovie={movie => { setShowNewMovieForm(false); dispatch(onCreateMovie(movie)) }} />
  ) : (
    <MovieList movie={movie} onCreateMovie={() => setShowNewMovieForm(true)} />
  )
}

export default Movies
