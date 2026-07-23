
const express = require("express");

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("User Get Details");
})


router.get("/:id", (req,res)=>{
    res.send("User Get Details By Id");
})


router.post("/postUser", (req,res)=>{
    res.send("User Post Details");
})

module.exports = router;