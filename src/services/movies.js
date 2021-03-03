import CONFIG from '../config'

export const createMovie = async movie => {
  await fetch(CONFIG.api.endpoint + '/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: movie }),
  })
}

export const getMovie = async () => {
  const response = await fetch(CONFIG.api.endpoint + '/movies')
  const movies = await response.json()
  return movies[movies.length - 1]?.title ?? ''
}
