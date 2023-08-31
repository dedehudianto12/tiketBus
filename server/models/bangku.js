"use strict"

const mongoose = require("mongoose")

const bangkuSchema = new mongoose.Schema({
    nomor: {
        type : Number,
        required : [true, "Nomor bangku is required"],
    },
    busId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bus",
        required : [true, "busId is required"],
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
})

const Bangku = mongoose.model("Bangku", bangkuSchema)

module.exports = Bangku