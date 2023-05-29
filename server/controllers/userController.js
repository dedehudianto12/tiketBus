"use strict"

const User = require("../models/user")
const {checkPassword} = require("../helpers/bcrypt")
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
        const checkNull = []
        for(let i in req.body){
            if(!req.body[i]){
                checkNull.push(`${i} is required`)
            }
        }

        if (checkNull.length>0){
            next({
                status : 404,
                message : `${checkNull.join(",")}`
            })
        }

        User.findOne({email: req.body.email})
            .then((data)=>{
                if(!data){
                    next({
                        status : 404,
                        message : 'Wrong email/password'
                    })
                }else{
                    if(!checkPassword(req.body.password, data.password)){
                        next({
                            status : 404,
                            message : "Wrong email/password"
                        })
                    }else{
                        res.status(200).json({
                            status : 200,
                            message : "Success Login User",
                            payload : generateToken(data)
                        })
                    }
                }
            })
            
    }
}


module.exports = UserController