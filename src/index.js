const express = require("express");

const app = express();

app.use(express.json());

 app.get("/",(req,res)=>{
    res.send(" wellcome to user ")
 })

module.exports = app;