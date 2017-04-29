# Platform
Platform API reference, based on all platform

Inherit [EventEmitter](https://nodejs.org/docs/latest/api/events.html)

```js
import { Platform } from '@castery/caster';
```

## Variables default
The default define variables

| Option     | Type    | Value | Description                   |
|------------|---------|-------|-------------------------------|
| options    | object  | {}    | Options platform              |
| _isStarted | boolean | false | Launch status of the platform |

### setOptions
Sets options

```js
platform.setOptions(options); // => Caster
```

| Param   | Type   | Description      |
|---------|--------|------------------|
| options | object | Options platform |

### getOptions
Returns options

```js
platform.getOptions(); // => Object
```

### getOptionsSchema
Returns the [joi](https://github.com/hapijs/joi) schema for option validation

```js
platform.getOptionsSchema(); // => JoiSchemaObject
```

### isStarted
Returns the launch status of the platform

```js
platform.isStarted(); // => boolean
```

### start
Running the platform

```js
platform.start(); // => Promise<void>
```

### stop
Stops the platform

```js
platform.stop(); // => Promise<void>
```

### subscribe
Subscribe caster for platform events

```js
platform.subscribe(caster);
```

### unsubscribe
Unsubscribe caster for platform events

```js
platform.unsubscribe(caster);
```

## Usage
```js
class MySimplePlatform extends Platform {
	constructor () {
		super();

		// My constructor
	}

	setOptions (options) {
		super(options);

		// Set options

		return this;
	}

	async start () {
		this._isStarted = true;

		// Start
	}

	async stop () {
		// Stop

		this._isStarted = false;
	}
}
```
