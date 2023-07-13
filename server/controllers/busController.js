"use strict"

const Bus = require("../models/bus")

class BusController{
    static create(req, res, next){

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

        Bus.create(busObj)
            .then((data)=>{
                res.status(200).json({
                    status : "Success",
                    message : "Sucess adding Bus",
                    payload : data
                })
            })
            .catch(next)
    }

    static find(req, res, next){
        Bus.find()
            .then((bus)=>{
                res.status(200).json({
                    status : "Success",
                    message : "Succesfully get all buses",
                    payload : bus
                })
            })
            .catch(next)
    }

    static findByPk(req, res, next){
        Bus.findById(req.params.id)
            .then((bus)=>{
                console.log(bus.bangku)
                res.status(200).json({
                    status : "Success",
                    message : "Succesfully find a bus",
                    payload : bus
                })
            })
            .catch(next)
    }
}

module.exports = BusController