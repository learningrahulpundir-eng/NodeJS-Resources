// What is middleware?
// It is very powerful feature of express JS. 
// It can execute the code between receiving a request and sending the response.

// What it can do?
// It can execute the code
// It can modify the req object
// It can modify the res object
// It can end the req res flow
// It can pass control to next middleware

// What is the middleware in Node JS
// It is the function which takes 3 params like req, res, and next.
// It call the next middleware

// function demoMiddleware(req, res, next){
//     console.log("Middleware executed");
//     next();
// }

// First middleware in node JS

const express = require("express");

const app = express();

// Create your middleware

app.use((req, res, next)=>{
    console.log("Middleware code execuation 1");
    next();
})


app.use((req, res, next)=>{
    console.log("Middleware code execuation 2");
    next();
})

app.get("/home", (req, res)=>{
    console.log("home page is running");
    res.send("Hello Express server");
})

app.listen(3000, ()=>{
    console.log("express server is running on the port 3000");
})

// Application Flow

// Client Request - > Middleware -> Route Handler -> Response

// What are the real scenarios where middleware used
// Authentication
// Authorization
// Logging
// Error handling and much more...

