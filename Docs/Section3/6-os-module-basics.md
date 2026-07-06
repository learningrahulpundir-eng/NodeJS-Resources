# OS Module Basics

## Overview

The **OS module** provides utilities for working with the computer's operating system. It gives you information about the system and allows you to interact with OS-level operations.

## Import the OS Module

```javascript
const os = require("os");
```

## OS Module Methods

### 1. os.platform()

Returns the operating system platform.

```javascript
const os = require("os");
console.log(os.platform());
// Output: "win32", "darwin", "linux", etc.
```

**Possible Values:**
- `"win32"` - Windows
- `"darwin"` - macOS
- `"linux"` - Linux
- `"freebsd"` - FreeBSD
- `"openbsd"` - OpenBSD

**Use Case:** Conditional code based on OS
```javascript
const os = require("os");

if (os.platform() === "win32") {
  console.log("Running on Windows");
} else if (os.platform() === "darwin") {
  console.log("Running on macOS");
} else {
  console.log("Running on Linux");
}
```

### 2. os.arch()

Returns the CPU architecture.

```javascript
const os = require("os");
console.log(os.arch());
// Output: "x64", "arm64", "x32", etc.
```

**Possible Values:**
- `"x64"` - 64-bit Intel/AMD
- `"x32"` - 32-bit Intel/AMD
- `"arm64"` - ARM 64-bit (Apple Silicon, etc.)
- `"arm"` - ARM 32-bit
- `"ia32"` - Intel 32-bit (deprecated)
- `"mips"` - MIPS Architecture
- `"ppc"` - PowerPC

**Use Case:** Check system capabilities
```javascript
if (os.arch() === "arm64") {
  console.log("Running on Apple Silicon or ARM64 processor");
}
```

### 3. os.hostname()

Returns the computer's hostname.

```javascript
const os = require("os");
console.log(os.hostname());
// Output: "my-laptop", "server-01", etc.
```

**Use Case:** Identify machine in logs
```javascript
const os = require("os");
const hostname = os.hostname();
console.log(`[${hostname}] Application started`);
```

### 4. os.freemem()

Returns the amount of free system memory in bytes.

```javascript
const os = require("os");
const freeMem = os.freemem();
console.log(freeMem);           // Bytes
console.log(freeMem / 1024);    // KB
console.log(freeMem / 1024 / 1024);  // MB
console.log(freeMem / 1024 / 1024 / 1024);  // GB
```

**Use Case:** Monitor system resources
```javascript
const os = require("os");

function checkMemory() {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();
  const usedMem = totalMem - freeMem;
  
  console.log(`Free Memory: ${(freeMem / 1024 / 1024 / 1024).toFixed(2)} GB`);
  console.log(`Used Memory: ${(usedMem / 1024 / 1024 / 1024).toFixed(2)} GB`);
}

checkMemory();
```

### 5. os.totalmem()

Returns the total amount of system memory in bytes.

```javascript
const os = require("os");
const totalMem = os.totalmem();
console.log(totalMem);  // Bytes
console.log((totalMem / 1024 / 1024 / 1024).toFixed(2) + " GB");
```

**Use Case:** Calculate memory usage percentage
```javascript
const os = require("os");

const total = os.totalmem();
const free = os.freemem();
const used = total - free;
const percentage = (used / total * 100).toFixed(2);

console.log(`Memory Usage: ${percentage}%`);
```

### 6. os.cpus()

Returns an array of CPU core information.

```javascript
const os = require("os");
console.log(os.cpus());
```

**Output Structure:**
```javascript
[
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 2400,
    times: {
      user: 123456,
      nice: 0,
      sys: 234567,
      idle: 3456789,
      irq: 0
    }
  },
  // ... more cores
]
```

**Use Case:** Detect number of CPU cores
```javascript
const os = require("os");
const cpuCount = os.cpus().length;
console.log(`Number of CPU cores: ${cpuCount}`);
```

### 7. os.type()

Returns the operating system name.

```javascript
const os = require("os");
console.log(os.type());
// Output: "Windows_NT", "Darwin", "Linux", etc.
```

**Use Case:** Detailed OS identification
```javascript
const os = require("os");

console.log(`OS: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
```

### 8. os.release()

Returns the operating system version.

```javascript
const os = require("os");
console.log(os.release());
// Output: "10.0.19041", "19.6.0", "5.4.0-42", etc.
```

### 9. os.version() (Node.js 13.11.0+)

Returns the operating system version string.

```javascript
const os = require("os");
console.log(os.version());
// Output: "Windows 10 Pro", "macOS Monterey", etc.
```

### 10. os.homedir()

Returns the home directory path.

```javascript
const os = require("os");
console.log(os.homedir());
// Output: "C:\Users\username" (Windows)
//         "/Users/username" (macOS)
//         "/home/username" (Linux)
```

**Use Case:** Store user data
```javascript
const os = require("os");
const path = require("path");

const userDir = os.homedir();
const configPath = path.join(userDir, ".myapp", "config.json");
console.log(configPath);
```

### 11. os.tmpdir()

Returns the path to the temporary directory.

```javascript
const os = require("os");
console.log(os.tmpdir());
// Output: "C:\Users\username\AppData\Local\Temp" (Windows)
//         "/var/folders/..." (macOS)
//         "/tmp" (Linux)
```

**Use Case:** Create temporary files
```javascript
const os = require("os");
const path = require("path");
const fs = require("fs");

const tempDir = os.tmpdir();
const tempFile = path.join(tempDir, "temp-" + Date.now() + ".txt");

fs.writeFileSync(tempFile, "Temporary data");
console.log("Temp file created:", tempFile);
```

### 12. os.uptime()

Returns the system uptime in seconds.

```javascript
const os = require("os");
const uptime = os.uptime();
const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`System uptime: ${hours}h ${minutes}m`);
```

### 13. os.userInfo()

Returns information about the current user.

```javascript
const os = require("os");
console.log(os.userInfo());
```

**Output:**
```javascript
{
  uid: 1000,
  gid: 1000,
  username: 'john',
  homedir: '/home/john',
  shell: '/bin/bash'
}
```

## OS Module Reference Table

| Method | Returns | Type |
|--------|---------|------|
| `os.platform()` | OS platform | String |
| `os.arch()` | CPU architecture | String |
| `os.hostname()` | Computer hostname | String |
| `os.freemem()` | Free RAM | Number (bytes) |
| `os.totalmem()` | Total RAM | Number (bytes) |
| `os.cpus()` | CPU information | Array |
| `os.type()` | OS name | String |
| `os.release()` | OS version | String |
| `os.version()` | OS full version | String |
| `os.homedir()` | Home directory | String |
| `os.tmpdir()` | Temp directory | String |
| `os.uptime()` | System uptime | Number (seconds) |
| `os.userInfo()` | User information | Object |

## Complete System Information Example

```javascript
const os = require("os");

function getSystemInfo() {
  console.log("=== SYSTEM INFORMATION ===");
  console.log("Platform:", os.platform());
  console.log("Type:", os.type());
  console.log("Release:", os.release());
  console.log("Architecture:", os.arch());
  console.log("Hostname:", os.hostname());
  console.log("");
  
  console.log("=== MEMORY ===");
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  console.log("Total:", (totalMem / 1024 / 1024 / 1024).toFixed(2), "GB");
  console.log("Free:", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");
  console.log("Used:", ((totalMem - freeMem) / 1024 / 1024 / 1024).toFixed(2), "GB");
  console.log("");
  
  console.log("=== CPU ===");
  console.log("Cores:", os.cpus().length);
  console.log("");
  
  console.log("=== TIME ===");
  console.log("Uptime:", Math.floor(os.uptime() / 3600), "hours");
}

getSystemInfo();
```

## Best Practices

1. **Cross-platform compatibility** - Use OS module for platform-specific code
2. **Memory monitoring** - Check `freemem()` for resource constraints
3. **CPU awareness** - Use `cpus().length` for worker thread management
4. **User paths** - Use `homedir()` and `tmpdir()` for file storage
5. **System diagnostics** - Log system info for debugging issues
