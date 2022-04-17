const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router
    .route("/users")
    .get(userController.Users);


router
    .route("/adduser")
    .post(userController.AddUser);




module.exports = router;

