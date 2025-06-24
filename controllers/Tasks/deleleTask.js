const tasks = require("../../tasks.json");

const DeleteTask = (req, res) => {
  const id = req.params.id;

  let task = tasks.find((task) => task.id == id);
  tasks.splice(tasks.indexOf(task), 1);

  return res.status(200).json(tasks);
};

module.exports = DeleteTask;
