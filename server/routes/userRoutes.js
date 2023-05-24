"use strict"

const express = require('express')
const router = express.Router()
const UserController = require("../controllers/userController")

router.post("/register", UserController.create)



module.exports = router