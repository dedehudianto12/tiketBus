"use stirct"

const express = require('express')
const router = express.Router()

const BusController = require("../controllers/busController")
const UserController = require("../controllers/userController")
const {authenticateUser, authorizeBus} = require("../middlewares/auth")

router.use(authenticateUser)
router.get("/", BusController.find)

router.use("/:id", authorizeBus)
router.get("/:id", BusController.findByPk)
router.post("/:id", UserController.addPending)
router.get("/:id/bangku", BusController.findBangkuByBusId)

module.exports = router


