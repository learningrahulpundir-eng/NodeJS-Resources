### What is OS (Operating System) module in Node.js?
   It is a built-in module in Node.js that provides operating system-related utility methods and properties.
   It can be used to get information about the operating system, such as the platform, architecture, CPU, memory, etc.
   It provides various methods for us like os.platform(), os.arch(), os.cpus(), os.freemem(), os.totalmem(), etc.


### Example - 1: Getting the operating system platform
```javascript
const os = require('os');
const platform = os.platform();
console.log(platform); // Output: 'linux' (or 'win32', 'darwin', etc. depending on the OS)
```

### Example - 2: Getting the operating system architecture
```javascript
const architecture = os.arch();
console.log(architecture); // Output: 'x64' (or 'arm', 'ia32', etc. depending on the architecture)
```

### Example - 3: Getting the number of CPU cores

```javascript
const cpuCores = os.cpus().length;
console.log(cpuCores); // Output: 4 (or the number of CPU cores on the system)
```

### Example - 4: Getting the total system memory

```javascript
const totalMemory = os.totalmem();
console.log(totalMemory); // Output: 17179869184 (or the total memory in bytes on the system)
```

### Example - 5: Getting the free system memory

```javascript
const freeMemory = os.freemem();
console.log(freeMemory); // Output: 8589934592 (or the free memory in bytes on the system)
```



