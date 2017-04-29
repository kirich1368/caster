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
| options | object | [Options bot](#options-bot) |

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
| options | object | [Options bot](#options-bot) |

### isStarted
Returns the launch status of the bot

```js
caster.isStarted(); // => boolean
```

### start
Running the bot

```js
caster.start(); // => Promise<void>
```

### stop
Stops the bot

```js
caster.stop(); // => Promise<void>
```

### use
Adds the functionality of caster

```js
caster.use(<Platform>);
```
