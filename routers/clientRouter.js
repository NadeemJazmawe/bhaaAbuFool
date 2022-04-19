const express = require("express");
const router = express.Router();
const ClientController = require("../controller/clientController");

router
    .route("/clients")
    .get(ClientController.Clients);


router
    .route("/addclient")
    .post(ClientController.AddClient);


module.exports = router;

