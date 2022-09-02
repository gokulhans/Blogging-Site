const express = require("express");
const requiredlogin = require("../authentication");
const router = express.Router();
const usersController = require("../controllers/users-controller");


router.get('/profile', requiredlogin,usersController.getUserProfile);


// router.get("/", usersController.getAllUsers);
// router.get('/add', usersController.getUserAddform);
// router.post("/add", usersController.addUser);
// router.get('/edit/:id', usersController.getUserEditform);
// router.put("/edit", usersController.editUser);
// router.get('/:id', usersController.getUserById);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
