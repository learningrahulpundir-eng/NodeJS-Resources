Callbacks in Node.js

Callbacks are one of the fundamental concepts of Node.js. A callback is simply a function passed as an argument to another function, which gets executed later when a task is completed.

Node.js heavily relies on callbacks because most operations like file reading, database queries, and API calls are asynchronous.

Why Callbacks?

Imagine reading a large file.

Synchronous Approach
const data = fs.readFileSync('data.txt');

console.log(data.toString());

console.log('Finished');

Node.js waits until the file is completely read.

Asynchronous Approach
fs.readFile('data.txt', (err, data) => {
    console.log(data.toString());
});

console.log('Finished');
Output
Finished
File Content...

Node.js doesn't wait for the file operation to finish. Instead, it continues execution and invokes the callback when the file is ready.

Basic Callback Example
function greet(name, callback) {
    console.log(`Hello ${name}`);

    callback();
}

function sayBye() {
    console.log('Goodbye!');
}

greet('Rahul', sayBye);
Output
Hello Rahul
Goodbye!

Here:

sayBye is the callback.
It is passed to greet().
It executes after greeting.
Anonymous Callback Function
greet('Rahul', () => {
    console.log('Welcome to Node.js');
});
Output
Hello Rahul
Welcome to Node.js
Real-World Example: Reading a File
const fs = require('fs');

fs.readFile('users.txt', 'utf8', (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});
Flow
Start
  │
  ▼
Read File
  │
  ▼
Continue Execution
  │
  ▼
File Finished
  │
  ▼
Callback Executes

This is how Node.js handles I/O efficiently.

Error-First Callback Pattern

Node.js follows a standard callback convention:

function callback(error, result) {
    // handle result
}
Example
fs.readFile('data.txt', 'utf8', (err, data) => {

    if (err) {
        console.log('Error:', err.message);
        return;
    }

    console.log(data);
});

The first parameter is always the error.

(err, result)

If no error occurs:

err === null
Creating Your Own Callback Function
function fetchUser(id, callback) {

    const user = {
        id,
        name: 'Rahul'
    };

    callback(null, user);
}

fetchUser(1, (err, user) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(user);
});
Output
{ id: 1, name: 'Rahul' }
Simulating Async Operations
function getData(callback) {

    setTimeout(() => {

        callback('Data received');

    }, 2000);
}

getData((result) => {
    console.log(result);
});

console.log('Loading...');
Output
Loading...
Data received

The callback executes after 2 seconds.

Callback in HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {

    res.write('Hello Node.js');

    res.end();
});

server.listen(3000);

The function passed to createServer() is a callback.

Whenever a request arrives, Node.js executes that callback.

Callback in Array Methods

Callbacks are not limited to async operations.

forEach()
const numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num);
});
map()
const result = numbers.map((num) => {
    return num * 2;
});

console.log(result);
Output
[2, 4, 6]
Callback Hell

One of the biggest problems with callbacks is nesting.

getUser(userId, (user) => {

    getOrders(user.id, (orders) => {

        getPayment(orders[0].id, (payment) => {

            getInvoice(payment.id, (invoice) => {

                console.log(invoice);

            });
        });
    });
});

This creates a pyramid-like structure.

getUser()
 └── getOrders()
      └── getPayment()
           └── getInvoice()

This is called Callback Hell.

Problems:

Difficult to read
Hard to maintain
Difficult error handling
Deep nesting
Solution: Promises

Instead of callbacks:

getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(payment => getInvoice(payment.id))
    .then(invoice => console.log(invoice))
    .catch(err => console.log(err));
Better Solution: Async/Await
async function processOrder() {

    try {

        const user = await getUser(userId);

        const orders = await getOrders(user.id);

        const payment = await getPayment(orders[0].id);

        const invoice = await getInvoice(payment.id);

        console.log(invoice);

    } catch (err) {

        console.log(err);
    }
}

This is much cleaner and easier to understand.

Where Callbacks Are Used in Node.js

Common examples:

Module	Callback Usage
fs	File operations
http	Request handling
dns	DNS lookups
crypto	Hash generation
timers	setTimeout, setInterval
streams	Data processing

Example:

setTimeout(() => {
    console.log('Executed');
}, 1000);

The function passed to setTimeout() is a callback.

Interview Questions
What is a callback?
 # Callbacks in Node.js

Callbacks are a core concept in Node.js. A callback is a function passed as an argument to another function and executed later — typically when an asynchronous operation completes.

Node.js uses callbacks widely for I/O, timers, and other async APIs so the main thread is not blocked.

## Synchronous vs Asynchronous (example)

Synchronous (blocking):

```javascript
const fs = require('fs');
const data = fs.readFileSync('data.txt');
console.log(data.toString());
console.log('Finished');
```

Asynchronous (non-blocking) with a callback:

```javascript
const fs = require('fs');
fs.readFile('data.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('Finished');
// Output:
// Finished
// <file contents printed later>
```

Node continues execution and invokes the callback when the I/O completes.

## Basic callback example

```javascript
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayBye() { console.log('Goodbye!'); }

greet('Rahul', sayBye);
// Output:
// Hello Rahul
// Goodbye!
```

You can also pass anonymous functions:

```javascript
greet('Rahul', () => console.log('Welcome to Node.js'));
```

## Error-first callback pattern

Node.js convention uses an error-first signature: `(err, result)` where `err` is non-null when an error occurred.

```javascript
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log(data);
});
```

## Creating your own callback-style API

```javascript
function fetchUser(id, callback) {
    const user = { id, name: 'Rahul' };
    callback(null, user);
}

fetchUser(1, (err, user) => {
    if (err) return console.error(err);
    console.log(user); // { id: 1, name: 'Rahul' }
});
```

## Simulating async operations

```javascript
function getData(callback) {
    setTimeout(() => callback('Data received'), 2000);
}

getData((result) => console.log(result));
console.log('Loading...');
// Output:
// Loading...
// Data received
```

## Callbacks in core APIs

- HTTP server: the request handler passed to `http.createServer()` is a callback.
- Timers: `setTimeout()` and `setInterval()` accept callbacks.
- Array helpers: `forEach`, `map`, `filter` receive callbacks (synchronous).

Example (array `map`):

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

## Callback Hell (pyramid of doom)

Deeply nested callbacks become hard to read and maintain:

```javascript
getUser(userId, (user) => {
    getOrders(user.id, (orders) => {
        getPayment(orders[0].id, (payment) => {
            getInvoice(payment.id, (invoice) => {
                console.log(invoice);
            });
        });
    });
});
```

Problems: hard to follow flow, repetitive error handling, and difficult to test.

## Alternatives: Promises and async/await

Promises flatten the chain:

```javascript
getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(payment => getInvoice(payment.id))
    .then(invoice => console.log(invoice))
    .catch(err => console.error(err));
```

`async/await` makes the code look synchronous:

```javascript
async function processOrder() {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const payment = await getPayment(orders[0].id);
        const invoice = await getInvoice(payment.id);
        console.log(invoice);
    } catch (err) {
        console.error(err);
    }
}
```

## Where callbacks are used

| Module | Usage |
|--------|-------|
| `fs` | File operations |
| `http` | Request handlers |
| `dns` | DNS lookup callbacks |
| `crypto` | Asynchronous crypto APIs |
| `timers` | `setTimeout`, `setInterval` |
| `streams` | Data event handlers |

## Quick interview Q&A

- What is a callback? — A function passed to another function that runs later.
- Why are callbacks important? — They enable non-blocking async behavior.
- What is an error-first callback? — A convention where the first argument is an error object.
- What is callback hell? — Deeply nested callbacks that are hard to read.
- How to avoid it? — Use Promises, `async/await`, and modular code.

## Summary

Callbacks are foundational in Node.js for handling asynchronous tasks. Follow the error-first pattern, prefer Promises/`async`/`await` for complex flows, and keep callback functions small and well-named for readability.
