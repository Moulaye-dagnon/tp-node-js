const tasks = require("../../tasks.json");

const getAllTasks = (req, res) => {
  return res.status(200).json(tasks);
};
module.exports = getAllTasks;
