# Top-Level Await in JavaScript (ES Modules)

## What is Top-Level Await?

Top-Level Await allows you to use the `await` keyword directly at the top level of an ES Module without wrapping the code inside an `async` function.

### Example

```javascript
const response = await fetch(url);
console.log(response);
```

---

## Before Top-Level Await

Before this feature, `await` could only be used inside an `async` function.

```javascript
async function main() {
    const response = await fetch(url);
    console.log(response);
}

main();
```

---

## With Top-Level Await

```javascript
const response = await fetch(url);
console.log(response);
```

This is cleaner and easier to read.

---

## How await Works

```javascript
const response = await fetch(url);
```

Meaning:

> Pause execution of the current module until the Promise returned by `fetch()` is resolved.

Example:

```javascript
console.log('Start');

const response = await fetch(url);

console.log('Done');
```

Output Flow:

```text
Start
(wait for response)
Done
```

---

## Real Node.js Example

### Reading a File

```javascript
import { readFile } from 'fs/promises';

const content = await readFile('data.txt', 'utf8');

console.log(content);
```

---

### Database Connection

```javascript
const db = await connectDatabase();

console.log('Database Connected');
```

---

### Loading Configuration

```javascript
const config = await loadConfig();

console.log(config);
```

---

## When Can You Use Top-Level Await?

### ES Modules (Supported)

package.json

```json
{
  "type": "module"
}
```

```javascript
const data = await fetch(url);
```

---

### CommonJS (Not Supported)

```javascript
const data = await fetch(url);
```

Result:

```text
SyntaxError: await is only valid in async functions
```

---

## Benefits of Top-Level Await

### 1. Cleaner Code

No need for wrapper functions.

### 2. Easier Application Initialization

Useful for:

- Loading config files
- Connecting databases
- Reading secrets
- Fetching startup data

### 3. Better Readability

Asynchronous code looks more like synchronous code.

---

## Common Use Cases

### API Call

```javascript
const users = await fetchUsers();
console.log(users);
```

### File Read

```javascript
const file = await readFile('notes.txt', 'utf8');
```

### Database Setup

```javascript
const db = await initializeDatabase();
```

---

## Interview Questions

### What is Top-Level Await?

Top-Level Await allows the use of `await` directly at the module level in ES Modules.

### Does Top-Level Await work in CommonJS?

No. It is supported only in ES Modules.

### What problem does it solve?

It removes the need to create an `async` wrapper function for module initialization logic.

---

## Interview Answer

Top-Level Await is an ES Module feature that allows developers to use `await` directly outside of an `async` function. It simplifies asynchronous initialization code such as loading configuration, connecting to databases, reading files, or calling APIs.

```javascript
const response = await fetch(url);
console.log(response);
```
