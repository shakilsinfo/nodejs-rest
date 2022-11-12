const joi = require('joi');

const schema = {
    user: joi.object({
        name: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        confirm_password: joi.ref('password')
    })
    
}
module.exports = schema;