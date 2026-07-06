# EventEmitter in Node.js

## What is EventEmitter?

The **EventEmitter** class is one of the most important concepts in Node.js. It allows objects to communicate with each other using **events**.

Think of it as a publisher-subscriber system:

- An object emits an event.
- Other objects listen for that event.
- When the event occurs, all listeners are executed.

Many core Node.js modules are built on top of EventEmitter, including:

- Streams
- HTTP Server
- File System Watchers
- Process Object

Event-driven programming is one of the reasons Node.js is highly scalable and efficient.

---

## Importing EventEmitter

The EventEmitter class is available in the built-in `events` module.

```javascript
const EventEmitter = require('events');