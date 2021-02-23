import { NoResponseError, NotFoundError, NotLoggedInError, UnknownError } from '../../domain/common/errors'
import { del, get, post, put } from './request'

beforeEach(() => {
  fetch.resetMocks()
  fetch.mockResponse(JSON.stringify({ some: 'Response' }))
})

describe('request', () => {
  describe('fetches', () => {
    it('with url', async () => {
      await get({ url: 'some:url' })
      expect(fetch.mock.calls[0][0]).toEqual('some:url')
    })

    it('without query when missing', async () => {
      await get({ url: 'some:url' })
      expect(fetch.mock.calls[0][0]).toEqual('some:url')

      await get({ url: 'some:url', query: {} })
      expect(fetch.mock.calls[1][0]).toEqual('some:url')
    })

    it('with query', async () => {
      await get({ url: 'some:url', query: { some: 'Query' } })
      expect(fetch.mock.calls[0][0]).toEqual('some:url?some=Query')

      await get({ url: 'some:url', query: { more: 'Complex', query: 1 } })
      expect(fetch.mock.calls[1][0]).toEqual('some:url?more=Complex&query=1')
    })

    it('without query params that are undefined', async () => {
      await get({ url: 'some:url', query: { some: 'Query', another: undefined } })
      expect(fetch.mock.calls[0][0]).toEqual('some:url?some=Query')

      await get({ url: 'some:url', query: { some: 'Query', another: null } })
      expect(fetch.mock.calls[1][0]).toEqual('some:url?some=Query')
    })

    it('with Content-Type header application/json when body is present', async () => {
      await put({ body: { some: 'Body' } })
      expect(fetch.mock.calls[0][1].headers['Content-Type']).toEqual('application/json; charset=utf-8')
    })

    it('with Accept header application/json', async () => {
      await get()
      expect(fetch.mock.calls[0][1].headers.Accept).toEqual('application/json; charset=utf-8')
    })

    it('with headers', async () => {
      await get({ headers: { some: 'Header' } })
      expect(fetch.mock.calls[0][1].headers.some).toEqual('Header')
    })

    it('with additional options', async () => {
      await get({ additional: 'option' })
      expect(fetch.mock.calls[0][1].additional).toBe('option')
    })

    it('with data', async () => {
      await put({ body: { some: 'Body' } })
      expect(fetch.mock.calls[0][1].body).toEqual('{"some":"Body"}')
    })
  })

  describe('resolves', () => {
    it('with json when response code indicates success and body contains json', async () => {
      const body = JSON.stringify({ some: 'Response' })
      fetch.mockResponseOnce(body, {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': '' + body.length },
      })
      expect(await get()).toEqual({ some: 'Response' })
    })

    it('with null when response length is 0', async () => {
      fetch.mockResponseOnce('', {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Content-Length': '0' },
      })
      expect(await get()).toBeNull()
    })

    it('with null when response is 204 No Content', async () => {
      const body = JSON.stringify({ some: 'Response' })
      fetch.mockResponseOnce(body, {
        status: 204,
        headers: { 'Content-Type': 'application/json', 'Content-Length': '' + body.length },
      })
      expect(await get()).toBeNull()
    })
  })

  describe('rejects', () => {
    it('with unauthorized error when response code is 401', async () => {
      fetch.mockResponseOnce(JSON.stringify({ some: 'Response' }), { status: 401 })
      await expect(get()).rejects.toEqual(new NotLoggedInError())
    })

    it('with not found error when response code is 404', async () => {
      fetch.mockResponseOnce(JSON.stringify({ some: 'Response' }), { status: 404 })
      await expect(get()).rejects.toEqual(new NotFoundError())
    })

    it('with unknown error when response code is unsupported', async () => {
      fetch.mockResponseOnce(JSON.stringify({ some: 'Response' }), { status: 500 })
      await expect(get()).rejects.toEqual(new UnknownError())
    })

    it('with no response error when there is no response', async () => {
      fetch.mockRejectOnce({ some: 'Error' })
      await expect(get()).rejects.toEqual(new NoResponseError())
    })
  })

  describe('get', () => {
    it('fetches with method get', async () => {
      await get()
      expect(fetch.mock.calls[0][1].method).toEqual('get')
    })
  })

  describe('put', () => {
    it('fetches with method put', async () => {
      await put()
      expect(fetch.mock.calls[0][1].method).toEqual('put')
    })
  })

  describe('post', () => {
    it('fetches with method post', async () => {
      await post()
      expect(fetch.mock.calls[0][1].method).toEqual('post')
    })

    it('resolves with location header when response is 201 Created', async () => {
      fetch.mockResponseOnce(null, { status: 201, headers: { Location: 'Test Location' } })
      expect(await post()).toBe('Test Location')
    })
  })

  describe('delete', () => {
    it('fetches with method delete', async () => {
      await del()
      expect(fetch.mock.calls[0][1].method).toEqual('delete')
    })
  })
})

