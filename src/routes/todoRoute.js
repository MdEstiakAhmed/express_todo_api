const express = require("express");
const create = require("../controllers/todo/create");
const get = require("../controllers/todo/get");
const getAll = require("../controllers/todo/getAll");
const remove = require("../controllers/todo/remove");
const update = require("../controllers/todo/update");
const router = express.Router();
const tokenChecker = require('../middleware/tokenVerifier');

router.post('/create', tokenChecker, create);
router.get('/getAll', tokenChecker, getAll);
router.get('/get/:todoId', tokenChecker, get);
router.post('/update/:todoId', tokenChecker, update);
router.post('/remove/:todoId', tokenChecker, remove);

module.exports = router;