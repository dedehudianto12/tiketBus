"use strict"

const mongoose = require("mongoose")


const pendingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    busId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Bus"
    },
    bangku : {
        type : Number,
        required : [true, "Nomor bangku is required"],

    }
})


const Pending = mongoose.model("Pending", pendingSchema)

module.exports = Pending
