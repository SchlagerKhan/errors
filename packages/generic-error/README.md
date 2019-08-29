# Description

Builds upon the [extendable-error](https://www.npmjs.com/package/extendable-error) package and exposes a more sophisticated class `GenericError` with some usable classes

# OBS

This is guaranteed not according to the theory of computer science. It has more of a practical purpose.

This package extends the native Error object with the functions

-   `toObject()`,
-   `has()`
-   `toString()`
-   `getChildErrorObject()`

# Usage

Create new error

```ts
import { GenericError } from '@schlagerkhan/generic-error';

let genericError = new GenericError();
```

Extend error

```ts
class NetworkError extends GenericError {}

let networkError = new NetworkError();
```

`instanceof` vs `.has()`

```js
class TestError extends GenericError {}

const genericError = new GenericError();
const secondError = new TestError();
const thirdError = new TestError(genericError);

// instanceof

genericError instanceof GenericError; // true
secondError instanceof GenericError; // true
thirdError instanceof GenericError; // true

genericError instanceof TestError; // false
secondError instanceof TestError; // true
thirdError instanceof TestError; // true

// has
genericError.has(GenericError); // true
secondError.has(GenericError); /// false
thirdError.has(GenericError); // true

genericError.has(TestError); // false
secondError.has(TestError); // true
thirdError.has(TestError); // true
```

# API

Constructor

```ts
constructor(message?: string, meta: object, childError: GenericError) {}
```

Instance variables

```ts
- message: String
- meta: Object
- childError: Error | GenericError
```

Instance functions

```ts
- toString(): string
- toObject(): string
- has(errorClass: Error | GenericError): boolean
    // Checks if the instance is itself or has children that is an instance of errorClass
- getChildErrorObject(): ChildErrorObject
    // If childError exists it returns childError.getObject()
```

# Connected projects

[@schlagerkhan/errors](https://github.com/SchlagerKhan/errors/tree/master/packages/errors)
