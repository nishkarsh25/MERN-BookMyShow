const express = require("express");
const app = express();
const connectDB = require('./dbConnection')
const Ticket = require('./schema');
const cors = require("cors");

app.use(cors());
//Middleware for parsing Json
app.use(express.json());
//Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }))

