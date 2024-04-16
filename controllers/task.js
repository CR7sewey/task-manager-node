//let dataI = [];
const Task = require("../models/Task");
const { factoryMyError } = require("../errors/errors");
const asyncFunctions = require("../middlewares/async");

const getTasks = asyncFunctions(async (req, res) => {
  const dataI = await Task.find({});
  return res.status(200).json({ tasks: dataI });
});

const createTask = asyncFunctions(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(factoryMyError("You need to introduce a name!", 404));
  }
  const new_task = await Task.create(req.body);
  return res.status(201).json({ new_task });
});

const getTaskId = asyncFunctions(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task_by_id = await Task.findOne({ _id: taskID });
  //const obj = dataI.find((values) => values._id === Number(id));
  console.log("asniuasudiia --------------");
  if (!task_by_id) {
    console.log(
      "------------------------------------------ asniuasudiia --------------"
    );

    return next(
      factoryMyError(`It doesnt exist any task with id=${taskID}`, 404)
    );
  }
  return res.status(200).json({ task: task_by_id });
});

const updateTask = asyncFunctions(async (req, res, next) => {
  const { id } = req.params;
  //const { name, completed } = req.body;
  const task_by_id = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  //const obj = dataI.find((values) => values._id === Number(id));
  if (!task_by_id) {
    return next(factoryMyError(`It doesnt exist any task with id=${id}`, 404));
  }
  return res.json({ task: task_by_id });
});

const deleteTask = asyncFunctions(async (req, res, next) => {
  const { id } = req.params;
  //const obj = dataI.find((values) => values._id === Number(id));
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return next(factoryMyError(`It doesnt exist any task with id=${id}`, 404));
  }
  return res.status(200).json({ task, success: true });
});

module.exports = { getTasks, createTask, deleteTask, getTaskId, updateTask };
