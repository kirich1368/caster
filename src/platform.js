'use strict';

import Joi, { validate as joiValidate } from 'joi';

import Events from 'events';

const defaultOptionsSchema = Joi.object().keys({
	adapter: Joi.object()
});

/**
 * Base all platforms
 *
 * @public
 */
export class Platform extends Events {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor () {
		super();

		this.options = {};

		this._isStarted = false;
	}

	/**
	 * Sets options
	 *
	 * @param {Object} options
	 *
	 * @return {this}
	 */
	setOptions (options) {
		const { error, value } = joiValidate(
			options,
			this.getOptionsSchema()
		);

		if (error !== null) {
			throw error;
		}

		Object.assign(this.options, value);

		return this;
	}

	/**
	 * Returns options
	 *
	 * @return {Object}
	 */
	getOptions () {
		return this.options;
	}

	/**
	 * Returns the joi validation scheme
	 *
	 * @return {Object}
	 */
	getOptionsSchema () {
		return defaultOptionsSchema;
	}

	/**
	 * Returns the launch status of the platform
	 *
	 * @return {boolean}
	 */
	isStarted () {
		return this._isStarted;
	}

	/**
	 * Running the platform
	 *
	 * @return {Promise<void>}
	 */
	async start () {
		return;
	}

	/**
	 * Stops the platform
	 *
	 * @return {Promise<void>}
	 */
	async stop () {
		return;
	}

	/**
	 * Subscribe caster for platform events
	 *
	 * @param {Caster} caster
	 */
	subscribe (caster) {
		return;
	}

	/**
	 * Unsubscribe caster for platform events
	 *
	 * @param {Caster} caster
	 */
	unsubscribe (caster) {
		return;
	}
}
