# Message Incoming Context
MessageContext API reference

```js
import { MessageContext } from '@castery/caster';
```

### Constructor
Initialize new Incoming Message Context

```js
new MessageContext(caster);
```

| Param  | Type   | Description     |
|--------|--------|-----------------|
| caster | Caster | Instance Caster |

## Variables default
The default define variables

| Option   | Type   | Value   | Description            |
|----------|--------|---------|------------------------|
| caster   | Caster | Caster  | Instance Caster        |
| platform | string | unknown | Name platform incoming |
| type     | string | message | Type event             |
| text     | string | null    | Text message           |
| raw      | object | null    | Original event         |

## Creating your own context
Simple context
```js
class MyMessageContext extends MessageContext {
	constructor (caster, raw) {
		super(caster);

		this.platform = 'my-platform';
		this.text = raw.text;
		this.raw = raw;
	}
}
```
