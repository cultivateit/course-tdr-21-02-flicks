import { FormattedMessage as T } from 'react-intl'

const Movies = () => (
  <>
    <h1 id='movies.title'><T id='movies.title' defaultMessage='Movies' /></h1>
    <ul aria-labelledby='movies.title' />
  </>
)

export default Movies
