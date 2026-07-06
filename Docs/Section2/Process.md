
# Node.js Process Object

## What is the Process Object?

The `process` object provides information and control over the currently running Node.js process.

```js
console.log(process);
```

---

## `process.argv`

Returns command-line arguments.

```js
console.log(process.argv);
```

Run:

```bash
node app.js hello world
```

Output:

```js
['node', 'app.js', 'hello', 'world']
```

---

## `process.cwd()`

Returns the current working directory.

```js
console.log(process.cwd());
```

### What is the difference between `__dirname` and `process.cwd()`?
- `__dirname` → Current file directory
- `process.cwd()` → Directory where the command was executed


---

## `process.env`

Access environment variables.

```js
console.log(process.env.PORT);
```

Example:

```js
const PORT = process.env.PORT || 3000;
```

1. npm install cross-env
2. console.log(node.env.Node_Env)
2. "scripts": {
  "start:dev": "cross-env NODE_ENV=development node index.js",
  "start:prod": "cross-env NODE_ENV=production node index.js"
}

---


## `process.pid`

Returns the process ID.

```js
console.log(process.pid);
```

---

## `process.platform`

Returns the operating system.

```js
console.log(process.platform);
```

Possible values:

- win32
- linux
- darwin

---

## `process.version`

Returns the Node.js version.

```js
console.log(process.version);
```

---

## `process.memoryUsage()`

Displays memory consumption.

```js
console.log(process.memoryUsage());
```

Useful for performance monitoring and memory leak detection.

---

## `process.uptime()`

Returns how long the process has been running.

```js
console.log(process.uptime());
```

---

## `process.exit()`

Stops the Node.js process.

```js
process.exit(0); // Success
process.exit(1); // Failure
```

---

## Common Interview Questions

### How do you read command-line arguments?
Using `process.argv`.

### How do you access environment variables?
Using `process.env`.

### How do you terminate a Node.js application?
Using `process.exit()`.

### How do you get the current working directory?
Using `process.cwd()`.
