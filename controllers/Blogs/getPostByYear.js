const Blogs = require("../../Blog.json");

const getPostByYear = (req, res) => {
  const year = req.params.year;

  const posts = Blogs.filter((blog) => blog.years == year);
  res.status(200).json(posts);
};

module.exports = getPostByYear;
