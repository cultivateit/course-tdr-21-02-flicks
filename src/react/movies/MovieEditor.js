import PropTypes from 'prop-types'
import { useState } from 'react'
import { FormattedMessage as T, useIntl } from 'react-intl'

const propTypes = {
  onCreateMovie: PropTypes.func.isRequired,
}

const MovieEditor = ({ onCreateMovie }) => {
  const { formatMessage: t } = useIntl()
  const [ movie, setMovie ] = useState('')
  return (
    <>
      <h1 id='movies.new.title'><T id='movies.new.title' defaultMessage='New Movie' /></h1>
      <form className='form-inline' aria-labelledby='movies.new.title'>
        <input
          className='form-control mb-2 mr-sm-2'
          placeholder={t({ id: 'movies.new.placeholders.title', defaultMessage: 'Title' })}
          onChange={e => setMovie(e.target.value)}
        />
        <button
          className='btn btn-primary mb-2'
          onClick={e => { e.preventDefault(); onCreateMovie(movie) }}
        >
          <T id='movies.new.save' defaultMessage='save' />
        </button>
      </form>
    </>
  )
}

MovieEditor.propTypes = propTypes

export default MovieEditor
