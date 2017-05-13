'use strict';

import Promise from 'bluebird';

import createDebug from 'debug';
import { validate as joiValidate } from 'joi';

import { Platform } from './platform';
import { IncomingMiddleware } from './middlewares/incoming';
import { OutcomingMiddleware } from './middlewares/outcoming';

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
		this._platforms = new Set;

		this.incoming = new IncomingMiddleware;
		this.outcoming = new OutcomingMiddleware;

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
	 * @return {Promise<void>}
	 */
	async start () {
		if (this.isStarted()) {
			return void debug('Bot already started');
		}

		this._isStarted = true;

		for (const platform of this._platforms) {
			if (platform.isStarted()) {
				continue;
			}

			try {
				await platform.start();
			} catch (error) {
				/* TODO: Add actions on startup error */
				console.log(error);
			}
		}

		return;
	}

	/**
	 * Stops the bot
	 *
	 * @return {Promise<void>}
	 */
	async stop () {
		if (!this.isStarted()) {
			return void debug('Bot already stopped!');
		}

		this._isStarted = false;

		for (const platform of this._platforms) {
			if (!platform.isStarted()) {
				continue;
			}

			try {
				await platform.stop();
			} catch (error) {
				/* TODO: Add actions on stop error */
				console.log(error);
			}
		}

		return;
	}

	/**
	 * Extends the functionality of caster
	 *
	 * @param {Object} proto
	 */
	use (proto) {
		if (proto instanceof Platform) {
			return void this._addPlatform(proto);
		}

		if ('name' in proto && 'handler' in proto) {
			this.incoming.use(proto);

			return;
		}

		throw new Error('Unknown extension type');
	}

	/**
	 * Dispatching incoming middleware
	 *
	 * @param  {IncomingContext} context
	 *
	 * @return {Promise<boolean>}
	 */
	dispatchIncomingMiddleware (context) {
		return this.incoming.dispatch(context)
		.catch((error) => {
			console.error(error);

			throw error;
		});
	}

	/**
	 * Adds a platform
	 *
	 * @param {Platform} platform
	 */
	_addPlatform (platform) {
		if (this._platforms.has(platform)) {
			return;
		}

		this._platforms.add(platform);

		platform.subscribe(this);
	}
}
