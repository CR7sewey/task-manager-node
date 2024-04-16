let dataI = [];
const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    // const tasks = BD.findAll();
    const dataI = await Task.find({});
    return res.status(200).json({ tasks: dataI });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new Error("Not valid");
    }
    //dataI = [...dataI, { completed: false, _id: dataI.length + 1, name }];
    const new_task = await Task.create(req.body);
    return res.json({ new_task });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const getTaskId = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task_by_id = await Task.findById({ _id: taskID });
    //const obj = dataI.find((values) => values._id === Number(id));
    if (!task_by_id) {
      throw new Error(`The provided id=${id} doenst exist!`);
    }

    return res.json({ task: task_by_id });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, completed } = req.body;
    const task_by_id = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    //const obj = dataI.find((values) => values._id === Number(id));
    if (!task_by_id) {
      throw new Error(`The provided id=${id} doenst exist!`);
    }

    /*dataI = dataI.map((values) => {
      if (values._id === Number(id)) {
        values.name = name;
        values.completed = completed;
      }
      return values;
    });*/
    //const new_obj = { completed: completed, _id: Number(id), name: name };
    return res.json({ task: task_by_id });
  } catch (e) {
    console.log("aquiaaa");
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    //const obj = dataI.find((values) => values._id === Number(id));
    const obj = await Task.deleteOne({ _id: id });
    if (!obj) {
      throw new Error(`The provided id=${id} doesnt exist!`);
    }

    /*dataI = dataI.filter((values) => {
      if (values._id !== Number(id)) {
        return values;
      }
    });*/
    return res.json({ obj });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

module.exports = { getTasks, createTask, deleteTask, getTaskId, updateTask };
