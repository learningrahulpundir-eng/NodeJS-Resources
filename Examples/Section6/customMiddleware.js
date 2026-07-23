// Logging Middlware
// Authorization Middleware
// Request Count Middleware
// Mantaince website Middleware

const express = require("express");

const app = express();

let count =0;

// Method -1
// app.use((req, res, next)=>{
//     console.log(req.url);
//     console.log(req.method);
//     console.log("Logging middleware");
//     next();
// })

//Method -2
const loggingMiddlware =(req, res, next)=>{
    console.log(req.url);
    console.log(req.method);
    console.log("Logging middleware");
    next();
}

app.use(loggingMiddlware);

// Route based middleware

const auth = (req, res, next) =>{
    console.log("Auth middleware");
    if(req.headers.Authorization === "Admin"){
        next();
    }
    res.send("You are not authorized for this");
    
}

const countRequest = (req, res, next) =>{
    console.log("Auth middleware");
    count++;
    console.log(count);
    next();
    
}

app.use(countRequest);

app.get("/home", (req, res)=>{
    console.log("Home page route");
    res.send("Hello express server");
})

app.get("/admin",auth, (req, res)=>{
    console.log("Home page route");
    res.send("Hello express server");
})



// Routing based middleware

app.listen(3000, ()=>{
    console.log("server is running on the 3000 port");
})