# Writing Files

## Overview

Writing files is essential for creating logs, saving user data, generating reports, and persisting application state. The `fs` module provides methods to write content to files.

## Asynchronous File Writing

### fs.writeFile() - Non-blocking

The `fs.writeFile()` method writes content to a file asynchronously. If the file exists, its content is replaced. If it doesn't exist, a new file is created.

#### Syntax

```javascript
fs.writeFile(filename, data, [encoding], [callback])
```

#### Parameters

- **filename**: Path to the file to write to (string)
- **data**: Content to write (string or Buffer)
- **encoding**: Character encoding (optional, defaults to 'utf8')
- **callback**: Function executed after write completes, receives `(err)` parameter

#### Basic Example

```javascript
const fs = require("fs");

fs.writeFile("message.txt", "Node.js is awesome!", (err) => {
  if (err) throw err;
  console.log("File Created");
});
```

#### Example with Error Handling

```javascript
const fs = require("fs");

fs.writeFile("message.txt", "Node.js is awesome!", "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err.message);
    return;
  }
  console.log("File successfully created!");
});
```

## Synchronous File Writing

### fs.writeFileSync() - Blocking

The `fs.writeFileSync()` method writes content to a file synchronously. Use this only during initialization or in scripts.

#### Syntax

```javascript
fs.writeFileSync(filename, data, [encoding])
```

#### Basic Example

```javascript
const fs = require("fs");

fs.writeFileSync("message.txt", "Node.js is awesome!");
console.log("File Created");
```

#### With Error Handling

```javascript
const fs = require("fs");

try {
  fs.writeFileSync("message.txt", "Node.js is awesome!");
  console.log("File successfully created!");
} catch (err) {
  console.error("Error writing file:", err.message);
}
```

## Appending Content to Files

### fs.appendFile() - Asynchronous Append

Add content to the end of an existing file without replacing it.

```javascript
const fs = require("fs");

fs.appendFile("log.txt", "New log entry\n", (err) => {
  if (err) throw err;
  console.log("Content appended!");
});
```

### fs.appendFileSync() - Synchronous Append

```javascript
const fs = require("fs");

fs.appendFileSync("log.txt", "New log entry\n");
console.log("Content appended!");
```

## Write Options and Flags

When writing files, you can specify flags that control how the file is opened:

| Flag | Meaning |
|------|---------|
| `'w'` | Write (default for writeFile) - replaces file |
| `'wx'` | Write exclusive - fails if file exists |
| `'a'` | Append - adds to end of file |
| `'ax'` | Append exclusive - fails if file exists |
| `'r+'` | Open for reading and writing |
| `'w+'` | Open for reading and writing (replaces file) |

#### Using Flags

```javascript
const fs = require("fs");

const options = { flag: 'a', encoding: 'utf8' };

fs.writeFile("log.txt", "New entry\n", options, (err) => {
  if (err) throw err;
  console.log("Entry logged!");
});
```

## Writing Different Data Types

### Writing JSON

```javascript
const fs = require("fs");

const data = { name: "John", age: 30 };

fs.writeFile("user.json", JSON.stringify(data, null, 2), (err) => {
  if (err) throw err;
  console.log("JSON file created!");
});
```

### Writing Binary Data

```javascript
const fs = require("fs");

const buffer = Buffer.from([0x01, 0x02, 0x03]);

fs.writeFile("binary.bin", buffer, (err) => {
  if (err) throw err;
  console.log("Binary file created!");
});
```

### Writing Multiple Lines

```javascript
const fs = require("fs");

const content = `Line 1: Hello
Line 2: World
Line 3: Node.js
`;

fs.writeFile("multiline.txt", content, (err) => {
  if (err) throw err;
  console.log("Multi-line file created!");
});
```

## Practical Examples

### Logging Function

```javascript
const fs = require("fs");

function log(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  
  fs.appendFile("app.log", logEntry, (err) => {
    if (err) console.error("Logging failed:", err);
  });
}

log("Application started");
log("User logged in");
```

### Save User Data

```javascript
const fs = require("fs");

function saveUser(user) {
  fs.writeFile(
    `users/${user.id}.json`,
    JSON.stringify(user, null, 2),
    (err) => {
      if (err) {
        console.error("Failed to save user:", err.message);
        return;
      }
      console.log(`User ${user.id} saved!`);
    }
  );
}

saveUser({ id: 1, name: "John", email: "john@example.com" });
```

## Key Differences

| Aspect | writeFile | appendFile |
|--------|-----------|-----------|
| **Action** | Overwrites file | Adds to end |
| **File Existence** | Creates if missing | Creates if missing |
| **Use Case** | New content | Logs, appending data |

## Best Practices

1. **Use async methods** - Prefer `writeFile()` and `appendFile()` in production
2. **Always handle errors** - Check error parameter in callback
3. **Create directories first** - Ensure directory exists before writing
4. **Use proper encoding** - Specify 'utf8' for text files
5. **Consider file permissions** - Ensure write permissions exist
6. **Validate data** - Check data format before writing
7. **Use streams for large data** - For large files, use streams instead of writeFile()
