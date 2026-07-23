// What is Routing..

// Routing helps to web server to identify the responded method (response) based on the URL send by the client.

// http://localhost:3000/
// http://localhost:3000/aboutus
// http://localhost:3000/contacts

// Routing in express js
// Routing consist 3 things 
// 1. Http Methods (get)
// 2. URL (/home)
// 3. Callback (req, res)

// app.get("/home", (req,res)=> res.send("Home Page"));

// How many Http methods we have

// GET - Reterive the details
// POST - Create the details
// Delete - Delete the details
// PUT - Update the details
// PATCH - Partially update the details


// Let's understand how you can use all these methods with express server

var express = require("express");

const app = express();

// Get method
app.get("/", (req, res)=> res.send("Users Details"));

// Post method
app.post("/users", (req, res)=>res.send("Create Users"));

// Delete method
app.delete("/users:id", (req, res)=>res.send("Deleted user id ="+ req.params.id));

//Put method
app.put("/users:id", (req, res)=>res.send("Particaluar User details has been updated"));

// Patch
app.post("/users:name", (req, res)=>res.send("Create Users"));

app.listen(3000, ()=>{
    console.log("express server is running on the port 3000");
})