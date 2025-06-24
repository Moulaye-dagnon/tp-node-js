const express = require("express");
const path = require("path");
const app = express();
const tasks = require("./tasks.json");
const Blogs = require("./Blog.json");
const tasksRoute = require("./routes/tasks");
const blogRoute = require("./routes/blogs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("", tasksRoute);
app.use("", blogRoute);



app.listen(3000, () => {
  console.log("run sur le port 3000");
});

module.exports = app;
