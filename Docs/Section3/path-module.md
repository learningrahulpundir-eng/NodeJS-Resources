### What is the Path module in Node.js?
  It is in build module in node js which is used to work with file and directory paths. 
  It provides utilities for working with file and directory paths. 
  It can be used to get the file name, extension, directory name, etc.
  it provies various method for us like 
  path.basename(), path.dirname(), path.extname(), path.join(), path.resolve(), etc.


### Example - 1: Getting the file name from the path
```javascript
const path = require('path');
const filePath = '/home/user/documents/file.txt';
const fileName = path.basename(filePath);
console.log(fileName); // Output: 'file.txt'
```

### Example -2: Getting the directory name from the path
```javascript
const path = require('path');
const filePath = '/home/user/documents/file.txt';
const dirName = path.dirname(filePath);
console.log(dirName); // Output: '/home/user/documents'
```
### Example -3: Getting the file extension from the path
```javascript
const path = require('path');
const filePath = '/home/user/documents/file.pdf';
const fileExt = path.extname(filePath);
console.log(fileExt); // Output: '.pdf'
```

### Example -4: Joining multiple path segments
```javascript
const path = require('path');
const dirPath = '/home/user/documents';  
const fileName = 'file.txt';
const fullPath = path.join(dirPath, fileName);
console.log(fullPath); // Output: '/home/user/documents/file.txt'
```

### Example -5: Resolving a sequence of paths into an absolute path
```javascript
const path = require('path');
const absolutePath = path.resolve('documents', 'file.txt');
console.log(absolutePath); // Output: '/home/user/documents/file.txt' (assuming the current working directory is '/home/user')
```