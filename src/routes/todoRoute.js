const express = require("express");
const create = require("../controllers/todo/create");
const get = require("../controllers/todo/get");
const getAll = require("../controllers/todo/getAll");
const remove = require("../controllers/todo/remove");
const update = require("../controllers/todo/update");
const router = express.Router();

router.post('/create', create);
router.get('/getAll', getAll);
router.get('/get/:todoId', get);
router.post('/update/:todoId', update);
router.post('/remove/:todoId', remove);

module.exports = router;