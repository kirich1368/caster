'use strict';

import { IncomingContext } from './incoming';

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
}
