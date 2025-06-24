const tasks = require("../../tasks.json");

const UpdateTask = (req, res) => {
  const id = req.params.id;

  let task = tasks.find((task) => task.id == id);

  task.desc = req.body.desc;
  task.task = req.body.task;
  return res.status(200).json(task);
};

module.exports = UpdateTask;
