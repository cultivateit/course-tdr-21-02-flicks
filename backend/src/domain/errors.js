class DomainError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends DomainError {
  constructor() {
    super('ValidationError')
  }
}

export class NotFoundError extends DomainError {
  constructor() {
    super('NotFoundError')
  }
}

export class BadRequestError extends DomainError {
  constructor() {
    super('BadRequestError')
  }
}

export class NoContentError extends DomainError {
  constructor() {
    super('NoContentError')
  }
}

export class ConflictError extends DomainError {
  constructor() {
    super('ConflictError')
  }
}
