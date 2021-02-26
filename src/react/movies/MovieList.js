import * as PropTypes from 'prop-types'
import { FormattedMessage as T } from 'react-intl'

const propTypes = {
  movie: PropTypes.string.isRequired,
  onCreateMovie: PropTypes.func.isRequired,
}

const MovieList = ({ movie, onCreateMovie }) => (
  <>
    <h1 id='movies.list.title'><T id='movies.list.title' defaultMessage='Movies' /></h1>
    <ul aria-labelledby='movies.list.title'>
      {movie && (
        <li aria-labelledby='movies.list.movie.title'>
          <span id='movies.list.movie.title'>{movie}</span>
        </li>
      )}
    </ul>
    <button className='btn btn-primary' onClick={() => onCreateMovie()}>
      <T id='movies.list.new' defaultMessage='new' />
    </button>
  </>
)

MovieList.propTypes = propTypes

export default MovieList
