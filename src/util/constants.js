'use strict';

import Joi from 'joi';

/**
 * Default options bot
 *
 * @type {Object}
 *
 * @property {?string} [name] Name bot
 */
export const defaultOptions = {
	//
};

/**
 * Default options schema validate
 *
 * @type {Object}
 *
 * @extends {defaultOptions}
 */
export const defaultOptionsSchema = Joi.object().keys({
	//
});
