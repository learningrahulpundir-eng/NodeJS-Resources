# Reading Files

## Overview

Reading files is one of the most common operations in Node.js applications. The `fs` module provides both asynchronous and synchronous methods to read file contents.

## Asynchronous File Reading

### fs.readFile() - Non-blocking

The `fs.readFile()` method is the most commonly used asynchronous approach. It doesn't block the event loop, making it ideal for production applications.

#### Syntax

```javascript
fs.readFile(filename, [encoding], [callback])
```

#### Parameters

- **filename**: The path to the file to read (string)
- **encoding**: The character encoding (optional, defaults to 'utf8' for text)
- **callback**: Function to execute when the operation completes, with `(err, data)` parameters

#### Basic Example

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

#### Detailed Example with Proper Error Handling

```javascript
const fs = require("fs");

fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File content:", data);
});

console.log("File reading started...");
```

## Synchronous File Reading

### fs.readFileSync() - Blocking

The `fs.readFileSync()` method reads files synchronously, blocking the event loop until the operation completes.

#### Syntax

```javascript
const data = fs.readFileSync(filename, [encoding])
```

#### Basic Example

```javascript
const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);
```

#### With Error Handling

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("data.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err.message);
}
```

## Common Encodings

| Encoding | Use Case |
|----------|----------|
| `utf8` | Default, text files |
| `ascii` | ASCII text files |
| `base64` | Binary data as text |
| `hex` | Hexadecimal representation |
| `latin1` | ISO-8859-1 encoding |

## Reading Binary Files (No Encoding)

When reading binary files without specifying encoding, a Buffer object is returned:

```javascript
const fs = require("fs");

fs.readFile("image.png", (err, buffer) => {
  if (err) return console.error(err);
  console.log("Buffer length:", buffer.length);
  console.log("Buffer type:", typeof buffer);
});
```

## Key Differences

| Aspect | Async (readFile) | Sync (readFileSync) |
|--------|------------------|-------------------|
| **Blocking** | No, non-blocking | Yes, blocking |
| **Performance** | Better for multiple files | Slower for multiple files |
| **Error Handling** | Callback parameter | try/catch |
| **Production Use** | ✅ Recommended | ❌ Not recommended |
| **Startup Scripts** | Can use | ✅ Recommended |

## Best Practices

1. **Always handle errors** - Check for errors in callbacks or use try/catch
2. **Use async methods** - Prefer `readFile()` in production code
3. **Specify encoding** - Always specify 'utf8' for text files
4. **Use streams for large files** - For files larger than available memory
5. **Check file exists** - Use `fs.existsSync()` before reading

## Practical Example: Reading Configuration File

```javascript
const fs = require("fs");

function loadConfig(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to load config:", err.message);
    return null;
  }
}

const config = loadConfig("config.json");
console.log(config);
```
