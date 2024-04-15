let dataI = [{ completed: false, _id: 1, name: "Mike" }];

const getTasks = (req, res) => {
  try {
    // const tasks = BD.findAll();
    return res.status(200).json({ tasks: dataI });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const createTask = (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new Error("Not valid");
    }
    dataI = [...dataI, { completed: false, _id: dataI.length + 1, name }];
    return res.json({ name });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    const obj = dataI.find((values) => values._id === Number(id));
    if (!obj) {
      throw new Error(`The provided id=${id} doenst exist!`);
    }

    dataI = dataI.filter((values) => {
      if (values._id !== Number(id)) {
        return values;
      }
    });
    return res.json({ dataI });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

module.exports = { getTasks, createTask, deleteTask };
