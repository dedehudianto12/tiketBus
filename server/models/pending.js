"use strict"

const mongoose = require("mongoose")


const pendingSchema = new mongoose.Schema({
    
})



const Pending = mongoose.model("Pending", pendingSchema)

module.exports = Pending
