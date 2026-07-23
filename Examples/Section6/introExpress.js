// What is express js 
// it is most  popular web framework build in node js
// it is fast and lightweighted
// It is used for web service  and Rest API
// It simplify Routing and request handling...

// Why express js


// Http way for hanlding the routing....
// var http = require("http");

// const server = http.createServer((req, res)=>{
//     if(req.url === "/"){
//         res.end("Home Page")
//     }
//     else if(req.url === "/aboutus"){
//         res.end("About us")
//     }
//     else{
//         res.end("Not found")
//     }
// });

// server.listen(3000, ()=>{
//     console.log("server is running on port 3000");
// })

// install express server
// npm install express

// Create web server using express

var express = require("express");

var server = express();

server.get("/", (req, res) =>{
    res.send("Hello Express Server");
})

server.listen(3000, ()=>{
    console.log("express server is running on 3000 port");
})