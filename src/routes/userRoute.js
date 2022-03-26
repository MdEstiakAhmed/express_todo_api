const express = require("express");
const update = require("../controllers/user/update");
const router = express.Router();

router.post('/update/:userId', update);

module.exports = router;