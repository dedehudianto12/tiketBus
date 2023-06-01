"use strict"

function errorHandler(err, req, res, next){
    if (err.name === 'ValidationError'){
        const indexErr = err.message.indexOf(":")
        const nextErr = err.message.slice(indexErr+1).split(",")
        const packErr = []
        nextErr.forEach(el => {
            let newEl = el.split(":")
            packErr.push(newEl[1])
        });
        res.status(404).json({
            status : "Error",
            message : `${packErr.join(",")}`
        })
    }else if (err.status === 404){
        res.status(404).json({
            status : "Error",
            message : err.message
        })
    }else{
        res.status(505).json(err.message)
    }
}

module.exports = errorHandler