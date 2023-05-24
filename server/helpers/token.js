"use strict"

const token = require("jsonwebtoken")

function generateToken(user){
    return token.sign({id: user._id}, process.env.JWT_SECRET)
}

function checkToken(userToken){
    return token.verify(userToken, process.env.JWT_SECRET )
}

module.exports ={
    generateToken,
    checkToken
}