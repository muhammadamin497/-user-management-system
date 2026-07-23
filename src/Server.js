const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./Config/db")
const userRoutes = require("./Routes/user_routes");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();


app.use("/api/users", userRoutes);

app.listen( 3000,() => {
  console.log('http://localhost:3000/api/users');
  
});