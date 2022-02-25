'use strict';

require("dotenv").config();
require("./config/database");
const userConfig = require("./api/user/config")
const express = require("express");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>INDEX</h1>")
})

userConfig.init(app)


module.exports = app;