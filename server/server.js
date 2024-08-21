const express = require("express");
const app = express();
const connectDB = require('./dbConnection')
const cors = require("cors");
const path = require("path");

const __dirName = path.resolve();
console.log(__dirName);

app.use(cors());
//Middleware for parsing Json
app.use(express.json());
//Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", require("./routes"));

app.use(express.static(path.join(__dirName, "/client/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirName, "client", "dist", "index.html"));
})

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});