# Routing Without Frameworks in Node.js

## Introduction

In the previous lessons, we created an HTTP server and learned about the
**Request (`req`)** and **Response (`res`)** objects.

Currently, every URL returns the same response. In real-world
applications, different URLs should return different content. This is
where **routing** comes into the picture.

------------------------------------------------------------------------

# What is Routing?

**Routing** is the process of deciding which response should be sent
based on the URL requested by the client.

Example:

    /           -> Home Page
    /about      -> About Page
    /contact    -> Contact Page

Every URL is mapped to a different piece of code.

------------------------------------------------------------------------

# How Routing Works

    Browser
       │
    GET /about
       │
    Node.js Server
       │
    Check req.url
       │
    Match Route
       │
    Send Response

------------------------------------------------------------------------

# Creating Your First Route

``` javascript
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    }
});

server.listen(3000);
```

------------------------------------------------------------------------

# Creating Multiple Routes

``` javascript
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");

    } else if (req.url === "/about") {
        res.end("About Page");

    } else if (req.url === "/contact") {
        res.end("Contact Page");
    }

});

server.listen(3000);
```

Test the routes:

    http://localhost:3000/
    http://localhost:3000/about
    http://localhost:3000/contact

------------------------------------------------------------------------

# Returning HTML

``` javascript
if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Home Page</h1>");
}
```

The browser renders the HTML because the `Content-Type` header is set to
`text/html`.

------------------------------------------------------------------------

# Handling Unknown Routes (404)

``` javascript
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.end("Home");

    } else if (req.url === "/about") {

        res.end("About");

    } else {

        res.statusCode = 404;
        res.end("404 Page Not Found");

    }

});

server.listen(3000);
```

------------------------------------------------------------------------

# Complete Example

``` javascript
const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {

        res.end("<h1>🏠 Home Page</h1>");

    } else if (req.url === "/about") {

        res.end("<h1>📘 About Page</h1>");

    } else if (req.url === "/contact") {

        res.end("<h1>📞 Contact Page</h1>");

    } else {

        res.statusCode = 404;
        res.end("<h1>404 - Page Not Found</h1>");

    }

});

server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});
```

------------------------------------------------------------------------

# Real-World Example

    /               -> Home
    /products       -> Product List
    /products/101   -> Product Details
    /cart           -> Shopping Cart
    /checkout       -> Checkout

------------------------------------------------------------------------

# Limitations of Manual Routing

As applications grow, managing routes with long `if...else` blocks
becomes difficult.

Problems:

-   Hard to read
-   Hard to maintain
-   Difficult to debug
-   Not scalable

Frameworks like **Express.js** solve these problems with a cleaner
routing system.

------------------------------------------------------------------------

# Best Practices

-   Always return **404** for unknown routes.
-   Set the correct **Content-Type**.
-   Keep route names meaningful.
-   Avoid deeply nested `if...else` statements.
-   Separate routing logic as the application grows.

------------------------------------------------------------------------

# Interview Questions

1.  What is routing in Node.js?
2.  Which property is commonly used for routing?
3.  Why should we return a 404 status code?
4.  Why is manual routing not suitable for large applications?
5.  Which framework is commonly used for routing in Node.js?

------------------------------------------------------------------------

# Summary

-   Routing maps URLs to specific handlers.
-   `req.url` is commonly used to identify the requested path.
-   Different URLs can return different responses.
-   Unknown routes should return a **404** response.
-   Manual routing is useful for learning, but frameworks like
    Express.js are preferred for large applications.
