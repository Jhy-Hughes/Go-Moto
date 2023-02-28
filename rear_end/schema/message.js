const joi = require('@hapi/joi')

const name = joi.string().required()

const alias = joi.string().alphanum().required()

const id = joi.number().integer().min(1).required()

exports.add_message = {
    body:{
        name,
        alias,
    }
}


exports.del_message = {
    params: {
        id
    }
}