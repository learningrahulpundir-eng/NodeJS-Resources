# Handling POST Requests in Express.js

## Learning Objectives

By the end of this chapter, you will understand:

- What is a POST request?
- Difference between GET and POST requests
- Why we use POST requests
- Handling POST requests in Express.js
- Understanding `req.body`
- Using `express.json()` middleware
- Sending JSON responses
- Testing POST requests using Postman

---

# What is a POST Request?

A **POST** request is an HTTP method used to **send data from the client to the server**.

The data sent by the client is stored inside the **request body**.

POST requests are generally used when we want to:

- Register a new user
- Login a user
- Create a new product
- Add a new employee
- Create a blog post
- Submit a contact form

Unlike GET requests, POST requests send data securely inside the request body instead of the URL.

---

# GET vs POST

| GET | POST |
|------|------|
| Retrieves data | Sends data |
| Data is sent in the URL | Data is sent in the request body |
| Used for fetching resources | Used for creating resources |
| Can be bookmarked | Cannot be bookmarked |
| Usually doesn't change data | Usually modifies server data |

---

# Example

Suppose a user fills out a registration form.

**Client sends:**

```json
{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "password": "123456"
}
```

The server receives this data and stores it in a database.

---

# Creating a Simple Express Server

Install Express:

```bash
npm install express
```

Create `app.js`

```javascript
const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

---

# Why Do We Need express.json()?

When a client sends JSON data, Express **cannot read it automatically**.

To parse JSON data, we use the built-in middleware:

```javascript
app.use(express.json());
```

This middleware converts the incoming JSON data into a JavaScript object and stores it inside `req.body`.

---

# Example Without express.json()

```javascript
const express = require("express");

const app = express();

app.post("/users", (req, res) => {

    console.log(req.body);

    res.send("User Created");

});

app.listen(3000);
```

If you send JSON data using Postman:

```json
{
    "name": "Rahul"
}
```

Console Output:

```javascript
undefined
```

Why?

Because Express doesn't know how to parse JSON.

---

# Example With express.json()

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {

    console.log(req.body);

    res.send("User Created Successfully");

});

app.listen(3000, () => {
    console.log("Server Running...");
});
```

---

# Sending a POST Request

Open **Postman**.

Choose:

```
POST
```

URL

```
http://localhost:3000/users
```

Select

```
Body
```

↓

```
raw
```

↓

```
JSON
```

Now send

```json
{
    "name": "Rahul",
    "age": 28,
    "city": "Delhi"
}
```

---

# Console Output

```javascript
{
    name: 'Rahul',
    age: 28,
    city: 'Delhi'
}
```

Notice that the JSON request body has been converted into a JavaScript object.

---

# Understanding req.body

`req.body` contains the data sent by the client.

Example:

```javascript
app.post("/users", (req, res) => {

    console.log(req.body);

});
```

If the client sends:

```json
{
    "name":"Rahul",
    "age":28
}
```

Then

```javascript
req.body
```

becomes

```javascript
{
    name: "Rahul",
    age: 28
}
```

---

# Accessing Individual Properties

```javascript
app.post("/users", (req, res) => {

    console.log(req.body.name);

    console.log(req.body.age);

    res.send("Success");

});
```

Output

```
Rahul

28
```

---

# Returning JSON Response

Instead of sending plain text, APIs usually return JSON.

```javascript
app.post("/users", (req, res) => {

    const user = req.body;

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: user
    });

});
```

---

# Response

```json
{
    "success": true,
    "message": "User Created Successfully",
    "data": {
        "name": "Rahul",
        "age": 28,
        "city": "Delhi"
    }
}
```

---

# Understanding res.status()

We can send appropriate HTTP status codes.

Example

```javascript
res.status(201).json({
    message: "User Created Successfully"
});
```

**201** means:

```
Created Successfully
```

Some common status codes:

| Status Code | Meaning |
|-------------|----------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Practical Example

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.post("/students", (req, res) => {

    const student = req.body;

    res.status(201).json({
        success: true,
        message: "Student Added Successfully",
        student
    });

});

app.listen(3000, () => {
    console.log("Server Running...");
});
```

---

## Request

```http
POST /students
```

Body

```json
{
    "name": "Amit",
    "course": "Node.js",
    "age": 24
}
```

---

## Response

```json
{
    "success": true,
    "message": "Student Added Successfully",
    "student": {
        "name": "Amit",
        "course": "Node.js",
        "age": 24
    }
}
```

---

# Best Practices

- Always use `express.json()` before routes that accept JSON data.
- Validate user input before processing it.
- Return meaningful HTTP status codes.
- Return responses in JSON format for APIs.
- Keep request handlers simple and readable.

---

# Summary

In this chapter, you learned:

- What is a POST request
- Difference between GET and POST
- Why POST requests are used
- How to create a POST route in Express
- Why `express.json()` is important
- How to access request data using `req.body`
- How to send JSON responses using `res.json()`
- How to use HTTP status codes like `201 Created`
- How to test POST requests using Postman

In the next chapter, we'll learn how to organize routes using **Express Router**.