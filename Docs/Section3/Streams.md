###  What is stream i Node JS
  Stream is the object which load the data in the chunks instead of loading the entire data at once.
  it is very useful when you have large files
  We have four type stream. i.e. Readable Strem, Writable Stream, Duplex Stream and Transform Stream
  Readable: It is used to read the data from source
  Writeable: It is used to write the data to destination
  Duplex: Is is used for both
  Transfrom: It is used to transform the data in both readable and writable stream.

// Pipe: Pipe is used to combine readable stream to the writeable stream without impacting the data flow.

// Example: Readable stream

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

// Example: Writable Stream

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

// Example Duplex Stream

```javascript
const { Duplex } = require('stream');

const duplex = new Duplex({
  read(size) {
    this.push("Hello ");
    this.push("World!");
    this.push(null); // End the readable side
  },

  write(chunk, encoding, callback) {
    console.log("Received:", chunk.toString());
    callback();
  }
});

// Read data
duplex.on("data", (chunk) => {
  console.log("Read:", chunk.toString());
});

// Write data
duplex.write("Node.js");
duplex.end();

```

// Example : Transform Stream

```javascript
const { Transform } = require('stream');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

upperCase.on("data", (chunk) => {
  console.log(chunk.toString());
});

upperCase.write("hello");
upperCase.write("world");
upperCase.end();
```

Example: Basic Piping

```javascript
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```


Example: Channing of Piping

```javascript
const fs = require("fs");
const zlib = require("zlib");

// Read → Compress → Write
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File compressed!");

```





