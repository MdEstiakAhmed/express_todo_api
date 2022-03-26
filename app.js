const express = require('express');
require("dotenv").config();
const setRoute = require('./src/helpers/setRoute');
const setMiddleware = require('./src/helpers/setMiddleware');
const app = new express();

// middleware setup
setMiddleware(app);

// route setup
setRoute(app);

module.exports = app;