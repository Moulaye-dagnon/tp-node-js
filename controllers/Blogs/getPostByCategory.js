const Blogs = require("../../Blog.json");

const getPostByCategory = (req, res) => {
  const categoryName = req.params.categoryName;

  const posts = Blogs.filter((blog) => blog.category == categoryName);
  res.status(200).json(posts);
};
module.exports = getPostByCategory;
