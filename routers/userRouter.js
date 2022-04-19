const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

router
    .route("/users")
    .post(UserController.CheckUser);

router
    .route("/add")
    .post(UserController.addUser);

module.exports = router;