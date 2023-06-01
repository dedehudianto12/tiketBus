"use strict"

const { default: mongoose } = require("mongoose")

const busSchema = new mongoose.Schema({
    nomor : {
        type : String,
        required : [true, "Password is required"],
        minlength : [4, "Minimum character is 6"],
        validate: {
            validator: function (value) {
                return Bus.findOne({ nomor: value })
                    .then((bus) => {
                        if (bus) {
                            return false
                        } else {
                            return true
                        }
                    })
            },
            message: 'Bus already exist'
        },
    },
    tujuan : {
        type : String,
        required : [true, "Tujuan is required"],
        minlength : [2, "Minimum character is 6"]
    },
    wktBrgkt : {
        type : Date,
        required : [true, "Waktu keberangkatan is required"],
    },
    wktTiba : {
        type : Date,
        required : [true, "Waktu tiba is required"],
    },
    jumlahBgku : {
        type : Number,
        required : [true, "Jumlah bangku is required"],
    },
    bangku : [{
        nomor : String,
        user : String
    }],
    harga : {
        type : Number,
        required : [true, "Harga is required"]
    }
})

const Bus = mongoose.model("Bus", busSchema)

module.exports = Bus