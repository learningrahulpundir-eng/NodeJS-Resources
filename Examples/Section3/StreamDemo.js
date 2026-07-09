// What is stream i Node JS
// Stream is the object which load the data in the chunks instead of loading the entire data at once.
// it is very useful when you have large files
// We have four type stream. i.e. Readable Strem, Writable Stream, Duplex Stream and Transform Stream

// Pipe: Pipe is used to combine readable stream to the writeable stream without impacting the data flow.

// Example 1 Readable stream
// const fs = require("fs");

// const stream = fs.createReadStream("demo.txt", "utf8");

// stream.on("data", (chunk) => {
//   console.log("Chunk size:", chunk.length);
//   console.log("Chunk content:", chunk);
// });

// stream.on("end", () => {
//   console.log("Stream finished");
// });

// stream.on("error", (err) => {
//   console.error("Stream error:", err);
// });


// Example for writing the stream

// const fs = require("fs");

// const stream = fs.createWriteStream("output.txt");

// stream.write("Line 1\n");
// stream.write("Line 2\n");
// stream.write("Line 3\n");

// stream.end(); // Signal end of writing

// stream.on("finish", () => {
//   console.log("Writing finished");
// });

// stream.on("error", (err) => {
//   console.error("Write error:", err);
// });


// Example for duplex
// const { Duplex } = require('stream');

// const duplex = new Duplex({
//   read(size) {
//     this.push("Hello ");
//     this.push("World!");
//     this.push(null); // End the readable side
//   },

//   write(chunk, encoding, callback) {
//     console.log("Received:", chunk.toString());
//     callback();
//   }
// });

// // Read data
// duplex.on("data", (chunk) => {
//   console.log("Read:", chunk.toString());
// });

// // Write data
// duplex.write("Node.js");
// duplex.end();


// Example Transform stream

// const { Transform } = require('stream');

// const upperCase = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   }
// });

// upperCase.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// upperCase.write("hello");
// upperCase.write("world");
// upperCase.end();

// Pipe
const fs = require("fs");

const readStream = fs.createReadStream("demo.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);






