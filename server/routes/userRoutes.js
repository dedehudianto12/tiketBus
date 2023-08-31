"use strict"

const express = require('express')
const router = express.Router()
const UserController = require("../controllers/userController")
const {authenticateUser} = require("../middlewares/auth")

router.post("/register", UserController.create)
router.post("/login", UserController.login)

router.use(authenticateUser)

router.delete("/:id", UserController.deletePending)

module.exports = router