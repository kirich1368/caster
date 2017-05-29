'use strict';

import { inspect } from 'util';

import Joi from 'joi';

import { IncomingContext, incomingSchema } from './incoming';

export const messageSchema = incomingSchema.keys({
	from: Joi.object().keys({
		id: Joi.any().required(),
		type: Joi.string().required()
	}),
	text: Joi.string().required().allow(null)
});

/**
 * Base all incoming context
 *
 * @public
 */
export class MessageContext extends IncomingContext {
	/**
	 * @inheritdoc
	 */
	constructor (caster) {
		super(caster);

		this.type = 'message';
		this.text = null;
	}

	/**
	 * Returns the text
	 *
	 * @return {string}
	 */
	getText () {
		return this.text;
	}

	/**
	 * Hide private property to inspect
	 *
	 * @return {string}
	 */
	inspect () {
		const out = {};

		for (const key of Object.keys(this)) {
			if (key.startsWith('_')) {
				continue;
			}

			out[key] = this[key];
		}

		delete out.caster;

		return this.constructor.name + ' ' + inspect(out);
	}
}
