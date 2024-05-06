const express = require("express");

const userController = require("../controller/users.js");

const router = express.Router();

// create
router.post("/", userController.createNewUser);

// read
router.get("/", userController.getAllUser);

// path - update data
router.patch("/:id", userController.updateUser);

// delete - update data
router.delete("/:id", userController.deleteUser);

module.exports = router;
