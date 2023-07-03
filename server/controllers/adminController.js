"use strict"

const Admin = require("../models/admin")
const Bus = require("../models/bus")
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
        Pending.findByIdAndUpdate(req.pending, {status : true}, {new : true})
            .then((pending)=>{
                if(!pending){
                    next({
                        status : 404,
                        message : "Pending not found"
                    })
                }else{
                    return Bus.findById(pending.busId)
                }
            })
            .then((bus)=>{
                if(!bus){
                    next({
                        status : 404,
                        message : "Bus not found"
                    })
                }else{
                    let oldBangku = bus.bangku
                    let newBangku = {
                        nomor: req.pending.bangku,
                        user: req.pending.userId
                    }
                    oldBangku[req.pending.bangku+1] = newBangku
                    return Bus.findByIdAndUpdate(bus._id, {bangku: oldBangku}, {new : true})
                }
            })
            .then((newBus)=>{
                if(!newBus){
                    next({
                        status : 404,
                        message : "Bus not found"
                    })
                }else{
                    res.status(200).json({
                        status : "Success",
                        message : "Succesfully update pending and bus",
                        payload : newBus
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
                message : "Succesfully find a bus",
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
                message : "Succesfully find a bus",
                payload : bus
            })
        })
        .catch(next)
    }
}

module.exports = AdminController