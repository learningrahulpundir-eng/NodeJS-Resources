# Streams and Buffers

## Understanding Buffers

### What is a Buffer?

A **Buffer** is a temporary storage location in memory that holds data. In Node.js, buffers are used to work with binary data. Unlike JavaScript strings, buffers are fixed-size byte arrays.

### Why Buffers?

- Handle binary data (images, videos, audio)
- Process data that comes in chunks
- Work with different character encodings
- Efficient memory management

### Creating Buffers

#### Method 1: From String

```javascript
const buffer = Buffer.from("Hello");
console.log(buffer);           // <Buffer 48 65 6c 6c 6f>
console.log(buffer.toString()); // "Hello"
```

#### Method 2: Allocated Buffer

```javascript
const buffer = Buffer.alloc(5);
console.log(buffer); // <Buffer 00 00 00 00 00>
```

#### Method 3: From Array

```javascript
const buffer = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buffer.toString()); // "Hello"
```

### Buffer Methods

| Method | Purpose |
|--------|---------|
| `Buffer.from()` | Create buffer from data |
| `Buffer.alloc()` | Create empty buffer |
| `buffer.toString()` | Convert buffer to string |
| `buffer.length` | Get buffer size in bytes |
| `buffer.write()` | Write to buffer |
| `buffer.slice()` | Extract portion of buffer |

### Buffer Example: Reading Binary File

```javascript
const fs = require("fs");

fs.readFile("image.png", (err, buffer) => {
  if (err) throw err;
  
  console.log("Buffer length:", buffer.length);
  console.log("Buffer type:", buffer.constructor.name);
  console.log("First 10 bytes:", buffer.slice(0, 10));
});
```

## Understanding Streams

### What is a Stream?

A **Stream** is a continuous flow of data. Instead of loading entire file into memory, streams process data in chunks. Streams are ideal for:

- Large files (> available RAM)
- Real-time data processing
- Network operations
- Piping data between sources and destinations

### Stream Types

| Type | Purpose |
|------|---------|
| **Readable** | Read data from source |
| **Writable** | Write data to destination |
| **Duplex** | Both readable and writable |
| **Transform** | Modify data while reading/writing |

### Readable Streams

```javascript
const fs = require("fs");

const stream = fs.createReadStream("large-file.txt", "utf8");

stream.on("data", (chunk) => {
  console.log("Chunk size:", chunk.length);
  console.log("Chunk content:", chunk);
});

stream.on("end", () => {
  console.log("Stream finished");
});

stream.on("error", (err) => {
  console.error("Stream error:", err);
});
```

#### Events on Readable Stream

| Event | Triggered When |
|-------|-----------------|
| `data` | Chunk of data is ready |
| `end` | No more data to read |
| `error` | Error occurred |
| `close` | Stream closed |
| `pause` | Stream paused |
| `resume` | Stream resumed |

### Writable Streams

```javascript
const fs = require("fs");

const stream = fs.createWriteStream("output.txt");

stream.write("Line 1\n");
stream.write("Line 2\n");
stream.write("Line 3\n");

stream.end(); // Signal end of writing

stream.on("finish", () => {
  console.log("Writing finished");
});

stream.on("error", (err) => {
  console.error("Write error:", err);
});
```

#### Methods on Writable Stream

| Method | Purpose |
|--------|---------|
| `stream.write()` | Write data |
| `stream.end()` | End writing |
| `stream.destroy()` | Destroy stream |
| `stream.pause()` | Pause stream |
| `stream.resume()` | Resume stream |

### Stream Events

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
  console.log("Data received");
});

readStream.on("end", () => {
  console.log("Reading complete");
});

writeStream.on("finish", () => {
  console.log("Writing complete");
});

writeStream.on("error", (err) => {
  console.error("Error:", err);
});
```

## Piping Streams

### What is Piping?

Piping connects a readable stream directly to a writable stream, automatically handling data flow.

### Basic Piping

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

This single line copies a file:
1. Reads chunks from input.txt
2. Writes chunks to output.txt
3. Handles backpressure automatically

### Chaining Multiple Pipes

```javascript
const fs = require("fs");
const zlib = require("zlib");

// Read → Compress → Write
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File compressed!");
```

### Pipe with Error Handling

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("error", (err) => {
  console.error("Read error:", err);
});

writeStream.on("error", (err) => {
  console.error("Write error:", err);
});

readStream.pipe(writeStream);
```

## Buffering and Backpressure

### What is Backpressure?

When a writable stream can't keep up with a readable stream, backpressure occurs. Data accumulates in memory, causing performance issues.

### Handling Backpressure

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("large-file.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (chunk) => {
  const canContinue = writeStream.write(chunk);
  
  if (!canContinue) {
    console.log("Pausing read");
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  console.log("Resuming read");
  readStream.resume();
});
```

## Streams vs Complete File Operations

### Reading Entire File (Not recommended for large files)

```javascript
const fs = require("fs");

fs.readFile("large-file.txt", (err, data) => {
  if (err) throw err;
  console.log(data); // Entire file loaded in memory!
});
```

**Problem:** Entire file loaded into memory at once. For a 1GB file, 1GB RAM is consumed.

### Using Streams (Recommended)

```javascript
const fs = require("fs");

const stream = fs.createReadStream("large-file.txt");

stream.on("data", (chunk) => {
  console.log("Processing chunk:", chunk.length, "bytes");
});
```

**Advantage:** Only current chunk in memory (usually 64KB), constant memory usage.

## Practical Examples

### Example 1: Copy File with Progress

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

let bytesRead = 0;

readStream.on("data", (chunk) => {
  bytesRead += chunk.length;
  console.log(`Read ${bytesRead} bytes`);
});

readStream.pipe(writeStream);
```

### Example 2: Processing Large CSV File

```javascript
const fs = require("fs");
const readline = require("readline");

const stream = fs.createReadStream("data.csv");

const rl = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  console.log("Line:", line);
});

rl.on("close", () => {
  console.log("File processed");
});
```

### Example 3: Compress File

```javascript
const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"))
  .on("finish", () => {
    console.log("File compressed!");
  });
```

## Key Takeaways

1. **Buffers** are fixed-size byte arrays for binary data
2. **Streams** process data in chunks, ideal for large files
3. **Piping** automates stream connection with backpressure handling
4. Use **streams for large files** to save memory
5. **Backpressure** must be handled for optimal performance
6. Streams enable **real-time data processing**
