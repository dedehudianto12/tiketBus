"use strict"

const bcrypt = require("bcrypt")

function generatePassword(pass){
    const salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(pass, salt)
}

function checkPassword(pass, hash){
    return bcrypt.compareSync(pass, hash)
}

module.exports ={
    generatePassword, checkPassword
}