const Blogs = require("../../Blog.json");

const getPostByYearAndMonth = (req, res) => {
  const { year, month } = req.params;
  const posts = Blogs.filter(
    (blog) => blog.years == year && blog.month == month
  );
  res.status(200).json(posts);
};
module.exports = getPostByYearAndMonth;
