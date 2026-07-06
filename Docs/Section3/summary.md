# Section 3: File System and OS - Summary

## Learning Objectives Completed

✅ File System (`fs`) Module - Read, write, and manage files  
✅ Reading Files - Async and sync approaches  
✅ Writing Files - Creating and appending files  
✅ Async vs Sync Operations - Understanding event loop and performance  
✅ Buffers - Working with binary data  
✅ Streams - Processing large data efficiently  
✅ OS Module - Getting system information  
✅ Path Module - Cross-platform path handling  

---

## Quick Reference

### File System Operations

| Operation | Async | Sync |
|-----------|-------|------|
| Read | `fs.readFile()` | `fs.readFileSync()` |
| Write | `fs.writeFile()` | `fs.writeFileSync()` |
| Append | `fs.appendFile()` | `fs.appendFileSync()` |
| Delete | `fs.unlink()` | `fs.unlinkSync()` |
| Rename | `fs.rename()` | `fs.renameSync()` |
| Create Dir | `fs.mkdir()` | `fs.mkdirSync()` |

### Common Pattern: Async Operations

```javascript
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});
```

### Common Pattern: Sync Operations

```javascript
const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

---

## Buffers Essentials

**Create Buffer:**
```javascript
Buffer.from("Hello");
Buffer.alloc(10);
```

**Convert Buffer:**
```javascript
buffer.toString();
buffer.toString("base64");
```

**Why Use Buffers:**
- Handle binary data (images, videos)
- Work with different encodings
- Process chunks of data

---

## Streams Essentials

**Read Stream (Non-blocking):**
```javascript
const stream = fs.createReadStream("file.txt");

stream.on("data", (chunk) => {
  console.log("Processing chunk");
});

stream.on("end", () => {
  console.log("Finished");
});
```

**Pipe Pattern:**
```javascript
fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
```

**Advantages:**
- Memory efficient for large files
- Real-time data processing
- Handles backpressure

---

## OS Module Quick Access

| Method | Returns |
|--------|---------|
| `os.platform()` | "win32", "darwin", "linux" |
| `os.arch()` | "x64", "arm64", "x32" |
| `os.hostname()` | Computer name |
| `os.freemem()` | Free RAM (bytes) |
| `os.totalmem()` | Total RAM (bytes) |
| `os.cpus()` | CPU information array |
| `os.homedir()` | User home directory |
| `os.tmpdir()` | Temporary directory |
| `os.uptime()` | System uptime (seconds) |

### Common Usage:

```javascript
const os = require("os");

// Check platform
if (os.platform() === "win32") {
  // Windows-specific code
}

// Monitor resources
const freeMem = os.freemem() / 1024 / 1024 / 1024; // GB
const totalMem = os.totalmem() / 1024 / 1024 / 1024; // GB

// Get CPU count
const cpuCount = os.cpus().length;
```

---

## Path Module Quick Access

| Method | Purpose | Example |
|--------|---------|---------|
| `path.join()` | Join segments | `path.join("users", "file.txt")` |
| `path.extname()` | Get extension | `path.extname("file.js")` → ".js" |
| `path.basename()` | Get filename | `path.basename("/path/file.js")` → "file.js" |
| `path.dirname()` | Get directory | `path.dirname("/path/file.js")` → "/path" |
| `path.resolve()` | Absolute path | `path.resolve("file.txt")` |
| `path.relative()` | Relative path between two | `path.relative("/a/b", "/a/c")` |
| `path.parse()` | Parse into components | Gets root, dir, base, ext, name |
| `path.format()` | Build from object | Opposite of parse() |
| `path.normalize()` | Clean separators | Fixes mixed slashes |
| `path.isAbsolute()` | Check if absolute | Returns boolean |

### Common Usage:

```javascript
const path = require("path");

// Build paths safely (cross-platform)
const configPath = path.join(__dirname, "..", "config", "app.json");

// Extract file info
const ext = path.extname(filePath);
const fileName = path.basename(filePath);
const dir = path.dirname(filePath);

// Parse path
const parsed = path.parse(filePath);
// { root, dir, base, name, ext }

// Cross-platform compatibility
const separator = path.sep; // "\" on Windows, "/" on Unix
```

---

## Performance Considerations

### Use Async For:
- Production web servers
- Handling multiple requests
- Reading large files
- Maximizing throughput

### Use Sync For:
- Startup scripts
- Configuration loading
- Command-line tools
- Data must be available before proceeding

### Use Streams For:
- Files larger than available RAM
- Real-time data processing
- Network operations
- Any large data operations

---

## Error Handling Patterns

### Async with Callback:
```javascript
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Process data
});
```

### Sync with Try/Catch:
```javascript
try {
  const data = fs.readFileSync("file.txt");
  // Process data
} catch (err) {
  console.error(err);
}
```

### Streams with Error Event:
```javascript
stream.on("error", (err) => {
  console.error("Stream error:", err);
});
```

---

## Best Practices Summary

1. ✅ **Use async methods** in production for better performance
2. ✅ **Always handle errors** - callbacks, try/catch, or event listeners
3. ✅ **Use path module** instead of string concatenation for cross-platform code
4. ✅ **Use streams** for large files to save memory
5. ✅ **Specify encoding** ("utf8") for text files
6. ✅ **Check file existence** before operations
7. ✅ **Create directories** before writing files
8. ✅ **Use __dirname and __filename** for relative paths
9. ✅ **Monitor system resources** with OS module
10. ✅ **Use buffers** correctly for binary data handling

---

## Common Use Cases

### 1. Read Configuration File at Startup
```javascript
try {
  const config = JSON.parse(fs.readFileSync("config.json"));
} catch (err) {
  console.error("Config error:", err);
}
```

### 2. Log Application Events
```javascript
const timestamp = new Date().toISOString();
fs.appendFileSync("app.log", `[${timestamp}] Event\n`);
```

### 3. Process Large File
```javascript
fs.createReadStream("large.txt")
  .pipe(fs.createWriteStream("output.txt"));
```

### 4. Build File Paths Safely
```javascript
const filePath = path.join(__dirname, "data", "user.json");
```

### 5. Get System Information
```javascript
const info = {
  platform: os.platform(),
  cpus: os.cpus().length,
  memory: os.freemem()
};
```

---

## Next Steps

After mastering this section, explore:
- Advanced stream transformations
- Worker threads for parallel file processing
- File watching with `fs.watch()`
- Building CLI tools with path and OS modules
- Database integration with file operations
- Error recovery and retry logic
