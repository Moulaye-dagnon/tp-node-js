const tasks = require("../../tasks.json");

const getOneTask = (req, res) => {
  const id = req.params.id;
  const task = tasks.find((task) => task.id == id);
  return res.status(200).json(task);
};

module.exports = getOneTask;
