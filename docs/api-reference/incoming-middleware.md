# Incoming Middleware
Incoming Middleware API reference

### use
Add middleware

```js
caster.incoming.use(middleware);
```

| Param      | Type   | Description           |
|------------|--------|-----------------------|
| middleware | object | Middleware parameters |

Middleware parameters

| options     | Type     | Description                             |
|-------------|----------|-----------------------------------------|
| name        | string   | Name middleware (required)              |
| handler     | function | Handler middleware (required)           |
| order       | number   | Ranking position among other middleware |
| enable      | boolean  | Is enable middleware                    |
| description | string   | Description middleware                  |

### run
Run middleware chain

```js
caster.incoming.run(context); // => Promise
```

| Param   | Type            | Description               |
|---------|-----------------|---------------------------|
| context | IncomingContext | Incoming context instance |
