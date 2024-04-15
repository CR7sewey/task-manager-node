const getTasks = (req, res) => {
  try {
    // const tasks = BD.findAll();
    return res
      .status(200)
      .json({ tasks: [{ completed: false, taskID: 1, name: "Mike" }] });
  } catch (e) {
    return res.status(404).json({
      success: false,
      msg: "Some error in the server. Please reload the page!",
    });
  }
};

module.exports = getTasks;
