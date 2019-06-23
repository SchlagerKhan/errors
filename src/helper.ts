import isPlainObject from 'is-plain-object';

export type GenericErrorArg = string | object | Error;

export function formatArguments(args) {
	if (args.length > 3) {
		throw new Error('Error can only take in three arguments (message, meta and childError)');
	}

	const messages = args.filter(el => typeof el === 'string') as string[];
	const metas = args.filter(isPlainObject) as object[];
	const errors = args.filter(arg => arg instanceof Error) as Error[];

	if (messages.length > 1) throw new Error('Errors can only take in one String');
	if (metas.length > 1) throw new Error('Errors can only take in one meta (plain object)');
	if (errors.length > 1) throw new Error('Errors can only take in one Error');

	const [message] = messages;
	const [meta] = metas;
	const [error] = errors;

	return { message, meta, error };
}
