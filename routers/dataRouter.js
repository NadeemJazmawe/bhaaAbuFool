const express = require("express");
const router = express.Router()
const dataController = require('../controller/dataController');
const UserController = require("../controller/userController");


router
    .route("/getdata")
    .post(UserController.checkCookies, dataController.GetData)

router
    .route("/updatedata")
    .post(UserController.checkCookies, dataController.UpdateData)

router
    .route("/vatMaterial/:id")
    .post(UserController.checkCookies, dataController.UpdatevatMaterial)

router
    .route("/hourlyReport/:id")
    .post(UserController.checkCookies, dataController.UpdatehourlyReport)

router
    .route("/vat/:id")
    .post(UserController.checkCookies, dataController.Updatevat)

router
    .route("/taxAdvances/:id")
    .post(UserController.checkCookies, dataController.UpdatetaxAdvances)

router
    .route("/socialSecurity/:id")
    .post(UserController.checkCookies, dataController.UpdatesocialSecurity)

router
    .route("/employeeDeductions/:id")
    .post(UserController.checkCookies, dataController.UpdateemployeeDeductions)

router
    .route("/employeesSocialSecurity/:id")
    .post(UserController.checkCookies, dataController.UpdateemployeesSocialSecurity)

router
    .route("/PaymentStatus/:id")
    .post(UserController.checkCookies, dataController.UpdatePaymentStatus)

router
    .route("/expensesCollection/:id")
    .post(UserController.checkCookies, dataController.UpdateexpensesCollection)

module.exports = router;