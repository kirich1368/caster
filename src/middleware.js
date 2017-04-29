'use strict';

import Promise from 'bluebird';

/**
 * Base all middleware
 *
 * @public
 */
export class Middleware {
	/**
	 * Constructor
	 */
	constructor () {
		this._stack = [];
	}

	/**
	 * Add middlewares
	 *
	 * @param {Array} middlewares
	 */
	use (...middlewares) {
		for (const middleware of middlewares) {
			if (Array.isArray(middleware)) {
				this.use(...middleware);

				continue;
			}

			if (typeof middleware !== 'function') {
				throw new TypeError('Middleware must be composed of functions!');
			}

			this._stack.push(middleware);
		}
	}

	/**
	 * Launches the middleware chain
	 *
	 * @param {Array} args
	 *
	 * @return {Promise<boolean>}
	 */
	run (...args) {
		const middlewares = this._stack;

		let index = -1;

		const next = (i) => {
			if (i <= index) {
				return Promise.reject(new Error('next() called multiple times'));
			}

			index = i;

			if (!(i in middlewares)) {
				return Promise.resolve(true);
			}

			try {
				return Promise.resolve(
					middlewares[i](...args, () =>  next(i + 1))
				)
				.then(() => middlewares.length <= index);
			} catch (error) {
				return Promise.reject(error);
			}
		};

		return next(0);
	}
}
