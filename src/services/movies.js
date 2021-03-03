import CONFIG from '../config'

export const createMovie = async movie => {
  await fetch(CONFIG.api.endpoint + '/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: movie }),
  })
}
