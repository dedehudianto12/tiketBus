"use strict"

const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const busRoutes = require("./busRoutes")
const adminRoutes = require("./adminRoutes")

router.use('/users', userRoutes)
router.use("/admins", adminRoutes)
router.use("/bus", busRoutes)

module.exports = router