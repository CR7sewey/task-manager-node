const express = require("express");

const getTasks = require("../controllers/task");
const router = express.Router();

router.get("/", getTasks);

module.exports = router;
