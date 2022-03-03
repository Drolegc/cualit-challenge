'use strict';

require("dotenv").config();
require("./config/database");
const userConfig = require("./api/user/config")
const tutorialConfig = require("./api/tutorial/config")
const express = require("express");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>INDEX</h1>")
})

userConfig.init(app)
tutorialConfig.init(app)

app.use("*", (req, res) => {
    res.status(404).json({
        success: "false",
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});



module.exports = app;