# File System (fs) Module in Node.js

The fs module is a built-in Node.js module used to work with files and directories.

## What is fs module?

The fs module provides methods to:
- read files
- write files
- delete files
- rename files
- create directories
- delete directories

## Importing fs module

```javascript
const fs = require('fs');
```

## Example 1: Read a file

### Synchronous way

```javascript
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log(data);
```

### Asynchronous way

```javascript
fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log("Data come from Asycnhronous way");
    console.log(data);
});
```

## Example 2: Write content to a file

### Synchronous way

```javascript
const data = "This is the demo file for asynchronous fs module in Node js";
fs.writeFileSync('demo.txt', data);
console.log("Data written to the file successfully");
```

### Asynchronous way

```javascript
fs.writeFile('demo.txt', data, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Data written to the file successfully in Asynchronous way");
});
```

## Example 3: Delete a file

### Synchronous way

```javascript
fs.unlinkSync('demo.txt');
console.log("File deleted successfully");
```

### Asynchronous way

```javascript
fs.unlink('demo.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("File deleted successfully in Asynchronous way");
});
```

## Example 4: Rename a file

### Synchronous way

```javascript
fs.renameSync('demo.txt', 'demo1.txt');
console.log("File renamed successfully");
```

### Asynchronous way

```javascript
fs.rename('demo1.txt', 'demo.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("File renamed successfully in SAsynchronous way");
});
```

## Example 5: Create a directory

### Synchronous way

```javascript
fs.mkdirSync('demoDir');
console.log("Directory created successfully");
```

### Asynchronous way

```javascript
fs.mkdir('demoDir1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Directory created successfully in Asynchronous way");
});
```

## Example 6: Delete a directory

### Synchronous way

```javascript
fs.rmdirSync('demoDir');
console.log("Directory deleted successfully");
```

### Asynchronous way

```javascript
fs.rmdir('demoDir1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Directory deleted successfully in Asynchronous way");
});
```

## Example 5: Create a directory

### Synchronous way

```javascript
fs.mkdirSync('demoDir');
console.log("Directory created successfully");
```

### Asynchronous way

```javascript
fs.mkdir('demoDir1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Directory created successfully in Asynchronous way");
});
```

## Example 6: Delete a directory

### Synchronous way

```javascript
fs.rmdirSync('demoDir');
console.log("Directory deleted successfully");
```

### Asynchronous way

```javascript
fs.rmdir('demoDir1', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Directory deleted successfully in Asynchronous way");
});
```

## Summary

The fs module is one of the most useful built-in modules in Node.js for handling files and folders efficiently.
