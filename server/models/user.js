"use strict"

const mongoose = require("mongoose")
const { generatePassword } = require("../helpers/bcrypt")

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : [true, "username is required"],
        validate : {
            validator: function(value){
                return userSchema.findOne({username : value})
                    .then((user)=>{
                        if(user){
                            return false
                        }else{
                            return true
                        }
                    })
            },
            message : "Username already used"
        }
    }, password : {
        type : String,
        required : [true, "Password is required"],
        minlength : [6, "Minimum character is 6"]
    }, jenisKelamin : {
        type : String,
        required : [true, "Jenis Kelamin is required"],
        validate : {
            validator : function(value){
                if (value != "perempulan" || "laki-laki"){
                    return false
                }else{
                    return true
                }
            }, message : "Jenis Kelamin harus sesuai"
        }
    }, ttl : {
        type : String,
        required : [true, "Tempat tanggal lahir is required"]
    }, nama : {
        type : String,
        required : [true, "Nama is required"],
        minlength : [6, "Minimum character is 6"]
    }
})

userSchema.pre("save", function(){
    const currentPasswoed = this.get("password")
    const hashPassword = generatePassword(currentPasswoed)
    this.set({password: hashPassword})
})

const User = mongoose.model("User", userSchema)