
# Node.js Global Objects: `__dirname` and `__filename`

## What are Global Objects?
Node.js provides some variables globally, meaning they can be used without importing any module.

## `__dirname`
Returns the absolute path of the directory containing the current file.

### Example
```js
console.log(__dirname);
```

Output:
```text
C:\project
```

### Common Use Case
```js
const path = require("path");

const filePath = path.join(__dirname, "data", "user.json");
console.log(filePath);
```

## `__filename`
Returns the absolute path of the current file.

### Example
```js
console.log(__filename);
```

Output:
```text
C:\project\app.js
```

## Difference Between `__dirname` and `__filename`

| Variable | Returns |
|-----------|----------|
| `__dirname` | Current directory path |
| `__filename` | Current file path |

Example:

```text
__dirname  -> C:\project
__filename -> C:\project\app.js
```

## How Node.js Provides These Variables

Internally Node.js wraps each CommonJS module:

```js
(function(exports, require, module, __filename, __dirname) {
    // Your code
});
```

## ES Module Alternative

`__dirname` and `__filename` are not available in ES Modules.

```js
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

## Interview Questions

### Is `__dirname` available in ES Modules?
No. Use `import.meta.url`.

### What is the difference between `__dirname` and `process.cwd()`?
- `__dirname` → Current file directory
- `process.cwd()` → Directory where the command was executed
