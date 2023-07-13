"use strict"

const Admin = require("../models/admin")
const User = require("../models/user")
const Bus = require("../models/bus")
const Pending = require("../models/pending")
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
    if(!user){
        next({
            status : 404,
            message : "You need to login/register"
        })
    }
    User.findById(user.id)
        .then((user)=>{
            if(!user){
                next({
                    status : 404,
                    message : "User not found"
                })
            }else{
                req.user = user
                next()
            }
        })
        .catch(next)
}

function authorizeBus(req, res, next){
    Bus.findById(req.params.id)
        .then((bus)=>{
            if(!bus){
                next({
                    status : 404,
                    message : "Bus not found"
                })
            }else{
                req.bus = bus
                next()
            }
        })
}

function authorizePending(req, res, next){
    Pending.findById(req.params.id)
        .then((pending)=>{
            if(!pending){
                next({
                    status : 404,
                    message : "Pending not found"
                })
            }else{
                req.pending = pending
                next()
            }
        })
}

module.exports = {
    authenticateAdmin,
    authenticateUser,
    authorizeBus,
    authorizePending
}