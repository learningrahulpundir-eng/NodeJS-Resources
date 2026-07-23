
const express = require("express");

const router = express.Router();

router.get("/getOrder", (req,res)=>{
    res.send("User Details");
})


router.get("/getOrder/:id", (req,res)=>{
    res.send("User Details");
})


router.post("/Orders", (req,res)=>{
    res.send("User Details");
})

module.exports = router;