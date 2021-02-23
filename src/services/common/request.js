import queryString from 'querystring'
import { NoResponseError, NotFoundError, NotLoggedInError, UnknownError } from '../../domain/common/errors'

const containsJson = response => response.status !== 204 &&
  response.headers.has('Content-Type') && response.headers.get('Content-Type').startsWith('application/json') &&
  response.headers.has('Content-Length') && response.headers.get('Content-Length') > 0

// eslint-disable-next-line complexity
const fetchJson = async ({ url, ...options }) => {
  let response
  try {
    response = await fetch(url, options)
  } catch (error) {
    throw new NoResponseError()
  }
  if (response.status === 201)
    return response.headers.get('Location')
  else if (response.ok)
    return containsJson(response) ? response.json() : null
  else if (response.status === 401)
    throw new NotLoggedInError()
  else if (response.status === 404)
    throw new NotFoundError()
  else
    throw new UnknownError()
}

const prepareQuery = query => {
  if (!query) return ''
  const sanitized = { ...query }
  Object.keys(sanitized)
    .forEach(prop => (sanitized[prop] === undefined || sanitized[prop] === null) && delete sanitized[prop])
  const string = queryString.stringify(sanitized)
  return string ? '?' + string : ''
}

const prepareFetch = ({ method, url, query, body = '', headers = {}, ...options }) => {
  const additionalHeaders = { Accept: 'application/json; charset=utf-8' }
  if (body) additionalHeaders['Content-Type'] = 'application/json; charset=utf-8'

  const request = {
    method,
    url: url + prepareQuery(query),
    headers: { ...additionalHeaders, ...headers },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  }

  return fetchJson(request)
}

export const get = options => prepareFetch({ method: 'get', ...options })
export const put = options => prepareFetch({ method: 'put', ...options })
export const post = options => prepareFetch({ method: 'post', ...options })
export const del = options => prepareFetch({ method: 'delete', ...options })
