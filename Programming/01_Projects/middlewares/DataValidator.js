// function DataValidador (req, re, next){
//     req.pruebaDeMiddleware = "Hola mundo middleware"
//     next()
// }
const { required } = require('joi');
const{ User } = require('../lib/Schema/User');
function DataValidator(check = "query"){
    return (req, res, next) => {
        var data = req[ check ]
        const {error, value} = schema.validate(data)

        if (error){
            res.status(406).json({
                msg: error.details[0].message,
            });
        }else{
            req[check] = value 
            next()
        }
    }
}
module.exports.datavalidator = datavalidator;

/*
Function DataValidator(check = "quety"){
    return (req, res, next) =>{

    }
}
*/