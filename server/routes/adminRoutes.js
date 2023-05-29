"use stirct"

const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/adminController')

router.post("/register", AdminController.create)
router.post("/login", AdminController.login)

module.exports = router


