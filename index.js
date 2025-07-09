const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");
const compression = require("compression");
const tasks = require("./tasks.json");
const Blogs = require("./Blog.json");
const tasksRoute = require("./routes/tasks");
const blogRoute = require("./routes/blogs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const logStream = fs.createWriteStream("./log/access.log", { flags: "a" });
morgan.token("json", (req, res) => {
  return JSON.stringify({
    methode: req.method,
    url: req.url,
    date: new Date().toISOString(),
    IP: req.ip,
  });
});

app.use(cors());
app.use(morgan(":json", { stream: logStream }));
app.use(compression());
app.use("", tasksRoute);
app.use("", blogRoute);

app.listen(3000, () => {
  console.log("run sur le port 3000");
});

module.exports = app;
