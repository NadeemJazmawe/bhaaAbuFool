const express = require("express");
const router = express.Router()
const reqController = require('../controller/reqController');
const UserController = require("../controller/userController");

router
    .route("/getrequirements")
    .get(UserController.checkCookies, reqController.Requirement)

router
    .route("/sendrequirements")
    .get(UserController.checkCookies, reqController.SendRequirement)

router
    .route("/add")
    .post(UserController.checkCookies, reqController.AddRequirement)

router
    .route("/delete/:id")
    .delete(reqController.DeleteRequirement)

router
    .route("/update/:id")
    .post(reqController.UpdateRequirement)

    

module.exports = router;