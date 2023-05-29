"use strict"

const Bus = require("../models/bus")

class BusController{
    static create(req, res, next){

        const arrBangku = []
        for (let i = 0; i < req.body.jumlahBgku+1; i++){
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
            bangku : arrBangku
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
}

module.exports = BusController