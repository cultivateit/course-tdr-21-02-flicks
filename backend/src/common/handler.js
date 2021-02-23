import { ConflictError, NotFoundError, ValidationError } from '../domain/errors'
import { BadRequestResponse, ConflictResponse, NotFoundResponse, ServiceUnavailableResponse } from './response'

export const handler = lambda => async (event, context) => {
  try {
    return await lambda(event, context)
  } catch (e) {
    console.error(e)
    return convertToResponse(e)
  }
}

const convertToResponse = e => {
  if (e instanceof NotFoundError) return NotFoundResponse()
  if (e instanceof ConflictError) return ConflictResponse()
  if (e instanceof ValidationError) return BadRequestResponse()
  if (e instanceof SyntaxError) return BadRequestResponse()
  return ServiceUnavailableResponse()
}
