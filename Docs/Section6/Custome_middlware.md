# What is Custom Middleware?

A **Custom Middleware** is a function written by the developer that executes **between the client's request and the server's response**.

It can:

- Execute any code
- Read or modify request (`req`)
- Read or modify response (`res`)
- End the request-response cycle
- Pass control to the next middleware using `next()`

### Syntax

```javascript
function middlewareName(req, res, next) {
    // Your code

    next();
}
```

Or using Arrow Function

```javascript
const middlewareName = (req, res, next) => {
    // Your code

    next();
};
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
Middleware 3
      │
      ▼
Route Handler
      │
      ▼
Response
```

Every middleware decides whether to

- Continue (`next()`)
- Stop the request (`res.send()`)
- Throw an error

---

# Creating Your First Custom Middleware

```javascript
const express = require("express");

const app = express();

const logger = (req, res, next) => {
    console.log("Request Received");
    next();
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(3000);
```

Output

```
Request Received
```

Browser

```
Welcome
```

---

# Understanding next()

The **next()** function tells Express:

> "I have finished my work. Please execute the next middleware."

Without calling `next()`, the request will never reach the route handler.

Example

```javascript
const logger = (req, res, next) => {
    console.log("Middleware executed");

    next();
};
```

---

# What Happens if next() is Missing?

```javascript
const logger = (req, res, next) => {
    console.log("Middleware executed");
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home");
});
```

Browser Result

```
Loading...
```

The request hangs forever because Express doesn't know what to do next.

---

# Example 1: Logger Middleware

Every company logs requests.

Let's create our own logger.

```javascript
const logger = (req, res, next) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date());

    next();

};
```

Output

```
Method: GET
URL: /
Time: Tue Jul 21 ...
```

---

# Example 2: Authentication Middleware

Imagine an API that requires a token.

```
GET /profile
```

Middleware

```javascript
const auth = (req, res, next) => {

    const token = req.headers.authorization;

    if(token === "12345"){
        next();
    }else{
        res.status(401).send("Unauthorized");
    }

};
```

Using Middleware

```javascript
app.get("/profile", auth, (req, res) => {
    res.send("Welcome Rahul");
});
```

Request

```
Authorization: 12345
```

Response

```
Welcome Rahul
```

Without token

```
Unauthorized
```

---

# Example 3: Request Counter

Let's count how many requests users make.

```javascript
let count = 0;

const requestCounter = (req, res, next) => {

    count++;

    console.log("Total Requests:", count);

    next();

};

app.use(requestCounter);
```

Console

```
Total Requests: 1
Total Requests: 2
Total Requests: 3
```

---

# Example 4: Maintenance Mode

Suppose your website is under maintenance.

```javascript
const maintenance = (req, res, next) => {

    const isMaintenance = true;

    if(isMaintenance){
        return res.send("Website is under maintenance");
    }

    next();

};
```

Output

```
Website is under maintenance
```

---

# Global Middleware

Runs for every request.

```javascript
app.use(logger);
```

Example

```
/
```

```
/about
```

```
/contact
```

Logger executes for all routes.

---

# Route-Level Middleware

Runs only for a specific route.

```javascript
app.get("/admin", auth, (req, res) => {
    res.send("Admin Dashboard");
});
```

Only

```
/admin
```

uses authentication.

---

# Multiple Middleware

You can chain middleware.

```javascript
const middleware1 = (req, res, next) => {

    console.log("Middleware 1");

    next();

};

const middleware2 = (req, res, next) => {

    console.log("Middleware 2");

    next();

};

app.get("/", middleware1, middleware2, (req, res) => {

    res.send("Home");

});
```

Console

```
Middleware 1

Middleware 2
```

Browser

```
Home
```

---

# Real-World Example

Imagine entering a company office.

```
Gate Security
        ↓
Reception
        ↓
ID Verification
        ↓
Manager Approval
        ↓
Meeting Room
```

Express Middleware works exactly like this.

```
Request
      ↓
Logger
      ↓
Authentication
      ↓
Validation
      ↓
Controller
      ↓
Response
```

Each middleware has one responsibility.

---

# Modifying Request Object

Middleware can add new properties.

```javascript
const addUser = (req, res, next) => {

    req.user = {
        name: "Rahul",
        role: "Admin"
    };

    next();

};
```

Route

```javascript
app.get("/", addUser, (req, res) => {

    res.send(req.user);

});
```

Output

```json
{
    "name":"Rahul",
    "role":"Admin"
}
```

---

# Middleware Order Matters

Example

```javascript
app.use(logger);

app.use(auth);

app.get("/", (req, res)=>{
    res.send("Home");
});
```

Execution Order

```
logger

↓

auth

↓

Route Handler
```

If authentication fails,

```
Route Handler
```

will never execute.

---

# Best Practices

✅ Keep middleware small

✅ One middleware = One responsibility

✅ Always call `next()` unless sending a response

✅ Avoid heavy computations

✅ Reuse middleware across routes

✅ Place global middleware before routes

---

# Common Interview Questions

### Q1. What is custom middleware?

A function written by developers to execute code before the request reaches the route handler.

---

### Q2. What are the parameters of middleware?

```
req

res

next
```

---

### Q3. Why is next() important?

It tells Express to execute the next middleware or route handler.

---

### Q4. Difference between Global and Route Middleware?

Global Middleware

- Runs for every request

Route Middleware

- Runs only for specified routes

---

### Q5. Can middleware modify request data?

Yes.

Example

```javascript
req.user = {
    name: "Rahul"
};
```

---

# Summary

Today we learned:

- What is Custom Middleware
- How middleware works
- Creating custom middleware
- next() function
- Global middleware
- Route middleware
- Multiple middleware
- Logger example
- Authentication example
- Request counter
- Maintenance mode
- Middleware execution order
- Real-world examples
- Best practices

---

# Practice Assignment

Create the following middleware:

### Task 1

Create a middleware that logs:

- HTTP Method
- URL
- Current Time

---

### Task 2

Create an authentication middleware using a token.

---

### Task 3

Create middleware that counts total requests.

---

### Task 4

Create middleware that adds:

```javascript
req.user = {
    id: 1,
    name: "Rahul"
};
```

and display it in the response.

---

# Next Video

In the next video, we'll learn **Third-Party Middleware in Express.js**, including popular middleware like:

- `morgan`
- `cors`
- `helmet`
- `compression`
- `cookie-parser`

We'll explore when and why to use each middleware with practical examples.