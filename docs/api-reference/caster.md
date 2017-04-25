# Caster
Caster API reference

```js
import { Caster } from '@castery/caster';
```

### Constructor
Initialize new Caster app

```js
new Caster([options]);
```

| Param   | Type   | Description                 |
|---------|--------|-----------------------------|
| options | object | [Options bot](#Options-bot) |

#### Options bot

| Option | Type   | Description      |
|--------|--------|------------------|
| name   | string | Name bot (maybe) |

### setOptions

Sets options

```js
caster.setOptions(options); // => Caster
```

| Param   | Type   | Description                 |
|---------|--------|-----------------------------|
| options | object | [Options bot](#Options-bot) |

### isStarted
Returns the launch status of the bot

```js
caster.isStarted(); // => boolean
```

### start
Running the bot

```js
caster.start(); // => Promise
```

### stop
Stops the bot

```js
caster.stop(); // => Promise
```
