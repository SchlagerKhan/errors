import ExtendableError from 'extendable-error';

import { has, toObject, toString, getChildErrorObject } from './error';
import { GenericErrorArg, formatArguments } from './helper';

export class GenericError extends ExtendableError {
	constructor(...args: GenericErrorArg[]) {
		super();

		const { message, meta, error } = formatArguments(args);

		this.message = message;
		this.meta = meta;
		this.childError = error;
	}

	message: string;

	meta: object;

	childError: Error;

	toString = toString.bind(this);

	getChildErrorObject = getChildErrorObject.bind(this);

	toObject = toObject.bind(this);

	has = has.bind(this);
}
