"use strict"

const Admin = require("../models/admin")
const Pending = require("../models/pending")
const {checkPassword} = require("../helpers/bcrypt")
const {generateToken} = require("../helpers/token")

class AdminController{
    static create(req, res, next){
        const adminObj = {
            email : req.body.email,
            password : req.body.password
        }

        Admin.create(adminObj)
            .then((admin)=>{
                let token = generateToken(admin)
                res.status(201).json({
                    status: 'Success',
                    message: 'Success Register admin',
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

        Admin.findOne({email: req.body.email})
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
                        console.log(generateToken(data))
                        res.status(200).json({
                            status : 200,
                            message : "Success Login Admin",
                            payload : generateToken(data)
                        })
                    }
                }
            })
            
    }

    static findPending(req, res, next){
        Pending.find()
            .then((pending)=>{
                res.status(200).json({
                    status : "Success",
                    message : "Succesfully get all pending",
                    payload : pending
                })
            })
            .catch(next)
    }

    static updatePending(req, res, next){
        
    }
}

module.exports = AdminController