export interface ErrorObject {
	name: string;
	message: string;
	meta: object;
	stack?: string;
	childError?: ErrorObject;
}

export type ChildErrorObject = ErrorObject | undefined;

declare global {
	interface Error {
		toObject?: () => ErrorObject;

		has?: (err: any) => boolean;

		getChildErrorObject: () => ChildErrorObject;
	}
}

export function toObject(includeStack = false): ErrorObject {
	const childError = this.getChildErrorObject();

	const { name, message, meta } = this;
	const obj: ErrorObject = { name, message, meta, childError };

	if (!includeStack) {
		obj.stack = this.stack;
	}

	return obj;
}

export function has(err: any): boolean {
	const { childError } = this;

	if (this instanceof err) {
		return true;
	}

	if (childError) {
		return childError.has(err);
	}

	return false;
}

export function toString(): string {
	const { name, message } = this;

	if (!message) {
		return name;
	}

	return `${name}: ${message}`;
}

export function getChildErrorObject(): ChildErrorObject {
	const err = this.childError;

	// prettier-ignore
	return err 
		? err.toObject() 
		: undefined;
}

Error.prototype.toObject = toObject;
Error.prototype.has = has;
Error.prototype.toString = toString;
Error.prototype.getChildErrorObject = getChildErrorObject;
