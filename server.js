const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.get("/about",(req,res)=>{
    res.send("ABout Me")
})

app.get("*",(req,res)=>{
    res.send("Page Not Found")
})

app.listen(3000)