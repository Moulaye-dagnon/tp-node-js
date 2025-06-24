const router = require("express").Router();
const getPostByYear = require("../controllers/Blogs/getPostByYear");
const getPostByYearAndMonth = require("../controllers/Blogs/getPostByYearAndMonth");
const getPostByCategory = require("../controllers/Blogs/getPostByCategory");
router.get("/posts/:year", getPostByYear);
router.get("/posts/:year/:month", getPostByYearAndMonth);
router.get("/categories/:categoryName/posts", getPostByCategory);
module.exports = router;
