const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const authRoutes = require("./routes/authRoutes");
const userRoutes = require ("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mernstore")
.then(()=> console.log("MongoDb Connected"))
.catch(err => console.log(err));

app.get("/",(req,resp)=>{
    resp.send("Api running")
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(5000,()=>{
    console.log("Server Running on Port 5000")
});