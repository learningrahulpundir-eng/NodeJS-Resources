# Node.js Modules: CommonJS vs ES Modules

## What is a Module?
A module is a file containing variables, functions, classes, or objects that can be exported and reused in other files.

---

## CommonJS (CJS)

### Export
```javascript
const add = (a, b) => a + b;
module.exports = add;
```

### Import
```javascript
const add = require('./math');
console.log(add(5, 5));
```

### Multiple Exports
```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
```

```javascript
const { add, multiply } = require('./math');
```

---

## ES Modules (ESM)

### Named Export
```javascript
export const add = (a, b) => a + b;
```

### Import
```javascript
import { add } from './math.js';
```

### Default Export
```javascript
export default function add(a, b) {
  return a + b;
}
```

```javascript
import add from './math.js';
```

---

## Enabling ES Modules

### package.json
```json
{
  "type": "module"
}
```

### Using .mjs
```text
app.mjs
math.mjs
```

---

## CommonJS vs ES Modules

| Feature | CommonJS | ES Modules |
|----------|-----------|------------|
| Import | require() | import |
| Export | module.exports | export |
| Loading | Synchronous | Static/Async capable |
| Browser Support | No | Yes |
| Tree Shaking | No | Yes |
| Top-level Await | No | Yes |

---

## Dynamic Import

```javascript
const module = await import('./math.js');
console.log(module.add(2, 3));
```

---

## Top-Level Await

```javascript
const response = await fetch(url);
console.log(response);
```

---

## __dirname and __filename in ESM

```javascript
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

---

## Module Caching

```javascript
const a = require('./math');
const b = require('./math');

console.log(a === b); // true
```

---

## When to Use Which?

### Use ES Modules
- New projects
- Modern tooling
- Top-level await
- Better optimization
- Browser and Node.js consistency

### Use CommonJS
- Legacy Node.js applications
- Existing projects using require()
- Older package ecosystems

---

## Interview Questions

### Difference between require() and import?
- require() → CommonJS
- import → ES Modules

### What is module.exports?
An object used to export functionality from a CommonJS module.

### Difference between default and named export?
```javascript
export default myFunction;
export const helper = () => {};
```

### Can top-level await be used in CommonJS?
No. It is supported in ES Modules.

### Which should be preferred?
For modern Node.js applications, ES Modules are generally recommended.
