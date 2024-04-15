const express = require("express");

const {
  getTasks,
  createTask,
  deleteTask,
  getTaskId,
  updateTask,
} = require("../controllers/task");
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.get("/:id", getTaskId);
router.patch("/:id", updateTask);

module.exports = router;
