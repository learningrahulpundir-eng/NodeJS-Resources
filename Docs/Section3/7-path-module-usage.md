# Path Module Usage

## Overview

The **Path module** provides utilities for working with file and directory paths. It handles differences between operating systems (Windows uses backslashes `\`, Unix uses forward slashes `/`).

## Import the Path Module

```javascript
const path = require("path");
```

## Why Use the Path Module?

- **Cross-platform compatibility** - Works on Windows, macOS, and Linux
- **Normalize paths** - Convert mixed separators to OS-specific format
- **Extract path components** - Get directory, filename, extension
- **Build paths** - Construct paths reliably
- **Resolve relative paths** - Convert to absolute paths

## Path Module Methods

### 1. path.join()

Joins path segments using the appropriate separator for the platform.

**Syntax:**
```javascript
path.join([...paths])
```

**Basic Example:**
```javascript
const path = require("path");

console.log(path.join("users", "rahul", "profile.txt"));
// Windows: "users\rahul\profile.txt"
// Unix: "users/rahul/profile.txt"
```

**Handling Parent Directory:**
```javascript
const path = require("path");

console.log(path.join("users", "..", "rahul", "profile.txt"));
// Resolves ".." to "../rahul/profile.txt"
```

**Practical Example:**
```javascript
const path = require("path");

const dir = path.join(__dirname, "data", "users");
console.log(dir);
```

**Advantages over string concatenation:**
```javascript
// ❌ Wrong - Platform specific
const filePath = "users/" + "rahul/" + "profile.txt";

// ✅ Correct - Uses path.join()
const filePath = path.join("users", "rahul", "profile.txt");
```

### 2. path.extname()

Returns the file extension.

**Syntax:**
```javascript
path.extname(path)
```

**Examples:**
```javascript
const path = require("path");

console.log(path.extname("index.js"));           // ".js"
console.log(path.extname("document.pdf"));       // ".pdf"
console.log(path.extname("README"));             // ""
console.log(path.extname("archive.tar.gz"));     // ".gz" (last extension)
console.log(path.extname("/path/to/file.html")); // ".html"
```

**Use Case: File Type Validation**
```javascript
const path = require("path");

function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  return validExtensions.includes(ext);
}

console.log(isImageFile("photo.jpg"));   // true
console.log(isImageFile("document.txt")); // false
```

### 3. path.basename()

Returns the filename (last portion of the path).

**Syntax:**
```javascript
path.basename(path, [ext])
```

**Basic Example:**
```javascript
const path = require("path");

console.log(path.basename("/users/rahul/profile.txt"));
// "profile.txt"
```

**With Extension Removal:**
```javascript
const path = require("path");

console.log(path.basename("/users/rahul/profile.txt", ".txt"));
// "profile" (without extension)
```

**More Examples:**
```javascript
const path = require("path");

console.log(path.basename("C:\\Users\\rahul\\file.js"));
// Windows: "file.js"

console.log(path.basename("/home/rahul/document.pdf"));
// Unix: "document.pdf"

console.log(path.basename("file.js", ".js"));
// "file" (extension removed)
```

### 4. path.dirname()

Returns the directory path (everything except the filename).

**Syntax:**
```javascript
path.dirname(path)
```

**Examples:**
```javascript
const path = require("path");

console.log(path.dirname("/users/rahul/profile.txt"));
// "/users/rahul"

console.log(path.dirname("C:\\Users\\rahul\\file.js"));
// "C:\\Users\\rahul"

console.log(path.dirname("file.txt"));
// "."
```

**Use Case: Get File Directory**
```javascript
const path = require("path");
const fs = require("fs");

const filePath = "/data/logs/app.log";
const directory = path.dirname(filePath);

// Create directory if it doesn't exist
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}
```

### 5. path.resolve()

Converts a relative path to an absolute path from the root.

**Syntax:**
```javascript
path.resolve([...paths])
```

**Examples:**
```javascript
const path = require("path");

console.log(path.resolve("config.json"));
// "/home/user/project/config.json" (from current working directory)

console.log(path.resolve("/home/user", "project", "config.json"));
// "/home/user/project/config.json"

console.log(path.resolve("../data", "file.txt"));
// Resolves relative to current directory
```

**Practical Example:**
```javascript
const path = require("path");

const configPath = path.resolve(__dirname, "..", "config", "app.json");
console.log(configPath); // Absolute path to config file
```

### 6. path.relative()

Returns the relative path between two paths.

**Syntax:**
```javascript
path.relative(from, to)
```

**Examples:**
```javascript
const path = require("path");

console.log(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb"));
// "../../impl/bbb"

console.log(path.relative("C:\\orandea\\test\\aaa", "C:\\orandea\\impl\\bbb"));
// "..\\..\\impl\\bbb"
```

### 7. path.normalize()

Normalizes a path, removing `.` and `..` and converting separators.

**Syntax:**
```javascript
path.normalize(path)
```

**Examples:**
```javascript
const path = require("path");

console.log(path.normalize("/users//rahul/../rahul/profile.txt"));
// "/users/rahul/profile.txt"

console.log(path.normalize("C:\\Users\\rahul\\..\\rahul\\file.txt"));
// "C:\\Users\\rahul\\file.txt"
```

### 8. path.parse()

Breaks a path into components (root, dir, base, name, ext).

**Syntax:**
```javascript
path.parse(path)
```

**Example:**
```javascript
const path = require("path");

console.log(path.parse("/users/rahul/profile.txt"));
```

**Output:**
```javascript
{
  root: "/",
  dir: "/users/rahul",
  base: "profile.txt",
  ext: ".txt",
  name: "profile"
}
```

**Use Case: Extract File Details**
```javascript
const path = require("path");

const filePath = "/home/user/documents/report.pdf";
const parsed = path.parse(filePath);

console.log("Directory:", parsed.dir);      // "/home/user/documents"
console.log("Filename:", parsed.base);      // "report.pdf"
console.log("Name only:", parsed.name);     // "report"
console.log("Extension:", parsed.ext);      // ".pdf"
```

### 9. path.format()

Constructs a path from an object (opposite of parse).

**Syntax:**
```javascript
path.format(pathObject)
```

**Example:**
```javascript
const path = require("path");

const pathObject = {
  root: "/",
  dir: "/users/rahul",
  base: "profile.txt",
  ext: ".txt",
  name: "profile"
};

console.log(path.format(pathObject));
// "/users/rahul/profile.txt"
```

### 10. path.isAbsolute()

Checks if a path is absolute.

**Syntax:**
```javascript
path.isAbsolute(path)
```

**Examples:**
```javascript
const path = require("path");

console.log(path.isAbsolute("/users/rahul/profile.txt"));  // true
console.log(path.isAbsolute("users/rahul/profile.txt"));   // false
console.log(path.isAbsolute("C:\\Users\\rahul\\file.txt")); // true
console.log(path.isAbsolute("folder/file.txt"));            // false
```

## Path Constants

### path.sep

The path segment separator (`\` on Windows, `/` on Unix).

```javascript
const path = require("path");

console.log("PATH1" + path.sep + "PATH2");
// Windows: "PATH1\PATH2"
// Unix: "PATH1/PATH2"
```

### path.delimiter

The path list delimiter (`;` on Windows, `:` on Unix).

```javascript
const path = require("path");

const paths = `C:\\Program Files\\node${path.delimiter}C:\\Program Files\\git`;
console.log(paths);
// Windows: "C:\\Program Files\\node;C:\\Program Files\\git"
```

## Path Module Methods Reference Table

| Method | Purpose |
|--------|---------|
| `path.join()` | Join path segments |
| `path.extname()` | Get file extension |
| `path.basename()` | Get filename |
| `path.dirname()` | Get directory path |
| `path.resolve()` | Convert to absolute path |
| `path.relative()` | Get relative path between paths |
| `path.normalize()` | Normalize path format |
| `path.parse()` | Parse path into components |
| `path.format()` | Create path from components |
| `path.isAbsolute()` | Check if path is absolute |
| `path.sep` | Path separator |
| `path.delimiter` | Path list delimiter |

## Special Variables

### __dirname

Returns the absolute path of the current file's directory.

```javascript
console.log(__dirname);
// "/home/user/project/src"
```

### __filename

Returns the absolute path of the current file.

```javascript
console.log(__filename);
// "/home/user/project/src/app.js"
```

**Practical Use:**
```javascript
const path = require("path");

// Get current directory
const currentDir = path.dirname(__filename);

// Navigate to sibling directory
const configPath = path.join(currentDir, "..", "config", "app.json");

console.log(configPath); // Full absolute path
```

## Comprehensive Example

```javascript
const path = require("path");

function analyzeFilePath(filePath) {
  console.log("Original path:", filePath);
  console.log("");
  
  // Parse components
  const parsed = path.parse(filePath);
  console.log("Parsed:");
  console.log("  Root:", parsed.root);
  console.log("  Directory:", parsed.dir);
  console.log("  Base:", parsed.base);
  console.log("  Name:", parsed.name);
  console.log("  Extension:", parsed.ext);
  console.log("");
  
  // Extract parts
  console.log("Extract:");
  console.log("  Basename:", path.basename(filePath));
  console.log("  Dirname:", path.dirname(filePath));
  console.log("  Extname:", path.extname(filePath));
  console.log("");
  
  // Resolve
  console.log("Is absolute?:", path.isAbsolute(filePath));
  console.log("Resolved:", path.resolve(filePath));
}

analyzeFilePath("/users/rahul/documents/report.pdf");
```

## Best Practices

1. **Always use path.join()** - Don't concatenate paths with strings
2. **Use __dirname** - Reference files relative to current script
3. **Normalize paths** - Use `path.normalize()` for user input
4. **Check platform** - Be aware of Windows vs Unix differences
5. **Resolve absolute paths** - Use `path.resolve()` for consistency
6. **Handle separators** - Use `path.sep` for dynamic separator handling
7. **Parse for validation** - Use `path.parse()` to validate path structure
