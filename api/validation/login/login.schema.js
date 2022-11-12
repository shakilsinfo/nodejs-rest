const joi = require('joi');

const schema = {
    login: joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    })
}

module.exports = schema;