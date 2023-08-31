"use strict"

const Bus = require("../models/bus")
const Bangku = require("../models/bangku")

class BusController{
    static create(req, res, next){
        const busObj = {
            nomor : req.body.nomor,
            tujuan : req.body.tujuan,
            wktBrgkt : req.body.wktBrgkt,
            wktTiba : req.body.wktTiba,
            jumlahBgku : req.body.jumlahBgku,
            harga : req.body.harga
        }

        Bus.create(busObj)
            .then((bus)=>{
                const arrBangku = []
                const jumlahBangku = req.body.jumlahBgku
                for (let i = 0; i < jumlahBangku; i++){
                    let temp = {
                        nomor : i+1,
                        busId : bus.id
                    }
                    arrBangku.push(temp)
                }
                return Bangku.insertMany(arrBangku)
                    .then((bangku) => {
                        return { bus, bangku }; // Mengembalikan bus dan bangku dalam objek
                    });
            })
            .then(({bus, bangku})=>{
                res.status(200).json({
                    tatus : "Success",
                    message : "Succesfully add a bus",
                    payload : {bus, bangku}
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
                res.status(200).json({
                    status : "Success",
                    message : "Succesfully find a bus",
                    payload : bus
                })
            })
            .catch(next)
    }

    static findBangkuByBusId(req, res, next){
        Bangku.find({busId: req.bus})
            .then((bangku)=>{
                console.log(bangku)
                res.status(200).json({
                    status : "Success",
                    message : "Success find bangku",
                    payload : bangku
                })
            })
            .catch(next)
    }
}

module.exports = BusController