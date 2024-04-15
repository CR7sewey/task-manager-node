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

module.exports = { getTasks, createTask };
