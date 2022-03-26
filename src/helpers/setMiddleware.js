const expressRateLimit = require("express-rate-limit");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const middleware = [
    expressRateLimit({ windowMs: 15 * 60 * 1000, max: 100 }),
    helmet(),
    expressMongoSanitize(),
    xssClean(),
    hpp(),
    cors()
];

module.exports = app => {
    middleware.forEach(m => {
        app.use(m);
    });
}