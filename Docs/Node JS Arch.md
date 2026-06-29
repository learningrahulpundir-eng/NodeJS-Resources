# Node.js Architecture: Single Thread and Event Loop

Node.js uses a non-blocking, event-driven architecture that makes it fast and scalable.

## 1. Single-Threaded Model

A single-threaded model means Node.js uses one main thread to handle many requests.

### Traditional servers
- Create a new thread for each request
- Use more memory
- Can become slower under heavy traffic

### Node.js approach
- Uses one main thread
- Does not block execution
- Handles many requests efficiently

## 2. Event-Driven Architecture

Node.js listens for events and responds when they happen.

Examples of events:
- An HTTP request arrives
- A file read finishes
- A database response is returned

Example:

```javascript
const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  console.log('File read completed');
});
```

### What happens here?
- Node.js starts reading the file
- It does not wait for the result
- It continues with other work

## 3. Event Loop

The event loop is the core of Node.js.

It continuously checks for:
- tasks that are ready
- callbacks that should run

### Step-by-step example

```javascript
setTimeout(() => console.log('Done'), 2000);
console.log('Start');
```

Output:

```bash
Start
Done
```

### Why?
- `setTimeout` is handled in the background
- `Start` is printed immediately
- After 2 seconds, the callback runs

## 4. Key Components

### Call Stack
- Executes synchronous code

### Callback Queue
- Stores completed asynchronous tasks

### Event Loop
- Moves tasks from the queue to the stack

### Thread Pool
- Used for heavy operations such as:
  - file system tasks
  - database work
  - crypto operations

Node.js uses the `libuv` thread pool internally.

## 5. Blocking vs Non-Blocking

### Blocking

```javascript
const data = fs.readFileSync('file.txt');
```

This stops execution until the file is read.

### Non-Blocking

```javascript
fs.readFile('file.txt', (err, data) => {
  console.log(data);
});
```

This continues executing without waiting.

## 6. Why Node.js Is Fast

- Single thread means less overhead
- Non-blocking I/O improves performance
- The event loop handles concurrency efficiently
- Memory usage is lower in many cases

## 7. Real-Life Analogy

Think of Node.js like a restaurant waiter:
- one waiter handles many customers
- the waiter does not stop and wait for every task
- the waiter serves food when it is ready

## 8. Best Use Cases

Node.js works very well for:
- real-time apps
- chat applications
- APIs with many users
- streaming applications

## 9. Limitation

Node.js is not ideal for CPU-heavy tasks like:
- video processing
- complex mathematical calculations

This is because a single thread can get blocked.

## In Short

- Single thread = one main worker
- Event loop = task manager
- Non-blocking = no unnecessary waiting

This makes Node.js fast, scalable, and efficient.