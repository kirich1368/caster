# Context
Context API reference

```js
import { Context } from '@castery/caster';
```

### Constructor
Initialize new Context

```js
new Context(caster);
```

| Param  | Type   | Description     |
|--------|--------|-----------------|
| caster | Caster | Instance Caster |

## Variables default
The default define variables

| Option     | Type    | Value  | Description     |
|------------|---------|--------|-----------------|
| caster     | Caster  | Caster | Instance Caster |

## Creating your own context
Simple context
```js
class MyContext extends Context {
	constructor (caster) {
		super(caster);
	}
}
```
