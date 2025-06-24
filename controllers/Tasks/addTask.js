const tasks = require("../../tasks.json");

const addTask = (req, res) => {
  const { task, desc } = req.body;
  const id = tasks.length + 1;
  const newTask = {
    id,
    task,
    desc,
  };
  tasks.push(newTask);
  return res.status(201).json(tasks);
};

module.exports = addTask;
