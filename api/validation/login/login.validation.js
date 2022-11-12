const { login } = require('./login.schema');

module.exports = {
    loginValidation: async (req,res,next)=> {
        const value = await login.validate(req.body);

        if(value.error){
            return res.json({
                status: 402,
                success: 0,
                message: value.error.details[0].message
            });
        }else{
            next();
        }
    }
}