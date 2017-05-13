'use strict';

import Joi from 'joi';

import { Context, contextSchema } from '../context';

export const incomingSchema = contextSchema.keys({
	platform: Joi.object().keys({
		id: Joi.any().required(),
		name: Joi.string().required()
	}),
	type: Joi.string().required(),
	raw: Joi.object()
});

/**
 * Base all incoming context
 *
 * @public
 */
export class IncomingContext extends Context {
	/**
	 * @inheritdoc
	 */
	constructor (caster) {
		super(caster);

		this.type = 'incoming';
	}

	/**
	 * @inheritdoc
	 */
	getSchema () {
		return incomingSchema;
	}

	/**
	 * Returns the type
	 *
	 * @return {string}
	 */
	getType () {
		return this.type;
	}

	/**
	 * Returns the platform name
	 *
	 * @return {string}
	 */
	getPlatformName () {
		return this.platform.name;
	}

	/**
	 * Returns the raw
	 *
	 * @return {?Object}
	 */
	getRaw () {
		return this.raw;
	}
}
