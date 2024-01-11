// Required Dependencies
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require('cors');
require("dotenv").config();

//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use("/", routes);

module.exports = app;
