import { createMovie } from './movies'
import CONFIG from '../config'

beforeEach(fetch.resetMocks)

describe('movies', () => {
  describe('createMovie', () => {
    describe('sends movie to API', () => {
      beforeEach(() => fetch.mockResponse(null))

      it('using movies list resource as endpoint', async () => {
        await createMovie('Movie Title')
        expect(fetch).toHaveBeenCalledWith(CONFIG.api.endpoint + '/movies', expect.anything())
      })

      it('using POST as method', async () => {
        await createMovie('Movie Title')
        expect(fetch).toHaveBeenCalledWith(
          expect.anything(),
          expect.objectContaining({ method: 'POST' }),
        )
      })

      it('using JSON as Content-Type', async () => {
        await createMovie('Movie Title')
        expect(fetch).toHaveBeenCalledWith(
          expect.anything(),
          expect.objectContaining({ headers: { 'Content-Type': 'application/json' } }),
        )
      })

      it('using movie as body', async () => {
        await createMovie('Movie Title')
        expect(fetch).toHaveBeenCalledWith(
          expect.anything(),
          expect.objectContaining({ body: '{"title":"Movie Title"}' }),
        )

        await createMovie('Movie Title 2')
        expect(fetch).toHaveBeenCalledWith(
          expect.anything(),
          expect.objectContaining({ body: '{"title":"Movie Title 2"}' }),
        )
      })
    })
  })
})
