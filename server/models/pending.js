"use strict"

const mongoose = require("mongoose")


const pendingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : [true, "userId is required"],
    },
    busId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bus",
        required : [true, "busId is required"],
    },
    bangkuId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bangku",
        required : [true, "Nomor bangku is required"],
    },
    status : {
        type : Boolean,
        required : [true, "status is required"]
    }
})


const Pending = mongoose.model("Pending", pendingSchema)

module.exports = Pending
