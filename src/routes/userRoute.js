const express = require("express");
const get = require("../controllers/user/get");
const update = require("../controllers/user/update");
const router = express.Router();
const tokenChecker = require('../middleware/tokenVerifier');

router.post('/update/:username', tokenChecker, update);
router.get('/get/:username', tokenChecker, get);

module.exports = router;