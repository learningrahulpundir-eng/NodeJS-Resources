# Module Caching in Node.js

## What is Module Caching?

Node.js loads a module only once. After the first load, the module is stored in memory (cache). Any subsequent `require()` call for the same module returns the cached version instead of loading the file again.

---

## Example

### math.js

```javascript
console.log('math.js loaded');

module.exports = {
    add: (a, b) => a + b
};
```

### app.js

```javascript
const math1 = require('./math');
const math2 = require('./math');

console.log(math1 === math2);
```

### Output

```text
math.js loaded
true
```

Notice that `math.js loaded` is printed only once.

---

## How It Works

### First Require

```javascript
const math = require('./math');
```

Node.js:

1. Resolves the file path.
2. Loads and executes the module.
3. Stores the exports in memory.
4. Returns the exported object.

### Subsequent Requires

```javascript
const math = require('./math');
```

Node.js:

1. Checks the cache.
2. Finds the module.
3. Returns the cached exports.
4. Does not execute the file again.

---

## Benefits of Module Caching

### Faster Performance

Modules are loaded only once.

### Reduced File System Access

Avoids repeatedly reading the same file.

### Shared State

Data stored in a module can be shared across the application.

---

## Shared State Example

### counter.js

```javascript
let count = 0;

module.exports = {
    increment() {
        count++;
    },
    getCount() {
        return count;
    }
};
```

### app.js

```javascript
const counter1 = require('./counter');
const counter2 = require('./counter');

counter1.increment();

console.log(counter2.getCount());
```

### Output

```text
1
```

Both variables refer to the same cached module instance.

---

## Viewing Cached Modules

```javascript
console.log(require.cache);
```

Get a specific module:

```javascript
console.log(require.cache[require.resolve('./math')]);
```

---

## Clearing Module Cache

```javascript
delete require.cache[require.resolve('./math')];
```

Reload:

```javascript
const math = require('./math');
```

The module is loaded again because its cached entry was removed.

---

## ES Modules and Caching

ES Modules are also cached after their first import.

```javascript
import './math.js';
import './math.js';
```

The module executes only once.

---

## Module Caching and Circular Dependencies

Caching helps Node.js manage circular dependencies.

```javascript
// a.js
const b = require('./b');
```

```javascript
// b.js
const a = require('./a');
```

Node.js may return partially initialized exports during module loading.

---

## Common Interview Questions

### What is module caching?

Module caching is the mechanism where Node.js stores loaded modules in memory and reuses them for future imports.

### Why is module caching useful?

- Improves performance
- Reduces disk I/O
- Enables shared state

### How do you clear a cached module?

```javascript
delete require.cache[require.resolve('./module')];
```

### Does ES Module support caching?

Yes. ES Modules are cached after their first successful import.

---

## Interview Answer

Module caching is a Node.js optimization where a module is loaded and executed only once. After the first load, it is stored in memory and subsequent `require()` or `import` statements use the cached version, improving performance and allowing shared state across the application.
