import { useState } from 'react'
import { FormattedMessage as T, useIntl } from 'react-intl'
import MovieList from './MovieList'

const Movies = () => {
  const { formatMessage: t } = useIntl()
  const [ movie, setMovie ] = useState('')
  const [ showNewMovieForm, setShowNewMovieForm ] = useState(false)
  return showNewMovieForm ? (
    <>
      <h1 id='movies.new.title'><T id='movies.new.title' defaultMessage='New Movie' /></h1>
      <form className='form-inline' aria-labelledby='movies.new.title'>
        <input
          className='form-control mb-2 mr-sm-2'
          placeholder={t({ id: 'movies.new.placeholders.title', defaultMessage: 'Title' })}
          onChange={e => setMovie(e.target.value)}
        />
        <button className='btn btn-primary mb-2' onClick={e => { e.preventDefault(); setShowNewMovieForm(false) }}>
          <T id='movies.new.save' defaultMessage='save' />
        </button>
      </form>
    </>
  ) : (
    <MovieList movie={movie} onCreateMovie={() => setShowNewMovieForm(true)} />
  )
}

export default Movies
