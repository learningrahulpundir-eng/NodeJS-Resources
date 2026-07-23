# Middleware Concepts in Express.js

## Introduction

Middleware is one of the most powerful features of Express.js. It allows you to execute code between receiving a request and sending a response.

Middleware can:
- Execute code
- Modify the request (`req`) object
- Modify the response (`res`) object
- End the request-response cycle
- Pass control to the next middleware

---

# What is Middleware?

A middleware is simply a function that has access to:

- `req` (Request)
- `res` (Response)
- `next` (Next Middleware)

Syntax:

```javascript
function middleware(req, res, next) {
    // Your code
    next();
}
```

---

# How Middleware Works

```
Client Request
      │
      ▼
Middleware 1
      │
      ▼
Middleware 2
      │
      ▼
Route Handler
      │
      ▼
Client Response
```

Each middleware decides whether to:
- Continue using `next()`
- Send a response
- End the request

---

# Creating Your First Middleware

```javascript
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Middleware Executed");
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3000);
```

Output in console:

```
Middleware Executed
```

---

# Understanding next()

```javascript
app.use((req, res, next) => {
    console.log("First Middleware");
    next();
});
```

`next()` passes control to the next middleware or route handler.

Without `next()`, the request will never reach the next function.

---

# Multiple Middleware Example

```javascript
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello Express");
});
```

Console Output:

```
Middleware 1
Middleware 2
```

---

# Middleware That Ends the Request

```javascript
app.use((req, res) => {
    res.send("Request Finished");
});
```

Since no `next()` is called, the route handler will never execute.

---

# Types of Middleware

- Application-Level Middleware
- Router-Level Middleware
- Built-in Middleware
- Error Handling Middleware
- Third-Party Middleware

These will be covered in upcoming videos.

---

# Real-World Examples

Middleware is commonly used for:

- Authentication
- Authorization
- Logging
- Validation
- Request Timing
- Error Handling
- Parsing JSON
- Serving Static Files

---

# Request Lifecycle

```
Client
  │
  ▼
Request
  │
  ▼
Middleware
  │
  ▼
Route
  │
  ▼
Response
```

---

# Best Practices

- Always call `next()` unless sending a response.
- Keep middleware focused on a single responsibility.
- Reuse middleware where possible.
- Avoid heavy computations inside middleware.

---

# Common Beginner Mistakes

- Forgetting to call `next()`
- Calling `next()` after `res.send()`
- Writing too much logic in one middleware
- Modifying `req` or `res` unnecessarily

---

# Interview Questions

1. What is middleware in Express.js?
2. Why is `next()` important?
3. What happens if `next()` is not called?
4. Can middleware modify the request object?
5. Name different types of middleware.

---

# Summary

- Middleware executes before route handlers.
- It can modify requests and responses.
- `next()` passes control to the next middleware.
- Middleware is essential for authentication, logging, validation, and many other tasks.
