const express = require("express");
const login = require("../controllers/auth/login");
const signup = require("../controllers/auth/signup");
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;