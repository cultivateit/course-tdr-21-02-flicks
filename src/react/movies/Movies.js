import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { MOVIES, MOVIES_NEW } from '../../domain/routes'
import { onCreateMovie, onInitMovie } from '../../redux/actions/movie'
import MovieEditor from './MovieEditor'
import MovieList from './MovieList'

const Movies = () => {
  const movie = useSelector(state => state.movie)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!movie) dispatch(onInitMovie())
  }, [ dispatch, movie ])

  return (
    <>
      <Route exact path={MOVIES}>
        <MovieList movie={movie} onCreateMovie={() => history.push(MOVIES_NEW)} />
      </Route>
      <Route exact path={MOVIES_NEW}>
        <MovieEditor onCreateMovie={movie => { history.push(MOVIES); dispatch(onCreateMovie(movie)) }} />
      </Route>
    </>
  )
}

export default Movies
