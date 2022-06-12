const express = require("express");
const router = express.Router()
const reqController = require('../controller/reqController');
const UserController = require("../controller/userController");

router
    .route("/requirements")
    .get(UserController.checkCookies, reqController.Requirement)


router
    .route("/add")
    .post(UserController.checkCookies, reqController.AddRequirement)

router
    .route("/delete/:id")
    .delete(reqController.DeleteRequirement)


module.exports = router;