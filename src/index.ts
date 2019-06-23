import { GenericError } from './generic';

export { GenericError };

/* AUTH ERRORS */
export class AuthError extends GenericError {}

export class ForbiddenError extends AuthError {}
export class UnauthorizedError extends AuthError {}

/* OTHER */
export class UnknownError extends GenericError {}
