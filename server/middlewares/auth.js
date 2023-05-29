"use strict"

const Admin = require("../models/admin")
const User = require("../models/user")
const {checkToken} = require("../helpers/token")

function authenticateAdmin(req, res, next){
    const admin = checkToken(req.headers.token)
    Admin.findById(admin.id)
        .then((admin)=>{
            if(!admin){
                next({
                    status : 404,
                    message : "User not found"
                })
            }else{
                next()
            }
        })
        .catch(next)
}

function authenticateUser(req, res, next){
    const user = checkToken(req.headers.token)
    User.findById(user.id)
        .then((user)=>{
            if(!user){
                next({
                    ststus : 404,
                    message : "User not found"
                })
            }else{
                next()
            }
        })
        .catch(next)
}

module.exports = {
    authenticateAdmin
}