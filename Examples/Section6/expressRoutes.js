// Express Router

const express = require('express');

const app = express();

// Entity: User (All the action relted to the entity, get, post, put, delete, patch)
app.get("/getUsers", (req, res)=>{
    res.send("Welcome to get request");
})


// Entity: Order
app.get("/getOrders", (req, res)=>{
    res.send("Welcome to get request");
})

// Entity: Payment
app.get("/makePayment", (req, res)=>{
    res.send("Welcome to get request");
})

app.listen(3000, ()=>{
    console.log("express server is running on the port 3000");
})
