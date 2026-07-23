// Types of Middleware 
// 1. Application level middleware (Logging)
// 2. Route Level middleware (Authorization)
// 3. Error handling middleware
// 4. Built-in middleware
// 5. Third Party middleware


// Error handling middleware

const express = require("express");

const app = express();

app.use(express.json())

app.get("/home", (req, res)=>{
    res.send("Welcome to the express server");
});

app.get("/error", ()=>{
    throw new Error("Something went wrong");
})

app.get("/user/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);
    if(id=="null"){
        throw Error("User id not found");
    }
    res.send("User details");
})



const errorMiddleware = (error,req, res, next)=>{
    res.send({
        status: "500",
        message: error.message
    })
}
// error middleware
app.use(errorMiddleware);

// app.use((error,req, res, next)=>{
//     res.send({
//         status: "500",
//         message: error.message
//     })
// })

app.listen(3000, ()=>{
    console.log("express server is running on port 3000");
})


// For Built-in Middleware
// JSON,Staic, Formdata

// Whenever any client send the request into the JSON format, 
// Node does not understand directly this JSON, So to reslove 
// this issue, Node js use the JSON middleware..


