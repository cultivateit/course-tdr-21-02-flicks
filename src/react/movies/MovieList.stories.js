import MovieList from './MovieList'
export default {
  title: 'movies/MovieList',
  component: MovieList,
  args: {
    movie: '',
  },
}
export const Empty = args => <MovieList {...args} />
export const OneMovie = args => <MovieList {...args} movie='Tenet' />
