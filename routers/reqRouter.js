const express = require("express");
const router = express.Router()
const reqController = require('../controller/reqController');


router
    .route("/requirements")
    .get(reqController.Requirement)


router
    .route("/add")
    .post(reqController.AddRequirement)

router
    .route("/delete/:id")
    .delete(reqController.DeleteRequirement)


module.exports = router;