'use strict';

import { Context } from '../context';

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

		this.platform = 'unknown';
		this.type = 'incoming';
		this.raw = null;
	}
}
