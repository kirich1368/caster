'use strict';

import Promise from 'bluebird';

import createDebug from 'debug';
import { validate as joiValidate } from 'joi';

import {
	defaultOptions,
	defaultOptionsSchema
} from './util/constants';

const debug = createDebug('caster');

/**
 * The main bot entry point
 *
 * @public
 */
export class Caster {
	/**
	 * Constructor
	 *
	 * @param {Object} options
	 */
	constructor (options = {}) {
		this.options = Object.assign({}, defaultOptions);

		this._isStarted = false;

		this.setOptions(options);
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
			defaultOptionsSchema
		);

		if (error !== null) {
			throw error;
		}

		Object.assign(this.options, value);

		return this;
	}

	/**
	 * Returns the launch status of the bot
	 *
	 * @return {boolean}
	 */
	isStarted () {
		return this._isStarted;
	}

	/**
	 * Running the bot
	 *
	 * @return {Promise}
	 */
	async start () {
		if (this.isStarted()) {
			return void debug('Bot already started');
		}

		this._isStarted = true;

		return;
	}

	/**
	 * Stops the bot
	 *
	 * @return {Promise}
	 */
	async stop () {
		if (!this.isStarted()) {
			return void debug('Bot already stopped!');
		}

		this._isStarted = false;

		return;
	}
}
