# Middleware
Middleware API reference

```js
import { Middleware } from '@castery/caster';
```

### Constructor
Initialize new Middleware wrapper

```js
new Middleware;
```

### use
Registers a middleware

```js
middleware.use(middleware);
```

| Param       | Type     | Description         |
|-------------|----------|---------------------|
| middleware  | function | Middleware function |

```js
middleware.use(middlewares);
```

```js
middleware.use(...middlewares);
```

| Param       | Type       | Description          |
|-------------|------------|----------------------|
| middlewares | function[] | Middleware functions |

### run
Run chain a middleware.

```js
middleware.run(context); // => Promise
```

| Param   | Type  | Description |
|---------|-------|-------------|
| context | mixed | Context     |

```js
middleware.run(...args); // => Promise
```

| Param | Type  | Description |
|-------|-------|-------------|
| args  | array | Contexts    |

Promise returns boolean, passed through all middleware

## Usage
```js
const middleware = new Middleware;

middleware.use(async (ctx, next) => {
	ctx.date = Date.now();

	await next();

	// Middleware complete
});

middleware.use(async (ctx, next) => {
	ctx.random = Math.random();

	await next();
});

const context = {};

middleware.run(context)
.then((condition) => {
	console.log('Passed on all middleware:', condition? 'yes': 'no');
	console.log('Context', context);
})
```
