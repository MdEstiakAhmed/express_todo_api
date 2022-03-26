const express = require("express");
const { signupController } = require("../controllers/authController");
const router = express.Router();

router.get('/signup', signupController);

module.exports = router;