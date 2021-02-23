const UNAUTHORIZED = 'error.services.unauthorized'
const NOT_FOUND = 'error.services.notFound'
const UNKNOWN = 'error.services.unknown'
const NO_RESPONSE = 'error.services.noResponse'

class DomainError extends Error {
  constructor(message, messageId) {
    super(message)
    this.name = this.constructor.name
    this.messageId = messageId
    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotLoggedInError extends DomainError {
  constructor() {
    super('NotLoggedInError', UNAUTHORIZED)
  }
}

export class NotFoundError extends DomainError {
  constructor() {
    super('NotFoundError', NOT_FOUND)
  }
}

export class NoResponseError extends DomainError {
  constructor() {
    super('NoResponseError', NO_RESPONSE)
  }
}

export class UnknownError extends DomainError {
  constructor() {
    super('UnknownError', UNKNOWN)
  }
}
