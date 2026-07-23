const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./Config/db")
const PORT = process.env.PORT;

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen( PORT,() => {
  console.log('http://localhost:5000');
});