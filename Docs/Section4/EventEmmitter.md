 # EventEmitter in Node.js

## What is EventEmitter?

The EventEmitter class (from Node.js's built-in `events` module) provides a simple publish/subscribe pattern:

- Objects emit named events.
- Other objects listen for those events and react.

Many core Node.js APIs (streams, HTTP servers, child processes, file watchers) are built on EventEmitter. Event-driven code helps Node.js remain scalable and responsive.

---

## Importing and creating an instance

```javascript
const EventEmitter = require('events');

const emitter = new EventEmitter();
```

Now `emitter` can emit events and register listeners.

## Listening to events

Use `on()` to register a listener that runs every time the event is emitted:

```javascript
emitter.on('greet', () => {
  console.log('Hello Rahul!');
});

emitter.emit('greet');
// Output:
// Hello Rahul!
```

## Emitting events

Trigger an event with `emit()`:

```javascript
emitter.emit('login');
```

Example with a listener:

```javascript
emitter.on('login', () => {
  console.log('User Logged In');
});

emitter.emit('login');
// Output:
// User Logged In
```

## Passing arguments

Events can carry data as additional arguments to `emit()`:

```javascript
emitter.on('userCreated', (name, age) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
});

emitter.emit('userCreated', 'Rahul', 28);
// Output:
// Name: Rahul
// Age: 28
```

## Multiple listeners

An event can have multiple listeners; they run in registration order:

```javascript
emitter.on('purchase', () => console.log('Inventory Updated'));
emitter.on('purchase', () => console.log('Email Sent'));
emitter.on('purchase', () => console.log('Invoice Generated'));

emitter.emit('purchase');
// Output:
// Inventory Updated
// Email Sent
// Invoice Generated
```

## `once()` — one-time listeners

Use `once()` to register a listener that runs only the first time the event is emitted:

```javascript
emitter.once('welcome', () => console.log('Welcome User'));

emitter.emit('welcome'); // Welcome User
emitter.emit('welcome'); // (no output)
```

## Removing listeners

Use `removeListener()` or `off()` to remove a specific listener:

```javascript
function greet() { console.log('Hello'); }

emitter.on('greet', greet);
emitter.removeListener('greet', greet);
// or modern: emitter.off('greet', greet);

emitter.emit('greet'); // no output
```

Remove all listeners for an event with:

```javascript
emitter.removeAllListeners('greet');
// or remove all events:
emitter.removeAllListeners();
```

## Counting listeners and event names

```javascript
emitter.on('test', () => {});
emitter.on('test', () => {});

console.log(emitter.listenerCount('test')); // 2
console.log(emitter.eventNames()); // e.g. [ 'test' ]
```

## Error handling

EventEmitter treats `'error'` as a special event. If an `error` is emitted without a listener, Node.js will throw and the process may terminate.

```javascript
emitter.on('error', (err) => {
  console.log('Error Occurred:', err.message);
});

emitter.emit('error', new Error('Something went wrong'));
// Output: Error Occurred: Something went wrong
```

## Extending EventEmitter

You can subclass `EventEmitter` to build objects that emit events:

```javascript
const EventEmitter = require('events');

class User extends EventEmitter {
  login() {
    console.log('User Logged In');
    this.emit('loggedIn');
  }
}

const user = new User();
user.on('loggedIn', () => console.log('Welcome Dashboard'));
user.login();
// Output:
// User Logged In
// Welcome Dashboard
```

## Real-world example: Order system

```javascript
const emitter = new EventEmitter();

emitter.on('orderPlaced', (orderId) => console.log(`Order ${orderId} received`));
emitter.on('orderPlaced', (orderId) => console.log(`Payment processing for ${orderId}`));
emitter.on('orderPlaced', (orderId) => console.log(`Email sent for ${orderId}`));

emitter.emit('orderPlaced', 'ORD101');
// Output:
// Order ORD101 received
// Payment processing for ORD101
// Email sent for ORD101
```

## Synchronous vs asynchronous listeners

Listeners run synchronously in registration order. If you need async work, use async functions inside the listener:

```javascript
emitter.on('task', async () => {
  await new Promise((r) => setTimeout(r, 1000));
  console.log('Task Completed');
});

emitter.emit('task');
```

## Common methods

| Method | Description |
|--------|-------------|
| `on()` | Register an event listener |
| `once()` | Register a one-time listener |
| `emit()` | Trigger an event |
| `off()` / `removeListener()` | Remove a listener |
| `removeAllListeners()` | Remove all listeners |
| `listenerCount()` | Count listeners for an event |
| `eventNames()` | Get currently registered event names |

## Why EventEmitter matters

- Powers many Node.js core modules (streams, HTTP, processes).
- Enables decoupled, event-driven architecture.
- Useful for real-time and modular applications.

## Quick interview questions

1. What is EventEmitter?
   - A class used to create, emit, and listen for named events.
2. Which module provides it?
   - `const EventEmitter = require('events');`
3. Difference between `on()` and `once()`?
   - `on()` runs on every emit; `once()` runs only the first time.
4. What happens if an `error` event has no listener?
   - Node.js throws and may terminate the process.

## Summary

`EventEmitter` is the foundation of event-driven patterns in Node.js. Use `on()`/`emit()` for communication between components, handle the `error` event, and prefer `once()` for one-off handlers.

---

### Real Example

Scenario 1: E-Commerce Order System

Imagine a customer places an order.

Without EventEmitter:
```javascript
placeOrder(order) {
    saveOrder(order);
    sendEmail(order);
    updateInventory(order);
    createInvoice(order);
    notifyWarehouse(order);
}
```

This creates tight coupling because placeOrder() must know every action.

With EventEmitter:
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('orderPlaced', sendEmail);
emitter.on('orderPlaced', updateInventory);
emitter.on('orderPlaced', createInvoice);
emitter.on('orderPlaced', notifyWarehouse);

function placeOrder(order) {
    saveOrder(order);

    emitter.emit('orderPlaced', order);
}
```

Flow
Customer Places Order
          │
          ▼
     orderPlaced
          │
    ┌─────┼─────┬─────────┐
    ▼     ▼     ▼         ▼
 Email Inventory Invoice Warehouse

Now adding a new feature becomes easy:

emitter.on('orderPlaced', sendSMS);

No changes needed in placeOrder().
