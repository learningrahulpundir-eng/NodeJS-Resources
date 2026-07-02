# Dynamic Import in JavaScript (ES Modules)

## What is Dynamic Import?

Dynamic import allows you to load a module at runtime instead of loading it when the application starts.

```javascript
const module = await import('./math.js');
console.log(module.add(2, 3));
```

Unlike static imports, the module is loaded only when this statement is executed.

---

## Static Import vs Dynamic Import

### Static Import

```javascript
import { add } from './math.js';
```

- Loaded when the file starts execution.
- Suitable for modules required throughout the application.

### Dynamic Import

```javascript
const math = await import('./math.js');
```

- Loaded on demand.
- Suitable for rarely used or conditionally required modules.

---

## Benefits of Dynamic Import

### 1. Lazy Loading

Load modules only when needed.

```javascript
async function calculate() {
    const math = await import('./math.js');
    return math.add(5, 5);
}
```

---

### 2. Faster Startup Time

Large modules do not need to be loaded during application startup.

```javascript
if (userRequestedReport) {
    const report = await import('./reportGenerator.js');
}
```

---

### 3. Conditional Loading

```javascript
if (process.env.NODE_ENV === 'development') {
    const debug = await import('./debug.js');
    debug.start();
}
```

---

### 4. Load Different Implementations

```javascript
let db;

if (process.env.DB === 'mysql') {
    db = await import('./mysql.js');
} else {
    db = await import('./mongodb.js');
}
```

---

### 5. CommonJS and ES Module Interoperability

```javascript
(async () => {
    const math = await import('./math.js');
    console.log(math.add(2, 3));
})();
```

---

### 6. Code Splitting

Frontend frameworks and bundlers can download code only when required.

```javascript
const Dashboard = await import('./Dashboard.js');
```

---

## Real Node.js Example

### Without Dynamic Import

```javascript
import reportGenerator from './reportGenerator.js';

app.get('/report', () => {
    reportGenerator.generate();
});
```

The module loads during startup.

### With Dynamic Import

```javascript
app.get('/report', async () => {
    const reportGenerator = await import('./reportGenerator.js');
    reportGenerator.generate();
});
```

The module loads only when the endpoint is called.

---

## When Not to Use Dynamic Import

For core dependencies used across the application:

```javascript
import express from 'express';
import fs from 'fs';
```

Static imports are usually simpler and more appropriate.

---

## Interview Answer

Dynamic import (`import()`) loads a module at runtime instead of application startup. It helps with lazy loading, conditional loading, reducing startup time, code splitting, and loading modules only when required.

```javascript
const math = await import('./math.js');
console.log(math.add(2, 3));
```
