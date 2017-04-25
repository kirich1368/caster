# Platform
Platform API reference, based on all platform

```js
import { Platform } from '@castery/caster';
```
Extends
```js
class MySimplePlatform extends Platform {

}
```

### isStarted
Returns the launch status of the platform

```js
platform.isStarted(); // => boolean
```

### start
Running the platform

```js
platform.start(); // => Promise
```

### stop
Stops the platform

```js
platform.stop(); // => Promise
```
