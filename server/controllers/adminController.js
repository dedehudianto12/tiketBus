"use strict"

const Admin = require("../models/admin")
const Bus = require("../models/bus")
const Pending = require("../models/pending")
const Bangku = require("../models/bangku")
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
        Pending.findByIdAndUpdate(req.pending, {status : true}, {new : true})
            .then((pending)=>{
                if(!pending){
                    next({
                        status : 404,
                        message : "Pending not found"
                    })
                }else{
                    return Bangku.findByIdAndUpdate(pending.bangkuId, {userId: pending.userId}, {new: true})
                }
            })
            .then((bangku)=>{
                if(!bangku){
                    next({
                        status : 404,
                        message : "Bus not found"
                    })
                }else{
                    res.status(200).json({
                        status : "Success",
                        message : "Success Update Pending and Bangku"
                    })
                }
            })
            .catch(next)
    }
    static delete(req, res, next){
        Bus.findByIdAndDelete(req.params.id)
        .then((bus)=>{
            res.status(200).json({
                status : "Success",
                message : "Succesfully delete a bus",
                payload : bus
            })
        })
        .catch(next)
    }

    static update(req, res, next){
        const arrBangku = []
        const jumlahBangku = req.body.jumlahBgku
        for (let i = 0; i < jumlahBangku; i++){
            let temp = {
                nomor : i+1,
                user : "none"
            }
            arrBangku.push(temp)
        }
        const busObj = {
            nomor : req.body.nomor,
            tujuan : req.body.tujuan,
            wktBrgkt : req.body.wktBrgkt,
            wktTiba : req.body.wktTiba,
            jumlahBgku : req.body.jumlahBgku,
            bangku : arrBangku,
            harga : req.body.harga
        }
        Bus.findByIdAndUpdate(req.params.id, busObj, {new : true})
        .then((bus)=>{
            res.status(200).json({
                status : "Success",
                message : "Succesfully update a bus",
                payload : bus
            })
        })
        .catch(next)
    }

    static deletePending(req, res, next){
        Pending.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.status(200).json({
                    status : 200,
                    message : "Delete Pending Success",
                })
            })
            .catch(err=>{
                next(err)
            })
    }
}

module.exports = AdminController