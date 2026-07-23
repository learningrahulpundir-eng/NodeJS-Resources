const express = require("express");

const app = express();

const userRouter = require("./usersRoute");

const orderRouter = require("./orderRoutes");

app.use(express.json());

app.get("/", userRouter);
app.get("/:id", userRouter);
app.post("/postUser", userRouter);


app.listen(3000, ()=>{
    console.log("server is running on 3000 port");
})