const express = require("express");
const router = express.Router();
const listemContoller = require("../controller/listemController");
const UserController = require("../controller/userController");

router
    .route("/")
    .get(UserController.checkCookies, listemContoller.Listem);


router
    .route("/")
    .post(UserController.checkCookies, listemContoller.AddListem);

router
    .route("/:id")
    .delete(UserController.checkCookies, listemContoller.DeleteListem);


module.exports = router;
