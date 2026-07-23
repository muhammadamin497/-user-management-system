const express = require("express");
const dotenv = require("dotenv");
const connectDB=require("./Config/db")
const userRoutes = require("./routes/userRoutes");
const PORT = process.env.PORT;
app.use(express.json());

const app = express();
dotenv.config();
connectDB();


app.use("/api/users", userRoutes);

app.listen( PORT,() => {
  console.log('http://localhost:5000');
});