const router = require("express").Router();

const getAllTasks = require("../controllers/Tasks/getAlltasks");
const getOneTask = require("../controllers/Tasks/getOneTask");
const addTask = require("../controllers/Tasks/addTask");
const UpdateTask = require("../controllers/Tasks/updateTask");
const DeleteTask = require("../controllers/Tasks/deleleTask");
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getOneTask);
router.post("/task", addTask);
router.put("/tasks/:id", UpdateTask);
router.delete("/tasks/:id", DeleteTask);
module.exports = router;
