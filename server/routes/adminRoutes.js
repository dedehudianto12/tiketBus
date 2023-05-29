"use stirct"

const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/adminController')
const BusController = require("../controllers/busController")
const {authenticateAdmin} = require("../middlewares/auth")

router.post("/register", AdminController.create)
router.post("/login", AdminController.login)

router.use(authenticateAdmin)

router.post("/createBus", BusController.create)

module.exports = router


