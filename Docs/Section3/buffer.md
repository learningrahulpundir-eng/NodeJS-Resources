 ### What is Buffer in Node.js?
  Buffer is the temparary  storage for holding the data.
  Buffer is a built-in module in Node.js that provides a way to work with binary data directly.
  it contanins a set of methods and properties that allow you to manipulate binary data, 
  such as reading and writing data, converting between different encodings, and slicing and concatenating buffers.
  it is the global object in Node.js, so you don't need to require it like other modules. You can use it directly in your code.


### Example - 1: Creating a buffer from a string
```javascript
const buffer1 = Buffer.from('Hello, World!');
console.log(buffer1); // Output: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
```

### Example - 2: Creating a buffer of a specific size
```javascript
const buffer2 = Buffer.alloc(10);
console.log(buffer2); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>
```

###  Example - 3: Writing data to a buffer
```javascript
const buffer3 = Buffer.alloc(10);
buffer3.write('Hello');
console.log(buffer3); // Output: <Buffer 48 65 6c 6c 6f 00 00 00 00 00>
```
### Example - 4: Reading data from a buffer
```javascript
const buffer4 = Buffer.from('Hello, World!');
console.log(buffer4.toString()); // Output: Hello, World!
```


### Example - 5: Concatenating buffers
```javascript
const buffer5a = Buffer.from('Hello, ');
const buffer5b = Buffer.from('World!');
const buffer5c = Buffer.concat([buffer5a, buffer5b]);
console.log(buffer5c.toString()); // Output: Hello, World!
```

### Example - 6: Slicing a buffer
```javascript
const buffer6 = Buffer.from('Hello, World!');
const buffer6Slice = buffer6.slice(0, 5);
console.log(buffer6Slice.toString()); // Output: Hello
```