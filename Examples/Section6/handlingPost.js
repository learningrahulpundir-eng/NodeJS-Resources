// Download Postman
// https://www.postman.com/downloads/

// Post Method
// It is used to send some data from the client to server..
// On server side, you can take this take into the req.body


// Diff between Get and Post
// Get- It is used to reterive the data, you can send parameter using url, you can also bookmarks this Get Request
// Post - It is used to send data, you can send parameter using body, You can not bookmarks.

// Some real example of post
// Registration
// Login..
// Order
// Payment etc...


const express = require("express");


const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Welcome to Get API using Postman");
})


app.post("/users", (req, res)=>{
    const body = req.body;
    console.log(body);

    //Perform database operations
    
    res.send({
        "status": 200,
        "message": "User created successfully"});

});

app.listen("3000",  ()=>{
    console.log("server is running on 3000 port");
})