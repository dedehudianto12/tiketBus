"use strict"

const mongoose = require("mongoose")
const { generatePassword } = require("../helpers/bcrypt")

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email format is invalid'],
        validate: {
            validator: function (value) {
                return Admin.findOne({ email: value })
                    .then((user) => {
                        if (user) {
                            return false
                        } else {
                            return true
                        }
                    })
            },
            message: 'Email already used'
        },
        required: [true, 'Email is required']
    },password : {
        type : String,
        required : [true, "Password is required"],
        minlength : [6, "Minimum character is 6"]
    }
})

adminSchema.pre("save", function(){
    const currentPasswoed = this.get("password")
    const hashPassword = generatePassword(currentPasswoed)
    this.set({password: hashPassword})
})

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin
