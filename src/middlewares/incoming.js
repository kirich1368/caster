'use strict';

import Promise from 'bluebird';

import Joi, { validate as JoiValidate } from 'Joi';

import { Middleware, Caster } from '../index';

import { IncomingContext } from '../contexts/incoming';

const shemaUseMiddleware = Joi.object().keys({
	name: Joi.string().required(),
	order: Joi.number().default(0),
	handler: Joi.func().required(),
	enable: Joi.boolean().default(true),
	description: Joi.string().default('No description'),
});

const shemaDispatchMiddleware = Joi.object().keys({
	//caster: Joi.object().type(Caster),
	text: Joi.string().allow(null),
	type: Joi.string().allow(null),
	platform: Joi.string(),
	raw: Joi.any()
})
.type(IncomingContext)
.unknown();

export class IncomingMiddleware {
	/**
	 * Constructor
	 */
	constructor () {
		this._stack = [];

		this._middleware = new Middleware;
	}

	/**
	 * Register new incoming middleware
	 *
	 * @param {Object} middlewareRaw
	 */
	use (middlewareRaw) {
		const { error, value: middleware } = JoiValidate(
			middlewareRaw,
			shemaUseMiddleware
		);

		if (error !== null) {
			throw error;
		}

		const { name: middlewareName } = middleware;

		if (this._stack.some(({ name }) => middlewareName === name)) {
			throw new Error('Another middleware with the same name has already been registered');
		}

		this._stack.push(middleware);

		if (middleware.enable) {
			/* Resorting  with the new middleware */
			this.sort();
		}

		return this;
	}

	/**
	 * Dispatch middleware chain
	 *
	 * @param {Context} context
	 *
	 * @return {Promise<boolean>}
	 */
	dispatch (contextRaw) {
		const { error, value: context } = JoiValidate(
			contextRaw,
			shemaDispatchMiddleware
		);

		if (error !== null) {
			return Promise.reject(error);
		}

		return this._middleware.run(context);
	}

	/**
	 * Reboot middleware
	 */
	reload () {
		const middlewares = this._stack
		.filter((middleware) => (
			middleware.enable
		))
		.map((middleware) => (
			middleware.handler
		));

		this._middleware = new Middleware;
		this._middleware.use(middlewares);
	}

	/**
	 * Produces sorting of middleware
	 */
	sort () {
		this._stack.sort((a, b) => {
			if (a.order > b.order) {
				return 1;
			}

			if (a.order < b.order) {
				return -1;
			}

			return 0;
		});

		this.reload();
	}
}
