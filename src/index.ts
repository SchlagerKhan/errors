import { GenericError } from './generic';

export { GenericError };

/* NETWORK */
export class NetworkError extends GenericError {}

export class TimeoutError extends NetworkError {}
export class ServerUnavailableError extends NetworkError {}
export class ConnectionError extends NetworkError {}

export class UrlNotFoundError extends NetworkError {}

/* AUTH ERRORS */
export class AuthError extends GenericError {}

export class ForbiddenError extends AuthError {}
export class UnauthorizedError extends AuthError {}

/* OTHER */
export class UnknownError extends GenericError {}

// TODO: Refactor to monorepo and add generic-error as separate package
