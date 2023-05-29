"use strict"

const User = require("../models/user")
// const {} = require("../helpers/bcrypt")
const {generateToken} = require("../helpers/token")

class UserController{
    static create(req, res, next){
        const userObj = {
            username : req.body.username,
            password : req.body.password,
            jenisKelamin :req.body.jenisKelamin.toLowerCase(),
            ttl : req.body.ttl,
            nama : req.body.nama,
            email : req.body.email
        }

        User.create(userObj)
            .then((user)=>{
                let token = generateToken(user)
                console.log(token)
                res.status(201).json({
                    status: 'Success',
                    message: 'Success Register User',
                    payload: token
                })
            })
            .catch(err=>{
                next(err)
            })
    }

    static login(req, res, next){

    }
}


module.exports = UserController