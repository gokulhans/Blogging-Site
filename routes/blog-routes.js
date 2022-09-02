
const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogs-controller");
const requiredlogin = require("../authentication");


router.get("/", blogsController.getAllBlogs);
router.get('/add',requiredlogin, blogsController.getBlogAddform);
router.post("/add", blogsController.addBlog);
router.get('/edit/:id', blogsController.getBlogEditform);
router.post("/edit", blogsController.editBlog);
router.get('/:id', blogsController.getBlogById);
router.get("/delete/:id", blogsController.deleteBlog);

module.exports = router;