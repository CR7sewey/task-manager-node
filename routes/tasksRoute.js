const express = require("express");

const { getTasks, createTask, deleteTask } = require("../controllers/task");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

module.exports = router;
