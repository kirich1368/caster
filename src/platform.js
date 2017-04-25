'use strict';

/**
 * Base all platforms
 *
 * @public
 */
export class Platform {
	/**
	 * Constructor
	 */
	constructor () {
		this._isStarted = false;
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
	 * @return {Promise}
	 */
	async start () {
		return;
	}

	/**
	 * Stops the platform
	 *
	 * @return {Promise}
	 */
	async stop () {
		return;
	}
}
