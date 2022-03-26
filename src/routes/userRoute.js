const express = require("express");
const get = require("../controllers/user/get");
const update = require("../controllers/user/update");
const router = express.Router();

router.post('/update/:userId', update);
router.get('/get/:userId', get);

module.exports = router;