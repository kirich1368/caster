'use strict';

import Joi from 'joi';

import { IncomingMiddleware, schemaUseIncoming } from './incoming';

// export const schemaUseOutcoming = schemaUseIncoming.keys({
// 	//
// });
export const schemaUseOutcoming = schemaUseIncoming;

/**
 * Outcoming events
 *
 * @public
 */
export class OutcomingMiddleware extends IncomingMiddleware {
	/**
	 * @inheritdoc
	 */
	getSchemaUse () {
		return schemaUseOutcoming;
	}
}
