# Express Router in Express.js

## Learning Objectives

By the end of this chapter, you will understand:

- What is Express Router?
- Why do we need Express Router?
- Benefits of using Router
- Creating a Router
- Registering Router in Express
- Creating multiple routes
- Project structure
- Best practices

---

# What is Express Router?

As your Express application grows, placing all routes inside a single `app.js` file becomes difficult to manage.

To solve this problem, Express provides **Router**, which allows us to organize related routes into separate files.

Think of **Express Router** as a **mini Express application** that handles a specific group of routes.

---

# Why Do We Need Express Router?

Imagine you are building an E-commerce application.

It has routes for:

- Users
- Products
- Orders
- Categories
- Payments

If all these routes are written inside one file, your project quickly becomes difficult to read and maintain.

Instead, we create separate route files.

Example:

```
routes/
│
├── userRoutes.js
├── productRoutes.js
├── orderRoutes.js
└── categoryRoutes.js
```

Each file contains only the routes related to that resource.

This makes the project much cleaner and easier to maintain.

---

# Without Express Router

Everything is inside one file.

```javascript
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
    res.send("Get All Users");
});

app.post("/users", (req, res) => {
    res.send("Create User");
});

app.put("/users/:id", (req, res) => {
    res.send("Update User");
});

app.delete("/users/:id", (req, res) => {
    res.send("Delete User");
});

app.listen(3000);
```

For small applications this is acceptable.

For large applications, it becomes difficult to manage.

---

# Using Express Router

Instead of putting everything inside `app.js`, we move user-related routes into a separate file.

Project Structure

```
project
│
├── app.js
│
├── routes
│      └── userRoutes.js
│
└── package.json
```

---

# Step 1: Create Router File

Create a folder named

```
routes
```

Inside it create

```
userRoutes.js
```

---

# Step 2: Import Express

```javascript
const express = require("express");
```

---

# Step 3: Create Router Object

```javascript
const router = express.Router();
```

Here,

`express.Router()` creates a new router object that can handle routes independently.

---

# Step 4: Add Routes

```javascript
router.get("/", (req, res) => {
    res.send("Get All Users");
});

router.post("/", (req, res) => {
    res.send("Create User");
});
```

Notice that we use

```javascript
router.get()
```

instead of

```javascript
app.get()
```

because we're defining routes on the router object.

---

# Step 5: Export Router

```javascript
module.exports = router;
```

Complete `userRoutes.js`

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get All Users");
});

router.post("/", (req, res) => {
    res.send("Create User");
});

module.exports = router;
```

---

# Step 6: Import Router in app.js

```javascript
const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");
```

---

# Step 7: Register the Router

```javascript
app.use("/users", userRoutes);
```

This tells Express:

> "Whenever a request starts with `/users`, forward it to `userRoutes.js`."

---

# Complete app.js

```javascript
const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server Running...");
});
```

---

# How Routing Works

Client Request

```
GET /users
```

↓

Express checks

```javascript
app.use("/users", userRoutes);
```

↓

Request is forwarded to

```
userRoutes.js
```

↓

This route executes

```javascript
router.get("/", (req, res) => {
    res.send("Get All Users");
});
```

↓

Response

```
Get All Users
```

---

# Why "/" Works

Inside the router, we define:

```javascript
router.get("/", ...)
```

When mounted with:

```javascript
app.use("/users", userRoutes);
```

Express combines both paths.

```
/users + /
```

Final URL becomes:

```
/users
```

Similarly,

```javascript
router.get("/profile", ...)
```

becomes

```
/users/profile
```

---

# Adding Multiple Routes

```javascript
router.get("/", (req, res) => {
    res.send("Get All Users");
});

router.get("/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

router.post("/", (req, res) => {
    res.send("Create User");
});

router.put("/:id", (req, res) => {
    res.send(`Update User ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
    res.send(`Delete User ${req.params.id}`);
});
```

---

# Testing Routes

## GET

```
GET /users
```

Response

```
Get All Users
```

---

## GET by ID

```
GET /users/10
```

Response

```
User ID: 10
```

---

## POST

```
POST /users
```

Response

```
Create User
```

---

## PUT

```
PUT /users/10
```

Response

```
Update User 10
```

---

## DELETE

```
DELETE /users/10
```

Response

```
Delete User 10
```

---

# Creating Another Router

Suppose we also have product routes.

Project Structure

```
project
│
├── app.js
│
├── routes
│      ├── userRoutes.js
│      └── productRoutes.js
```

Example:

```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("All Products");
});

module.exports = router;
```

Register it:

```javascript
const productRoutes = require("./routes/productRoutes");

app.use("/products", productRoutes);
```

Now,

```
GET /products
```

returns

```
All Products
```

---

# Advantages of Express Router

- Keeps routes modular
- Improves code readability
- Easier to maintain
- Easier to debug
- Better project organization
- Makes large applications scalable
- Routes can be reused across different modules

---

# Best Practices

- Create separate router files for each resource.
- Keep route files focused on routing only.
- Move business logic to controllers.
- Use meaningful route names.
- Organize routes inside a `routes` folder.
- Use `app.use()` to mount routers with a base path.

---

# Summary

In this chapter, you learned:

- What is Express Router
- Why Express Router is important
- How to create a router using `express.Router()`
- How to define routes with `router.get()`, `router.post()`, `router.put()`, and `router.delete()`
- How to export and import routers
- How to mount routers using `app.use()`
- How Express combines the base path with router paths
- Benefits and best practices of organizing routes using Express Router

In the next chapter, we'll explore **Route Parameters (`req.params`)**, which allow us to capture dynamic values from URLs such as user IDs, product IDs, and more.