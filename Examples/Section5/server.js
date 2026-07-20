// What is HTTP
// HTTP stands for Hyper Text Transfer Protocols.
// It communicate between client and sever.
// Whenever you open  a browser...
// an api call can go
// download something

// Client Service Arch

// Client -----Send Request --------- Server
// Client -----Receive Response --------- Server

// Client (Browser, Mobile, Desktop, Laptop)  - All the sources from where Http Request comes


// What is web server
// it is simple program which receive the Http Request and send response back to the client


// What is http module in Node JS
// It is in-built module in Node JS. 
// Not required to install any package to use this module

// Create First Web Server in Node JS

var http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.httpVersion, req.headers)
    res.setHeader("content-type", "text/html")
    res.statusCode = 200;
    res.end("<h1>Hello Web Server</h1>");
})

// req and res are two object in node js which contains below
// req
// Header Info
// Query String Info
// URL 
// METHODS 

// res
// Text
// Json
// HTML
// FILE


server.listen(3000, ()=>{
   console.log("server is running on the 3000 Port")
})


