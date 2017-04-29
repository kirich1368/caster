# Incoming Context
IncomingContext API reference

```js
import { IncomingContext } from '@castery/caster';
```

### Constructor
Initialize new Incoming Context

```js
new IncomingContext(caster);
```

| Param  | Type   | Description     |
|--------|--------|-----------------|
| caster | Caster | Instance Caster |

## Variables default
The default define variables

| Option   | Type   | Value    | Description            |
|----------|--------|----------|------------------------|
| caster   | Caster | Caster   | Instance Caster        |
| platform | string | unknown  | Name platform incoming |
| type     | string | incoming | Type event             |
| raw      | object | null     | Original event         |

## Creating your own context
Simple context
```js
class MyIncomingContext extends IncomingContext {
	constructor (caster, raw) {
		super(caster);

		this.platform = 'my-platform';
		this.type = 'my-type';
		this.raw = raw;
	}
}
```
