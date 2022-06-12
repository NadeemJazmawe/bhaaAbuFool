const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

router
    .route("/login")
    .post(UserController.Login);

router
    .route("/add")
    .post(UserController.addUser);

router
    .route("/checkConnection")
    .get(UserController.checkCookies, UserController.checkConnection);

module.exports = router;