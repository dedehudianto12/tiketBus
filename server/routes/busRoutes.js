"use stirct"

const express = require('express')
const router = express.Router()

const BusController = require("../controllers/busController")
const {authenticateAdmin} = require("../middlewares/auth")


router.use(authenticateAdmin)
router.post("/", BusController.create)

module.exports = router


