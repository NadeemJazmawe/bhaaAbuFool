const express = require("express");
const router = express.Router();
const listemContoller = require("../controller/listemController");

router
    .route("/")
    .get(listemContoller.Listem);


router
    .route("/")
    .post(listemContoller.AddListem);

router
    .route("/:id")
    .delete(listemContoller.DeleteListem);


module.exports = router;
