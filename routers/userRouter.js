const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router
    .route("/users")
    .get(userController.Users);


router
    .route("/adduser")
    .post(userController.AddUser);


router
    .route("/listem")
    .get(userController.Listem);


router
    .route("/listem")
    .post(userController.AddListem);

router
    .route("/listem/:id")
    .delete(userController.DeleteListem);


module.exports = router;

