"use stirct"

const express = require('express')
const router = express.Router()

const BusController = require("../controllers/busController")
const {authenticateUser, authorizeBus} = require("../middlewares/auth")


router.use(authenticateUser)
router.get("/", BusController.find)

router.use("/:id", authorizeBus)
router.get("/:id", BusController.findByPk)

module.exports = router


